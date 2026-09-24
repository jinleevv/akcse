import { ArrowDown, ArrowUpRight, Sparkles } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import EventCard from "@/features/Events/EventCard";
import { eventsByYear } from "@/features/Events/events-data";
import "./Events.css";

const years = (Object.keys(eventsByYear) as (keyof typeof eventsByYear)[]).reverse();

export default function Events() {
  return (
    <div className="events-page">
      <header className="events-page-heading events-container">
        <h1>AKCSE McGill Events</h1>
      </header>
      <section className="events-hero events-container" aria-labelledby="events-tagline">
        <div className="events-hero-copy">
          <p className="events-eyebrow"><span /> AKCSE McGill · Life beyond the classroom</p>
          <h2 id="events-tagline">Have fun.<br />Learn a lot.<br /><span>Make great memories.</span></h2>
          <p className="events-intro">Meet your people, try something new, and make your McGill years unforgettable. There’s a little something for everyone.</p>
          <a className="events-primary-link" href="#explore-events">Explore our events <ArrowDown size={18} aria-hidden="true" /></a>
          <div className="events-hero-note"><Sparkles size={17} aria-hidden="true" /> A community to learn, connect, and grow with.</div>
        </div>
        <div className="events-hero-photos">
          <figure className="events-main-photo">
            <img src="/activities/20252026/ot/image2.webp" alt="Students coming together at AKCSE McGill’s Orientation Night" fetchPriority="high" />
            <figcaption><span className="events-photo-dot" /> New faces. Instant connections.</figcaption>
          </figure>
          <figure className="events-small-photo">
            <img src="/activities/20242025/Ideathon/image2.webp" alt="A moment from the AKCSE Ideathon" />
            <figcaption>Ideas start here <ArrowUpRight size={16} aria-hidden="true" /></figcaption>
          </figure>
        </div>
      </section>
      <section id="explore-events" className="events-archive events-container" aria-labelledby="events-archive-title">
        <Tabs defaultValue={years[0]}>
          <div className="events-archive-heading">
            <div>
              <p className="events-eyebrow">The moments that bring us together</p>
              <h2 id="events-archive-title">A year of <span>possibilities.</span></h2>
              <p>From first hellos to your next big idea. Explore it all.</p>
            </div>
            <TabsList className="events-year-tabs" aria-label="Academic year">
              {years.map((year) => <TabsTrigger key={year} value={year}>{year.replace("-", "–")}</TabsTrigger>)}
            </TabsList>
          </div>
          {years.map((year) => (
            <TabsContent key={year} value={year}>
              <div className="events-collection-label"><span>{year.replace("-", " / ")} collection</span><span>{Object.keys(eventsByYear[year]).length} events to explore</span></div>
              <div className="events-grid">
                {Object.entries(eventsByYear[year]).map(([key, event]) => <EventCard key={key} event={event} title={key} />)}
              </div>
            </TabsContent>
          ))}
        </Tabs>
        <div className="events-community">
          <div><p className="events-eyebrow">Your next memory starts here</p><h2>Come for an event.<br />Stay for the community.</h2></div>
          <a className="events-primary-link" href="https://www.instagram.com/akcse_mcgill/" target="_blank" rel="noopener noreferrer">Follow us on Instagram <ArrowUpRight size={19} aria-hidden="true" /><span className="sr-only"> (opens in a new tab)</span></a>
          <Sparkles className="events-community-spark" size={100} aria-hidden="true" />
        </div>
      </section>
    </div>
  );
}
