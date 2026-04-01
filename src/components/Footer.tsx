import hunsaLogo from '../assets/hunsa.png';

export function Footer() {
  return (
    <footer className="site-footer pt-7 pb-0 px-4 sm:px-6 lg:px-12 sm:pt-8">
      <div
        className="site-footer-hunsa-bg"
        style={{ backgroundImage: `url(${hunsaLogo})` }}
        aria-hidden="true"
      />
      <div className="site-footer-wash" aria-hidden="true" />
      <div className="site-footer-content max-w-[1200px] mx-auto">
        <section className="footer-supported" aria-labelledby="footer-supported-heading">
          <h2 className="footer-supported-heading" id="footer-supported-heading">
            Supported by:
          </h2>
          <ul className="footer-supported-logo-list">
            <li className="footer-supported-logo-item">
              <div className="footer-supported-logo-slot">
                <img
                  src="/supporters/lan-logo.png"
                  alt="LAN partner logo"
                  className="footer-supported-logo-img"
                  width={200}
                  height={200}
                  decoding="async"
                  loading="lazy"
                />
              </div>
            </li>
            <li className="footer-supported-logo-item">
              <div className="footer-supported-logo-slot">
                <img
                  src="/supporters/kmg-logo.png"
                  alt="Kathmandu Media Group (KMG) logo"
                  className="footer-supported-logo-img"
                  width={920}
                  height={802}
                  decoding="async"
                  loading="lazy"
                />
              </div>
            </li>
          </ul>
        </section>

        <div className="site-footer-credits-wrap">
          <div className="site-footer-credits mx-auto w-full max-w-[min(40rem,calc(100vw-2rem))] px-4 text-center sm:px-6">
            <p className="site-footer-credits-text">
              ©{' '}
              <span className="whitespace-nowrap">2026</span> An initiative by: Nepali Student
              Organization HGSE in collaboration with Harvard Undergraduate Nepali Student
              Association (HUNSA), MITeri (MIT) and Himalayan Caucus (HKS).
            </p>
            <p className="site-footer-credits-text site-footer-credits-text--secondary">
              Officially Recognized Student Organizations at Harvard and MIT
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
