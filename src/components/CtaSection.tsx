import { motion } from "framer-motion";

const CtaSection = () => {
  return (
    <section className="py-24 md:py-36 bg-earth text-earth-foreground">
      <div className="container mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-2xl mx-auto"
        >
          <h2 className="text-3xl md:text-5xl font-display font-bold mb-6">
            Bli med på <span className="italic text-gradient-golden">reisen</span>
          </h2>
          <p className="text-lg text-earth-foreground/70 font-body leading-relaxed mb-10">
            Følg eksperimentet, les refleksjonene, og kanskje — start ditt eget 
            pauserom. Alt deles åpent.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-4 bg-golden text-earth font-body font-medium rounded-lg hover:bg-golden-soft transition-colors duration-300">
              Følg eksperimentet
            </button>
            <button className="px-8 py-4 border border-earth-foreground/20 text-earth-foreground font-body font-medium rounded-lg hover:bg-earth-foreground/5 transition-colors duration-300">
              Les mer om prosjektet
            </button>
          </div>

          <div className="mt-16 pt-8 border-t border-earth-foreground/10">
            <p className="text-sm text-earth-foreground/40 font-body">
              Pauserommet — et åpent eksperiment i psykisk helse og natur
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CtaSection;
