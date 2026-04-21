import type { ReactNode } from 'react';

export type ScheduleSessionRow = {
  time: string;
  title: string;
  summary?: string;
  summaryBullets?: string[];
  moderator?: string;
  panelists?: string;
  /** Omitted when the day hides the venue column (e.g. rooms TBD). */
  location?: string;
  track?: string;
};

function SessionSummary({
  summary,
  summaryBullets,
}: Pick<ScheduleSessionRow, 'summary' | 'summaryBullets'>) {
  if (!summary && (!summaryBullets || summaryBullets.length === 0)) return null;
  return (
    <>
      {summary ? <p className="itinerary-schedule-note m-0 mt-1 max-w-none">{summary}</p> : null}
      {summaryBullets && summaryBullets.length > 0 ? (
        <ul className="itinerary-schedule-bullets m-0 mt-2">
          {summaryBullets.map((bullet) => (
            <li key={bullet}>{bullet}</li>
          ))}
        </ul>
      ) : null}
    </>
  );
}

export function ParticipantsCell({
  moderator,
  panelists,
}: Pick<ScheduleSessionRow, 'moderator' | 'panelists'>) {
  const panelistLines = panelists
    ? panelists
        .split(';')
        .map((line) => line.trim())
        .filter(Boolean)
    : [];

  if (!moderator && !panelists) {
    return <span className="itinerary-aaa-muted">—</span>;
  }
  return (
    <div className="itinerary-text-start space-y-2">
      {moderator ? (
        <p className="m-0 itinerary-schedule-note">
          <span className="itinerary-sr-only">Moderator: </span>
          <span className="font-semibold text-[#2c1418]">Moderator: </span>
          {moderator}
        </p>
      ) : null}
      {panelists ? (
        panelistLines.length > 1 ? (
          <div className="m-0 itinerary-schedule-note">
            <span className="itinerary-sr-only">Panelists: </span>
            <p className="m-0">
              <span className="font-semibold text-[#2c1418]">Panelists: </span>
            </p>
            <ul className="itinerary-schedule-bullets m-0 mt-1">
              {panelistLines.map((panelist) => (
                <li key={panelist}>{panelist}</li>
              ))}
            </ul>
          </div>
        ) : (
          <p className="m-0 itinerary-schedule-note">
            <span className="itinerary-sr-only">Panelists: </span>
            <span className="font-semibold text-[#2c1418]">Panelists: </span>
            {panelists}
          </p>
        )
      ) : null}
    </div>
  );
}

type ConferenceScheduleDaySectionProps = {
  sectionId: string;
  headingId: string;
  title: string;
  intro: ReactNode;
  sessions: ScheduleSessionRow[];
  tableCaption: string;
  scrollRegionLabel: string;
  /** When false, the venue column is not rendered (e.g. Day 1 without room assignments). */
  showVenueColumn?: boolean;
  accessibilityGuidance?: string;
};

export function ConferenceScheduleDaySection({
  sectionId,
  headingId,
  title,
  intro,
  sessions,
  tableCaption,
  scrollRegionLabel,
  showVenueColumn = true,
  accessibilityGuidance,
}: ConferenceScheduleDaySectionProps) {
  const sectionHelpId = `${sectionId}-accessibility-help`;
  const defaultGuidance =
    'Concurrent sessions share a time window; choose one breakout per block. On smaller screens, cards are shown instead of a table for easier reading.';

  return (
    <section
      id={sectionId}
      className="itinerary-guide-section itinerary-text-start"
      aria-labelledby={headingId}
    >
      <h2 id={headingId} className="itinerary-guide-h2">
        {title}
      </h2>
      {intro}
      <p id={sectionHelpId} className="itinerary-aaa-muted m-0 mb-3 max-w-none">
        {accessibilityGuidance ?? defaultGuidance}
      </p>

      <div
        className="itinerary-table-scroll itinerary-schedule-table-wrap"
        tabIndex={0}
        role="region"
        aria-label={scrollRegionLabel}
        aria-describedby={sectionHelpId}
      >
        <table
          className={`itinerary-schedule-table ${showVenueColumn ? 'min-w-[52rem]' : 'min-w-[42rem]'}`}
        >
          <caption className="itinerary-schedule-caption">{tableCaption}</caption>
          <thead>
            <tr>
              <th scope="col" className="itinerary-schedule-cell--time">
                Time
              </th>
              <th scope="col">Session</th>
              <th scope="col">Moderator and panelists</th>
              {showVenueColumn ? <th scope="col">Venue</th> : null}
            </tr>
          </thead>
          <tbody>
            {sessions.map((row, index) => {
              const sessionLabel = [row.track, row.title].filter(Boolean).join(' — ');
              return (
                <tr key={`${sectionId}-${index}-${sessionLabel}`} className="itinerary-schedule-tr">
                  <th scope="row" className="itinerary-schedule-cell--time">
                    <time>{row.time}</time>
                  </th>
                  <td>
                    <div className="itinerary-schedule-cell--session">{sessionLabel}</div>
                    <SessionSummary summary={row.summary} summaryBullets={row.summaryBullets} />
                  </td>
                  <td>
                    <ParticipantsCell moderator={row.moderator} panelists={row.panelists} />
                  </td>
                  {showVenueColumn ? (
                    <td>
                      <div className="itinerary-schedule-venue">{row.location ?? '—'}</div>
                    </td>
                  ) : null}
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>

      <ol
        className="itinerary-schedule-cards"
        aria-label={`${title} sessions`}
        aria-describedby={sectionHelpId}
      >
        {sessions.map((row, index) => {
          const sessionLabel = [row.track, row.title].filter(Boolean).join(' — ');
          return (
            <li key={`${sectionId}-card-${index}-${sessionLabel}`} className="itinerary-schedule-card">
              <article className="itinerary-schedule-card-article">
                <p className="itinerary-schedule-card-time">
                  <span className="itinerary-schedule-card-label">Time: </span>
                  <time>{row.time}</time>
                </p>
                <p className="itinerary-schedule-card-session">
                  <span className="itinerary-schedule-card-label">Session: </span>
                  {sessionLabel}
                </p>
                <SessionSummary summary={row.summary} summaryBullets={row.summaryBullets} />
                <div className="mt-2">
                  <ParticipantsCell moderator={row.moderator} panelists={row.panelists} />
                </div>
                {showVenueColumn ? (
                  <p className="itinerary-schedule-note m-0 mt-2">
                    <span className="font-semibold text-[#2c1418]">Venue: </span>
                    {row.location ?? '—'}
                  </p>
                ) : null}
              </article>
            </li>
          );
        })}
      </ol>
    </section>
  );
}
