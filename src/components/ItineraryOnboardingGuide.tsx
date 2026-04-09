import { useId, type ReactNode } from 'react';
import { Download, ExternalLink } from 'lucide-react';

const ONBOARDING_PDF_PATH = '/onboarding.pdf';
const ONBOARDING_PDF_DOWNLOAD_NAME = 'The-Nepal-Discourse-2026-Onboarding-Guide.pdf';

/** Reference figures from onboarding guide PDF page 8 (Harvard area and MIT) */
const ONBOARDING_PAGE8_MAP_1 = '/itinerary-maps/onboarding-guide-page8-map-1.png';
const ONBOARDING_PAGE8_MAP_2 = '/itinerary-maps/onboarding-guide-page8-map-2.png';

function googleMapsSearchUrl(query: string) {
  return `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(query)}`;
}

function appleMapsSearchUrl(query: string) {
  return `https://maps.apple.com/?q=${encodeURIComponent(query)}`;
}

type WayfindingPlaceProps = {
  title: string;
  mapSearch: string;
  children: ReactNode;
};

function WayfindingPlace({ title, mapSearch, children }: WayfindingPlaceProps) {
  return (
    <article className="itinerary-wayfinding-place" aria-labelledby={`wayfinding-${slugId(title)}`}>
      <h3 id={`wayfinding-${slugId(title)}`} className="itinerary-guide-h3">
        {title}
      </h3>
      <div className="itinerary-wayfinding-desc">{children}</div>
      <p className="itinerary-maps-app-links">
        <a
          href={googleMapsSearchUrl(mapSearch)}
          target="_blank"
          rel="noopener noreferrer"
          className="apply-story-link itinerary-aaa-link"
          aria-label={`Open directions to ${title} in Google Maps`}
        >
          Google Maps
          <NewTabAuxiliary />
          <span className="apply-story-external-suffix" aria-hidden="true">
            {'\u00A0'}
            <ExternalLink className="apply-story-external-icon" />
          </span>
        </a>
        <a
          href={appleMapsSearchUrl(mapSearch)}
          target="_blank"
          rel="noopener noreferrer"
          className="apply-story-link itinerary-aaa-link"
          aria-label={`Open directions to ${title} in Apple Maps`}
        >
          Apple Maps
          <NewTabAuxiliary />
          <span className="apply-story-external-suffix" aria-hidden="true">
            {'\u00A0'}
            <ExternalLink className="apply-story-external-icon" />
          </span>
        </a>
      </p>
    </article>
  );
}

function slugId(title: string) {
  return title
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-|-$/g, '');
}

/** WCAG 2.2 AAA-oriented: link purpose + new-window disclosure for assistive tech */
function NewTabAuxiliary() {
  return <span className="itinerary-sr-only"> Opens in a new tab.</span>;
}

export function ItineraryOnboardingGuide() {
  return (
    <div className="itinerary-onboarding-guide itinerary-aaa-prose our-story-prose our-story-prose--compact-transparency">
      <p className="itinerary-guide-lead font-semibold text-[#2c1418] not-justify">
        Onboarding Guide · Cambridge, Massachusetts
      </p>

      <nav
        id="itinerary-toc"
        className="itinerary-guide-toc itinerary-text-start"
        aria-label="On this page"
      >
        <h2 className="itinerary-guide-h2">Table of contents</h2>
        <ul className="itinerary-guide-toc-list">
          <li>
            <a href="#itinerary-welcome" className="itinerary-toc-link">
              Welcome to the Nepal Discourse 2026
            </a>
          </li>
          <li>
            <a href="#itinerary-schedule" className="itinerary-toc-link">
              Schedule
            </a>
          </li>
          <li>
            <a href="#itinerary-logistics" className="itinerary-toc-link">
              Conference logistics
            </a>
          </li>
          <li>
            <a href="#itinerary-accommodations" className="itinerary-toc-link">
              Accommodation recommendations
            </a>
          </li>
          <li>
            <a href="#itinerary-conduct" className="itinerary-toc-link">
              Participant code of conduct
            </a>
          </li>
          <li>
            <a href="#itinerary-maps" className="itinerary-toc-link">
              Maps and wayfinding
            </a>
          </li>
          <li>
            <a href="#itinerary-initiative" className="itinerary-toc-link">
              Organisers and partners
            </a>
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
            className="apply-story-link itinerary-aaa-link"
            target="_blank"
            rel="noopener noreferrer"
          >
            www.thenepaldiscourse.com
            <NewTabAuxiliary />
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
        <p className="itinerary-aaa-muted">
          Times and rooms are subject to change. Registered participants should confirm details in
          official event communications. In the tables below, &ldquo;M&rdquo; indicates the session
          moderator.
        </p>

        <h3 className="itinerary-guide-h3">Saturday, April 25, 2026 — Harvard</h3>
        <h4 className="itinerary-schedule-period">Morning</h4>
        <ScheduleTableWrapper caption="Saturday 25 April 2026 — Harvard — morning sessions">
          <ScheduleRowTr
            time="8:00 AM"
            session="Breakfast and Registration"
            venue="Askwith"
          />
          <ScheduleRowTr time="9:00 AM" session="Welcome and Acknowledgment" venue="Askwith" />
          <ScheduleRowTr
            time="9:30 AM"
            session="Panel I | Opening plenary: Human Capital, AI, and Next-Gen Leadership"
            venue="Askwith"
            speakers="Sameer Maskey | Dr. Biswash Gauchan | TBA | Anup Kaphle (M)"
          />
          <ScheduleBannerRow>10:45 AM — Parallel sessions</ScheduleBannerRow>
          <ParallelRows
            time="10:45 AM"
            rows={[
              {
                session:
                  'From BPO to IPO: Leveraging AI (Emerging Technology) for Startup Acceleration and Economic Leapfrogging',
                venue: 'Larsen',
                speakers: 'Prasanna Dhungel | Bal Krishna Joshi | Karvika Thapa | Rumee Singh (M)',
              },
              {
                session:
                  'Future-Proofing the Curriculum: Reforming Curriculum for Human-Centric Development',
                venue: 'Larsen',
                speakers:
                  'Rupa Laxmi Shah | Sulav Budathoki | William Wisser | Swastika Shrestha | Dr. Arun Joshi (M)',
              },
              {
                session:
                  'Financing the Future: Blended Capital and Policy Pathways for Climate Resilience',
                venue: 'Longfellow',
                speakers: 'David Sislen | Manoj Poudel | Arun Banskota | Amelia VanderLaan (M)',
              },
            ]}
          />
          <ScheduleRowTr time="12:00 PM" session="Lunch" venue="Askwith" />
        </ScheduleTableWrapper>

        <h4 className="itinerary-schedule-period">Afternoon</h4>
        <ScheduleTableWrapper caption="Saturday 25 April 2026 — Harvard — afternoon sessions">
          <ScheduleRowTr
            time="12:40 PM"
            session="Panel 2 | Fireside chat: Human Development and Institutional Resilience"
            venue="Askwith"
            speakers="Prominent leader from the Government of Nepal (TBA), moderated by Dr. Arun Joshi"
          />
          <ScheduleRowTr
            session="The Cultural Playbook: Building Community and Leadership Through Art &amp; Culture"
            venue="Larsen"
            speakers="Sophia Pande | Sanjay Silwal Gupta | TBA | Anup Kaphle (M)"
          />
          <ScheduleRowTr time="1:30 PM" session="Panel I | Breakout II (TBA)" venue="Longfellow" />
          <ScheduleRowTr
            session="From Prediction to Wisdom: Human Decision-Making in the AI Era"
            venue="Larsen"
            speakers="Dr. Ashish Luitel | Sameer Maskey | Dr. Peter Q. Blair | Rupa Laxmi Shah (M)"
          />
          <ScheduleBannerRow>2:45 PM</ScheduleBannerRow>
          <ScheduleRowTr
            session="Panel 3: Mobility and Connectivity"
            venue="Askwith"
            speakers="Michael Foley | David Sislen | TBA | Bibek Raj Kandel (M)"
          />
          <ScheduleRowTr
            time="4:00 – 5:00 PM"
            session="Poster Session and Community Hour"
            venue="Longfellow"
          />
        </ScheduleTableWrapper>

        <h3 className="itinerary-guide-h3">Sunday, April 26, 2026 — MIT</h3>
        <h4 className="itinerary-schedule-period">Morning</h4>
        <ScheduleTableWrapper caption="Sunday 26 April 2026 — MIT — morning sessions">
          <ScheduleRowTr time="8:00 AM" session="Breakfast" venue="MIT" />
          <ScheduleRowTr
            time="9:00 AM"
            session="Panel 4 | Fireside chat: AI and the Future of Workforce"
            venue="MIT"
            speakers="Prominent leader from the Government of Nepal, moderated by Dr. Peter Q. Blair"
          />
          <ScheduleRowTr
            session="Next Gen Leadership: Navigating Multipolarity and Strategic Autonomy"
            venue="MIT"
            speakers="Pukar Malla | Pukar Bam | Raksha Bam | Semanta Dahal | Ang Sonam Sherpa (M)"
          />
          <ScheduleBannerRow>9:45 AM — Parallel sessions</ScheduleBannerRow>
          <ParallelRows
            time="9:45 AM"
            rows={[
              {
                session:
                  'The Trust Deficit: Leading Institutions in the Age of Digital Mobilization and Dissent',
                venue: 'MIT',
                speakers: 'Ashish Luitel | Sanjay Silwal | Sharad Aryan | Hitesh Hathi (M)',
              },
              {
                session: 'Nepal and Emerging Industries',
                venue: 'MIT',
                speakers: 'Saurav Sangai | Nischal Baskota | Mohit Gupta | Shuvangi Rana (M)',
              },
            ]}
          />
          <ScheduleBannerRow>Breakouts</ScheduleBannerRow>
          <ScheduleRowTr
            time="11:00 AM"
            session="Panel 5: Designing Nepal&apos;s AI Skills Strategy"
            venue="MIT"
            speakers="Dr. Sanjay Manandhar | Biswas Dhakal | Rumee Singh | Swastika Shakya | Dipta Shah (M)"
          />
        </ScheduleTableWrapper>

        <h4 className="itinerary-schedule-period">Afternoon</h4>
        <ScheduleTableWrapper caption="Sunday 26 April 2026 — MIT — afternoon sessions">
          <ScheduleRowTr time="12:15 PM" session="Lunch" venue="MIT" />
          <ScheduleRowTr
            session="Remittance Plus Economy"
            venue="MIT"
            speakers="Rahul Agrawal | Bhawani Rana | Subash Sapkota | Hemraj Dhakal | TBA (M)"
          />
          <ScheduleBannerRow>1:00 PM — Parallel sessions</ScheduleBannerRow>
          <ParallelRows
            time="1:00 PM"
            rows={[
              {
                session: 'Diaspora, Migration, and Representation',
                venue: 'MIT',
                speakers: 'Mahendra Pandey | Nischal Baskota | Samjhana Gurung | Dadhiram Bhandari',
              },
              {
                session: 'Health and Wellbeing',
                venue: 'MIT',
                speakers: 'Bijay Acharya | Padmashree Gehl Sampath | TBA | Dr. Ramu Kharel (M)',
              },
            ]}
          />
          <ScheduleRowTr
            time="2:25 PM"
            session="Closing fireside conversation with the keynote speaker"
            venue="MIT"
            speakers="Prominent leader from the Government of Nepal, moderated by David Sislen"
          />
          <ScheduleRowTr
            time="3:15 – 4:00 PM"
            session="Strategic Foresight 2035 Design and Closing Commitments"
            venue="MIT"
          />
        </ScheduleTableWrapper>
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
        <p className="itinerary-aaa-muted">
          These listings are suggestions only, not endorsements.
        </p>

        <h3 className="itinerary-guide-h3">Hotels</h3>
        <ul className="itinerary-accommodation-ul" aria-label="Suggested hotels">
        <AccommodationLi
          name="AC Hotel by Marriott (2.6 miles)"
          lines={['10 Acorn Park Drive', 'Cambridge, MA 02140', 'Phone: 617-876-6190', 'Fax: 617-876-6191']}
        />
        <AccommodationLi
          name="Cambria Hotel Boston – Somerville (~2 miles)"
          lines={[
            '515 Somerville Avenue',
            'Somerville, MA 02143',
            'Phone: 617-341-9040',
            'Harvard discount available.',
          ]}
        />
        <AccommodationLi
          name="Sheraton Commander Hotel (closest to HGSE)"
          lines={[
            '16 Garden Street',
            'Cambridge, MA 02138',
            'Main: 617-547-4800 · Fax: 617-868-8322',
            'Reservations: 800-535-5007',
            'Email: sales@sheratoncommander.com',
          ]}
        />
        <AccommodationLi
          name="The Charles Hotel (walking distance)"
          lines={['One Bennett Street', 'Cambridge, MA 02138', '617-864-1200 · 617-864-5715']}
        />
        <AccommodationLi
          name="DoubleTree Suites by Hilton Hotel (1.7 miles)"
          lines={[
            '400 Soldiers Field Road',
            'Boston, MA 02134',
            'Phone: 617-783-0090 · Fax: 617-783-0897',
            'Free scheduled shuttle service available.',
          ]}
        />
        <AccommodationLi
          name="Fairmont Copley Plaza (4.1 miles)"
          lines={['138 St. James Avenue', 'Boston, MA 02116', '617-267-5300']}
        />
        <AccommodationLi
          name="The Freepoint Hotel (1.6 miles)"
          lines={['220 Alewife Brook Parkway', 'Cambridge, MA 02140', 'Phone: 617-491-8000']}
        />
        <AccommodationLi
          name="Harvard Square Hotel (walking distance)"
          lines={['110 Mt. Auburn Street', 'Cambridge, MA 02138', '617-864-5200 · 617-864-2409']}
        />
        <AccommodationLi
          name="Holiday Inn Express Hotel &amp; Suites (2.8 miles)"
          lines={[
            '250 Monsignor O&apos;Brien Highway',
            'Cambridge, MA 02141',
            'Phone: 617-577-7600 · Fax: 617-354-1313',
            'Ask for the Harvard University discount.',
          ]}
        />
        <AccommodationLi
          name="Homewood Suites by Hilton (2.4 miles)"
          lines={[
            '1 Massachusetts Avenue',
            'Arlington, MA 02474',
            'Phone: 781-643-7258',
            'Take the 77 bus to Massachusetts Avenue.',
          ]}
        />
        <AccommodationLi
          name="The Hotel Veritas (1.4 miles)"
          lines={['One Remington Street', 'Cambridge, MA 02138', 'Phone: 617-520-5000']}
        />
        </ul>

        <h3 className="itinerary-guide-h3">Bed and breakfasts</h3>
        <ul className="itinerary-accommodation-ul" aria-label="Suggested bed and breakfast inns">
        <AccommodationLi
          name="A Friendly Inn at Harvard (walking distance)"
          lines={[
            '1673 Cambridge Street',
            'Cambridge, MA 02138',
            'Phone: 617-547-7851 · Fax: 617-547-0202',
          ]}
        />
        <AccommodationLi
          name="A Bed &amp; Breakfast in Cambridge (walking distance)"
          lines={[
            '1657 Cambridge Street #3',
            'Cambridge, MA 02138-4316',
            '617-868-7082 or 800-795-7122',
          ]}
        />
        <AccommodationLi
          name="Irving House at Harvard (walking distance)"
          lines={[
            '24 Irving Street',
            'Cambridge, MA 02138',
            'Phone: 617-547-4600 · Fax: 617-576-2814',
          ]}
        />
        <AccommodationLi
          name="The Mary Prentiss Inn (1.5 miles, bus or subway)"
          lines={[
            '6 Prentiss Street',
            'Cambridge, MA 02140',
            'Phone: 617-661-2929 · Fax: 617-661-5989',
          ]}
        />
        <AccommodationLi
          name="A Cambridge House (1.8 miles from HGSE, bus)"
          lines={[
            '2218 Massachusetts Avenue',
            'Cambridge, MA 02140',
            '617-491-6300 · 800-232-9989 · Fax: 617-868-2848',
          ]}
        />
        </ul>
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
            className="apply-story-link itinerary-aaa-link"
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
          Below are the same reference illustrations from page 8 of the onboarding guide (Harvard
          area and MIT), followed by tap-to-open directions for each venue. Use{' '}
          <strong>Google Maps</strong> or <strong>Apple Maps</strong>—on a phone, they usually
          hand off to the installed maps app. Additional full-page maps (Boston subway, Harvard
          campus, MIT campus) are in the PDF download at the end of this section.
        </p>

        <div
          className="itinerary-onboarding-maps-grid"
          role="group"
          aria-label="Reference map illustrations from the onboarding guide, page 8"
        >
          <figure className="itinerary-onboarding-map-figure">
            <img
              src={ONBOARDING_PAGE8_MAP_1}
              alt="3D-style aerial map of the Harvard area in Cambridge, Massachusetts. Colored pins mark Harvard Square, Larsen Hall, Askwith Hall at Longfellow Hall, the Longfellow Hall entrance from Radcliffe Yard, and Cambridge Common. Garden Street, Brattle Street, green space at Cambridge Common, campus buildings, and the Charles River toward the northeast are visible."
              width={1212}
              height={757}
              loading="lazy"
              decoding="async"
            />
            <figcaption className="itinerary-onboarding-map-caption">
              Harvard and Cambridge reference · onboarding guide page 8 · map 1 of 2
            </figcaption>
          </figure>
          <figure className="itinerary-onboarding-map-figure">
            <img
              src={ONBOARDING_PAGE8_MAP_2}
              alt="MIT campus map centered on Building 45 (labeled N4), Schwarzman College of Computing. A location panel shows the street address 51 Vassar Street, Cambridge, and notes facilities there including the dean's office, Schwarzman College, MIT Quest for Intelligence, IBM Watson, the Center for Computational Science and Engineering, an MIT ID card printing kiosk, and a lactation room. Adjacent text mentions trained volunteers and professional security for the conference."
              width={622}
              height={471}
              loading="lazy"
              decoding="async"
            />
            <figcaption className="itinerary-onboarding-map-caption">
              MIT reference · onboarding guide page 8 · map 2 of 2
            </figcaption>
          </figure>
        </div>

        <div
          className="itinerary-wayfinding-day"
          role="region"
          aria-label="Harvard and Cambridge venues, Saturday"
        >
          <h3 className="itinerary-wayfinding-day-heading">Saturday — Harvard and Cambridge</h3>
          <div className="itinerary-wayfinding-stack">
            <WayfindingPlace
              title="Harvard Square"
              mapSearch="Harvard Square, Cambridge, MA"
            >
              <p>
                Central square beside the Harvard campus; nearby transit, dining, and the walk toward
                Harvard Graduate School of Education venues.
              </p>
            </WayfindingPlace>
            <WayfindingPlace title="Larsen Hall" mapSearch="Larsen Hall, 14 Appian Way, Cambridge, MA">
              <p>
                Harvard Graduate School of Education building used for conference programming. Near
                Radcliffe Yard and Longfellow Hall.
              </p>
            </WayfindingPlace>
            <WayfindingPlace
              title="Askwith Hall (Longfellow Hall)"
              mapSearch="Askwith Hall, Longfellow Hall, 13 Appian Way, Cambridge, MA"
            >
              <p>
                Session space inside Longfellow Hall at HGSE. Address is often listed as 13 Appian
                Way.
              </p>
            </WayfindingPlace>
            <WayfindingPlace
              title="Longfellow Hall entrance from Radcliffe Yard"
              mapSearch="Longfellow Hall, Radcliffe Yard, Harvard University, Cambridge, MA"
            >
              <p>
                Pedestrian approach from Radcliffe Yard to Longfellow Hall—useful if you are
                navigating from the Yard side of campus.
              </p>
            </WayfindingPlace>
            <WayfindingPlace title="Cambridge Common" mapSearch="Cambridge Common, Cambridge, MA">
              <p>Large public green west of Harvard Square, a nearby landmark for orientation.</p>
            </WayfindingPlace>
          </div>
        </div>

        <div className="itinerary-wayfinding-day" role="region" aria-label="MIT venue, Sunday">
          <h3 className="itinerary-wayfinding-day-heading">Sunday — MIT</h3>
          <div className="itinerary-wayfinding-stack">
            <WayfindingPlace
              title="Schwarzman College of Computing (Building 45)"
              mapSearch="Schwarzman College of Computing, 51 Vassar Street, Cambridge, MA 02139"
            >
              <p>
                MIT Building 45. Street address: 51 Vassar Street, Cambridge, MA 02139. The
                building hosts the dean&apos;s office, Schwarzman College spaces, related computing
                programs, an MIT ID card kiosk, and other facilities—use campus signage and the MIT
                map for room numbers.
              </p>
            </WayfindingPlace>
          </div>
        </div>

        <p>Campus map tools and transit:</p>
        <ul className="itinerary-maps-links">
          <li>
            <a
              href="https://www.mbta.com/maps"
              target="_blank"
              rel="noopener noreferrer"
              className="apply-story-link itinerary-aaa-link"
            >
              MBTA subway and transit maps
              <NewTabAuxiliary />
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
              className="apply-story-link itinerary-aaa-link"
            >
              Harvard campus map
              <NewTabAuxiliary />
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
              className="apply-story-link itinerary-aaa-link"
            >
              MIT campus map (Where Is MIT)
              <NewTabAuxiliary />
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
            className="apply-story-link apply-onboarding-download-link itinerary-aaa-link"
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

function ScheduleTableWrapper({ caption, children }: { caption: string; children: ReactNode }) {
  const captionId = useId();
  return (
    <div
      className="itinerary-table-scroll"
      role="region"
      aria-labelledby={captionId}
      tabIndex={0}
    >
      <table className="itinerary-schedule-table">
        <caption id={captionId} className="itinerary-schedule-caption">
          {caption}
        </caption>
        <thead>
          <tr>
            <th scope="col">Time</th>
            <th scope="col">Session</th>
            <th scope="col">Venue</th>
            <th scope="col">Speakers and moderators</th>
          </tr>
        </thead>
        <tbody>{children}</tbody>
      </table>
    </div>
  );
}

function ScheduleBannerRow({ children }: { children: ReactNode }) {
  return (
    <tr className="itinerary-schedule-tr itinerary-schedule-tr--banner">
      <th scope="colgroup" colSpan={4}>
        {children}
      </th>
    </tr>
  );
}

function ScheduleRowTr({
  time,
  session,
  venue,
  speakers,
}: {
  time?: string;
  session: string;
  venue: string;
  speakers?: string | null;
}) {
  return (
    <tr className="itinerary-schedule-tr">
      <td className="itinerary-schedule-cell itinerary-schedule-cell--time">
        {time ? time : <span aria-label="Time bundled with preceding block">—</span>}
      </td>
      <th scope="row" className="itinerary-schedule-cell itinerary-schedule-cell--session">
        {session}
      </th>
      <td className="itinerary-schedule-cell">{venue}</td>
      <td className="itinerary-schedule-cell">{speakers ?? '—'}</td>
    </tr>
  );
}

function ParallelRows({
  time,
  rows,
}: {
  time: string;
  rows: { session: string; venue: string; speakers: string }[];
}) {
  return (
    <>
      {rows.map((row, i) => (
        <tr key={`${row.session}-${i}`} className="itinerary-schedule-tr">
          <td className="itinerary-schedule-cell itinerary-schedule-cell--time">{time}</td>
          <th scope="row" className="itinerary-schedule-cell itinerary-schedule-cell--session">
            {row.session}
          </th>
          <td className="itinerary-schedule-cell">{row.venue}</td>
          <td className="itinerary-schedule-cell">{row.speakers}</td>
        </tr>
      ))}
    </>
  );
}

function AccommodationLi({ name, lines }: { name: string; lines: string[] }) {
  return (
    <li className="itinerary-accommodation">
      <div className="itinerary-accommodation-name">{name}</div>
      {lines.map((line, i) => (
        <div key={`${name}-${i}`} className="itinerary-accommodation-line">
          {line}
        </div>
      ))}
    </li>
  );
}
