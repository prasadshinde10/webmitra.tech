'use client';

import { useEffect, useState } from 'react';
import { Canvas } from '@react-three/fiber';
import { Preload } from '@react-three/drei';
import { useTheme } from 'next-themes';
import AntigravityScene from './AntigravityScene';

export default function GlobalCanvas() {
  const [mounted, setMounted] = useState(false);
  const { theme, resolvedTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return <div className="fixed top-0 left-0 w-full h-full -z-10 bg-background" />;
  }

  const isDark = (resolvedTheme || theme) === 'dark';

  return (
    <div className="fixed top-0 left-0 w-full h-full -z-10 pointer-events-none transition-colors duration-500">
      <Canvas
        camera={{ position: [0, 0, 5], fov: 45 }}
        dpr={[1, 2]}
        gl={{ antialias: true, alpha: false, powerPreference: 'high-performance' }}
      >
        <color attach="background" args={[isDark ? '#020617' : '#fafafa']} />
        <AntigravityScene isDark={isDark} />
        <Preload all />
      </Canvas>
    </div>
  );
}
