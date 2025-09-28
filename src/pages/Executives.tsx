import { Label } from "@/components/ui/label";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import ExecutiveMembers from "@/features/Executives/ExecutiveMembers";
import {
  executiveMembers2024_25,
  executiveMembers2025_26,
} from "@/features/Executives/members";

export default function Executives() {
  return (
    <section className="w-full h-full p-7">
      <div className="block w-full h-full">
        <Label className="text-3xl">AKCSE McGill Executives</Label>
        <Tabs defaultValue="2025-2026" className="w-full">
          <div className="w-full h-full">
            <TabsList className="flex w-full md:w-1/5 my-1 mb-10">
              <TabsTrigger value="2025-2026">2025–2026</TabsTrigger>
              <TabsTrigger value="2024-2025">2024–2025</TabsTrigger>
            </TabsList>

            <TabsContent value="2024-2025">
              <ExecutiveMembers executives={executiveMembers2024_25} />
            </TabsContent>
            <TabsContent value="2025-2026">
              <ExecutiveMembers executives={executiveMembers2025_26} />
            </TabsContent>
          </div>
        </Tabs>
      </div>
    </section>
  );
}
