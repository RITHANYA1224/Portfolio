import React from 'react';
import { motion } from 'framer-motion';
import { Presentation, MessageSquare, Users, Sparkles, Brain } from 'lucide-react';
import { beyondCode } from '../data/portfolioData';

const iconMap = {
  Presentation: Presentation,
  MessageSquare: MessageSquare,
  Users: Users,
  Sparkles: Sparkles,
};

const BeyondCode = () => {
  return (
    <div className="mt-16 pt-12 border-t theme-border">
      <div className="text-left mb-8">
        <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-md bg-purple-500/10 border border-purple-500/20 text-purple-700 dark:text-purple-300 font-mono-tag text-xs font-semibold uppercase tracking-widest mb-2">
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
              className="editorial-card p-6 rounded-2xl space-y-3 relative group"
            >
              <div className="flex items-start justify-between">
                <div className="p-3 rounded-xl bg-purple-500/10 text-purple-600 dark:text-purple-300 border border-purple-500/20 group-hover:scale-110 transition-transform">
                  <IconComponent size={20} />
                </div>
                <span className="text-[10px] font-mono-tag uppercase px-2.5 py-1 rounded-full bg-slate-100 dark:bg-slate-800 theme-muted">
                  Strength 0{idx + 1}
                </span>
              </div>

              <div>
                <h4 className="text-lg font-bold font-heading theme-heading">
                  {item.title}
                </h4>
                <p className="text-xs font-semibold text-purple-600 dark:text-purple-400 mt-0.5">
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
