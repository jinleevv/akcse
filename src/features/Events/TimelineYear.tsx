import { useMemo, useState } from "react";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import ActivityPictures from "@/features/Events/ActivitiesPics";

export interface EventsDetails {
  event: string;
  date: string;
  description: string;
  image1: string;
  image2: string;
  image3: string;
  registrationForm: string;
  deadline: string;
  icon: string;
}

type TimelineYearProps = {
  events: Record<string, EventsDetails>;
  defaultEventKey?: string;
};

export default function TimelineYear({
  events,
  defaultEventKey,
}: TimelineYearProps) {
  const eventKeys = useMemo(() => Object.keys(events), [events]);
  const initialKey =
    defaultEventKey && events[defaultEventKey] ? defaultEventKey : eventKeys[0];
  const [selectedEvent, setSelectedEvent] = useState<string>(initialKey);

  if (!eventKeys.length) return null;

  // Split into odd/even indexes (0-based)
  const topRowKeys = eventKeys.filter((_, index) => index % 2 === 0);
  const bottomRowKeys = eventKeys.filter((_, index) => index % 2 === 1);

  return (
    <section>
      <div className="flex pt-16">
        <div className="w-full">
          {/* Row 1 - Odd indexes */}
          <div className="flex w-5/6 mx-auto rounded-lg justify-between flex-wrap gap-y-4">
            {topRowKeys.map((key) => (
              <div key={key} className="flex flex-col items-center">
                <Button
                  onClick={() => setSelectedEvent(key)}
                  variant="outline"
                  className={`shadow-lg ${
                    selectedEvent === key ? "border-red-600" : "border-black"
                  }`}
                >
                  {key}
                </Button>
                <div className="w-1 h-10 border-l-2 border-black rounded-lg m-auto" />
              </div>
            ))}
          </div>

          {/* Divider */}
          <div className="w-5/6 border-2 border-black mx-auto rounded-lg" />

          {/* Row 2 - Even indexes */}
          <div className="flex w-3/5 mx-auto rounded-lg justify-between flex-wrap gap-y-4">
            {bottomRowKeys.map((key) => (
              <div key={key} className="flex flex-col items-center">
                <div className="w-1 h-10 border-l-2 border-black rounded-lg m-auto" />
                <Button
                  onClick={() => setSelectedEvent(key)}
                  variant="outline"
                  className={`shadow-lg ${
                    selectedEvent === key ? "border-red-600" : "border-black"
                  }`}
                >
                  {key}
                </Button>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Details */}
      <div className="w-full h-full p-12">
        <div className="grid w-full">
          <Label className="text-3xl">{events[selectedEvent].event}</Label>
          <Label className="text-lg">{events[selectedEvent].date}</Label>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 w-full">
          <div className="mt-5">
            <Label className="text-md">
              {events[selectedEvent].description}
            </Label>

            {events[selectedEvent].registrationForm ? (
              <>
                <div className="flex gap-1 mt-6">
                  <Label className="font-bold">Registration Form:</Label>
                  <a
                    href={events[selectedEvent].registrationForm}
                    className="underline"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Label>Link</Label>
                  </a>
                </div>

                {events[selectedEvent].deadline ? (
                  <div className="flex gap-1 mt-2">
                    <Label className="font-bold">Registration Deadline:</Label>
                    <Label className="font-bold">
                      {events[selectedEvent].deadline}
                    </Label>
                  </div>
                ) : null}
              </>
            ) : null}
          </div>

          <div className="w-full h-full p-3 md:-mt-20">
            <ActivityPictures
              image1={events[selectedEvent].image1}
              image2={events[selectedEvent].image2}
              image3={events[selectedEvent].image3}
              selectedEvent={selectedEvent}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
