import hunsaLogo from '../assets/hunsa.png';

export function Footer() {
  return (
    <footer
      className="pt-10 pb-0 px-4 sm:px-6 lg:px-12"
      style={{
        // Softer, more subtle crimson fade at the bottom of the page
        background:
          'linear-gradient(to top, rgba(127, 14, 38, 0.35), rgba(127, 14, 38, 0))',
      }}
    >
      <div className="max-w-[1200px] mx-auto">
        {/* HUNSA logo with overlaid text, fading at edges, over crimson gradient background */}
        <div className="pb-6 pt-4">
          <div className="relative w-full max-w-[320px] md:max-w-[420px] mx-auto">
            <img
              src={hunsaLogo}
              alt="Harvard Undergraduate Nepali Student Association logo"
              className="w-full h-auto"
              style={{
                opacity: 0.15,
                // Fade out on left/right and top edges
                WebkitMaskImage:
                  'linear-gradient(to right, transparent, black 20%, black 80%, transparent), linear-gradient(transparent, black 25%, black 100%)',
                maskImage:
                  'linear-gradient(to right, transparent, black 20%, black 80%, transparent), linear-gradient(transparent, black 25%, black 100%)',
                WebkitMaskComposite: 'source-in',
                maskComposite: 'intersect',
              }}
            />
            <div className="absolute inset-0 flex flex-col items-center justify-center text-center pointer-events-none px-4 sm:px-6">
              <p
                className="text-xs sm:text-sm md:text-base lg:text-lg text-[#7F0E26] md:text-[#DC143C] font-medium [text-shadow:0_1px_2px_rgba(255,255,255,0.8)] md:[text-shadow:none] max-w-full"
              >
                ©️ 2026 An initiative by: Nepali Student Organization HGSE in collaboration with Harvard Undergraduate Nepali Student Association (HUNSA), MITeri and Himalayan Caucus
              </p>
              <p
                className="text-xs sm:text-sm md:text-base lg:text-lg text-[#7F0E26] md:text-[#DC143C] mt-2 sm:mt-3 [text-shadow:0_1px_2px_rgba(255,255,255,0.8)] md:[text-shadow:none]"
              >
                Officially Recognized Student Organizations at Harvard and MIT
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
