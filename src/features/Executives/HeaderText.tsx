import { Label } from "@/components/ui/label";
import { motion } from "framer-motion";

export default function HearderText() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.2, ease: "easeOut" }}
    >
      <Label className="text-3xl">AKCSE McGill Executives</Label>
      <Label className="text-lg">Executive Members</Label>
    </motion.div>
  );
}
