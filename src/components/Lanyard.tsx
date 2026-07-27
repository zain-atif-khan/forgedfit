/* eslint-disable react/no-unknown-property */
import { useEffect, useMemo, useRef, useState } from 'react';
import { Canvas, extend, useFrame, useThree } from '@react-three/fiber';
import { Environment, Lightformer } from '@react-three/drei';
import { BallCollider, CuboidCollider, Physics, RigidBody, useRopeJoint, useSphericalJoint } from '@react-three/rapier';
import { MeshLineGeometry, MeshLineMaterial } from 'meshline';
import * as THREE from 'three';
import { useTheme } from '../context/ThemeContext';
import './Lanyard.css';

extend({ MeshLineGeometry, MeshLineMaterial });

declare global {
  namespace JSX {
    interface IntrinsicElements {
      meshLineGeometry: any;
      meshLineMaterial: any;
    }
  }
}

declare module '@react-three/fiber' {
  interface ThreeElements {
    meshLineGeometry: any;
    meshLineMaterial: any;
  }
}

// Create procedural fallback textures for Lanyard woven strap & Luxury Sanctuary Card
function createLanyardTexture() {
  const canvas = document.createElement('canvas');
  canvas.width = 512;
  canvas.height = 64;
  const ctx = canvas.getContext('2d');
  if (ctx) {
    ctx.fillStyle = '#0F0E13';
    ctx.fillRect(0, 0, 512, 64);
    
    // Pattern stripes
    ctx.fillStyle = '#C5A059';
    ctx.fillRect(0, 0, 512, 4);
    ctx.fillRect(0, 60, 512, 4);

    ctx.fillStyle = '#E5C07B';
    ctx.font = 'bold 20px "Playfair Display", Georgia, serif';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.fillText('AUREUS SANCTUARY  •  VIP ACCESS  •  AUREUS SANCTUARY', 256, 32);
  }
  const tex = new THREE.CanvasTexture(canvas);
  tex.wrapS = tex.wrapT = THREE.RepeatWrapping;
  tex.repeat.set(-4, 1);
  return tex;
}

function createCardTexture(accentGold = '#C5A059', bgCard = '#15131B') {
  const canvas = document.createElement('canvas');
  canvas.width = 1024;
  canvas.height = 1024;
  const ctx = canvas.getContext('2d');
  if (ctx) {
    // Front face (Left half: 0 - 512)
    // Create subtle gradient background for the front
    const frontGrad = ctx.createLinearGradient(0, 0, 512, 1024);
    frontGrad.addColorStop(0, '#1c1a24');
    frontGrad.addColorStop(0.5, bgCard);
    frontGrad.addColorStop(1, '#0a090e');
    ctx.fillStyle = frontGrad;
    ctx.fillRect(0, 0, 512, 1024);

    // Inner Border
    ctx.strokeStyle = accentGold;
    ctx.lineWidth = 2;
    ctx.strokeRect(20, 20, 472, 984);
    
    // More borders to make it look premium
    ctx.lineWidth = 1;
    ctx.strokeRect(30, 30, 452, 964);

    // Forge Fit Logo Emblem
    ctx.fillStyle = accentGold;
    ctx.font = 'bold 64px "Playfair Display", serif';
    ctx.textAlign = 'center';
    ctx.fillText('FORGED FIT', 256, 300);
    ctx.font = '600 20px sans-serif';
    ctx.letterSpacing = '10px';
    ctx.fillText('PRIVATE SANCTUARY', 256, 350);

    // Pass Type & Chip
    const chipGrad = ctx.createLinearGradient(176, 420, 336, 530);
    chipGrad.addColorStop(0, '#333');
    chipGrad.addColorStop(1, '#111');
    ctx.fillStyle = chipGrad;
    if (typeof (ctx as any).roundRect === 'function') {
      (ctx as any).roundRect(206, 420, 100, 80, 12);
    } else {
      ctx.rect(206, 420, 100, 80);
    }
    ctx.fill();
    ctx.strokeStyle = accentGold;
    ctx.lineWidth = 2;
    ctx.stroke();

    // Chip lines
    ctx.beginPath();
    ctx.moveTo(206, 440); ctx.lineTo(240, 440);
    ctx.moveTo(206, 460); ctx.lineTo(240, 460);
    ctx.moveTo(206, 480); ctx.lineTo(240, 480);
    ctx.moveTo(272, 440); ctx.lineTo(306, 440);
    ctx.moveTo(272, 460); ctx.lineTo(306, 460);
    ctx.moveTo(272, 480); ctx.lineTo(306, 480);
    ctx.stroke();

    ctx.fillStyle = accentGold;
    ctx.font = 'bold 36px "Playfair Display", serif';
    ctx.fillText('VIP EXECUTIVE', 256, 580);
    ctx.font = '16px monospace';
    ctx.fillStyle = '#A09CAE';
    ctx.fillText('ID: AUR-8892-PASSPORT', 256, 640);
    ctx.fillText('VALID: PERPETUAL', 256, 670);
    
    // Decorative Lines
    ctx.beginPath();
    ctx.moveTo(100, 800);
    ctx.lineTo(412, 800);
    ctx.lineWidth = 1;
    ctx.strokeStyle = '#333';
    ctx.stroke();

    ctx.font = '14px sans-serif';
    ctx.fillStyle = '#777';
    ctx.fillText('ALL ACCESS CLEARANCE', 256, 830);

    // Back face (Right half: 512 - 1024)
    const backGrad = ctx.createLinearGradient(512, 0, 1024, 1024);
    backGrad.addColorStop(0, '#0a0a0a');
    backGrad.addColorStop(1, '#000000');
    ctx.fillStyle = backGrad;
    ctx.fillRect(512, 0, 512, 1024);

    // Magnetic Strip
    ctx.fillStyle = '#1A1822';
    ctx.fillRect(512, 120, 512, 120);
    
    // Holographic sticker (simulated)
    const holoGrad = ctx.createLinearGradient(560, 300, 640, 380);
    holoGrad.addColorStop(0, accentGold);
    holoGrad.addColorStop(0.5, '#fff');
    holoGrad.addColorStop(1, accentGold);
    ctx.fillStyle = holoGrad;
    if (typeof (ctx as any).roundRect === 'function') {
      (ctx as any).roundRect(560, 300, 80, 80, 40);
    } else {
      ctx.fillRect(560, 300, 80, 80);
    }
    ctx.fill();

    // Security Line
    ctx.strokeStyle = '#333';
    ctx.lineWidth = 2;
    ctx.strokeRect(532, 20, 472, 984);

    ctx.fillStyle = '#FFF';
    ctx.font = 'bold 32px serif';
    ctx.fillText('EXECUTIVE CONCIERGE', 768, 420);

    ctx.font = '16px sans-serif';
    ctx.fillStyle = '#888496';
    ctx.fillText('24/7 CELLULAR RECOVERY ACCESS', 768, 480);
    ctx.fillText('PRIVATE VAULT & HYPERBARIC SUITE', 768, 520);
    ctx.fillText('IF FOUND PLEASE RETURN TO', 768, 620);
    ctx.fillText('100 LUXURY WAY, SANCTUARY CITY', 768, 660);

    // Barcode (simulated)
    ctx.fillStyle = '#FFF';
    for(let i = 0; i < 40; i++) {
        const w = Math.random() * 6 + 1;
        ctx.fillRect(600 + i * 8, 800, w, 60);
    }
  }

  const texture = new THREE.CanvasTexture(canvas);
  texture.colorSpace = THREE.SRGBColorSpace;
  texture.anisotropy = 16;
  return texture;
}

export interface LanyardProps {
  position?: [number, number, number];
  gravity?: [number, number, number];
  fov?: number;
  transparent?: boolean;
  frontImage?: string | null;
  backImage?: string | null;
  imageFit?: 'cover' | 'contain';
  lanyardImage?: string | null;
  lanyardWidth?: number;
}

export default function Lanyard({
  position = [0, 0, 20],
  gravity = [0, -35, 0],
  fov = 22,
  transparent = true,
  frontImage = null,
  backImage = null,
  imageFit = 'cover',
  lanyardImage = null,
  lanyardWidth = 1.2
}: LanyardProps) {
  const [isMobile, setIsMobile] = useState(() => typeof window !== 'undefined' && window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className="lanyard-wrapper">
      <Canvas
        camera={{ position, fov }}
        dpr={[1, isMobile ? 1.5 : 2]}
        gl={{ alpha: transparent, antialias: true }}
        onCreated={({ gl }) => gl.setClearColor(new THREE.Color(0x000000), transparent ? 0 : 1)}
      >
        <ambientLight intensity={Math.PI * 0.8} />
        <Physics gravity={gravity} timeStep={isMobile ? 1 / 30 : 1 / 60}>
          <Band
            isMobile={isMobile}
            frontImage={frontImage}
            backImage={backImage}
            imageFit={imageFit}
            lanyardImage={lanyardImage}
            lanyardWidth={lanyardWidth}
          />
        </Physics>
        <Environment blur={0.75}>
          <Lightformer
            intensity={2}
            color="white"
            position={[0, -1, 5]}
            rotation={[0, 0, Math.PI / 3]}
            scale={[100, 0.1, 1]}
          />
          <Lightformer
            intensity={3}
            color="#C5A059"
            position={[-1, -1, 1]}
            rotation={[0, 0, Math.PI / 3]}
            scale={[100, 0.1, 1]}
          />
          <Lightformer
            intensity={3}
            color="white"
            position={[1, 1, 1]}
            rotation={[0, 0, Math.PI / 3]}
            scale={[100, 0.1, 1]}
          />
          <Lightformer
            intensity={8}
            color="#FFF"
            position={[-10, 0, 14]}
            rotation={[0, Math.PI / 2, Math.PI / 3]}
            scale={[100, 10, 1]}
          />
        </Environment>
      </Canvas>
    </div>
  );
}

function Band({
  maxSpeed = 50,
  minSpeed = 0,
  isMobile = false,
  frontImage = null,
  backImage = null,
  imageFit = 'cover',
  lanyardImage = null,
  lanyardWidth = 1.2
}: {
  maxSpeed?: number;
  minSpeed?: number;
  isMobile?: boolean;
  frontImage?: string | null;
  backImage?: string | null;
  imageFit?: 'cover' | 'contain';
  lanyardImage?: string | null;
  lanyardWidth?: number;
}) {
  const { activePalette } = useTheme();
  const { size } = useThree();
  const band = useRef<any>(null);
  const fixed = useRef<any>(null);
  const j1 = useRef<any>(null);
  const j2 = useRef<any>(null);
  const j3 = useRef<any>(null);
  const card = useRef<any>(null);

  const vec = useMemo(() => new THREE.Vector3(), []);
  const ang = useMemo(() => new THREE.Vector3(), []);
  const rot = useMemo(() => new THREE.Vector3(), []);
  const dir = useMemo(() => new THREE.Vector3(), []);

  const segmentProps = { canSleep: true, colliders: false as const, angularDamping: 4, linearDamping: 4 };

  const texture = useMemo(() => createLanyardTexture(), []);
  const cardMap = useMemo(() => createCardTexture(activePalette.accentGold, activePalette.bgCard), [activePalette]);

  const [curve] = useState(
    () =>
      new THREE.CatmullRomCurve3([
        new THREE.Vector3(),
        new THREE.Vector3(),
        new THREE.Vector3(),
        new THREE.Vector3()
      ])
  );

  const [dragged, drag] = useState<THREE.Vector3 | false>(false);
  const [hovered, hover] = useState(false);

  useRopeJoint(fixed, j1, [[0, 0, 0], [0, 0, 0], 1]);
  useRopeJoint(j1, j2, [[0, 0, 0], [0, 0, 0], 1]);
  useRopeJoint(j2, j3, [[0, 0, 0], [0, 0, 0], 1]);
  useSphericalJoint(j3, card, [
    [0, 0, 0],
    [0, 1.4, 0]
  ]);

  useEffect(() => {
    if (hovered) {
      document.body.style.cursor = dragged ? 'grabbing' : 'grab';
      return () => void (document.body.style.cursor = 'auto');
    }
  }, [hovered, dragged]);

  useFrame((state, delta) => {
    if (dragged && card.current) {
      vec.set(state.pointer.x, state.pointer.y, 0.5).unproject(state.camera);
      dir.copy(vec).sub(state.camera.position).normalize();
      vec.add(dir.multiplyScalar(state.camera.position.length()));
      [card, j1, j2, j3, fixed].forEach((ref) => ref.current?.wakeUp());
      card.current.setNextKinematicTranslation({
        x: vec.x - dragged.x,
        y: vec.y - dragged.y,
        z: vec.z - dragged.z
      });
    }

    if (fixed.current && j1.current && j2.current && j3.current && card.current && band.current) {
      [j1, j2].forEach((ref) => {
        if (!ref.current.lerped) ref.current.lerped = new THREE.Vector3().copy(ref.current.translation());
        const clampedDistance = Math.max(0.1, Math.min(1, ref.current.lerped.distanceTo(ref.current.translation())));
        ref.current.lerped.lerp(
          ref.current.translation(),
          delta * (minSpeed + clampedDistance * (maxSpeed - minSpeed))
        );
      });

      vec.set(0, 0.13, -0.05).applyQuaternion(card.current.rotation()).add(card.current.translation());
      curve.points[0].copy(vec);
      curve.points[1].copy(j2.current.lerped);
      curve.points[2].copy(j1.current.lerped);
      curve.points[3].copy(fixed.current.translation());

      if (band.current?.geometry) {
        band.current.geometry.setPoints(curve.getPoints(isMobile ? 16 : 32));
      }

      ang.copy(card.current.angvel());
      rot.copy(card.current.rotation());
      card.current.setAngvel({ x: ang.x, y: ang.y - rot.y * 0.25, z: ang.z });
    }
  });

  curve.curveType = 'chordal';

  return (
    <>
      <group position={[0, 4, 0]}>
        <RigidBody ref={fixed} type="fixed" {...segmentProps} />
        <RigidBody position={[0.5, 0, 0]} ref={j1} type="dynamic" {...segmentProps}>
          <BallCollider args={[0.1]} />
        </RigidBody>
        <RigidBody position={[1, 0, 0]} ref={j2} type="dynamic" {...segmentProps}>
          <BallCollider args={[0.1]} />
        </RigidBody>
        <RigidBody position={[1.5, 0, 0]} ref={j3} type="dynamic" {...segmentProps}>
          <BallCollider args={[0.1]} />
        </RigidBody>
        <RigidBody
          position={[2, 0, 0]}
          ref={card}
          {...segmentProps}
          type={dragged ? 'kinematicPosition' : 'dynamic'}
        >
          <CuboidCollider args={[0.8, 1.125, 0.02]} />
          <group
            scale={2.25}
            position={[0, -1.2, -0.05]}
            onPointerOver={() => hover(true)}
            onPointerOut={() => hover(false)}
            onPointerUp={(e: any) => {
              e.target.releasePointerCapture(e.pointerId);
              drag(false);
            }}
            onPointerDown={(e: any) => {
              e.target.setPointerCapture(e.pointerId);
              drag(
                new THREE.Vector3()
                  .copy(e.point)
                  .sub(vec.copy(card.current.translation()))
              );
            }}
          >
            {/* Main Card Mesh */}
            <mesh>
              <boxGeometry args={[0.72, 1.05, 0.015]} />
              <meshPhysicalMaterial
                map={cardMap}
                clearcoat={isMobile ? 0 : 1}
                clearcoatRoughness={0.15}
                roughness={0.3}
                metalness={0.7}
              />
            </mesh>

            {/* Gold Clip & Clamp */}
            <mesh position={[0, 0.54, 0]}>
              <cylinderGeometry args={[0.04, 0.04, 0.08, 16]} />
              <meshStandardMaterial color={activePalette.accentGold} metalness={0.9} roughness={0.2} />
            </mesh>
            <mesh position={[0, 0.59, 0]}>
              <torusGeometry args={[0.05, 0.012, 12, 24]} />
              <meshStandardMaterial color={activePalette.accentGold} metalness={0.9} roughness={0.2} />
            </mesh>
          </group>
        </RigidBody>
      </group>

      <mesh ref={band}>
        <meshLineGeometry />
        <meshLineMaterial
          color="#FFFFFF"
          depthTest={false}
          resolution={[size.width, size.height]}
          useMap
          map={texture}
          repeat={[-4, 1]}
          lineWidth={0.5}
        />
      </mesh>
    </>
  );
}
