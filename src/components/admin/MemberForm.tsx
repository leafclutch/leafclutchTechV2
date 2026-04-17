import { useRef, useState } from "react";
import { useForm, useFieldArray } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { supabase } from "../../lib/supabase";
import { X, Plus, Trash2, Upload, Loader2 } from "lucide-react";
import DocumentManager from "./DocumentManager";

const schema = z.object({
  name: z.string().min(2, "Min 2 chars"),
  position: z.string().min(1, "Required"),
  role: z.enum(["TEAM", "INTERN"]),
  personal_email: z.string().email("Invalid email").optional().or(z.literal("")),
  company_email: z.string().email("Invalid email").optional().or(z.literal("")),
  phone_number: z.string().optional(),
  dob: z.string().optional(),
  start_date: z.string().min(1, "Required"),
  end_date: z.string().optional(),
  is_visible: z.boolean(),
  social_media: z.array(z.object({ key: z.string(), value: z.string() })),
});
type FormData = z.infer<typeof schema>;

export interface MemberRow {
  id: string;
  name: string;
  photo_url: string | null;
  position: string;
  role: "TEAM" | "INTERN";
  personal_email: string | null;
  company_email: string | null;
  phone_number: string | null;
  dob: string | null;
  start_date: string;
  end_date: string | null;
  social_media: Record<string, string>;
  is_visible: boolean;
  is_verified: boolean;
}

interface Props {
  member?: MemberRow | null;
  defaultRole: "TEAM" | "INTERN";
  onClose: () => void;
  onSaved: () => void;
}

export default function MemberForm({ member, defaultRole, onClose, onSaved }: Props) {
  const isEdit = !!member;
  const [photoFile, setPhotoFile] = useState<File | null>(null);
  const [photoPreview, setPhotoPreview] = useState<string>(member?.photo_url ?? "");
  const [uploading, setUploading] = useState(false);
  const [serverError, setServerError] = useState("");
  const [activeTab, setActiveTab] = useState<"details" | "documents">("details");
  const photoRef = useRef<HTMLInputElement>(null);

  const { register, handleSubmit, control, formState: { errors, isSubmitting } } = useForm<FormData>({
    resolver: zodResolver(schema),
    defaultValues: {
      name: member?.name ?? "",
      position: member?.position ?? "",
      role: member?.role ?? defaultRole,
      personal_email: member?.personal_email ?? "",
      company_email: member?.company_email ?? "",
      phone_number: member?.phone_number ?? "",
      dob: member?.dob ?? "",
      start_date: member?.start_date ?? "",
      end_date: member?.end_date ?? "",
      is_visible: member?.is_visible ?? true,
      social_media: Object.entries(member?.social_media ?? {}).map(([key, value]) => ({ key, value })),
    },
  });

  const { fields, append, remove } = useFieldArray({ control, name: "social_media" });

  function onPhotoChange(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0];
    if (!file) return;
    setPhotoFile(file);
    setPhotoPreview(URL.createObjectURL(file));
  }

  async function uploadPhoto(memberId: string): Promise<string | null> {
    if (!photoFile) return member?.photo_url ?? null;
    const ext = photoFile.name.split(".").pop();
    const path = `${memberId}.${ext}`;
    const { error } = await supabase.storage.from("profile-photos").upload(path, photoFile, { upsert: true });
    if (error) throw new Error(error.message);
    return supabase.storage.from("profile-photos").getPublicUrl(path).data.publicUrl;
  }

  async function onSubmit(data: FormData) {
    setServerError("");
    setUploading(true);
    try {
      const social: Record<string, string> = {};
      data.social_media.forEach(({ key, value }) => { if (key && value) social[key] = value; });

      const payload = {
        name: data.name,
        position: data.position,
        role: data.role,
        personal_email: data.personal_email || null,
        company_email: data.company_email || null,
        phone_number: data.phone_number || null,
        dob: data.dob || null,
        start_date: data.start_date,
        end_date: data.end_date || null,
        is_visible: data.is_visible,
        social_media: social,
      };

      if (isEdit && member) {
        const photo_url = await uploadPhoto(member.id);
        const { error } = await supabase.from("members").update({ ...payload, photo_url }).eq("id", member.id);
        if (error) throw new Error(error.message);
      } else {
        const { data: inserted, error } = await supabase.from("members").insert(payload).select().single();
        if (error) throw new Error(error.message);
        await uploadPhoto(inserted.id);
        if (photoFile) {
          const ext = photoFile.name.split(".").pop();
          const path = `${inserted.id}.${ext}`;
          const photo_url = supabase.storage.from("profile-photos").getPublicUrl(path).data.publicUrl;
          await supabase.from("members").update({ photo_url }).eq("id", inserted.id);
        }
      }

      onSaved();
    } catch (e: unknown) {
      setServerError((e as Error).message);
    } finally {
      setUploading(false);
    }
  }

  const inputCls = "w-full border border-slate-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500";
  const labelCls = "block text-xs font-medium text-slate-600 mb-1";

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4">
      <div className="bg-white rounded-2xl shadow-2xl w-full max-w-2xl max-h-[90vh] flex flex-col">
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-slate-100">
          <h2 className="font-semibold text-slate-800">
            {isEdit ? "Edit" : "Add"} {defaultRole === "TEAM" ? "Team Member" : "Intern"}
          </h2>
          <button onClick={onClose} className="text-slate-400 hover:text-slate-600">
            <X size={20} />
          </button>
        </div>

        {/* Tabs (only show Documents tab when editing) */}
        {isEdit && (
          <div className="flex border-b border-slate-100 px-6">
            {(["details", "documents"] as const).map(tab => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`py-3 mr-6 text-sm font-medium border-b-2 transition-colors capitalize
                  ${activeTab === tab ? "border-blue-600 text-blue-600" : "border-transparent text-slate-400 hover:text-slate-600"}`}
              >
                {tab}
              </button>
            ))}
          </div>
        )}

        <div className="overflow-y-auto flex-1 p-6">
          {activeTab === "documents" && isEdit && member ? (
            <DocumentManager memberId={member.id} />
          ) : (
            <form id="member-form" onSubmit={handleSubmit(onSubmit)} className="space-y-5">
              {/* Photo */}
              <div className="flex items-center gap-4">
                <div
                  onClick={() => photoRef.current?.click()}
                  className="h-20 w-20 rounded-full bg-slate-100 border-2 border-dashed border-slate-300 flex items-center justify-center cursor-pointer overflow-hidden hover:border-blue-400 transition-colors"
                >
                  {photoPreview
                    ? <img src={photoPreview} alt="" className="h-full w-full object-cover" />
                    : <Upload size={20} className="text-slate-400" />
                  }
                </div>
                <input ref={photoRef} type="file" accept="image/*" className="hidden" onChange={onPhotoChange} />
                <div>
                  <p className="text-sm font-medium text-slate-700">Profile photo</p>
                  <p className="text-xs text-slate-400">Click to upload (JPG, PNG)</p>
                </div>
              </div>

              {/* Name + Position */}
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className={labelCls}>Full Name *</label>
                  <input {...register("name")} className={inputCls} placeholder="John Doe" />
                  {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name.message}</p>}
                </div>
                <div>
                  <label className={labelCls}>Position *</label>
                  <input {...register("position")} className={inputCls} placeholder="Frontend Developer" />
                  {errors.position && <p className="text-red-500 text-xs mt-1">{errors.position.message}</p>}
                </div>
              </div>

              {/* Role + Visible */}
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className={labelCls}>Role *</label>
                  <select {...register("role")} className={inputCls}>
                    <option value="TEAM">Team Member</option>
                    <option value="INTERN">Intern</option>
                  </select>
                </div>
                <div className="flex items-center gap-3 pt-5">
                  <input {...register("is_visible")} type="checkbox" id="is_visible" className="h-4 w-4 rounded" />
                  <label htmlFor="is_visible" className="text-sm text-slate-700">Visible on public site</label>
                </div>
              </div>

              {/* Emails */}
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className={labelCls}>Personal Email</label>
                  <input {...register("personal_email")} type="email" className={inputCls} placeholder="john@gmail.com" />
                  {errors.personal_email && <p className="text-red-500 text-xs mt-1">{errors.personal_email.message}</p>}
                </div>
                <div>
                  <label className={labelCls}>Company Email</label>
                  <input {...register("company_email")} type="email" className={inputCls} placeholder="john@leafclutchtech.com.np" />
                  {errors.company_email && <p className="text-red-500 text-xs mt-1">{errors.company_email.message}</p>}
                </div>
              </div>

              {/* Phone + DOB */}
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className={labelCls}>Phone Number</label>
                  <input {...register("phone_number")} className={inputCls} placeholder="+977-98XXXXXXXX" />
                </div>
                <div>
                  <label className={labelCls}>Date of Birth</label>
                  <input {...register("dob")} type="date" className={inputCls} />
                </div>
              </div>

              {/* Dates */}
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className={labelCls}>Join Date *</label>
                  <input {...register("start_date")} type="date" className={inputCls} />
                  {errors.start_date && <p className="text-red-500 text-xs mt-1">{errors.start_date.message}</p>}
                </div>
                <div>
                  <label className={labelCls}>End Date</label>
                  <input {...register("end_date")} type="date" className={inputCls} />
                </div>
              </div>

              {/* Social media */}
              <div>
                <div className="flex items-center justify-between mb-2">
                  <label className={labelCls + " mb-0"}>Social Media Links</label>
                  <button
                    type="button"
                    onClick={() => append({ key: "linkedin", value: "" })}
                    className="flex items-center gap-1 text-xs text-blue-600 hover:text-blue-800"
                  >
                    <Plus size={12} /> Add
                  </button>
                </div>
                {fields.map((field, i) => (
                  <div key={field.id} className="flex gap-2 mb-2">
                    <input
                      {...register(`social_media.${i}.key`)}
                      className="border border-slate-200 rounded-lg px-3 py-2 text-sm w-28 focus:outline-none focus:ring-2 focus:ring-blue-500"
                      placeholder="linkedin"
                    />
                    <input
                      {...register(`social_media.${i}.value`)}
                      className="border border-slate-200 rounded-lg px-3 py-2 text-sm flex-1 focus:outline-none focus:ring-2 focus:ring-blue-500"
                      placeholder="https://linkedin.com/in/..."
                    />
                    <button type="button" onClick={() => remove(i)} className="text-red-400 hover:text-red-600">
                      <Trash2 size={16} />
                    </button>
                  </div>
                ))}
              </div>

              {serverError && (
                <p className="text-red-500 text-sm bg-red-50 border border-red-200 rounded-lg px-3 py-2">
                  {serverError}
                </p>
              )}
            </form>
          )}
        </div>

        {/* Footer */}
        {activeTab === "details" && (
          <div className="flex gap-3 px-6 py-4 border-t border-slate-100">
            <button onClick={onClose} className="flex-1 border border-slate-200 text-slate-600 rounded-lg py-2 text-sm hover:bg-slate-50">
              Cancel
            </button>
            <button
              form="member-form"
              type="submit"
              disabled={isSubmitting || uploading}
              className="flex-1 bg-blue-600 hover:bg-blue-700 disabled:opacity-60 text-white rounded-lg py-2 text-sm flex items-center justify-center gap-2 transition-colors"
            >
              {(isSubmitting || uploading) && <Loader2 size={14} className="animate-spin" />}
              {isSubmitting || uploading ? "Saving…" : isEdit ? "Save changes" : "Add member"}
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
