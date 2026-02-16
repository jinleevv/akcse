import { type Executive } from "./members";
import { MemberCard } from "./MemberCard";
import { motion } from "framer-motion";

type ExecutiveMembersProps = { executives: Executive[] };

export default function ExecutiveMembers({
  executives,
}: ExecutiveMembersProps) {
  // Flatten the executives grouping to render a single uniform grid
  // while preserving the order defined in the config.
  const allMembers = executives.flatMap((role) =>
    role.names.map((name) => {
      const firstName = name.split(" ")[0].toLowerCase();
      const info = role.info[firstName];
      const images = role.images[name] || [];
      
      return {
        name,
        roleIcon: role.icon,
        roleLabel: role.label,
        info,
        images,
      };
    })
  );

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.2, ease: "easeOut" }}
      className="w-full py-4"
    >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 auto-rows-fr">
            {allMembers.map((member) => {
                if (!member.info) return null;
                return (
                    <MemberCard
                        key={member.name}
                        name={member.name}
                        roleIcon={member.roleIcon}
                        roleLabel={member.roleLabel}
                        info={member.info}
                        images={member.images}
                    />
                );
            })}
        </div>
    </motion.div>
  );
}
