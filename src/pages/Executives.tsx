import ExecutiveMembers from "@/features/Executives/ExecutiveMembers";
import HearderText from "@/features/Executives/HeaderText";

export default function Executives() {
  return (
    <section className="p-7">
      <HearderText />
      <div className="mt-10">
        <ExecutiveMembers />
      </div>
    </section>
  );
}
