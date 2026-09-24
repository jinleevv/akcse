import { ArrowUpRight, CalendarDays } from "lucide-react";
import PhotoCount from "@/components/PhotoCount";
import { Dialog, DialogContent, DialogDescription, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import type { EventsDetails } from "./TimelineYear";

type EventCardProps = { event: EventsDetails; title: string };

export default function EventCard({ event, title }: EventCardProps) {
  const photos = [event.image1, event.image2, event.image3].filter((photo): photo is string => Boolean(photo));

  return (
    <Dialog>
      <article className="event-card">
        <DialogTrigger asChild>
          <button className="event-card-trigger" aria-label={`Explore ${title}`}>
            <div className="event-card-photo">
              {photos[0] && <img src={photos[0]} alt={`${title} at AKCSE`} loading="lazy" />}
              <PhotoCount count={photos.length} className="absolute bottom-3 right-3" />
            </div>
            <div className="event-card-copy">
              <p className="event-card-date"><CalendarDays size={15} aria-hidden="true" /> {event.date}</p>
              <h3>{title}</h3>
              <p className="event-card-description">{event.description}</p>
              <div className="event-card-footer"><span>Explore event</span><span className="event-card-arrow"><ArrowUpRight size={20} aria-hidden="true" /></span></div>
            </div>
          </button>
        </DialogTrigger>
      </article>
      <DialogContent className="event-detail">
        <div className="event-detail-heading">
          <p className="events-eyebrow">AKCSE McGill · Our events</p>
          <DialogTitle>{title}</DialogTitle>
          <p className="event-card-date"><CalendarDays size={16} aria-hidden="true" /> {event.date}</p>
        </div>
        <DialogDescription className="event-detail-description">{event.description}</DialogDescription>
        {event.registrationForm && <div className="event-detail-registration">
          <a className="events-primary-link" href={event.registrationForm} target="_blank" rel="noopener noreferrer">Registration form <ArrowUpRight size={17} aria-hidden="true" /><span className="sr-only"> (opens in a new tab)</span></a>
          {event.deadline && <p>Registration deadline: {event.deadline}</p>}
        </div>}
        {photos.length > 0 && <div className="event-detail-gallery">{photos.map((photo, index) => <img key={photo} src={photo} alt={`${title} — photo ${index + 1}`} loading="lazy" />)}</div>}
      </DialogContent>
    </Dialog>
  );
}
