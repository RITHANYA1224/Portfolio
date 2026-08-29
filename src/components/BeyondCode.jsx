import React from 'react';
import { motion } from 'framer-motion';
import { Presentation, MessageSquare, Users, Sparkles, Brain } from 'lucide-react';
import { beyondCode } from '../data/portfolioData';

const iconMap = {
  Presentation: Presentation,
  MessageSquare: MessageSquare,
  Users: Users,
  Sparkles: Sparkles,
  Brain: Brain
};

const BeyondCode = () => {
  return (
    <div className="mt-16 pt-12 border-t theme-border">
      <div className="text-left mb-8">
        <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-[#F3ECFB] dark:bg-[#C4ACF8]/15 border border-[#DACAF2] dark:border-[#C4ACF8]/30 text-[#6848A0] dark:text-[#C4ACF8] font-mono-tag text-xs font-bold uppercase tracking-widest mb-2">
          <Brain size={14} />
          <span>COMMUNICATION & COLLABORATION</span>
        </div>
        <h3 className="text-2xl sm:text-3xl font-bold font-heading theme-heading">
          Beyond Code
        </h3>
        <p className="theme-muted text-sm mt-1 max-w-2xl">
          Technical competence combined with effective communication, presentation clarity, and collaborative teamwork.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {beyondCode.map((item, idx) => {
          const IconComponent = iconMap[item.iconName] || Sparkles;
          return (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              className="editorial-card p-6 rounded-3xl space-y-3 relative group shadow-sm hover:border-[#DACAF2] dark:hover:border-[#C4ACF8]/40 transition-all"
            >
              <div className="flex items-start justify-between">
                <div className="p-3 rounded-2xl bg-[#F3ECFB] dark:bg-[#C4ACF8]/15 text-[#6848A0] dark:text-[#C4ACF8] border border-[#DACAF2] dark:border-[#C4ACF8]/30 group-hover:scale-110 transition-transform">
                  <IconComponent size={20} />
                </div>
                <span className="text-[10px] font-mono-tag uppercase font-bold px-3 py-1 rounded-full bg-[#EAF4ED] dark:bg-[#9DD8B0]/15 text-[#325A41] dark:text-[#9DD8B0] border border-[#C4E2CC] dark:border-[#9DD8B0]/30">
                  Strength 0{idx + 1}
                </span>
              </div>

              <div>
                <h4 className="text-lg font-bold font-heading theme-heading">
                  {item.title}
                </h4>
                <p className="text-xs font-bold text-[#6848A0] dark:text-[#C4ACF8] mt-0.5">
                  {item.subtitle}
                </p>
              </div>

              <p className="theme-muted text-xs leading-relaxed">
                {item.desc}
              </p>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};

export default BeyondCode;
