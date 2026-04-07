import { redirect } from "next/navigation";

// Redirect root path to English homepage
export default function RootPage() {
  redirect("/en");
}
