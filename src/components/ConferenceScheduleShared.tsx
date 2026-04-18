import type { ReactNode } from 'react';

export type ScheduleSessionRow = {
  time: string;
  title: string;
  summary?: string;
  moderator?: string;
  panelists?: string;
  location: string;
  track?: string;
};

export function ParticipantsCell({
  moderator,
  panelists,
}: Pick<ScheduleSessionRow, 'moderator' | 'panelists'>) {
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
        <p className="m-0 itinerary-schedule-note">
          <span className="itinerary-sr-only">Panelists: </span>
          <span className="font-semibold text-[#2c1418]">Panelists: </span>
          {panelists}
        </p>
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
};

export function ConferenceScheduleDaySection({
  sectionId,
  headingId,
  title,
  intro,
  sessions,
  tableCaption,
  scrollRegionLabel,
}: ConferenceScheduleDaySectionProps) {
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

      <div
        className="itinerary-table-scroll"
        tabIndex={0}
        role="region"
        aria-label={scrollRegionLabel}
      >
        <table className="itinerary-schedule-table min-w-[52rem]">
          <caption className="itinerary-schedule-caption">{tableCaption}</caption>
          <thead>
            <tr>
              <th scope="col" className="itinerary-schedule-cell--time">
                Time
              </th>
              <th scope="col">Session</th>
              <th scope="col">Moderator and panelists</th>
              <th scope="col">Venue</th>
            </tr>
          </thead>
          <tbody>
            {sessions.map((row, index) => {
              const sessionLabel = [row.track, row.title].filter(Boolean).join(' — ');
              return (
                <tr key={`${sectionId}-${index}-${sessionLabel}`} className="itinerary-schedule-tr">
                  <th scope="row" className="itinerary-schedule-cell--time">
                    {row.time}
                  </th>
                  <td>
                    <div className="itinerary-schedule-cell--session">{sessionLabel}</div>
                    {row.summary ? (
                      <p className="itinerary-schedule-note m-0 mt-1 max-w-none">{row.summary}</p>
                    ) : null}
                  </td>
                  <td>
                    <ParticipantsCell moderator={row.moderator} panelists={row.panelists} />
                  </td>
                  <td>
                    <div className="itinerary-schedule-venue">{row.location}</div>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </section>
  );
}
