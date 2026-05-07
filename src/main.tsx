import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";

import App from "./App.tsx";
import { supabase } from "./lib/supabase.ts";
import "./lib/realtime"; // initialize single shared WebSocket channel eagerly

// Wake up the Supabase project immediately so the first real fetches are fast
supabase.from("members").select("id", { head: true, count: "exact" }).then(() => {});
supabase.from("courses").select("id", { head: true, count: "exact" }).then(() => {});

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>
);
