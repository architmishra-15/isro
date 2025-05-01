"use client";

import { motion } from "motion/react";
import { usePathname } from "next/navigation";
import { PropsWithChildren, useEffect, useState } from "react";

export default function PageTransition({ children }: PropsWithChildren) {
  const pathname = usePathname();
  const [isFirstRender, setIsFirstRender] = useState(true);
  
  useEffect(() => {
    setIsFirstRender(false);
  }, []);

  return (
    <motion.div
      key={pathname}
      initial={isFirstRender ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        type: "spring",
        stiffness: 100,
        damping: 15,
        mass: 1
      }}
    >
      {children}
    </motion.div>
  );
} 