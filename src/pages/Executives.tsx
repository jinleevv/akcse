import { Label } from "@/components/ui/label";
import ComingSoon from "@/components/ComingSoon";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import ExecutiveMembers from "@/features/Executives/ExecutiveMembers";
import { executiveMembersByYear } from "@/features/Executives/members";

const years = (Object.keys(executiveMembersByYear) as (keyof typeof executiveMembersByYear)[]).sort().reverse();

export default function Executives() {
  return (
    <section className="w-full h-full p-7">
      <div className="block w-full h-full">
        <Label className="text-3xl">AKCSE McGill Executives</Label>
        <Tabs defaultValue={years[0]} className="w-full">
          <div className="w-full h-full">
            <TabsList
              aria-label="Executive academic year"
              className="my-1 mb-4 grid h-11 w-full max-w-sm grid-cols-3"
            >
              {years.map((year) => (
                <TabsTrigger key={year} value={year} className="min-w-0 px-1 text-xs sm:text-sm">
                  {year.replace("-", "–")}
                </TabsTrigger>
              ))}
            </TabsList>

            {years.map((year) => (
              <TabsContent key={year} value={year}>
                {executiveMembersByYear[year].length > 0 ? (
                  <ExecutiveMembers executives={executiveMembersByYear[year]} />
                ) : (
                  <ComingSoon
                    title={`${year.replace("-", "–")} executive team`}
                    description="Our executive team will be announced here. Check back for updates!"
                  />
                )}
              </TabsContent>
            ))}
          </div>
        </Tabs>
      </div>
    </section>
  );
}
