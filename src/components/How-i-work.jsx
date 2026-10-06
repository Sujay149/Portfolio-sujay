import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Search, BookOpen, Settings, Activity, Send } from 'lucide-react';

const steps = [
  {
    icon: Search,
    title: 'Discovery & Research',
    desc: 'I analyze your requirements, workflows, and goals to identify the best technical approach.',
  },
  {
    icon: BookOpen,
    title: 'Architecture Blueprint',
    desc: "I design a detailed architecture and tech stack aligned with your project's KPIs.",
  },
  {
    icon: Settings,
    title: 'Build & Integration',
    desc: 'I implement the solution using modern frameworks and integrate with your existing tools.',
  },
  {
    icon: Activity,
    title: 'Testing & Optimization',
    desc: 'Performance testing, data validation, refinement.',
  },
  {
    icon: Send,
    title: 'Deployment & Scaling',
    desc: 'Launch, monitor, and continuously optimize for growth.',
  },
];

const IconTile = ({ Icon, active, size = 'lg' }) => (
  <div
    className={`flex items-center justify-center shrink-0 transition-all duration-300 ${
      size === 'lg' ? 'w-14 h-14 rounded-2xl' : 'w-11 h-11 rounded-xl'
    } ${
      active
        ? 'bg-gradient-to-b from-gray-600 to-gray-900 text-white shadow-lg ring-1 ring-black/20 dark:from-gray-100 dark:to-gray-400 dark:text-black'
        : 'bg-gradient-to-b from-white to-gray-100 text-gray-900 shadow-[0_2px_10px_rgba(0,0,0,0.08)] ring-1 ring-black/5 dark:from-gray-800 dark:to-gray-900 dark:text-gray-100 dark:ring-white/5'
    }`}
  >
    <Icon size={size === 'lg' ? 24 : 20} strokeWidth={1.75} />
  </div>
);

const NumberBadge = ({ n, active }) => (
  <span
    className={`w-7 h-7 rounded-full flex items-center justify-center text-[10px] font-semibold transition-colors duration-300 ${
      active
        ? 'bg-white text-gray-900 shadow-sm dark:bg-gray-800 dark:text-white'
        : 'bg-gray-100 text-gray-500 dark:bg-gray-800 dark:text-gray-400'
    }`}
  >
    {String(n).padStart(2, '0')}
  </span>
);

const StepText = ({ step, align = 'left' }) => (
  <div className={align === 'right' ? 'text-right' : 'text-left'}>
    <h3 className="text-sm sm:text-base font-semibold text-black dark:text-white mb-1">
      {step.title}
    </h3>
    <p
      className={`text-xs sm:text-sm text-gray-500 dark:text-gray-400 leading-relaxed max-w-[17rem] ${
        align === 'right' ? 'ml-auto' : ''
      }`}
    >
      {step.desc}
    </p>
  </div>
);

const HowIWork = () => {
  const [active, setActive] = useState(0);

  return (
    <section id="approach" aria-labelledby="approach-title" className="relative overflow-hidden py-20" style={{ fontFamily: "'Inter', sans-serif" }}>
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        {/* Header — same style as My Achievements */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="mb-4 max-w-3xl"
        >
          <h2 id="approach-title" className="mb-4 text-4xl font-bold text-foreground md:text-5xl">
            My Approach
          </h2>
          <p className="text-lg font-medium text-gray-800 dark:text-gray-200">
            A proven process designed to transform complex ideas into scalable, production-ready
            applications — efficiently and strategically.
          </p>
        </motion.div>
        <div className="rounded-[2.5rem] bg-white dark:bg-gray-950 border border-gray-100 dark:border-gray-800 px-5 py-14 sm:px-10 lg:px-16 lg:py-20">

          {/* Timeline */}
          <div className="relative">
            {/* Center line (desktop) */}
            <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px -translate-x-1/2 bg-gradient-to-b from-transparent via-gray-200 to-transparent dark:via-gray-800" />

            <div className="space-y-2 md:space-y-3">
              {steps.map((step, i) => {
                const isActive = active === i;
                const iconLeft = i % 2 === 0;
                const Icon = step.icon;

                return (
                  <motion.div
                    key={step.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: i * 0.08 }}
                    viewport={{ once: true }}
                    onMouseEnter={() => setActive(i)}
                    onClick={() => setActive(i)}
                    className={`relative z-10 rounded-3xl px-4 sm:px-6 py-6 md:py-7 cursor-pointer transition-colors duration-300 ${
                      isActive ? 'bg-gray-100 dark:bg-gray-900' : 'bg-transparent'
                    }`}
                  >
                    {/* Desktop layout */}
                    <div className="hidden md:grid grid-cols-2 items-center">
                      {iconLeft ? (
                        <>
                          <div className="flex items-center justify-end gap-3 pr-10">
                            <IconTile Icon={Icon} active={isActive} />
                            <NumberBadge n={i + 1} active={isActive} />
                          </div>
                          <div className="pl-10">
                            <StepText step={step} align="left" />
                          </div>
                        </>
                      ) : (
                        <>
                          <div className="pr-10">
                            <StepText step={step} align="right" />
                          </div>
                          <div className="flex items-center gap-3 pl-10">
                            <NumberBadge n={i + 1} active={isActive} />
                            <IconTile Icon={Icon} active={isActive} />
                          </div>
                        </>
                      )}
                    </div>

                    {/* Center node (desktop) */}
                    {isActive ? (
                      <>
                        <div className="hidden md:block absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-20 w-6 h-6 rounded-full p-[2px] bg-gradient-to-br from-purple-400 via-pink-400 to-blue-400">
                          <div className="w-full h-full rounded-full bg-white dark:bg-gray-950 flex items-center justify-center">
                            <span className="w-1.5 h-1.5 rounded-full bg-gray-900 dark:bg-white" />
                          </div>
                        </div>
                        {/* Colored line segment under the active node */}
                        <div className="hidden md:block absolute left-1/2 -translate-x-1/2 top-[calc(50%+14px)] bottom-0 w-px bg-gradient-to-b from-purple-400 via-pink-400 to-transparent" />
                      </>
                    ) : (
                      <div className="hidden md:block absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-20 w-3.5 h-3.5 rounded-full border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-950" />
                    )}

                    {/* Mobile layout */}
                    <div className="md:hidden flex items-center gap-4">
                      <IconTile Icon={Icon} active={isActive} size="sm" />
                      <div className="flex-1 min-w-0">
                        <StepText step={step} align="left" />
                      </div>
                      <NumberBadge n={i + 1} active={isActive} />
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowIWork;