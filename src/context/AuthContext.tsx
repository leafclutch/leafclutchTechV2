import { createContext, useContext, useEffect, useState } from "react";
import type { Session, User } from "@supabase/supabase-js";
import { supabase } from "../lib/supabase";

interface AuthContextType {
  user: User | null;
  session: Session | null;
  isAdmin: boolean;
  loading: boolean;
  signIn: (email: string, password: string) => Promise<{ error: string | null }>;
  signOut: () => Promise<void>;
}

const AuthContext = createContext<AuthContextType>({} as AuthContextType);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [session, setSession] = useState<Session | null>(null);
  const [isAdmin, setIsAdmin] = useState(false);
  const [loading, setLoading] = useState(true);

  async function checkAdmin(userId: string) {
    const { data } = await supabase
      .from("admin_profiles")
      .select("id")
      .eq("id", userId)
      .single();
    return !!data;
  }

  useEffect(() => {
    const sessionTimeout = new Promise<{ data: { session: null } }>((resolve) =>
      setTimeout(() => resolve({ data: { session: null } }), 12_000)
    );
    Promise.race([supabase.auth.getSession(), sessionTimeout]).then(async ({ data: { session } }) => {
      setSession(session);
      setUser(session?.user ?? null);
      if (session?.user) {
        setIsAdmin(await checkAdmin(session.user.id));
      }
      setLoading(false);
    });

    const { data: { subscription } } = supabase.auth.onAuthStateChange(
      async (_event, session) => {
        setSession(session);
        setUser(session?.user ?? null);
        if (session?.user) {
          setIsAdmin(await checkAdmin(session.user.id));
        } else {
          setIsAdmin(false);
        }
        setLoading(false);
      }
    );

    return () => subscription.unsubscribe();
  }, []);

  async function signIn(email: string, password: string) {
    const timeout = new Promise<{ data: { user: null }; error: { message: string } }>(resolve =>
      setTimeout(() => resolve({ data: { user: null }, error: { message: "Sign-in timed out. Please try again." } }), 12_000)
    );
    const { data, error } = await Promise.race([
      supabase.auth.signInWithPassword({ email, password }),
      timeout,
    ]);
    if (error) return { error: error.message };
    if (data.user) {
      const admin = await checkAdmin(data.user.id);
      if (!admin) {
        await supabase.auth.signOut();
        return { error: "Access denied. Not an admin." };
      }
    }
    return { error: null };
  }

  async function signOut() {
    await supabase.auth.signOut();
  }

  return (
    <AuthContext.Provider value={{ user, session, isAdmin, loading, signIn, signOut }}>
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => useContext(AuthContext);
