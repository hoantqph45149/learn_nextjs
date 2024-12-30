import { ModeToggle } from "@/components/mode-toggle";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <div>
        <h1>Home</h1>
        <Link href="/login#settings">Go to logins</Link>
      </div>
    </>
  );
}
