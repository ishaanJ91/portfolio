import React, { useEffect, useRef } from "react";
import { ReactLenis } from "@studio-freight/react-lenis";
import gsap from "gsap";

interface SmoothScrollWrapperProps {
  children: React.ReactNode;
}

const SmoothScrollWrapper: React.FC<SmoothScrollWrapperProps> = ({
  children,
}) => {
  const lenisRef = useRef<{ lenis: any } | null>(null); // Explicitly type the reference

  useEffect(() => {
    function update(time: number) {
      if (lenisRef.current?.lenis) {
        lenisRef.current.lenis.raf(time * 300);
      }
    }

    gsap.ticker.add(update);

    return () => {
      gsap.ticker.remove(update);
      // Safely cleanup Lenis instance
      if (lenisRef.current?.lenis) {
        lenisRef.current.lenis.destroy();
      }
    };
  }, []);

  const lenisOptions = {
    duration: 1.2,
    easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    direction: "vertical",
    gestureDirection: "vertical",
    smooth: true,
    mouseMultiplier: 1,
    smoothTouch: false,
    touchMultiplier: 2,
    infinite: false,
  };

  return (
    <ReactLenis ref={lenisRef} root options={lenisOptions} autoRaf={false}>
      {children}
    </ReactLenis>
  );
};

export default SmoothScrollWrapper;
