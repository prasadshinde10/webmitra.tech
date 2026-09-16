'use client';

import { useRef, useMemo } from 'react';
import { useFrame } from '@react-three/fiber';
import { Points, PointMaterial } from '@react-three/drei';
import * as THREE from 'three';

export default function AbstractEnvironment({ isDark = false }: { isDark?: boolean }) {
  const pointsRef = useRef<THREE.Points>(null);
  const accentPointsRef = useRef<THREE.Points>(null);

  // Generate dense particles
  const particleCount = 6500;
  const positions = useMemo(() => {
    const positions = new Float32Array(particleCount * 3);
    for (let i = 0; i < particleCount; i++) {
      const r = 4.2 * Math.cbrt(Math.random());
      const theta = Math.random() * 2 * Math.PI;
      const phi = Math.acos(2 * Math.random() - 1);
      
      positions[i * 3] = r * Math.sin(phi) * Math.cos(theta);
      positions[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta);
      positions[i * 3 + 2] = r * Math.cos(phi);
    }
    return positions;
  }, [particleCount]);

  // Generate accent particles (Crimson / Rose nodes)
  const accentCount = 1200;
  const accentPositions = useMemo(() => {
    const positions = new Float32Array(accentCount * 3);
    for (let i = 0; i < accentCount; i++) {
      const r = 3.8 * Math.cbrt(Math.random());
      const theta = Math.random() * 2 * Math.PI;
      const phi = Math.acos(2 * Math.random() - 1);
      
      positions[i * 3] = r * Math.sin(phi) * Math.cos(theta);
      positions[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta);
      positions[i * 3 + 2] = r * Math.cos(phi);
    }
    return positions;
  }, [accentCount]);

  useFrame((state) => {
    const time = state.clock.getElapsedTime();
    if (pointsRef.current) {
      pointsRef.current.rotation.y = time * 0.04;
      pointsRef.current.rotation.x = time * 0.015;
    }
    if (accentPointsRef.current) {
      accentPointsRef.current.rotation.y = -time * 0.06;
      accentPointsRef.current.rotation.z = time * 0.025;
    }
  });

  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      {/* Primary Particle Nodes */}
      <Points ref={pointsRef} positions={positions} stride={3} frustumCulled={false}>
        <PointMaterial
          transparent
          color={isDark ? '#e2e8f0' : '#1e293b'}
          size={isDark ? 0.028 : 0.034}
          sizeAttenuation={true}
          depthWrite={false}
          opacity={isDark ? 0.65 : 0.65}
          blending={isDark ? THREE.AdditiveBlending : THREE.NormalBlending}
        />
      </Points>

      {/* Crimson Accent Nodes */}
      <Points ref={accentPointsRef} positions={accentPositions} stride={3} frustumCulled={false}>
        <PointMaterial
          transparent
          color={isDark ? '#f43f5e' : '#e11d48'}
          size={isDark ? 0.035 : 0.038}
          sizeAttenuation={true}
          depthWrite={false}
          opacity={isDark ? 0.85 : 0.75}
          blending={isDark ? THREE.AdditiveBlending : THREE.NormalBlending}
        />
      </Points>
    </group>
  );
}
