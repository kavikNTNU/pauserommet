import { motion } from "framer-motion";
import { TreePine, Smartphone, Brain } from "lucide-react";

const pillars = [
  {
    icon: TreePine,
    title: "Natureksponering",
    subtitle: "Tid ute, type natur, aktivitet",
    description:
      "Timer i skogen, fjellturer, bading i kaldt vann — alt logges. Hvor mye natur trenger kroppen egentlig for å kjenne forskjell?",
    metric: "Timer/dag ute",
  },
  {
    icon: Smartphone,
    title: "Digital detox",
    subtitle: "Skjermfri tid & bevissthet",
    description:
      "Dager uten mobil, perioder offline. Hva skjer med oppmerksomhet, kreativitet og tilstedeværelse når støyen forsvinner?",
    metric: "Dager offline",
  },
  {
    icon: Brain,
    title: "Humør & energi",
    subtitle: "Stemningsleie, søvn, mestring",
    description:
      "Daglige scorer på lykke, energi, søvnkvalitet og mestringsfølelse. Over tid tegner det seg mønstre som overrasker.",
    metric: "Daglig score",
  },
];

const PillarsSection = () => {
  return (
    <section className="py-24 md:py-36 bg-earth text-earth-foreground">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <p className="text-sm tracking-[0.25em] uppercase text-golden-soft font-body mb-4">
            Tre søyler
          </p>
          <h2 className="text-3xl md:text-5xl font-display font-bold">
            Hva som måles
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 md:gap-8">
          {pillars.map((pillar, i) => (
            <motion.div
              key={pillar.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: i * 0.15 }}
              className="group relative bg-earth-foreground/5 border border-earth-foreground/10 rounded-lg p-8 hover:bg-earth-foreground/10 transition-colors duration-500"
            >
              <div className="w-12 h-12 rounded-full bg-moss/20 flex items-center justify-center mb-6">
                <pillar.icon className="w-5 h-5 text-golden" />
              </div>

              <h3 className="text-xl font-display font-bold mb-1">
                {pillar.title}
              </h3>
              <p className="text-sm text-golden-soft/70 font-body mb-4">
                {pillar.subtitle}
              </p>
              <p className="text-earth-foreground/70 font-body text-sm leading-relaxed mb-6">
                {pillar.description}
              </p>

              <div className="pt-4 border-t border-earth-foreground/10">
                <span className="text-xs tracking-[0.2em] uppercase text-moss-light font-body">
                  {pillar.metric}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PillarsSection;
