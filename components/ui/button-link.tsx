"use client";

import Link from "next/link";
import { ReactNode } from "react";

interface ButtonLinkProps {
  href: string;
  children: ReactNode;
  className?: string;
  target?: string;
  rel?: string;
}

export function ButtonLink({ 
  href, 
  children, 
  className = "space-button inline-flex items-center justify-center gap-2", 
  target, 
  rel 
}: ButtonLinkProps) {
  return (
    <Link 
      href={href}
      className={className}
      target={target}
      rel={rel}
    >
      {children}
    </Link>
  );
} 