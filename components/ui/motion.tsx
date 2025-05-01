"use client";

import React from "react";

type MotionProps = {
  children: React.ReactNode;
  initial?: Record<string, any>;
  animate?: Record<string, any>;
  exit?: Record<string, any>;
  transition?: Record<string, any>;
  className?: string;
  onClick?: () => void;
};

export const Motion = ({ 
  children, 
  className = "", 
  initial = {}, 
  animate = {}, 
  exit = {},
  transition = {},
  ...props
}: MotionProps) => {
  return (
    <div className={className} {...props}>
      {children}
    </div>
  );
};

type SpringProps = {
  children: React.ReactNode;
  delay?: number;
  className?: string;
};

export const Spring = ({ children, delay = 0, className = "" }: SpringProps) => {
  return (
    <div
      className={`transition-all duration-700 ease-out ${className}`}
      style={{ 
        transitionDelay: `${delay}ms`,
      }}
    >
      {children}
    </div>
  );
};