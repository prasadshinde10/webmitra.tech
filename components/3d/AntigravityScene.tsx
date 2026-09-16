'use client';

import React, { useRef, useMemo } from 'react';
import { useFrame } from '@react-three/fiber';
import { Points, PointMaterial } from '@react-three/drei';
import * as THREE from 'three';

interface AntigravitySceneProps {
  isDark?: boolean;
}

// Procedural Canvas Texture for Floating Code Panels
function createCodeCanvasTexture(title: string, lines: string[], isDark: boolean): THREE.CanvasTexture {
  if (typeof document === 'undefined') {
    return new THREE.CanvasTexture({} as HTMLCanvasElement);
  }

  const canvas = document.createElement('canvas');
  canvas.width = 512;
  canvas.height = 256;
  const ctx = canvas.getContext('2d');

  if (ctx) {
    // Background with glassmorphic look
    ctx.fillStyle = isDark ? 'rgba(8, 15, 30, 0.88)' : 'rgba(245, 248, 255, 0.92)';
    ctx.roundRect(0, 0, 512, 256, 24);
    ctx.fill();

    // Border
    ctx.lineWidth = 3;
    ctx.strokeStyle = isDark ? 'rgba(0, 242, 254, 0.45)' : 'rgba(79, 172, 254, 0.55)';
    ctx.stroke();

    // Header bar
    ctx.fillStyle = isDark ? 'rgba(15, 23, 42, 0.8)' : 'rgba(226, 232, 240, 0.8)';
    ctx.beginPath();
    ctx.roundRect(0, 0, 512, 44, [24, 24, 0, 0]);
    ctx.fill();

    // Window control dots
    ctx.fillStyle = '#ff5f56';
    ctx.beginPath(); ctx.arc(32, 22, 6, 0, Math.PI * 2); ctx.fill();
    ctx.fillStyle = '#ffbd2e';
    ctx.beginPath(); ctx.arc(52, 22, 6, 0, Math.PI * 2); ctx.fill();
    ctx.fillStyle = '#27c93f';
    ctx.beginPath(); ctx.arc(72, 22, 6, 0, Math.PI * 2); ctx.fill();

    // Title text
    ctx.fillStyle = isDark ? '#94a3b8' : '#475569';
    ctx.font = 'bold 15px monospace';
    ctx.fillText(title, 98, 28);

    // Code lines
    ctx.font = '16px monospace';
    let y = 80;
    lines.forEach((line) => {
      if (line.startsWith('//') || line.startsWith('#')) {
        ctx.fillStyle = isDark ? '#64748b' : '#94a3b8';
      } else if (line.includes('const') || line.includes('import') || line.includes('return') || line.includes('async')) {
        ctx.fillStyle = '#00f2fe';
      } else if (line.includes('class') || line.includes('function') || line.includes('await')) {
        ctx.fillStyle = '#4facfe';
      } else if (line.includes('true') || line.includes('200') || line.includes('99.99%')) {
        ctx.fillStyle = '#10b981';
      } else {
        ctx.fillStyle = isDark ? '#e2e8f0' : '#1e293b';
      }
      ctx.fillText(line, 28, y);
      y += 32;
    });
  }

  const texture = new THREE.CanvasTexture(canvas);
  texture.needsUpdate = true;
  return texture;
}

// Individual Floating Node with Sinusoidal Physics & Random Rotation
function FloatingGeometricNode({
  position,
  scale = 1,
  type = 'octahedron',
  speed = 1,
  amplitude = 0.15,
  offset = 0,
  isDark = true,
}: {
  position: [number, number, number];
  scale?: number;
  type?: 'octahedron' | 'icosahedron' | 'dodecahedron' | 'torus';
  speed?: number;
  amplitude?: number;
  offset?: number;
  isDark?: boolean;
}) {
  const meshRef = useRef<THREE.Group>(null);
  const basePos = useRef(position);

  useFrame((state) => {
    if (!meshRef.current) return;
    const t = state.clock.getElapsedTime() * speed + offset;

    // Sinusoidal floating bobbing
    meshRef.current.position.y = basePos.current[1] + Math.sin(t) * amplitude;
    meshRef.current.position.x = basePos.current[0] + Math.cos(t * 0.7) * (amplitude * 0.5);

    // Continuous multi-axis rotation
    meshRef.current.rotation.x += 0.006 * speed;
    meshRef.current.rotation.y += 0.009 * speed;
    meshRef.current.rotation.z += 0.004 * speed;
  });

  const cyanColor = '#00f2fe';
  const indigoColor = '#4facfe';

  return (
    <group ref={meshRef} position={position} scale={scale}>
      {type === 'octahedron' && (
        <>
          <mesh>
            <octahedronGeometry args={[0.9, 0]} />
            <meshStandardMaterial
              color={isDark ? '#09152e' : '#e0f2fe'}
              emissive={isDark ? cyanColor : indigoColor}
              emissiveIntensity={isDark ? 0.35 : 0.15}
              roughness={0.2}
              metalness={0.8}
              wireframe={false}
            />
          </mesh>
          <mesh scale={1.04}>
            <octahedronGeometry args={[0.9, 0]} />
            <meshBasicMaterial
              color={cyanColor}
              wireframe
              transparent
              opacity={isDark ? 0.8 : 0.6}
            />
          </mesh>
        </>
      )}

      {type === 'icosahedron' && (
        <>
          <mesh>
            <icosahedronGeometry args={[1, 0]} />
            <meshStandardMaterial
              color={isDark ? '#0f172a' : '#f0f9ff'}
              emissive={indigoColor}
              emissiveIntensity={isDark ? 0.4 : 0.2}
              roughness={0.15}
              metalness={0.9}
            />
          </mesh>
          <mesh scale={1.06}>
            <icosahedronGeometry args={[1, 1]} />
            <meshBasicMaterial
              color={cyanColor}
              wireframe
              transparent
              opacity={isDark ? 0.65 : 0.45}
            />
          </mesh>
        </>
      )}

      {type === 'dodecahedron' && (
        <>
          <mesh>
            <dodecahedronGeometry args={[0.85, 0]} />
            <meshStandardMaterial
              color={isDark ? '#030712' : '#e2e8f0'}
              emissive={cyanColor}
              emissiveIntensity={isDark ? 0.45 : 0.15}
              roughness={0.3}
              metalness={0.7}
            />
          </mesh>
          <mesh scale={1.05}>
            <dodecahedronGeometry args={[0.85, 0]} />
            <meshBasicMaterial
              color={indigoColor}
              wireframe
              transparent
              opacity={isDark ? 0.75 : 0.55}
            />
          </mesh>
        </>
      )}

      {type === 'torus' && (
        <mesh>
          <torusGeometry args={[1.2, 0.04, 16, 64]} />
          <meshStandardMaterial
            color={cyanColor}
            emissive={indigoColor}
            emissiveIntensity={0.6}
            roughness={0.2}
            metalness={0.9}
          />
        </mesh>
      )}
    </group>
  );
}

// Floating Translucent Glass Code Panel
function FloatingCodePanel({
  position,
  rotation,
  title,
  lines,
  speed = 0.8,
  amplitude = 0.12,
  offset = 0,
  isDark = true,
}: {
  position: [number, number, number];
  rotation: [number, number, number];
  title: string;
  lines: string[];
  speed?: number;
  amplitude?: number;
  offset?: number;
  isDark?: boolean;
}) {
  const panelRef = useRef<THREE.Group>(null);
  const basePos = useRef(position);
  const baseRot = useRef(rotation);

  const texture = useMemo(
    () => createCodeCanvasTexture(title, lines, isDark),
    [title, lines, isDark]
  );

  useFrame((state) => {
    if (!panelRef.current) return;
    const t = state.clock.getElapsedTime() * speed + offset;

    // Smooth sinusoidal bobbing
    panelRef.current.position.y = basePos.current[1] + Math.sin(t) * amplitude;
    panelRef.current.position.x = basePos.current[0] + Math.cos(t * 0.6) * (amplitude * 0.4);

    // Subtle breathing tilt
    panelRef.current.rotation.x = baseRot.current[0] + Math.sin(t * 0.5) * 0.04;
    panelRef.current.rotation.y = baseRot.current[1] + Math.cos(t * 0.4) * 0.04;
  });

  return (
    <group ref={panelRef} position={position} rotation={rotation}>
      <mesh>
        <planeGeometry args={[2.8, 1.4]} />
        <meshBasicMaterial
          map={texture}
          transparent
          opacity={isDark ? 0.92 : 0.95}
          side={THREE.DoubleSide}
          depthWrite={false}
        />
      </mesh>
      {/* Subtle glowing glass rim */}
      <mesh position={[0, 0, -0.01]}>
        <planeGeometry args={[2.84, 1.44]} />
        <meshBasicMaterial
          color={isDark ? '#00f2fe' : '#4facfe'}
          transparent
          opacity={isDark ? 0.25 : 0.15}
          side={THREE.DoubleSide}
          depthWrite={false}
        />
      </mesh>
    </group>
  );
}

// 70% Reduced Clean Minimal Cosmic Particle Field (~1,600 particles down from 7,700)
function MinimalParticleField({ isDark = true }: { isDark?: boolean }) {
  const primaryPointsRef = useRef<THREE.Points>(null);
  const accentPointsRef = useRef<THREE.Points>(null);

  // 1,300 Base Particles
  const primaryCount = 1300;
  const primaryPositions = useMemo(() => {
    const pos = new Float32Array(primaryCount * 3);
    for (let i = 0; i < primaryCount; i++) {
      const r = 5.5 * Math.cbrt(Math.random());
      const theta = Math.random() * 2 * Math.PI;
      const phi = Math.acos(2 * Math.random() - 1);

      pos[i * 3] = r * Math.sin(phi) * Math.cos(theta);
      pos[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta);
      pos[i * 3 + 2] = r * Math.cos(phi);
    }
    return pos;
  }, [primaryCount]);

  // 300 Cyan & Indigo Accent Nodes
  const accentCount = 300;
  const accentPositions = useMemo(() => {
    const pos = new Float32Array(accentCount * 3);
    for (let i = 0; i < accentCount; i++) {
      const r = 4.8 * Math.cbrt(Math.random());
      const theta = Math.random() * 2 * Math.PI;
      const phi = Math.acos(2 * Math.random() - 1);

      pos[i * 3] = r * Math.sin(phi) * Math.cos(theta);
      pos[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta);
      pos[i * 3 + 2] = r * Math.cos(phi);
    }
    return pos;
  }, [accentCount]);

  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    if (primaryPointsRef.current) {
      primaryPointsRef.current.rotation.y = t * 0.02;
      primaryPointsRef.current.rotation.x = t * 0.008;
    }
    if (accentPointsRef.current) {
      accentPointsRef.current.rotation.y = -t * 0.035;
      accentPointsRef.current.rotation.z = t * 0.012;
    }
  });

  return (
    <group rotation={[0, 0, Math.PI / 6]}>
      {/* Primary Clean Dust */}
      <Points ref={primaryPointsRef} positions={primaryPositions} stride={3} frustumCulled={false}>
        <PointMaterial
          transparent
          color={isDark ? '#cbd5e1' : '#64748b'}
          size={isDark ? 0.025 : 0.028}
          sizeAttenuation={true}
          depthWrite={false}
          opacity={isDark ? 0.5 : 0.45}
          blending={isDark ? THREE.AdditiveBlending : THREE.NormalBlending}
        />
      </Points>

      {/* Neon Cyan/Indigo Accent Nodes */}
      <Points ref={accentPointsRef} positions={accentPositions} stride={3} frustumCulled={false}>
        <PointMaterial
          transparent
          color={isDark ? '#00f2fe' : '#4facfe'}
          size={isDark ? 0.042 : 0.045}
          sizeAttenuation={true}
          depthWrite={false}
          opacity={isDark ? 0.85 : 0.7}
          blending={isDark ? THREE.AdditiveBlending : THREE.NormalBlending}
        />
      </Points>
    </group>
  );
}

// Master AntigravityScene Component
export default function AntigravityScene({ isDark = true }: AntigravitySceneProps) {
  const masterGroupRef = useRef<THREE.Group>(null);

  // Mouse parallax interaction lerping
  useFrame((state) => {
    if (!masterGroupRef.current) return;
    const { x, y } = state.pointer; // -1 to 1

    masterGroupRef.current.rotation.y = THREE.MathUtils.lerp(
      masterGroupRef.current.rotation.y,
      x * 0.18,
      0.04
    );
    masterGroupRef.current.rotation.x = THREE.MathUtils.lerp(
      masterGroupRef.current.rotation.x,
      -y * 0.12,
      0.04
    );
    masterGroupRef.current.position.x = THREE.MathUtils.lerp(
      masterGroupRef.current.position.x,
      x * 0.25,
      0.04
    );
    masterGroupRef.current.position.y = THREE.MathUtils.lerp(
      masterGroupRef.current.position.y,
      y * 0.2,
      0.04
    );
  });

  return (
    <>
      {/* Lighting: Neon Cyan & Indigo Point Gradients */}
      <ambientLight intensity={isDark ? 0.5 : 0.8} />
      <pointLight position={[-4.5, 3.5, 2.5]} color="#00f2fe" intensity={isDark ? 2.8 : 1.6} distance={15} />
      <pointLight position={[4.5, -3.2, 2.5]} color="#4facfe" intensity={isDark ? 2.8 : 1.6} distance={15} />
      <pointLight position={[0, -4.5, -1]} color="#f43f5e" intensity={isDark ? 1.2 : 0.6} distance={10} />
      <directionalLight position={[0, 6, 5]} intensity={isDark ? 0.6 : 1.2} />

      {/* Parallax Interactive Master Group */}
      <group ref={masterGroupRef}>
        {/* Floating Geometric Tech Nodes */}
        <FloatingGeometricNode
          position={[-2.8, 1.2, -1.2]}
          scale={0.8}
          type="octahedron"
          speed={0.8}
          amplitude={0.2}
          offset={0}
          isDark={isDark}
        />

        <FloatingGeometricNode
          position={[3.0, 1.4, -1.5]}
          scale={0.7}
          type="icosahedron"
          speed={0.9}
          amplitude={0.18}
          offset={1.5}
          isDark={isDark}
        />

        <FloatingGeometricNode
          position={[-3.2, -1.5, -1.0]}
          scale={0.65}
          type="dodecahedron"
          speed={0.7}
          amplitude={0.16}
          offset={3.0}
          isDark={isDark}
        />

        <FloatingGeometricNode
          position={[3.1, -1.2, -0.8]}
          scale={0.75}
          type="octahedron"
          speed={0.85}
          amplitude={0.22}
          offset={4.5}
          isDark={isDark}
        />

        <FloatingGeometricNode
          position={[-2.8, 1.2, -1.2]}
          scale={0.9}
          type="torus"
          speed={0.6}
          amplitude={0.2}
          offset={0}
          isDark={isDark}
        />

        {/* Floating Suspended Glass Code Panels */}
        <FloatingCodePanel
          position={[-2.9, -0.1, -0.6]}
          rotation={[0.08, 0.35, -0.04]}
          title="pipeline.ts"
          lines={[
            "// Autonomous Workflow Pipeline",
            "const engine = await WebMitra.init();",
            "await engine.streamEvents({ live: true });",
            "return { status: 200, uptime: '99.99%' };",
          ]}
          speed={0.75}
          amplitude={0.15}
          offset={0.5}
          isDark={isDark}
        />

        <FloatingCodePanel
          position={[2.9, -0.0, -0.7]}
          rotation={[-0.06, -0.35, 0.03]}
          title="neural_rag.py"
          lines={[
            "# Enterprise Vector Search & AI",
            "embeddings = model.encode(docs)",
            "clusters = vector_db.query(top_k=5)",
            "return neural_synthesize(clusters)",
          ]}
          speed={0.8}
          amplitude={0.14}
          offset={2.2}
          isDark={isDark}
        />

        {/* Minimal 70% Reduced Particle Cloud */}
        <MinimalParticleField isDark={isDark} />
      </group>
    </>
  );
}
