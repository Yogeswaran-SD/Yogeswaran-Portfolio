"use client";

import { useEffect, useState } from "react";

interface TypewriterOptions {
  roles: string[];
  typingSpeed?: number;
  erasingSpeed?: number;
  pauseAfterType?: number;
}

export function useTypewriter({
  roles,
  typingSpeed = 70,
  erasingSpeed = 40,
  pauseAfterType = 1800,
}: TypewriterOptions) {
  const [displayed, setDisplayed] = useState("");
  const [roleIndex, setRoleIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isErasing, setIsErasing] = useState(false);

  useEffect(() => {
    const currentRole = roles[roleIndex];

    if (!isErasing && charIndex < currentRole.length) {
      // Typing
      const timeout = setTimeout(() => {
        setDisplayed(currentRole.slice(0, charIndex + 1));
        setCharIndex((c) => c + 1);
      }, typingSpeed);
      return () => clearTimeout(timeout);
    }

    if (!isErasing && charIndex === currentRole.length) {
      // Finished typing — pause then start erasing
      const timeout = setTimeout(() => setIsErasing(true), pauseAfterType);
      return () => clearTimeout(timeout);
    }

    if (isErasing && charIndex > 0) {
      // Erasing
      const timeout = setTimeout(() => {
        setDisplayed(currentRole.slice(0, charIndex - 1));
        setCharIndex((c) => c - 1);
      }, erasingSpeed);
      return () => clearTimeout(timeout);
    }

    if (isErasing && charIndex === 0) {
      // Move to next role
      setIsErasing(false);
      setRoleIndex((r) => (r + 1) % roles.length);
    }
  }, [charIndex, isErasing, roleIndex, roles, typingSpeed, erasingSpeed, pauseAfterType]);

  return displayed;
}
