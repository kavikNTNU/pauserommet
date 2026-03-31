import { motion } from "framer-motion";
import forestImage from "@/assets/forest-section.jpg";

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, delay: i * 0.15, ease: "easeOut" },
  }),
};

const ConceptSection = () => {
  return (
    <section className="py-24 md:py-36 bg-background">
      <div className="container mx-auto px-6">
        {/* Intro text */}
        <div className="max-w-3xl mx-auto text-center mb-20">
          <motion.p
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={0}
            className="text-sm tracking-[0.25em] uppercase text-moss-light font-body mb-4"
          >
            Hva er dette?
          </motion.p>
          <motion.h2
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={1}
            className="text-3xl md:text-5xl font-display font-bold text-foreground mb-8"
          >
            Ditt eget eksperiment <br />
            <span className="italic text-moss">i å leve langsommere</span>
          </motion.h2>
          <motion.p
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={2}
            className="text-lg text-muted-foreground leading-relaxed font-body"
          >
            Hva skjer når du bytter skjermtid med skogsturer? Når du lar kroppen 
            og sinnet få rom til å kjenne etter — virkelig kjenne etter? 
            Pauserommet er et selvdokumentert, ett-års eksperiment for å måle 
            hva naturen gjør med oss når vi gir den sjansen.
          </motion.p>
        </div>

        {/* Image + manifesto */}
        <div className="grid md:grid-cols-2 gap-8 md:gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative rounded-lg overflow-hidden"
          >
            <img
              src={forestImage}
              alt="Morgenslys gjennom en tåkete granskog"
              className="w-full h-80 md:h-[500px] object-cover"
              loading="lazy"
              width={1280}
              height={720}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-earth/30 to-transparent" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <blockquote className="border-l-2 border-golden pl-6 mb-8">
              <p className="text-xl md:text-2xl font-display italic text-foreground leading-relaxed">
                "Jeg bestemte meg for å bli mitt eget forskningsprosjekt — 
                og naturen ble laboratoriet."
              </p>
            </blockquote>

            <div className="space-y-4 font-body text-muted-foreground leading-relaxed">
              <p>
                Utbrent, overveldet, konstant tilkoblet. Kjent igjen? 
                Pauserommet starter der mange kjenner seg igjen — og dokumenterer 
                veien ut. Ikke med teori, men med reelle målinger og ærlige refleksjoner.
              </p>
              <p>
                Tenk på det som en personlig åpen kildekode: alt deles, slik at 
                du kan bruke det i ditt eget liv.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ConceptSection;
