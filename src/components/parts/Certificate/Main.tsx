import { useState, useCallback, useEffect, type ChangeEvent, type FormEvent } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Search, ShieldCheck, ShieldX, AlertCircle, ChevronRight, BadgeCheck, Calendar, Briefcase } from "lucide-react";
import { FaLinkedin } from "react-icons/fa";
import { certificateApi, type VerifiableMember } from "../../../services/certificateService";

interface Intern {
  id: string;
  name: string;
  photo: string;
  role: string;
  post: string;
  joiningDate: string;
  endingDate: string;
  linkedin: string;
  is_verified: boolean;
}

type SearchStatus = "idle" | "searching" | "found" | "not_found";

const heroBackground = {
  backgroundImage: `linear-gradient(rgba(9, 5, 54, 0.55), rgba(5, 4, 46, 0.85)), url("/bg.webp")`,
  backgroundSize: "cover",
  backgroundPosition: "center",
};

function mapMember(m: VerifiableMember): Intern {
  return {
    id: m.id,
    name: m.name,
    photo: m.photo_url,
    role: m.role,
    post: m.position,
    joiningDate: m.start_date,
    endingDate: m.end_date ?? "Present",
    linkedin: m.social_media?.linkedin ?? m.social_media?.LinkedIn ?? "",
    is_verified: m.is_verified,
  };
}

const fadeUp = { hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } };
const scaleIn = { hidden: { opacity: 0, scale: 0.95 }, visible: { opacity: 1, scale: 1 } };

export default function VerifyCertificateMain() {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchVal, setSearchVal] = useState("");
  const [status, setStatus] = useState<SearchStatus>("idle");
  const [results, setResults] = useState<Intern[]>([]);
  const [allMembers, setAllMembers] = useState<Intern[]>([]);

  useEffect(() => {
    certificateApi.getAllMembersForVerify().then(data => {
      setAllMembers(data.map(mapMember));
    });
  }, []);

  function runSearch(term: string) {
    const t = term.toLowerCase().trim();
    if (!t) { setStatus("idle"); setResults([]); return; }
    setSearchVal(t);
    const words = t.split(/\s+/).filter(Boolean);
    const matches = allMembers.filter(m => {
      const nameLower = m.name.toLowerCase();
      const idLower = m.id.toLowerCase();
      const postLower = m.post.toLowerCase();
      const allWordsInName = words.every(w => nameLower.includes(w));
      return allWordsInName || idLower.includes(t) || postLower.includes(t);
    });
    setResults(matches);
    setStatus(matches.length > 0 ? "found" : "not_found");
  }

  // Live search — fires after 2+ characters
  useEffect(() => {
    if (searchTerm.length === 0) { setStatus("idle"); setResults([]); return; }
    if (searchTerm.trim().length < 2) return;
    const timer = setTimeout(() => runSearch(searchTerm), 300);
    return () => clearTimeout(timer);
  }, [searchTerm, allMembers]);

  const handleSearch = useCallback((e: FormEvent) => {
    e.preventDefault();
    if (searchTerm.trim()) runSearch(searchTerm);
  }, [searchTerm, allMembers]);

  return (
    <div className="min-h-screen flex flex-col items-center" style={heroBackground}>
      <main className="bg-white md:rounded-2xl sm:m-[3rem] sm:mt-20 sm:mb-20 w-full sm:max-w-3xl flex flex-col items-center py-12 px-4 sm:py-16">

        {/* Heading */}
        <motion.div className="w-full text-center space-y-3 mb-10" initial="hidden" animate="visible" variants={fadeUp} transition={{ duration: 0.6 }}>
          <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight">
            Verify <span className="text-primary">Credentials</span>
          </h1>
          <p className="text-muted-foreground text-base sm:text-lg max-w-xl mx-auto">
            Confirm whether someone is a verified intern or team member of Leafclutch Technologies.
          </p>
        </motion.div>

        {/* Search */}
        <form onSubmit={handleSearch} className="relative w-full max-w-2xl mb-12">
          <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
            <Search className={`w-5 h-5 ${status === "searching" ? "text-primary animate-pulse" : "text-muted-foreground"}`} />
          </div>
          <input
            type="text"
            value={searchTerm}
            onChange={(e: ChangeEvent<HTMLInputElement>) => setSearchTerm(e.target.value)}
            placeholder="Enter full name or ID…"
            className="w-full py-4 pl-12 pr-32 text-base rounded-xl shadow-lg border border-input bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring/30 transition-colors"
          />
          <button
            type="submit"
            disabled={status === "searching" || !searchTerm.trim()}
            className="absolute right-2 inset-y-2 px-6 bg-primary text-primary-foreground font-semibold rounded-lg hover:opacity-90 disabled:opacity-50 transition-all text-sm"
          >
            {status === "searching" ? "Verifying…" : "Verify"}
          </button>
        </form>

        {/* Results */}
        <div className="w-full">
          <AnimatePresence mode="wait">

            {/* Searching */}
            {status === "searching" && (
              <motion.div key="searching" className="flex flex-col items-center justify-center py-20 text-center" variants={scaleIn} initial="hidden" animate="visible" exit="hidden">
                <div className="p-8 rounded-full border-2 border-dashed border-border mb-4">
                  <Search className="w-12 h-12 text-muted-foreground animate-pulse" />
                </div>
                <p className="text-muted-foreground">Searching records…</p>
              </motion.div>
            )}

            {/* Found */}
            {status === "found" && results.map(result => (
              <motion.div key={result.id} variants={scaleIn} initial="hidden" animate="visible" exit="hidden" transition={{ duration: 0.4 }} className="mb-6">
                {result.is_verified ? (
                  /* ── VERIFIED CARD ── */
                  <div className="rounded-3xl border-2 border-emerald-400 shadow-xl overflow-hidden">
                    {/* Green banner */}
                    <div className="bg-emerald-500 px-6 py-3 flex items-center gap-3">
                      <ShieldCheck className="w-6 h-6 text-white shrink-0" />
                      <div>
                        <p className="text-white font-bold text-sm tracking-widest uppercase">Verified by Leafclutch Technologies</p>
                        <p className="text-emerald-100 text-xs">This credential has been officially verified</p>
                      </div>
                      <BadgeCheck className="w-7 h-7 text-white ml-auto shrink-0" />
                    </div>

                    <div className="p-6 sm:p-8 flex flex-col sm:flex-row gap-6 items-center sm:items-start bg-card">
                      {/* Photo */}
                      <div className="shrink-0">
                        <div className="relative">
                          <div className="absolute -inset-1 rounded-full bg-emerald-400/30 blur-sm" />
                          <img
                            src={result.photo || `https://ui-avatars.com/api/?name=${encodeURIComponent(result.name)}&background=10b981&color=fff&size=128`}
                            alt={result.name}
                            className="relative w-28 h-28 rounded-full object-cover border-4 border-emerald-400"
                          />
                        </div>
                        <div className="flex justify-center mt-3">
                          <span className="inline-flex items-center gap-1 bg-emerald-100 text-emerald-700 text-xs font-bold px-3 py-1 rounded-full">
                            <ShieldCheck size={12} /> VERIFIED
                          </span>
                        </div>
                      </div>

                      {/* Info */}
                      <div className="flex-1 w-full text-center sm:text-left">
                        <p className="text-xs font-bold text-emerald-600 tracking-widest uppercase mb-1">
                          {result.role === "INTERN" ? "Verified Intern" : "Verified Team Member"}
                        </p>
                        <h2 className="text-2xl sm:text-3xl font-extrabold text-foreground">{result.name}</h2>
                        <p className="text-muted-foreground font-medium mt-0.5 flex items-center justify-center sm:justify-start gap-1.5">
                          <Briefcase size={14} /> {result.post}
                        </p>

                        <div className="grid grid-cols-2 gap-4 mt-4 py-4 border-y border-border">
                          <div>
                            <p className="text-[10px] uppercase tracking-widest text-muted-foreground font-bold flex items-center gap-1 mb-1">
                              <Calendar size={10} /> Start Date
                            </p>
                            <p className="font-semibold text-sm">{result.joiningDate}</p>
                          </div>
                          <div>
                            <p className="text-[10px] uppercase tracking-widest text-muted-foreground font-bold flex items-center gap-1 mb-1">
                              <Calendar size={10} /> End Date
                            </p>
                            <p className="font-semibold text-sm">{result.endingDate}</p>
                          </div>
                        </div>

                        <div className="mt-4 flex flex-col sm:flex-row gap-3">
                          {result.linkedin ? (
                            <a
                              href={result.linkedin}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="flex items-center justify-center gap-2 bg-[#0077b5] text-white py-2.5 px-5 rounded-xl font-semibold text-sm hover:opacity-90 transition-opacity"
                            >
                              <FaLinkedin /> LinkedIn Profile
                            </a>
                          ) : (
                            <span className="text-xs text-muted-foreground italic">LinkedIn not available</span>
                          )}
                        </div>

                        <p className="text-[10px] text-muted-foreground mt-4 font-mono">ID: {result.id}</p>
                      </div>
                    </div>
                  </div>
                ) : (
                  /* ── NOT VERIFIED CARD ── */
                  <div className="rounded-3xl border-2 border-red-300 shadow-xl overflow-hidden">
                    {/* Red banner */}
                    <div className="bg-red-500 px-6 py-3 flex items-center gap-3">
                      <ShieldX className="w-6 h-6 text-white shrink-0" />
                      <div>
                        <p className="text-white font-bold text-sm tracking-widest uppercase">Not Verified</p>
                        <p className="text-red-100 text-xs">This record exists but has not been officially verified</p>
                      </div>
                    </div>

                    <div className="p-6 sm:p-8 flex flex-col sm:flex-row gap-6 items-center sm:items-start bg-card">
                      <div className="shrink-0">
                        <img
                          src={result.photo || `https://ui-avatars.com/api/?name=${encodeURIComponent(result.name)}&background=ef4444&color=fff&size=128`}
                          alt={result.name}
                          className="w-24 h-24 rounded-full object-cover border-4 border-red-300 opacity-80"
                        />
                        <div className="flex justify-center mt-3">
                          <span className="inline-flex items-center gap-1 bg-red-100 text-red-600 text-xs font-bold px-3 py-1 rounded-full">
                            <ShieldX size={12} /> NOT VERIFIED
                          </span>
                        </div>
                      </div>

                      <div className="flex-1 text-center sm:text-left">
                        <h2 className="text-xl font-bold text-foreground">{result.name}</h2>
                        <p className="text-muted-foreground text-sm mt-0.5">{result.post}</p>
                        <div className="mt-4 p-4 bg-red-50 border border-red-200 rounded-xl">
                          <p className="text-red-700 text-sm font-medium">
                            ⚠ This credential has not been officially verified by Leafclutch Technologies. It may be under review or the certificate may not be legitimate.
                          </p>
                          <p className="text-red-500 text-xs mt-2">
                            To report certificate fraud, contact <span className="font-semibold">hr@leafclutchtech.com.np</span>
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </motion.div>
            ))}

            {/* Not found */}
            {status === "not_found" && (
              <motion.div key="not-found" variants={scaleIn} initial="hidden" animate="visible" exit="hidden" className="flex flex-col items-center text-center p-12 border-2 border-dashed border-border rounded-3xl bg-card/30">
                <div className="bg-destructive/10 p-4 rounded-full mb-4">
                  <AlertCircle className="w-12 h-12 text-destructive" />
                </div>
                <h3 className="text-xl font-bold mb-2">No Record Found</h3>
                <p className="text-muted-foreground max-w-sm text-sm">
                  No record matched "<span className="text-foreground font-semibold">{searchVal}</span>".
                  This person was never associated with Leafclutch Technologies, or the certificate may be fraudulent.
                </p>
                <p className="text-xs text-muted-foreground mt-3">
                  To report fraud contact <span className="font-semibold">hr@leafclutchtech.com.np</span>
                </p>
                <motion.button
                  onClick={() => { setSearchTerm(""); setStatus("idle"); }}
                  className="mt-6 text-primary font-semibold hover:underline flex items-center gap-1 text-sm"
                  whileHover={{ scale: 1.05 }}
                >
                  Try again <ChevronRight size={14} />
                </motion.button>
              </motion.div>
            )}

            {/* Idle */}
            {status === "idle" && (
              <motion.div key="idle" variants={fadeUp} initial="hidden" animate="visible" exit="hidden" className="flex flex-col items-center text-center opacity-40 py-16">
                <div className="relative p-8 rounded-full mb-4">
                  <div className="absolute inset-0 rounded-full border-2 border-dashed border-border animate-[spin_8s_linear_infinite]" />
                  <Search className="w-14 h-14 relative" />
                </div>
                <p className="text-muted-foreground">Enter a name or ID to verify credentials</p>
              </motion.div>
            )}

          </AnimatePresence>
        </div>
      </main>
    </div>
  );
}
