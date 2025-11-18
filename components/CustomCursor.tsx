
import React, { useEffect, useRef, useState } from 'react';

const CustomCursor: React.FC = () => {
  const cursorRef = useRef<HTMLDivElement>(null);
  const cursorOutlineRef = useRef<HTMLDivElement>(null);
  const [hovering, setHovering] = useState(false);
  
  // Use refs for position to avoid re-renders on every mouse move
  const mousePos = useRef({ x: 0, y: 0 });
  const outlinePos = useRef({ x: 0, y: 0 });
  const requestRef = useRef<number>();

  useEffect(() => {
    const onMouseMove = (e: MouseEvent) => {
      mousePos.current = { x: e.clientX, y: e.clientY };
      
      // Immediate update for inner dot
      if (cursorRef.current) {
        cursorRef.current.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`;
      }
    };
    
    const animateOutline = () => {
      // Linear interpolation (Lerp) for smooth trailing effect
      const dx = mousePos.current.x - outlinePos.current.x;
      const dy = mousePos.current.y - outlinePos.current.y;
      
      outlinePos.current.x += dx * 0.15; // Adjust speed factor (0.1 - 0.2 is good)
      outlinePos.current.y += dy * 0.15;
      
      if (cursorOutlineRef.current) {
        cursorOutlineRef.current.style.transform = `translate(${outlinePos.current.x}px, ${outlinePos.current.y}px)`;
      }
      
      requestRef.current = requestAnimationFrame(animateOutline);
    };
    
    const onMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      // Check if target is clickable
      const isClickable = 
        target.tagName === 'A' || 
        target.tagName === 'BUTTON' || 
        target.closest('a') || 
        target.closest('button') ||
        target.tagName === 'INPUT' ||
        target.tagName === 'TEXTAREA' ||
        window.getComputedStyle(target).cursor === 'pointer';
        
      setHovering(!!isClickable);
    };

    window.addEventListener('mousemove', onMouseMove);
    window.addEventListener('mouseover', onMouseOver);
    requestRef.current = requestAnimationFrame(animateOutline);

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('mouseover', onMouseOver);
      if (requestRef.current) cancelAnimationFrame(requestRef.current);
    };
  }, []);

  return (
    <>
      {/* Only visible on desktop via CSS class, actual logic handled by layout display usually */}
      <div className="hidden md:block pointer-events-none fixed top-0 left-0 z-[9999] mix-blend-difference">
        
        {/* Inner Dot - Immediate Follower */}
        <div 
            ref={cursorRef}
            className="absolute top-0 left-0 w-2 h-2 bg-orange-500 rounded-full -translate-x-1/2 -translate-y-1/2 will-change-transform shadow-[0_0_10px_rgba(249,115,22,0.8)]"
        />
        
        {/* Outer Ring - Smooth Trailer */}
        <div 
            ref={cursorOutlineRef}
            className={`absolute top-0 left-0 -translate-x-1/2 -translate-y-1/2 rounded-full will-change-transform transition-all duration-300 ease-out border
                ${hovering 
                    ? 'w-14 h-14 bg-orange-500/20 border-orange-500/50 scale-100' 
                    : 'w-8 h-8 border-orange-500/30 scale-100'
                }
            `}
        />
      </div>
    </>
  );
};

export default CustomCursor;
