import { motion } from "framer-motion";
import heroImage from "@/assets/hero-nature.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-end overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Person standing on mountain ridge overlooking a Norwegian fjord valley"
          className="h-full w-full object-cover"
          width={1920}
          height={1080}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-earth/90 via-earth/40 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 pb-20 pt-40 md:pb-28">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="font-body text-sm md:text-base tracking-[0.3em] uppercase text-golden-soft mb-4"
        >
          Et personlig eksperiment
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="text-5xl md:text-7xl lg:text-8xl font-display font-bold text-earth-foreground leading-[0.95] mb-6"
        >
          Pause
          <span className="italic text-gradient-golden">rommet</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="max-w-lg text-lg md:text-xl font-body text-cream/80 leading-relaxed"
        >
          Jakten på lykkerusen. Ett år med natur, stillhet og selvoppdagelse 
          — dokumentert som et åpent eksperiment.
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.2 }}
          className="mt-12 flex items-center gap-3 text-cream/50 font-body text-sm"
        >
          <div className="w-8 h-px bg-golden/50" />
          <span>Scroll for å utforske</span>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
