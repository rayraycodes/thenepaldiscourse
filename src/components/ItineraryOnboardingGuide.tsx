import { ConferenceDay1RunOfShow } from './ConferenceDay1RunOfShow';
import { ConferenceDay2RunOfShow } from './ConferenceDay2RunOfShow';

const SNEAKPEAK_PDF_PATH = `${import.meta.env.BASE_URL}sneakpeak.pdf`;

export function ItineraryOnboardingGuide() {
  const pdfSlideSrc = `${SNEAKPEAK_PDF_PATH}#view=FitH&pagemode=none&toolbar=1&navpanes=0`;

  return (
    <div className="itinerary-onboarding-guide itinerary-aaa-prose our-story-prose our-story-prose--compact-transparency relative">
      <a href="#schedule-day-1" className="itinerary-skip-toc">
        Skip to run-of-show schedules
      </a>

      <nav className="itinerary-guide-toc" aria-label="On this page">
        <h2 className="itinerary-guide-h2">On this page</h2>
        <ul className="itinerary-guide-toc-list">
          <li>
            <a href="#schedule-day-1" className="itinerary-toc-link">
              Day 1 — Saturday, April 25, 2026
            </a>
          </li>
          <li>
            <a href="#schedule-day-2" className="itinerary-toc-link">
              Day 2 — Sunday, April 26, 2026
            </a>
          </li>
          <li>
            <a href="#conference-program-pdf" className="itinerary-toc-link">
              Conference program (PDF) — speakers and sessions
            </a>
          </li>
        </ul>
      </nav>

      <ConferenceDay1RunOfShow />
      <ConferenceDay2RunOfShow />

      <section
        id="conference-program-pdf"
        className="itinerary-guide-section itinerary-text-start"
        aria-label="Conference program PDF"
      >
        <h2 className="itinerary-guide-h2">Conference program (PDF)</h2>
        <p className="not-justify">
          Printable overview of speakers, sessions, and timings—subject to change as the program is
          finalized.
        </p>
        <div className="itinerary-pdf-embed" role="region" aria-label="Conference program PDF preview">
          <div className="overflow-hidden rounded border border-neutral-200 bg-white">
            <iframe
              src={pdfSlideSrc}
              title="The Nepal Discourse 2026 — conference program (PDF)"
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
