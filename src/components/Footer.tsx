export function Footer() {
  return (
    <footer className="border-t border-border py-12 px-6 lg:px-12">
      <div className="max-w-[1200px] mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="text-center md:text-left">
            <div className="text-sm">
              © 2026 Harvard Undergraduate Nepali Student Association (HUNSA)
            </div>
            <div className="text-sm text-muted-foreground mt-1">
              A Registered Harvard University Student Organization
            </div>
          </div>

          {/* Nepali flag colors accent */}
          <div className="flex gap-2">
            <div className="w-3 h-3 bg-[#DC143C] rounded-full" />
            <div className="w-3 h-3 bg-[#003893] rounded-full" />
          </div>
        </div>
      </div>
    </footer>
  );
}
