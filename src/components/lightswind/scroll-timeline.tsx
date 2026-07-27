import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { useTheme } from "../../context/ThemeContext";

export interface TimelineEvent {
  year: string;
  title: string;
  subtitle: string;
  description: string;
}

export interface ScrollTimelineProps {
  events: TimelineEvent[];
  title: string;
  subtitle: string;
  progressIndicator?: boolean;
  cardAlignment?: "alternating" | "left" | "right";
  revealAnimation?: "fade" | "slide";
}

export function ScrollTimeline({
  events,
  title,
  subtitle,
  progressIndicator = true,
  cardAlignment = "alternating"
}: ScrollTimelineProps) {
  const { activePalette } = useTheme();
  const containerRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"]
  });

  return (
    <div ref={containerRef} className="py-24 relative max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
      <div className="text-center mb-16 space-y-4">
        <h2 
          className="font-serif text-3xl sm:text-5xl font-light tracking-tight"
          style={{ color: activePalette.textPrimary }}
        >
          {title}
        </h2>
        <p 
          className="text-xs sm:text-sm font-light uppercase tracking-[0.2em]"
          style={{ color: activePalette.textSecondary }}
        >
          {subtitle}
        </p>
      </div>

      <div className="relative">
        {/* Center Line */}
        <div 
          className="absolute left-1/2 top-0 bottom-0 w-px -translate-x-1/2"
          style={{ backgroundColor: activePalette.borderMain }}
        />

        {/* Progress Line */}
        {progressIndicator && (
          <motion.div 
            className="absolute left-1/2 top-0 bottom-0 w-px -translate-x-1/2 origin-top"
            style={{ 
              backgroundColor: activePalette.accentGold,
              scaleY: scrollYProgress
            }}
          />
        )}

        <div className="space-y-24">
          {events.map((event, index) => {
            const isLeft = cardAlignment === "alternating" ? index % 2 === 0 : cardAlignment === "left";
            return (
              <TimelineItem 
                key={index} 
                event={event} 
                isLeft={isLeft} 
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}

function TimelineItem({ event, isLeft }: { event: TimelineEvent, isLeft: boolean }) {
  const { activePalette } = useTheme();
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 80%", "center center"]
  });

  const opacity = useTransform(scrollYProgress, [0, 1], [0, 1]);
  const y = useTransform(scrollYProgress, [0, 1], [50, 0]);

  return (
    <div ref={ref} className={`relative flex ${isLeft ? 'justify-start' : 'justify-end'} items-center w-full`}>
      {/* Timeline Dot */}
      <div 
        className="absolute left-1/2 top-1/2 w-4 h-4 rounded-full -translate-x-1/2 -translate-y-1/2 border-2 z-10"
        style={{ 
          backgroundColor: activePalette.bgMain,
          borderColor: activePalette.accentGold 
        }}
      />

      <motion.div 
        style={{ opacity, y }}
        className={`w-1/2 ${isLeft ? 'pr-12 lg:pr-24 text-right' : 'pl-12 lg:pl-24 text-left'}`}
      >
        <div 
          className="p-8 rounded-2xl border"
          style={{
            backgroundColor: activePalette.bgCard,
            borderColor: activePalette.borderMain
          }}
        >
          <span 
            className="text-2xl font-serif font-semibold mb-2 block"
            style={{ color: activePalette.accentGold }}
          >
            {event.year}
          </span>
          <h3 
            className="text-xl font-medium mb-1"
            style={{ color: activePalette.textPrimary }}
          >
            {event.title}
          </h3>
          <h4 
            className="text-xs uppercase tracking-widest font-semibold mb-4"
            style={{ color: activePalette.textSecondary }}
          >
            {event.subtitle}
          </h4>
          <p 
            className="text-sm font-light leading-relaxed"
            style={{ color: activePalette.textSecondary }}
          >
            {event.description}
          </p>
        </div>
      </motion.div>
    </div>
  );
}
