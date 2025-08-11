import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import TimelineYear from "./TimelineYear";
import { events2024_25 } from "./events-data";

export default function Timeline() {
  return (
    <Tabs defaultValue="2024-2025" className="w-full">
      <div className="w-full h-full">
        <TabsList className="flex w-full md:w-1/5 my-1 ml-7">
          <TabsTrigger value="2024-2025">2024–2025</TabsTrigger>
          {/* <TabsTrigger value="2025-2026">2025–2026</TabsTrigger> */}
        </TabsList>

        <TabsContent value="2024-2025">
          <TimelineYear
            events={events2024_25}
            defaultEventKey="MTL Korean Youth Camp"
          />
        </TabsContent>

        {/* <TabsContent value="2025-2026">
          <TimelineYear
            events={events2025_26}
            defaultEventKey="Welcome Night 2025"
          />
        </TabsContent> */}
      </div>
    </Tabs>
  );
}
