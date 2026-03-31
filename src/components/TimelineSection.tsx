import { motion } from "framer-motion";

const phases = [
  {
    phase: "01",
    title: "Grunnlinje",
    period: "Uke 1–4",
    description: "Kartlegge nåsituasjonen. Målinger av humør, skjermtid, søvn og natureksponering før endringer starter.",
  },
  {
    phase: "02",
    title: "Nedtrapping",
    period: "Måned 2–3",
    description: "Gradvis reduksjon av skjermtid. Øke natureksponering til 2+ timer daglig. Registrere kroppens respons.",
  },
  {
    phase: "03",
    title: "Full immersjon",
    period: "Måned 4–9",
    description: "Lengre perioder offline. Dypere naturopplevelser. Ukentlige refleksjoner og analyser av mønstre.",
  },
  {
    phase: "04",
    title: "Funn & deling",
    period: "Måned 10–12",
    description: "Sammenstille data, skrive om oppdagelser, dele historien. Hva lærte kroppen og sinnet?",
  },
];

const TimelineSection = () => {
  return (
    <section className="py-24 md:py-36 bg-secondary/50">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <p className="text-sm tracking-[0.25em] uppercase text-moss-light font-body mb-4">
            Reisen
          </p>
          <h2 className="text-3xl md:text-5xl font-display font-bold text-foreground">
            Ett år, fire faser
          </h2>
        </motion.div>

        <div className="max-w-3xl mx-auto relative">
          {/* Vertical line */}
          <div className="absolute left-6 md:left-8 top-0 bottom-0 w-px bg-border" />

          <div className="space-y-12">
            {phases.map((phase, i) => (
              <motion.div
                key={phase.phase}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.12 }}
                className="relative pl-16 md:pl-20"
              >
                {/* Dot */}
                <div className="absolute left-4 md:left-6 top-1 w-4 h-4 rounded-full bg-golden border-4 border-background" />

                <div className="flex items-baseline gap-4 mb-2">
                  <span className="text-xs tracking-[0.2em] uppercase text-moss-light font-body">
                    {phase.period}
                  </span>
                </div>
                <h3 className="text-xl md:text-2xl font-display font-bold text-foreground mb-2">
                  <span className="text-golden mr-2">{phase.phase}.</span>
                  {phase.title}
                </h3>
                <p className="text-muted-foreground font-body leading-relaxed">
                  {phase.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TimelineSection;
