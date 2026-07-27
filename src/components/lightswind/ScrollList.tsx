import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

export interface ScrollListProps<T> {
  data: T[];
  renderItem: (item: T, index: number) => React.ReactNode;
  itemHeight?: number;
  className?: string;
}

function ScrollListItem({ children }: { children: React.ReactNode }) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 90%", "center center"]
  });

  const scale = useTransform(scrollYProgress, [0, 1], [0.95, 1]);
  const opacity = useTransform(scrollYProgress, [0, 1], [0.3, 1]);

  return (
    <motion.div ref={ref} style={{ scale, opacity }} className="w-full">
      {children}
    </motion.div>
  );
}

export default function ScrollList<T>({ data, renderItem, itemHeight = 160, className = '' }: ScrollListProps<T>) {
  return (
    <div className={`w-full max-w-7xl mx-auto flex flex-col gap-6 sm:gap-8 ${className}`}>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 w-full">
        {data.map((item, index) => (
          <ScrollListItem key={index}>
            {renderItem(item, index)}
          </ScrollListItem>
        ))}
      </div>
    </div>
  );
}
