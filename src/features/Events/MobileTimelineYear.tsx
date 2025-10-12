import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { AnimationOnScroll } from "react-animation-on-scroll";
import { Label } from "@/components/ui/label";
import type { EventsDetails } from "./TimelineYear";

type Props = { events: Record<string, EventsDetails> };

export default function MobileTimelineYear({ events }: Props) {
  if (!events || !Object.keys(events).length) return null;

  return (
    <section className="mt-3">
      <VerticalTimeline lineColor="black">
        {Object.keys(events).map((eventKey) => {
          const event = events[eventKey];
          return (
            <AnimationOnScroll key={eventKey} animateIn="fadeInRight">
              <VerticalTimelineElement
                date={event.date}
                iconStyle={{ background: "#F5F5DC", color: "#000000" }}
                className="vertical-timeline-element"
                style={{ marginBottom: "60px" }}
                icon={<img src={event.icon} alt="" />}
              >
                <h3 className="vertical-timeline-element-title font-bold">
                  {event.event}
                </h3>

                {event.registrationForm ? (
                  <a
                    href={event.registrationForm}
                    className="underline text-xs"
                  >
                    <Label>Registration Link</Label>
                  </a>
                ) : null}

                <p>{event.description}</p>

                <div className="grid grid-cols-2 mt-3 gap-1 h-44 w-full overflow-hidden">
                  <img
                    src={event.image2}
                    alt=""
                    className="object-cover rounded-lg w-full h-full"
                  />
                  <img
                    src={event.image3}
                    alt=""
                    className="object-cover rounded-lg w-full h-full"
                  />
                </div>
              </VerticalTimelineElement>
            </AnimationOnScroll>
          );
        })}
      </VerticalTimeline>
    </section>
  );
}
