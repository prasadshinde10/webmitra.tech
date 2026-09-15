'use client';

import { useEffect, useState } from 'react';
import { Canvas } from '@react-three/fiber';
import { Preload } from '@react-three/drei';
import AbstractEnvironment from './AbstractEnvironment';

export default function GlobalCanvas() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return <div className="fixed top-0 left-0 w-full h-full -z-10 bg-[#ffffff]" />;
  }

  return (
    <div className="fixed top-0 left-0 w-full h-full -z-10 pointer-events-none">
      <Canvas
        camera={{ position: [0, 0, 5], fov: 45 }}
        dpr={[1, 2]}
        gl={{ antialias: false, alpha: false, powerPreference: 'high-performance' }}
      >
        <color attach="background" args={['#fafafa']} />
        <AbstractEnvironment />
        <Preload all />
      </Canvas>
    </div>
  );
}
