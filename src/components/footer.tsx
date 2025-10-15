import Link from "next/link";

export function Footer() {
  return (
    <footer className="border-t">
      <div className="container flex h-16 items-center justify-between">
        <p className="text-sm text-muted-foreground">
          © {new Date().getFullYear()} Dev Showcase. All rights reserved.
        </p>
        <div className="flex items-center gap-4 text-sm text-muted-foreground">
          <Link href="#" className="hover:text-foreground">Privacy Policy</Link>
          <Link href="#" className="hover:text-foreground">Terms of Service</Link>
        </div>
      </div>
    </footer>
  );
}
