import { Download, ExternalLink } from 'lucide-react';

const ONBOARDING_PDF_PATH = '/onboarding.pdf';
const ONBOARDING_PDF_DOWNLOAD_NAME = 'The-Nepal-Discourse-2026-Onboarding-Guide.pdf';

export function ItineraryOnboardingGuide() {
  return (
    <div className="itinerary-onboarding-guide our-story-prose our-story-prose--compact-transparency">
      <p className="itinerary-guide-lead font-semibold text-[#2c1418] not-justify">
        Onboarding Guide · Cambridge, Massachusetts
      </p>

      <nav className="itinerary-guide-toc itinerary-text-start" aria-label="On this page">
        <h2 className="itinerary-guide-h2">Table of contents</h2>
        <ul className="itinerary-guide-toc-list">
          <li>
            <a href="#itinerary-welcome">Welcome to the Nepal Discourse 2026</a>
          </li>
          <li>
            <a href="#itinerary-schedule">Schedule</a>
          </li>
          <li>
            <a href="#itinerary-logistics">Conference logistics</a>
          </li>
          <li>
            <a href="#itinerary-accommodations">Accommodation recommendations</a>
          </li>
          <li>
            <a href="#itinerary-conduct">Participant code of conduct</a>
          </li>
          <li>
            <a href="#itinerary-maps">Maps and wayfinding</a>
          </li>
          <li>
            <a href="#itinerary-initiative">Organisers and partners</a>
          </li>
        </ul>
      </nav>

      <section className="itinerary-guide-section" aria-labelledby="itinerary-welcome">
        <h2 id="itinerary-welcome" className="itinerary-guide-h2">
          Welcome to the Nepal Discourse 2026
        </h2>
        <p>
          The Nepal Discourse, the first of its kind, is an initiative of students at Harvard
          University and Massachusetts Institute of Technology. It seeks to convene policy makers,
          scholars, and industry leaders from Nepal, the Nepali diaspora, and the university
          ecosystem for an open debate, dialogue, and discussion on the most pressing challenges
          and opportunities before us.
        </p>
        <p>
          It is our pleasure to welcome you all here in this beautiful city, Cambridge, for these two
          days. We are honored to host such a distinguished group of participants, whose distinct
          expertise, experience, and perspectives will enrich conversations in the conference
          theme: Human Capital, Artificial Intelligence, and Next Generation.
        </p>
        <p>
          The inaugural edition of the Nepal Discourse brings together over 400 academics, policy
          makers, students, industry, and thought leaders across 6 panels, 12 breakout sessions, and
          2 fireside chats.
        </p>
        <p>
          Once again, we extend our warmest welcome to all participants at the Nepal Discourse
          2026.
        </p>
        <p className="itinerary-guide-signature not-justify">
          Organizing Committee
          <br />
          The Nepal Discourse 2026
          <br />
          <a
            href="https://www.thenepaldiscourse.com/"
            className="apply-story-link"
            target="_blank"
            rel="noopener noreferrer"
          >
            www.thenepaldiscourse.com
          </a>
        </p>
        <p className="not-justify text-base">
          <strong>Sponsors:</strong> Flips and Fuse Machines
          <br />
          <strong>Supporters:</strong> Leadership Academy Nepal and Kantipur Media Group
        </p>
      </section>

      <section
        id="itinerary-schedule"
        className="itinerary-guide-section itinerary-schedule-wrap itinerary-text-start"
      >
        <h2 className="itinerary-guide-h2">Schedule</h2>
        <p className="text-[0.9375rem] text-[#3d3d3d]">
          Times and rooms are subject to change. Registered participants should confirm details in
          official event communications.
        </p>

        <h3 className="itinerary-guide-h3">Saturday, April 25, 2026 — Harvard</h3>

        <h4 className="itinerary-schedule-period">Morning</h4>
        <ScheduleRow time="8:00 AM" title="Breakfast and Registration" venue="Askwith" />
        <ScheduleRow time="9:00 AM" title="Welcome and Acknowledgment" venue="Askwith" />
        <ScheduleRow
          time="9:30 AM"
          title="Panel I | Opening plenary: Human Capital, AI, and Next-Gen Leadership"
          venue="Askwith"
          note="Sameer Maskey | Dr. Biswash Gauchan | TBA | Anup Kaphle (M)"
        />
        <p className="itinerary-schedule-label">10:45 AM — Parallel sessions</p>
        <ParallelBlock
          items={[
            {
              title:
                'From BPO to IPO: Leveraging AI (Emerging Technology) for Startup Acceleration and Economic Leapfrogging',
              venue: 'Larsen',
              people: 'Prasanna Dhungel | Bal Krishna Joshi | Karvika Thapa | Rumee Singh (M)',
            },
            {
              title: 'Future-Proofing the Curriculum: Reforming Curriculum for Human-Centric Development',
              venue: 'Larsen',
              people:
                'Rupa Laxmi Shah | Sulav Budathoki | William Wisser | Swastika Shrestha | Dr. Arun Joshi (M)',
            },
            {
              title:
                'Financing the Future: Blended Capital and Policy Pathways for Climate Resilience',
              venue: 'Longfellow',
              people: 'David Sislen | Manoj Poudel | Arun Banskota | Amelia VanderLaan (M)',
            },
          ]}
        />
        <ScheduleRow time="12:00 PM" title="Lunch" venue="Askwith" />

        <h4 className="itinerary-schedule-period">Afternoon</h4>
        <ScheduleRow
          time="12:40 PM"
          title="Panel 2 | Fireside chat: Human Development and Institutional Resilience"
          venue="Askwith"
          note="Prominent leader from the Government of Nepal (TBA), moderated by Dr. Arun Joshi"
        />
        <ScheduleRow
          title="The Cultural Playbook: Building Community and Leadership Through Art &amp; Culture"
          venue="Larsen"
          note="Sophia Pande | Sanjay Silwal Gupta | TBA | Anup Kaphle (M)"
        />
        <ScheduleRow time="1:30 PM" title="Panel I | Breakout II (TBA)" venue="Longfellow" />
        <ScheduleRow
          title="From Prediction to Wisdom: Human Decision-Making in the AI Era"
          venue="Larsen"
          note="Dr. Ashish Luitel | Sameer Maskey | Dr. Peter Q. Blair | Rupa Laxmi Shah (M)"
        />
        <p className="itinerary-schedule-label">2:45 PM</p>
        <ScheduleRow
          title="Panel 3: Mobility and Connectivity"
          venue="Askwith"
          note="Michael Foley | David Sislen | TBA | Bibek Raj Kandel (M)"
        />
        <ScheduleRow
          time="4:00 – 5:00 PM"
          title="Poster Session and Community Hour"
          venue="Longfellow"
        />

        <h3 className="itinerary-guide-h3">Sunday, April 26, 2026 — MIT</h3>

        <h4 className="itinerary-schedule-period">Morning</h4>
        <ScheduleRow time="8:00 AM" title="Breakfast" venue="MIT" />
        <ScheduleRow
          time="9:00 AM"
          title="Panel 4 | Fireside chat: AI and the Future of Workforce"
          venue="MIT"
          note="Prominent leader from the Government of Nepal, moderated by Dr. Peter Q. Blair"
        />
        <ScheduleRow
          title="Next Gen Leadership: Navigating Multipolarity and Strategic Autonomy"
          venue="MIT"
          note="Pukar Malla | Pukar Bam | Raksha Bam | Semanta Dahal | Ang Sonam Sherpa (M)"
        />
        <p className="itinerary-schedule-label">9:45 AM — Parallel sessions</p>
        <ParallelBlock
          items={[
            {
              title:
                'The Trust Deficit: Leading Institutions in the Age of Digital Mobilization and Dissent',
              venue: 'MIT',
              people: 'Ashish Luitel | Sanjay Silwal | Sharad Aryan | Hitesh Hathi (M)',
            },
            {
              title: 'Nepal and Emerging Industries',
              venue: 'MIT',
              people: 'Saurav Sangai | Nischal Baskota | Mohit Gupta | Shuvangi Rana (M)',
            },
          ]}
        />
        <p className="itinerary-schedule-label">Breakouts</p>
        <ScheduleRow
          time="11:00 AM"
          title="Panel 5: Designing Nepal&apos;s AI Skills Strategy"
          venue="MIT"
          note="Dr. Sanjay Manandhar | Biswas Dhakal | Rumee Singh | Swastika Shakya | Dipta Shah (M)"
        />

        <h4 className="itinerary-schedule-period">Afternoon</h4>
        <ScheduleRow time="12:15 PM" title="Lunch" venue="MIT" />
        <ScheduleRow
          title="Remittance Plus Economy"
          venue="MIT"
          note="Rahul Agrawal | Bhawani Rana | Subash Sapkota | Hemraj Dhakal | TBA (M)"
        />
        <p className="itinerary-schedule-label">1:00 PM — Parallel sessions</p>
        <ParallelBlock
          items={[
            {
              title: 'Diaspora, Migration, and Representation',
              venue: 'MIT',
              people: 'Mahendra Pandey | Nischal Baskota | Samjhana Gurung | Dadhiram Bhandari',
            },
            {
              title: 'Health and Wellbeing',
              venue: 'MIT',
              people: 'Bijay Acharya | Padmashree Gehl Sampath | TBA | Dr. Ramu Kharel (M)',
            },
          ]}
        />
        <ScheduleRow
          time="2:25 PM"
          title="Closing fireside conversation with the keynote speaker"
          venue="MIT"
          note="Prominent leader from the Government of Nepal, moderated by David Sislen"
        />
        <ScheduleRow
          time="3:15 – 4:00 PM"
          title="Strategic Foresight 2035 Design and Closing Commitments"
          venue="MIT"
        />
      </section>

      <section id="itinerary-logistics" className="itinerary-guide-section itinerary-text-start">
        <h2 className="itinerary-guide-h2">Conference logistics</h2>
        <p>
          Day one takes place at the Harvard Graduate School of Education,{' '}
          <strong>13 Appian Way, Cambridge, Massachusetts 02138</strong>. Key spaces include
          Askwith Hall and Longfellow Hall; Larsen Hall and Radcliffe Yard are nearby reference
          points around Harvard Square.
        </p>
        <p>
          Day two takes place at the MIT Schwarzman College of Computing,{' '}
          <strong>51 Vassar Street, Cambridge, Massachusetts 02139</strong>.
        </p>
        <p>
          Trained volunteers and professional security will be available throughout the conference to
          provide logistical support and ensure a safe, orderly environment for all participants.
        </p>
      </section>

      <section id="itinerary-accommodations" className="itinerary-guide-section itinerary-text-start">
        <h2 className="itinerary-guide-h2">Accommodation recommendations</h2>
        <p className="text-[0.9375rem] text-[#3d3d3d]">
          These listings are suggestions only, not endorsements.
        </p>

        <h3 className="itinerary-guide-h3">Hotels</h3>
        <Accommodation
          name="AC Hotel by Marriott (2.6 miles)"
          lines={['10 Acorn Park Drive', 'Cambridge, MA 02140', 'Phone: 617-876-6190', 'Fax: 617-876-6191']}
        />
        <Accommodation
          name="Cambria Hotel Boston – Somerville (~2 miles)"
          lines={[
            '515 Somerville Avenue',
            'Somerville, MA 02143',
            'Phone: 617-341-9040',
            'Harvard discount available.',
          ]}
        />
        <Accommodation
          name="Sheraton Commander Hotel (closest to HGSE)"
          lines={[
            '16 Garden Street',
            'Cambridge, MA 02138',
            'Main: 617-547-4800 · Fax: 617-868-8322',
            'Reservations: 800-535-5007',
            'Email: sales@sheratoncommander.com',
          ]}
        />
        <Accommodation
          name="The Charles Hotel (walking distance)"
          lines={['One Bennett Street', 'Cambridge, MA 02138', '617-864-1200 · 617-864-5715']}
        />
        <Accommodation
          name="DoubleTree Suites by Hilton Hotel (1.7 miles)"
          lines={[
            '400 Soldiers Field Road',
            'Boston, MA 02134',
            'Phone: 617-783-0090 · Fax: 617-783-0897',
            'Free scheduled shuttle service available.',
          ]}
        />
        <Accommodation
          name="Fairmont Copley Plaza (4.1 miles)"
          lines={['138 St. James Avenue', 'Boston, MA 02116', '617-267-5300']}
        />
        <Accommodation
          name="The Freepoint Hotel (1.6 miles)"
          lines={['220 Alewife Brook Parkway', 'Cambridge, MA 02140', 'Phone: 617-491-8000']}
        />
        <Accommodation
          name="Harvard Square Hotel (walking distance)"
          lines={['110 Mt. Auburn Street', 'Cambridge, MA 02138', '617-864-5200 · 617-864-2409']}
        />
        <Accommodation
          name="Holiday Inn Express Hotel &amp; Suites (2.8 miles)"
          lines={[
            '250 Monsignor O&apos;Brien Highway',
            'Cambridge, MA 02141',
            'Phone: 617-577-7600 · Fax: 617-354-1313',
            'Ask for the Harvard University discount.',
          ]}
        />
        <Accommodation
          name="Homewood Suites by Hilton (2.4 miles)"
          lines={[
            '1 Massachusetts Avenue',
            'Arlington, MA 02474',
            'Phone: 781-643-7258',
            'Take the 77 bus to Massachusetts Avenue.',
          ]}
        />
        <Accommodation
          name="The Hotel Veritas (1.4 miles)"
          lines={['One Remington Street', 'Cambridge, MA 02138', 'Phone: 617-520-5000']}
        />

        <h3 className="itinerary-guide-h3">Bed and breakfasts</h3>
        <Accommodation
          name="A Friendly Inn at Harvard (walking distance)"
          lines={[
            '1673 Cambridge Street',
            'Cambridge, MA 02138',
            'Phone: 617-547-7851 · Fax: 617-547-0202',
          ]}
        />
        <Accommodation
          name="A Bed &amp; Breakfast in Cambridge (walking distance)"
          lines={[
            '1657 Cambridge Street #3',
            'Cambridge, MA 02138-4316',
            '617-868-7082 or 800-795-7122',
          ]}
        />
        <Accommodation
          name="Irving House at Harvard (walking distance)"
          lines={[
            '24 Irving Street',
            'Cambridge, MA 02138',
            'Phone: 617-547-4600 · Fax: 617-576-2814',
          ]}
        />
        <Accommodation
          name="The Mary Prentiss Inn (1.5 miles, bus or subway)"
          lines={[
            '6 Prentiss Street',
            'Cambridge, MA 02140',
            'Phone: 617-661-2929 · Fax: 617-661-5989',
          ]}
        />
        <Accommodation
          name="A Cambridge House (1.8 miles from HGSE, bus)"
          lines={[
            '2218 Massachusetts Avenue',
            'Cambridge, MA 02140',
            '617-491-6300 · 800-232-9989 · Fax: 617-868-2848',
          ]}
        />
      </section>

      <section id="itinerary-conduct" className="itinerary-guide-section itinerary-text-start">
        <h2 className="itinerary-guide-h2">Participant code of conduct</h2>
        <p>
          The Nepal Discourse 2026 is committed to fostering a safe, respectful, and productive
          environment for all participants. We believe such an environment is essential to encourage
          open debate, meaningful dialogue, and thoughtful discussion on the most pressing issues
          facing our communities. With this goal in mind, we ask all participants to adhere to the
          following guidelines.
        </p>
        <p>
          By participating in the conference, you agree to adhere to this Participant Code of Conduct.
        </p>

        <h3 className="itinerary-conduct-h3">Discrimination</h3>
        <p>
          We will not tolerate prejudicial treatment of fellow participants on the basis of race,
          ethnicity, gender, gender identity or expression, sexual orientation, age, religion,
          nationality, disability status, or any other attributes. All participants are expected to
          treat one another with dignity and respect.
        </p>

        <h3 className="itinerary-conduct-h3">Harassment</h3>
        <p>
          Harassment of any kind is strictly prohibited. This includes, but is not limited to: sexual
          remarks or advances, bullying, stalking, intimidation, persistent disruption of
          discussions, hostile behavior, offensive or derogatory language, or threats—whether in
          person, in written communication, or on digital platforms associated with the event.
        </p>

        <h3 className="itinerary-conduct-h3">Substances</h3>
        <p>
          Participants are expected to comply with all applicable campus policies and local laws
          regarding alcohol and controlled substances. The use of illegal drugs, smoking, vaping, or
          the misuse of alcohol during conference sessions, official events, or within designated
          conference spaces is strictly prohibited.
        </p>

        <h3 className="itinerary-conduct-h3">Technology and social media</h3>
        <p>To respect participants&apos; privacy and encourage open dialogue:</p>
        <ul className="itinerary-conduct-list">
          <li>
            Recording (audio or video) of sessions or individuals should only occur with prior
            permission from the organizers and the individuals being recorded.
          </li>
          <li>
            Posting photos, quotes, or session content on social media should be done responsibly
            and with respect for participants&apos; consent.
          </li>
          <li>
            Live streaming of sessions is not permitted unless officially organized or approved by the
            conference team.
          </li>
        </ul>

        <h3 className="itinerary-conduct-h3">Solicitation</h3>
        <p>
          Unauthorized solicitation, including access to the conference to non-participants, the
          promotion or sale of products or services, distribution of marketing materials (unless
          authorized), is strictly prohibited during the conference.
        </p>

        <h3 className="itinerary-conduct-h3">Property damage and theft</h3>
        <p>
          Any damage to property, equipment, or facilities, as well as theft or unauthorized removal
          of property, will not be tolerated. Individuals found responsible may be held financially
          liable for damages and may face further action in accordance with applicable institutional
          policies.
        </p>

        <h3 className="itinerary-conduct-h3">Reporting concerns</h3>
        <p>
          Anyone who experiences or observes behavior that violates this Code of Conduct is
          encouraged to report it to the organizing committee as soon as possible. Reports will be
          handled respectfully and, where possible, confidentially.
        </p>

        <h3 className="itinerary-conduct-h3">Disciplinary action</h3>
        <p>
          Failure to adhere to this Participant Code of Conduct may result in appropriate action by
          the organizing committee, including removal from conference sessions or events,
          revocation of conference participation without financial compensation, and, in serious
          cases, restriction from attending future Nepal Discourse events.
        </p>
        <p>
          The above rules are supplementary to applicable federal laws of the United States, local
          laws of the City of Cambridge, and campus policies at Harvard University and the
          Massachusetts Institute of Technology. The Nepal Discourse 2026 is not liable for the
          actions of the participants. Accordingly, the responsibility for proper conduct rests with
          each participant.
        </p>

        <h3 className="itinerary-conduct-h3">Contact</h3>
        <p>
          Questions or concerns related to the Participant Code of Conduct should be directed to the
          organizing committee at{' '}
          <a
            href="mailto:info@thenepaldiscourse.com"
            className="apply-story-link"
            {...({ 'x-apple-data-detectors': 'false' } as Record<string, string>)}
          >
            info@thenepaldiscourse.com
          </a>
          .
        </p>
      </section>

      <section id="itinerary-maps" className="itinerary-guide-section itinerary-text-start">
        <h2 className="itinerary-guide-h2">Maps and wayfinding</h2>
        <p>
          Full-page maps from the printed onboarding guide (Boston subway, Harvard campus, MIT
          campus) are available in the PDF download. Quick links:
        </p>
        <ul className="itinerary-maps-links">
          <li>
            <a
              href="https://www.mbta.com/maps"
              target="_blank"
              rel="noopener noreferrer"
              className="apply-story-link"
            >
              MBTA subway and transit maps
              <span className="apply-story-external-suffix" aria-hidden="true">
                {'\u00A0'}
                <ExternalLink className="apply-story-external-icon" />
              </span>
            </a>
          </li>
          <li>
            <a
              href="https://map.harvard.edu/"
              target="_blank"
              rel="noopener noreferrer"
              className="apply-story-link"
            >
              Harvard campus map
              <span className="apply-story-external-suffix" aria-hidden="true">
                {'\u00A0'}
                <ExternalLink className="apply-story-external-icon" />
              </span>
            </a>
          </li>
          <li>
            <a
              href="http://whereis.mit.edu/"
              target="_blank"
              rel="noopener noreferrer"
              className="apply-story-link"
            >
              MIT campus map (Where Is MIT)
              <span className="apply-story-external-suffix" aria-hidden="true">
                {'\u00A0'}
                <ExternalLink className="apply-story-external-icon" />
              </span>
            </a>
          </li>
        </ul>
        <p>
          At MIT, building numbers identify locations (e.g. room <strong>7-121</strong>: building 7,
          floor 1, room 21). See the building index on the MIT map or use the online tool above.
        </p>
        <p className="itinerary-pdf-download">
          <a
            href={ONBOARDING_PDF_PATH}
            download={ONBOARDING_PDF_DOWNLOAD_NAME}
            className="apply-story-link apply-onboarding-download-link"
          >
            Download the full onboarding guide (PDF)
            <span className="apply-story-external-suffix" aria-hidden="true">
              {'\u00A0'}
              <Download className="apply-story-external-icon" aria-hidden />
            </span>
          </a>
        </p>
      </section>

      <section id="itinerary-initiative" className="itinerary-guide-section itinerary-text-start">
        <h2 className="itinerary-guide-h2">Organisers and partners</h2>
        <p>
          <strong>An initiative by:</strong> Nepali Student Organization, HGSE
        </p>
        <p>
          <strong>In collaboration with:</strong> Harvard Undergraduate Nepali Student Association
          (HUNSA), Himalayan Caucus (HKS), MITeri (MIT)
        </p>
        <p>Officially recognised student organisations at Harvard and MIT.</p>
        <p>
          <strong>Sponsors:</strong> Flips and Fusemachines
          <br />
          <strong>Supported by:</strong> Leadership Academy Nepal and Kantipur Media Group
        </p>
      </section>
    </div>
  );
}

function ScheduleRow({
  time,
  title,
  venue,
  note,
}: {
  time?: string;
  title?: string;
  venue?: string;
  note?: string;
}) {
  return (
    <div className="itinerary-schedule-row">
      {time ? <span className="itinerary-schedule-time">{time}</span> : null}
      <div className="itinerary-schedule-body">
        {title ? <div className="itinerary-schedule-title">{title}</div> : null}
        {venue ? <div className="itinerary-schedule-venue">{venue}</div> : null}
        {note ? <div className="itinerary-schedule-note">{note}</div> : null}
      </div>
    </div>
  );
}

function ParallelBlock({
  items,
}: {
  items: { title: string; venue: string; people: string }[];
}) {
  return (
    <ul className="itinerary-parallel-list">
      {items.map((item, i) => (
        <li key={i} className="itinerary-parallel-item">
          <div className="itinerary-schedule-title">{item.title}</div>
          <div className="itinerary-schedule-venue">{item.venue}</div>
          <div className="itinerary-schedule-note">{item.people}</div>
        </li>
      ))}
    </ul>
  );
}

function Accommodation({ name, lines }: { name: string; lines: string[] }) {
  return (
    <div className="itinerary-accommodation">
      <div className="itinerary-accommodation-name">{name}</div>
      {lines.map((line, i) => (
        <div key={`${name}-${i}`} className="itinerary-accommodation-line">
          {line}
        </div>
      ))}
    </div>
  );
}
