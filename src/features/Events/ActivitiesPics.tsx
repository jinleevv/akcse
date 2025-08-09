import { motion } from "framer-motion";

interface ActivityPicturesProps {
  image1: string;
  image2: string;
  image3: string;
  selectedEvent: string;
}

export default function ActivityPictures({
  image1,
  image2,
  image3,
  selectedEvent,
}: ActivityPicturesProps) {
  return (
    <>
      <div className="w-full h-52 lg:h-64">
        <motion.div
          key={selectedEvent}
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
          className="cursor-grab w-full h-52 lg:h-64"
        >
          <img
            src={image1}
            alt="AKCSE"
            width={500}
            height={500}
            className="object-cover rounded-lg w-full h-52 lg:h-64"
          />
        </motion.div>
      </div>
      <div className="flex mt-1.5 w-full h-32 lg:h-44 gap-1.5">
        <motion.div
          key={`${selectedEvent}-image2`} // Adding key to re-trigger animation
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2, duration: 0.4, ease: "easeOut" }}
          className="cursor-grab w-2/3 h-full"
        >
          <img
            src={image2}
            alt="AKCSE"
            width={500}
            height={500}
            className="object-cover rounded-lg w-full h-full"
          />
        </motion.div>
        <motion.div
          key={`${selectedEvent}-image3`} // Adding key to re-trigger animation
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3, duration: 0.4, ease: "easeOut" }}
          className="cursor-grab w-1/3 h-full"
        >
          <img
            src={image3}
            alt="AKCSE"
            width={200}
            height={200}
            className="object-cover rounded-lg w-full h-full"
          />
        </motion.div>
      </div>
    </>
  );
}
