import { motion } from "framer-motion";
import type { ReactNode } from "react";
import { useReducedMotion } from "../../hooks/useReducedMotion";

interface RevealProps {
  children: ReactNode;
}

/**
 * Las secciones entran (fade + rise) y salen (vuelven al estado inicial)
 * con el scroll. Nunca desmonta el DOM: anclas, scroll-spy y find-in-page
 * siguen funcionando.
 */
export function Reveal({ children }: RevealProps): ReactNode {
  const reduced = useReducedMotion();
  if (reduced) return <>{children}</>;
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ amount: 0.25, once: false }}
      transition={{ duration: 0.45, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  );
}
