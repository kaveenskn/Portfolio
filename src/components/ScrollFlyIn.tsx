import type { ReactNode } from 'react';
import { motion, useReducedMotion } from 'framer-motion';

type FlyDirection = 'up' | 'down' | 'left' | 'right';

type ScrollFlyInProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
  duration?: number;
  distance?: number;
  direction?: FlyDirection;
  amount?: number;
};

export const ScrollFlyIn = ({
  children,
  className,
  delay = 0,
  duration = 0.5,
  distance = 42,
  direction = 'up',
  amount = 0.25
}: ScrollFlyInProps) => {
  const prefersReducedMotion = useReducedMotion();

  const axis = {
    x: direction === 'left' ? distance : direction === 'right' ? -distance : 0,
    y: direction === 'up' ? distance : direction === 'down' ? -distance : 0
  };

  const hiddenState = prefersReducedMotion
    ? { opacity: 0 }
    : {
        opacity: 0,
        x: axis.x,
        y: axis.y
      };

  const visibleState = prefersReducedMotion
    ? { opacity: 1 }
    : {
        opacity: 1,
        x: 0,
        y: 0
      };

  return (
    <motion.div
      className={className}
      style={{ willChange: 'transform, opacity', transform: 'translateZ(0)' }}
      initial={hiddenState}
      whileInView={visibleState}
      viewport={{ once: false, amount }}
      transition={{
        duration: prefersReducedMotion ? 0.2 : duration,
        delay,
        type: 'tween',
        ease: [0.22, 1, 0.36, 1]
      }}
    >
      {children}
    </motion.div>
  );
};
