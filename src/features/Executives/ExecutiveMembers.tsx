import { type Executive } from "./members";
import { LiaInstagram, LiaLinkedin, LiaGithub } from "react-icons/lia";
import { motion } from "framer-motion";
import { useMemo } from "react";

type ExecutiveMembersProps = { executives: Executive[] };

function groupSingles(executives: Executive[]) {
  const rows: Executive[][] = [];
  let i = 0;
  while (i < executives.length) {
    const curr = executives[i];
    const next = executives[i + 1];
    if (curr.names.length === 1 && next && next.names.length === 1) {
      rows.push([curr, next]); // pair two single-member roles
      i += 2;
    } else {
      rows.push([curr]); // alone in its own row
      i += 1;
    }
  }
  return rows;
}

export default function ExecutiveMembers({
  executives,
}: ExecutiveMembersProps) {
  const rows = useMemo(() => groupSingles(executives), [executives]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.2, ease: "easeOut" }}
      className="-mt-4 w-full flex flex-col space-y-10"
    >
      {rows.map((row, rowIdx) => (
        <div
          key={rowIdx}
          className={`grid grid-cols-1 gap-10 ${
            row.length === 2 ? "lg:grid-cols-2" : ""
          } items-stretch`}
        >
          {row.map((role) => {
            // members grid columns: up to 3 on large screens
            const memberCols =
              role.names.length >= 3
                ? "lg:grid-cols-3"
                : role.names.length === 2
                ? "lg:grid-cols-2"
                : "lg:grid-cols-1";

            return (
              <section key={role.label} className="w-full h-full">
                {/* Section heading */}
                <h2 className="flex items-center gap-3 text-2xl font-bold mb-4">
                  <span>{role.icon}</span>
                  <span>{role.label}</span>
                </h2>

                {/* Grid of people in this role */}
                <div
                  className={`grid grid-cols-1 ${memberCols} gap-8 w-full h-auto`}
                >
                  {role.names.map((fullName) => {
                    const firstName = fullName.split(" ")[0].toLowerCase();
                    const images: string[] = role.images[fullName] || [];
                    const info = role.info[firstName];
                    if (!info) return null;

                    return (
                      <div
                        key={fullName}
                        className="border rounded-2xl overflow-hidden flex flex-col p-2"
                      >
                        {/* Images */}
                        <div className="w-full aspect-[4/3]">
                          <div className="grid grid-cols-2 gap-1 w-full">
                            <img
                              src={images[0]}
                              alt="image"
                              className="object-cover rounded-lg w-full h-[400px]"
                            />
                            <img
                              src={images[1]}
                              alt="image"
                              className="object-cover rounded-lg w-full h-[400px]"
                            />
                          </div>
                        </div>

                        {/* Text */}
                        <div className="mt-4 flex-1 flex flex-col">
                          <span className="font-bold">{fullName}</span>
                          <span className="text-sm">Major: {info.major}</span>
                          <span className="text-sm">MBTI: {info.mbti}</span>
                          <p className="mt-2 mb-4 text-sm flex-1">
                            {info.intro}
                          </p>

                          {/* Social */}
                          <div className="mt-auto flex gap-2.5 justify-end">
                            <a
                              href={info.instagram}
                              target="_blank"
                              rel="noreferrer"
                            >
                              <LiaInstagram size={22} />
                            </a>
                            <a
                              href={info.linkedin}
                              target="_blank"
                              rel="noreferrer"
                            >
                              <LiaLinkedin size={22} />
                            </a>
                            {info.github && (
                              <a
                                href={info.github}
                                target="_blank"
                                rel="noreferrer"
                              >
                                <LiaGithub size={22} />
                              </a>
                            )}
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </section>
            );
          })}
        </div>
      ))}
    </motion.div>
  );
}
