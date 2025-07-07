'use client';

import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Float, TorusKnot, Icosahedron, Dodecahedron } from '@react-three/drei';

function useRotation(ref, xSpeed, ySpeed = 0, zSpeed = 0) {
  useFrame((state) => {
    if (ref.current) {
      ref.current.rotation.x = state.clock.elapsedTime * xSpeed;
      ref.current.rotation.y = state.clock.elapsedTime * ySpeed;
      ref.current.rotation.z = state.clock.elapsedTime * zSpeed;
    }
  });
}

function FloatingTorus({ position, color }) {
  const meshRef = useRef(null);
  useRotation(meshRef, 0.3, 0.2);
  return (
    <Float speed={2} rotationIntensity={1.5} floatIntensity={3}>
      <TorusKnot ref={meshRef} position={position} args={[0.8, 0.3, 100, 16]}>
        <meshStandardMaterial color={color} transparent opacity={0.95} roughness={0.2} metalness={0.9} />
      </TorusKnot>
    </Float>
  );
}

function FloatingIcosahedron({ position, color }) {
  const meshRef = useRef(null);
  useRotation(meshRef, 0.2, 0.4, 0.3);
  return (
    <Float speed={2.5} rotationIntensity={2} floatIntensity={4}>
      <Icosahedron ref={meshRef} position={position} args={[1, 0]}>
        <meshStandardMaterial color={color} transparent opacity={0.8} roughness={0.1} metalness={1} />
      </Icosahedron>
    </Float>
  );
}

function FloatingDodecahedron({ position, color }) {
  const meshRef = useRef(null);
  useRotation(meshRef, 0.2, 0.5, 0.3);
  return (
    <Float speed={2} rotationIntensity={1.2} floatIntensity={3}>
      <Dodecahedron ref={meshRef} position={position} args={[1]}>
        <meshStandardMaterial color={color} transparent opacity={0.9} roughness={0.25} metalness={0.85} />
      </Dodecahedron>
    </Float>
  );
}

export default function FloatingElements() {
  return (
    <>
      {/* Purple Zone */}
      <FloatingTorus position={[-4, 2, -10]} color="#c084fc" />
      <FloatingIcosahedron position={[4, -1, -11]} color="#a78bfa" />
      <FloatingDodecahedron position={[-2, -2, -9]} color="#8b5cf6" />

      {/* Pink Zone */}
      <FloatingTorus position={[3, 3, -12]} color="#f472b6" />
      <FloatingIcosahedron position={[-3, 1, -10]} color="#fb7185" />
      <FloatingDodecahedron position={[2, -3, -11]} color="#fda4af" />

      {/* Blue Zone */}
      <FloatingTorus position={[5, 0, -13]} color="#38bdf8" />
      <FloatingIcosahedron position={[-5, -1, -9]} color="#0ea5e9" />
      <FloatingDodecahedron position={[1, 4, -10]} color="#06b6d4" />
    </>
  );
}
