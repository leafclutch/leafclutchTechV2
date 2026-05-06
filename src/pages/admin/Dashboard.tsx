import { useEffect, useState } from "react";
import { supabase } from "../../lib/supabase";
import { Users, GraduationCap, UserCheck, Briefcase, FolderOpen, BookOpen, Building2, Mail } from "lucide-react";
import { Link } from "react-router-dom";

interface Stats {
  team: number;
  interns: number;
  mentors: number;
  services: number;
  projects: number;
  opportunities: number;
  courses: number;
  contacts: number;
}

const statCards = [
  { key: "team",          label: "Team Members",         icon: Users,        to: "/admin/team",          color: "bg-blue-500" },
  { key: "interns",       label: "Interns",              icon: GraduationCap,to: "/admin/interns",       color: "bg-purple-500" },
  { key: "mentors",       label: "Mentors",              icon: UserCheck,    to: "/admin/mentors",       color: "bg-green-500" },
  { key: "services",      label: "Services",             icon: Building2,    to: "/admin/services",      color: "bg-orange-500" },
  { key: "projects",      label: "Projects",             icon: FolderOpen,   to: "/admin/projects",      color: "bg-pink-500" },
  { key: "opportunities", label: "Opportunities",        icon: Briefcase,    to: "/admin/opportunities", color: "bg-yellow-500" },
  { key: "courses",       label: "Courses",              icon: BookOpen,     to: "/admin/courses",       color: "bg-teal-500" },
  { key: "contacts",      label: "New Contacts",         icon: Mail,         to: "/admin/contacts",      color: "bg-red-500" },
];

export default function Dashboard() {
  const [stats, setStats] = useState<Stats>({ team: 0, interns: 0, mentors: 0, services: 0, projects: 0, opportunities: 0, courses: 0, contacts: 0 });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchStats() {
      try {
        const [team, interns, mentors, services, projects, opportunities, courses, contacts] = await Promise.all([
          supabase.from("members").select("id", { count: "exact", head: true }).eq("role", "TEAM"),
          supabase.from("members").select("id", { count: "exact", head: true }).eq("role", "INTERN"),
          supabase.from("mentors").select("id", { count: "exact", head: true }),
          supabase.from("services").select("id", { count: "exact", head: true }),
          supabase.from("projects").select("id", { count: "exact", head: true }),
          supabase.from("opportunities").select("id", { count: "exact", head: true }),
          supabase.from("courses").select("id", { count: "exact", head: true }),
          supabase.from("contact_submissions").select("id", { count: "exact", head: true }).eq("status", "new"),
        ]);
        setStats({
          team: team.count ?? 0,
          interns: interns.count ?? 0,
          mentors: mentors.count ?? 0,
          services: services.count ?? 0,
          projects: projects.count ?? 0,
          opportunities: opportunities.count ?? 0,
          courses: courses.count ?? 0,
          contacts: contacts.count ?? 0,
        });
      } finally {
        setLoading(false);
      }
    }
    fetchStats();
  }, []);

  return (
    <div>
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-slate-800">Dashboard</h1>
        <p className="text-slate-500 text-sm mt-1">Overview of your content</p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {statCards.map(({ key, label, icon: Icon, to, color }) => (
          <Link
            key={key}
            to={to}
            className="bg-white rounded-xl p-5 shadow-sm border border-slate-100 hover:shadow-md transition-shadow"
          >
            <div className={`inline-flex p-2.5 rounded-lg ${color} mb-3`}>
              <Icon size={18} className="text-white" />
            </div>
            <p className="text-2xl font-bold text-slate-800">
              {loading ? <span className="animate-pulse">—</span> : stats[key as keyof Stats]}
            </p>
            <p className="text-slate-500 text-sm mt-0.5">{label}</p>
          </Link>
        ))}
      </div>

      <div className="mt-6 bg-white rounded-xl p-5 shadow-sm border border-slate-100">
        <h2 className="font-semibold text-slate-700 mb-1">Quick links</h2>
        <p className="text-sm text-slate-400">
          Use the sidebar to navigate and manage all content. Click any card above to jump directly to that section.
        </p>
      </div>
    </div>
  );
}
