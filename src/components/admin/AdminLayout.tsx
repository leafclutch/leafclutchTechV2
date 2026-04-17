import { useState } from "react";
import { NavLink, Outlet, useNavigate } from "react-router-dom";
import {
  LayoutDashboard, Users, GraduationCap, UserCheck, Briefcase,
  FolderOpen, BookOpen, Mail, ChevronLeft, ChevronRight,
  LogOut, Menu, X, Building2,
} from "lucide-react";
import { useAuth } from "../../context/AuthContext";

const navItems = [
  { to: "/admin/dashboard",     icon: LayoutDashboard, label: "Dashboard" },
  { to: "/admin/team",          icon: Users,           label: "Team Members" },
  { to: "/admin/interns",       icon: GraduationCap,   label: "Interns" },
  { to: "/admin/mentors",       icon: UserCheck,       label: "Mentors" },
  { to: "/admin/services",      icon: Building2,       label: "Services" },
  { to: "/admin/projects",      icon: FolderOpen,      label: "Projects" },
  { to: "/admin/opportunities", icon: Briefcase,       label: "Opportunities" },
  { to: "/admin/courses",       icon: BookOpen,        label: "Courses" },
  { to: "/admin/contacts",      icon: Mail,            label: "Contact Submissions" },
];

export default function AdminLayout() {
  const [collapsed, setCollapsed] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const { user, signOut } = useAuth();
  const navigate = useNavigate();

  async function handleSignOut() {
    await signOut();
    navigate("/admin/login");
  }

  const Sidebar = ({ mobile = false }: { mobile?: boolean }) => (
    <aside
      className={`
        flex flex-col bg-slate-900 text-slate-100 transition-all duration-300
        ${mobile ? "w-64 h-full" : collapsed ? "w-16" : "w-64"}
      `}
    >
      {/* Logo */}
      <div className={`flex items-center gap-3 px-4 py-5 border-b border-slate-700 ${collapsed && !mobile ? "justify-center" : ""}`}>
        <div className="h-8 w-8 rounded-lg bg-blue-600 flex items-center justify-center font-bold text-white text-sm shrink-0">
          LC
        </div>
        {(!collapsed || mobile) && (
          <span className="font-semibold text-sm text-white truncate">Leafclutch Admin</span>
        )}
        {!mobile && (
          <button
            onClick={() => setCollapsed(!collapsed)}
            className="ml-auto text-slate-400 hover:text-white transition-colors"
          >
            {collapsed ? <ChevronRight size={16} /> : <ChevronLeft size={16} />}
          </button>
        )}
      </div>

      {/* Nav */}
      <nav className="flex-1 py-4 space-y-1 overflow-y-auto">
        {navItems.map(({ to, icon: Icon, label }) => (
          <NavLink
            key={to}
            to={to}
            onClick={() => setMobileOpen(false)}
            className={({ isActive }) =>
              `flex items-center gap-3 px-4 py-2.5 mx-2 rounded-lg text-sm transition-colors
              ${isActive
                ? "bg-blue-600 text-white"
                : "text-slate-400 hover:bg-slate-800 hover:text-white"
              }
              ${collapsed && !mobile ? "justify-center px-0" : ""}`
            }
          >
            <Icon size={18} className="shrink-0" />
            {(!collapsed || mobile) && <span>{label}</span>}
          </NavLink>
        ))}
      </nav>

      {/* User */}
      <div className={`border-t border-slate-700 p-4 ${collapsed && !mobile ? "flex justify-center" : ""}`}>
        {(!collapsed || mobile) && (
          <p className="text-xs text-slate-400 truncate mb-2">{user?.email}</p>
        )}
        <button
          onClick={handleSignOut}
          className={`flex items-center gap-2 text-sm text-slate-400 hover:text-red-400 transition-colors
            ${collapsed && !mobile ? "" : "w-full"}`}
        >
          <LogOut size={16} />
          {(!collapsed || mobile) && <span>Sign out</span>}
        </button>
      </div>
    </aside>
  );

  return (
    <div className="flex h-screen bg-slate-100 overflow-hidden">
      {/* Desktop sidebar */}
      <div className="hidden md:flex">
        <Sidebar />
      </div>

      {/* Mobile overlay */}
      {mobileOpen && (
        <div className="fixed inset-0 z-50 flex md:hidden">
          <div className="fixed inset-0 bg-black/50" onClick={() => setMobileOpen(false)} />
          <div className="relative z-10">
            <Sidebar mobile />
          </div>
        </div>
      )}

      {/* Main content */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Top bar */}
        <header className="bg-white border-b border-slate-200 px-4 py-3 flex items-center gap-3 md:hidden">
          <button onClick={() => setMobileOpen(true)} className="text-slate-600">
            <Menu size={20} />
          </button>
          <span className="font-semibold text-slate-800">Leafclutch Admin</span>
          {mobileOpen && (
            <button onClick={() => setMobileOpen(false)} className="ml-auto text-slate-600">
              <X size={20} />
            </button>
          )}
        </header>

        <main className="flex-1 overflow-y-auto p-6">
          <Outlet />
        </main>
      </div>
    </div>
  );
}
