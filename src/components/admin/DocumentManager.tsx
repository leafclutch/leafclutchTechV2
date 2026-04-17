import { useEffect, useRef, useState } from "react";
import { supabase } from "../../lib/supabase";
import { Upload, Trash2, FileText, Download, Loader2 } from "lucide-react";
import ConfirmDialog from "./ConfirmDialog";
import Toast from "./Toast";

const DOC_TYPES = [
  { value: "offer_letter",             label: "Offer Letter" },
  { value: "nda",                      label: "NDA" },
  { value: "id_proof",                 label: "ID Proof" },
  { value: "completion_certificate",   label: "Completion Certificate" },
  { value: "experience_letter",        label: "Experience Letter" },
  { value: "internship_verification",  label: "Internship Verification" },
  { value: "other",                    label: "Other" },
];

interface Doc {
  id: string;
  document_name: string;
  document_type: string;
  file_url: string;
  file_path: string;
  created_at: string;
}

export default function DocumentManager({ memberId }: { memberId: string }) {
  const [docs, setDocs] = useState<Doc[]>([]);
  const [loading, setLoading] = useState(true);
  const [uploading, setUploading] = useState(false);
  const [deleteTarget, setDeleteTarget] = useState<Doc | null>(null);
  const [deleting, setDeleting] = useState(false);
  const [toast, setToast] = useState<{ message: string; type: "success" | "error" } | null>(null);
  const [docName, setDocName] = useState("");
  const [docType, setDocType] = useState("offer_letter");
  const fileRef = useRef<HTMLInputElement>(null);

  async function fetchDocs() {
    const { data } = await supabase
      .from("member_documents")
      .select("*")
      .eq("member_id", memberId)
      .order("created_at", { ascending: false });
    setDocs(data ?? []);
    setLoading(false);
  }

  useEffect(() => { fetchDocs(); }, [memberId]);

  async function handleUpload() {
    const file = fileRef.current?.files?.[0];
    if (!file || !docName.trim()) return;

    setUploading(true);
    const ext = file.name.split(".").pop();
    const path = `${memberId}/${Date.now()}.${ext}`;

    const { error: uploadErr } = await supabase.storage
      .from("member-docs")
      .upload(path, file);

    if (uploadErr) {
      setToast({ message: uploadErr.message, type: "error" });
      setUploading(false);
      return;
    }

    const { data: urlData } = supabase.storage.from("member-docs").getPublicUrl(path);

    const { error: dbErr } = await supabase.from("member_documents").insert({
      member_id: memberId,
      document_name: docName.trim(),
      document_type: docType,
      file_url: urlData.publicUrl,
      file_path: path,
    });

    if (dbErr) {
      setToast({ message: dbErr.message, type: "error" });
    } else {
      setDocName("");
      if (fileRef.current) fileRef.current.value = "";
      await fetchDocs();
      setToast({ message: "Document uploaded successfully", type: "success" });
    }
    setUploading(false);
  }

  async function handleDelete() {
    if (!deleteTarget) return;
    setDeleting(true);

    await supabase.storage.from("member-docs").remove([deleteTarget.file_path]);
    const { error } = await supabase.from("member_documents").delete().eq("id", deleteTarget.id);

    if (error) {
      setToast({ message: error.message, type: "error" });
    } else {
      await fetchDocs();
      setToast({ message: "Document deleted", type: "success" });
    }
    setDeleteTarget(null);
    setDeleting(false);
  }

  return (
    <div>
      {toast && <Toast message={toast.message} type={toast.type} onClose={() => setToast(null)} />}
      {deleteTarget && (
        <ConfirmDialog
          title="Delete document"
          message={`Delete "${deleteTarget.document_name}"? This cannot be undone.`}
          onConfirm={handleDelete}
          onCancel={() => setDeleteTarget(null)}
          loading={deleting}
        />
      )}

      {/* Upload form */}
      <div className="bg-slate-50 rounded-xl border border-slate-200 p-4 mb-4">
        <p className="text-sm font-medium text-slate-700 mb-3">Upload new document</p>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
          <input
            value={docName}
            onChange={e => setDocName(e.target.value)}
            placeholder="Document name"
            className="border border-slate-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <select
            value={docType}
            onChange={e => setDocType(e.target.value)}
            className="border border-slate-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            {DOC_TYPES.map(t => <option key={t.value} value={t.value}>{t.label}</option>)}
          </select>
          <input ref={fileRef} type="file" className="text-sm" />
        </div>
        <button
          onClick={handleUpload}
          disabled={uploading || !docName.trim()}
          className="mt-3 flex items-center gap-2 bg-blue-600 hover:bg-blue-700 disabled:opacity-60 text-white text-sm px-4 py-2 rounded-lg transition-colors"
        >
          {uploading ? <Loader2 size={14} className="animate-spin" /> : <Upload size={14} />}
          {uploading ? "Uploading…" : "Upload"}
        </button>
      </div>

      {/* Doc list */}
      {loading ? (
        <p className="text-sm text-slate-400">Loading documents…</p>
      ) : docs.length === 0 ? (
        <p className="text-sm text-slate-400">No documents yet.</p>
      ) : (
        <div className="space-y-2">
          {docs.map(doc => (
            <div key={doc.id} className="flex items-center gap-3 bg-white border border-slate-200 rounded-lg px-4 py-3">
              <FileText size={16} className="text-slate-400 shrink-0" />
              <div className="flex-1 min-w-0">
                <p className="text-sm font-medium text-slate-700 truncate">{doc.document_name}</p>
                <p className="text-xs text-slate-400 capitalize">{doc.document_type.replace(/_/g, " ")}</p>
              </div>
              <a
                href={doc.file_url}
                target="_blank"
                rel="noreferrer"
                className="text-blue-500 hover:text-blue-700 transition-colors"
              >
                <Download size={15} />
              </a>
              <button
                onClick={() => setDeleteTarget(doc)}
                className="text-red-400 hover:text-red-600 transition-colors"
              >
                <Trash2 size={15} />
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
