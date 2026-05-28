import { motion, useMotionValue, useTransform, useMotionTemplate } from "framer-motion";
import { useEffect } from "react";

// Animation Variants for Orchestration
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 40, filter: "blur(10px)" },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { type: "spring", stiffness: 100, damping: 20 },
  },
};

const wordVariants = {
  hidden: { opacity: 0, scale: 0.8, filter: "blur(4px)" },
  visible: {
    opacity: 1,
    scale: 1,
    filter: "blur(0px)",
    transition: { type: "spring", stiffness: 200, damping: 15 },
  },
};

const App = () => {
  // Mouse coordinates for reactive background & mechanics
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  useEffect(() => {
    const handleMouseMove = (e) => {
      const { clientX, clientY } = e;
      mouseX.set(clientX);
      mouseY.set(clientY);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [mouseX, mouseY]);

  // Map mouse positions into complex ambient gradient movements
  const backgroundStyle = useMotionTemplate`
    radial-gradient(400px circle at ${mouseX}px ${mouseY}px, rgba(124, 58, 237, 0.15), transparent 80%),
    radial-gradient(600px circle at ${mouseX}px ${mouseY}px, rgba(6, 182, 212, 0.1), transparent 80%)
  `;

  return (
    <main className="relative min-h-screen overflow-hidden bg-[#030014] text-white selection:bg-cyan-500/30">
      
      {/* =====================================================
          MECHANIC GRAPHICS & BACKGROUND SYSTEM
      ===================================================== */}
      {/* Reactive Ambient Pointer Tracking Overlay */}
      <motion.div 
        className="pointer-events-none absolute inset-0 z-10" 
        style={{ background: backgroundStyle }} 
      />

      {/* Cybernetic Tech Grid and Static Radial Glow */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1f29370a_1px,transparent_1px),linear-gradient(to_bottom,#1f29370a_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)]" />
      
      <div className="absolute inset-0 overflow-hidden">
        {/* Deep background organic pulsing structures */}
        <motion.div
          animate={{
            scale: [1, 1.15, 1],
            x: [0, 40, 0],
            y: [0, -30, 0],
          }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -left-20 -top-20 h-[35rem] w-[35rem] rounded-full bg-violet-600/20 blur-[140px]"
        />
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            x: [0, -50, 0],
            y: [0, 40, 0],
          }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -right-20 -bottom-20 h-[40rem] w-[40rem] rounded-full bg-cyan-500/15 blur-[160px]"
        />
      </div>

      {/* =====================================================
          HERO CONTENT SECTION
      ===================================================== */}
      <section className="relative z-20 flex min-h-screen items-center justify-center px-6">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="mx-auto flex max-w-7xl flex-col items-center text-center"
        >
          {/* INTERACTIVE SMALL TAG */}
          <motion.div
            variants={itemVariants}
            whileHover={{ scale: 1.05 }}
            className="group mb-8 cursor-pointer rounded-full border border-white/10 bg-white/5 px-6 py-2 backdrop-blur-xl transition-colors duration-300 hover:border-violet-500/40 hover:bg-violet-500/5"
          >
            <p className="flex items-center gap-2 text-xs font-medium tracking-[0.25em] text-gray-300 uppercase">
              <span className="inline-block h-2 w-2 animate-pulse rounded-full bg-cyan-400 shadow-[0_0_8px_#22d3ee]" />
              AI • FULL STACK • PRODUCT ENGINEERING
            </p>
          </motion.div>

          {/* MAIN HEADING WITH STAGGERED REVEAL MECHANIC */}
          <motion.h1
            variants={itemVariants}
            className="max-w-5xl text-5xl font-black tracking-tight uppercase leading-[1.1] md:text-7xl lg:text-8xl"
          >
            Building{" "}
            <span className="relative inline-block overflow-hidden">
              <motion.span
                className="bg-gradient-to-r from-violet-400 via-fuchsia-400 to-cyan-400 bg-clip-text text-transparent"
                animate={{
                  bgPosition: ["0% 50%", "100% 50%", "0% 50%"],
                }}
                transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
                style={{ backgroundSize: "200% auto" }}
              >
                Future-Ready
              </motion.span>
            </span>{" "}
            Digital Experiences
          </motion.h1>

          {/* SYSTEM DESCRIPTION SPLIT ANIMATION */}
          <motion.p
            variants={itemVariants}
            className="mt-8 max-w-3xl text-balance text-lg font-light leading-relaxed text-slate-400 md:text-xl"
          >
            {"I design and develop premium AI-powered web experiences with modern frontend engineering, cinematic interactions, and scalable systems."
              .split(" ")
              .map((word, index) => (
                <motion.span
                  key={index}
                  variants={wordVariants}
                  className="inline-block mr-1.5 hover:text-white transition-colors duration-200"
                >
                  {word}
                </motion.span>
              ))}
          </motion.p>

          {/* =====================================================
              HIGH-RESPONSE ACTION SYSTEM (BUTTONS)
          ===================================================== */}
          <motion.div
            variants={itemVariants}
            className="mt-14 flex flex-wrap items-center justify-center gap-6"
          >
            {/* MECHANICAL NEON PRIMARY BUTTON */}
            <motion.button
              whileHover={{ scale: 1.05, y: -4 }}
              whileTap={{ scale: 0.98 }}
              className="relative group overflow-hidden rounded-full p-[2px] transition-all duration-300"
            >
              {/* Rotating background mechanism */}
              <div className="absolute inset-0 animate-[spin_4s_linear_infinite] bg-gradient-to-r from-violet-600 via-cyan-400 to-violet-600 opacity-80 group-hover:opacity-100" />
              
              <div className="relative rounded-full bg-[#030014] px-8 py-4 transition-all duration-300 group-hover:bg-transparent">
                <span className="relative z-10 flex items-center gap-2 text-sm font-bold tracking-wide text-white">
                  View Projects
                  <motion.span
                    animate={{ x: [0, 5, 0] }}
                    transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
                  >
                    →
                  </motion.span>
                </span>
              </div>
              
              {/* Interactive Projection Glow */}
              <div className="absolute inset-0 -z-10 rounded-full bg-gradient-to-r from-violet-600 to-cyan-500 blur-xl opacity-40 group-hover:opacity-80 transition-opacity duration-300" />
            </motion.button>

            {/* CYBER GLASS SECONDARY BUTTON */}
            <motion.button
              whileHover={{ scale: 1.05, y: -4 }}
              whileTap={{ scale: 0.98 }}
              className="group relative overflow-hidden rounded-full border border-white/10 bg-white/5 px-8 py-4 backdrop-blur-xl transition-all duration-300 hover:border-white/20 hover:bg-white/10 shadow-[0_4px_30px_rgba(0,0,0,0.1)]"
            >
              {/* Internal subtle laser slide bar */}
              <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/10 to-transparent group-hover:animate-[shimmer_1.5s_infinite]" />
              
              <span className="text-sm font-semibold tracking-wide text-white transition-colors duration-300 group-hover:text-cyan-400">
                Download Resume
              </span>
            </motion.button>
          </motion.div>

        </motion.div>
      </section>

      {/* Global CSS Inject for specific high-performance animation mechanisms */}
      <style>{`
        @keyframes shimmer {
          100% { transform: translateX(100%); }
        }
      `}</style>
    </main>
  );
};

export default App;