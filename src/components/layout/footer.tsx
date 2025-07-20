export function Footer() {
  return (
    <footer className="py-6 md:px-8 md:py-0 bg-background border-t">
      <div className="container flex flex-col items-center justify-center gap-4 md:h-24 md:flex-row">
        <p className="text-center text-sm leading-loose text-muted-foreground">
          &copy; {new Date().getFullYear()} Visionary Vault. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
}
