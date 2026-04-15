const SNEAKPEAK_PDF_PATH = `${import.meta.env.BASE_URL}sneakpeak.pdf`;

export function ItineraryOnboardingGuide() {
  const pdfSlideSrc = `${SNEAKPEAK_PDF_PATH}#view=FitH&pagemode=none&toolbar=1&navpanes=0`;

  return (
    <div className="itinerary-onboarding-guide itinerary-aaa-prose our-story-prose our-story-prose--compact-transparency">
      <section className="itinerary-guide-section itinerary-text-start" aria-label="Lineup PDF section">
        <p>Take a look at the lineup below (subject to change)</p>
        <div className="itinerary-pdf-embed" role="region" aria-label="Lineup PDF preview">
          <div className="overflow-hidden rounded border border-neutral-200 bg-white">
            <iframe
              src={pdfSlideSrc}
              title="Lineup PDF slideshow"
              width="100%"
              height="900"
              className="block"
            />
          </div>
        </div>
      </section>
    </div>
  );
}
