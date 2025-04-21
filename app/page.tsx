"use client";

import { motion } from "framer-motion";
import Navbar from "@/components/ui/navbar/navbar";
import Introduction from "@/components/ui/introduction/introduction";
import StarryBackground from "@/components/ui/starry-background/stars";
import TechStack from "@/components/ui/techstack/tech-stack";
import Developments from "@/components/ui/developments/developments";
import Freelance from "@/components/ui/freelance-profile/freelance";

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

export default function Home() {
  return (
    <main className="relative w-full min-h-screen overflow-hidden">
      <StarryBackground />

      <div className="relative z-10">
        {/* Entry Animation */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5 }}
        >
          <Navbar />
        </motion.div>

        {/* Scroll-based Section Animations */}
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.2 }}
        >
          <Introduction />
        </motion.div>

        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.2 }}
        >
          <TechStack />
        </motion.div>

        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.2 }}
        >
          <Developments />
        </motion.div>
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.2 }}
        >
          <Freelance />
        </motion.div>
      </div>
    </main>
  );
}
