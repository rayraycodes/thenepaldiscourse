import { ConferenceDay1RunOfShow } from './ConferenceDay1RunOfShow';
import { ConferenceDay2RunOfShow } from './ConferenceDay2RunOfShow';

export function ItineraryOnboardingGuide() {
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
        </ul>
      </nav>

      <ConferenceDay1RunOfShow />
      <ConferenceDay2RunOfShow />
    </div>
  );
}
