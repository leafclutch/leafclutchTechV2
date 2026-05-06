import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";

import App from "./App.tsx";
import { supabase } from "./lib/supabase.ts";

// Wake up the Supabase project immediately so the first real fetch is fast
supabase.from("courses").select("id", { head: true, count: "exact" }).then(() => {});

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>
);
