'use client';

import { Canvas } from '@react-three/fiber';
import { Preload } from '@react-three/drei';
import AbstractEnvironment from './AbstractEnvironment';

export default function GlobalCanvas() {
  return (
    <div className="fixed top-0 left-0 w-full h-full -z-10 pointer-events-none">
      <Canvas
        camera={{ position: [0, 0, 5], fov: 45 }}
        dpr={typeof window !== 'undefined' ? Math.min(2, window.devicePixelRatio) : 1}
        gl={{ antialias: false, alpha: false }}
      >
        <color attach="background" args={['#0a0a0a']} />
        <AbstractEnvironment />
        <Preload all />
      </Canvas>
    </div>
  );
}
