import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import { Eye, RotateCw, Sparkles, Layers, ShieldCheck } from 'lucide-react';

interface Interactive3DToothProps {
  className?: string;
}

export const Interactive3DTooth: React.FC<Interactive3DToothProps> = ({ className = '' }) => {
  const mountRef = useRef<HTMLDivElement>(null);
  const [activeLayer, setActiveLayer] = useState<'ceramic' | 'implant' | 'wireframe'>('ceramic');
  const [isRotating, setIsRotating] = useState<boolean>(true);
  const [hasError, setHasError] = useState<boolean>(false);

  // References to three objects to update materials dynamically
  const toothMeshRef = useRef<THREE.Mesh | null>(null);
  const implantPostRef = useRef<THREE.Mesh | null>(null);
  const rootMeshRef = useRef<THREE.Mesh | null>(null);
  const crownGroupRef = useRef<THREE.Group | null>(null);

  useEffect(() => {
    if (!mountRef.current) return;
    const container = mountRef.current;
    const width = container.clientWidth || 400;
    const height = container.clientHeight || 380;

    let renderer: THREE.WebGLRenderer;
    try {
      renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true, powerPreference: 'high-performance' });
    } catch {
      setHasError(true);
      return;
    }

    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.2;
    container.innerHTML = '';
    container.appendChild(renderer.domElement);

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(40, width / height, 0.1, 100);
    camera.position.set(0, 0, 7.5);

    // Group for entire tooth model
    const toothGroup = new THREE.Group();
    scene.add(toothGroup);
    crownGroupRef.current = toothGroup;

    // Lighting setup for luxury ceramic dental aesthetic
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.9);
    scene.add(ambientLight);

    const keyLight = new THREE.DirectionalLight(0xffffff, 1.8);
    keyLight.position.set(5, 8, 6);
    scene.add(keyLight);

    const blueRimLight = new THREE.DirectionalLight(0xbae6fd, 1.2);
    blueRimLight.position.set(-6, -4, -4);
    scene.add(blueRimLight);

    const warmFillLight = new THREE.DirectionalLight(0xfef08a, 0.4);
    warmFillLight.position.set(3, -5, 2);
    scene.add(warmFillLight);

    // Anatomical Tooth Crown Geometry (Multi-cusp molar shape using smooth Lathe/Cylinder or sculpted form)
    // Create an anatomically sculpted molar crown
    const crownGeo = new THREE.CylinderGeometry(1.2, 0.9, 1.6, 32, 16);
    const pos = crownGeo.attributes.position;
    // Sculpt cusps and natural grooves into vertices
    for (let i = 0; i < pos.count; i++) {
      const x = pos.getX(i);
      const y = pos.getY(i);
      const z = pos.getZ(i);

      if (y > 0.4) {
        // Create 4 natural anatomical cusps
        const cuspWave = Math.sin(x * 3.2) * Math.cos(z * 3.2) * 0.22;
        const occlusalPit = -Math.exp(-(x * x + z * z) * 1.8) * 0.25;
        pos.setY(i, y + cuspWave + occlusalPit);
      }
      // Natural buccal curve
      const angle = Math.atan2(z, x);
      const bulge = Math.sin(angle * 4) * 0.08;
      pos.setX(i, x * (1 + bulge * (1 - Math.abs(y))));
      pos.setZ(i, z * (1 + bulge * (1 - Math.abs(y))));
    }
    crownGeo.computeVertexNormals();

    // Premium Ceramic Enamel Material
    const ceramicMaterial = new THREE.MeshPhysicalMaterial({
      color: 0xfcfcfd,
      roughness: 0.12,
      metalness: 0.02,
      clearcoat: 1.0,
      clearcoatRoughness: 0.08,
      transmission: 0.2, // Subtle porcelain translucency
      ior: 1.54, // Dental ceramic index of refraction
      reflectivity: 0.6
    });

    const crownMesh = new THREE.Mesh(crownGeo, ceramicMaterial);
    crownMesh.position.y = 0.7;
    toothGroup.add(crownMesh);
    toothMeshRef.current = crownMesh;

    // Dual Anatomical Roots
    const rootGeo1 = new THREE.ConeGeometry(0.42, 1.7, 24);
    rootGeo1.translate(0, -0.85, 0);
    const rootMaterial = new THREE.MeshStandardMaterial({
      color: 0xf1ebe1,
      roughness: 0.38,
      metalness: 0.05
    });

    const rootMesh1 = new THREE.Mesh(rootGeo1, rootMaterial);
    rootMesh1.position.set(-0.45, -0.1, 0);
    rootMesh1.rotation.z = 0.14;
    toothGroup.add(rootMesh1);
    rootMeshRef.current = rootMesh1;

    const rootMesh2 = new THREE.Mesh(rootGeo1.clone(), rootMaterial);
    rootMesh2.position.set(0.45, -0.1, 0);
    rootMesh2.rotation.z = -0.14;
    toothGroup.add(rootMesh2);

    // Titanium Dental Implant Post (shown in implant layer mode)
    const implantGroup = new THREE.Group();
    const screwGeo = new THREE.CylinderGeometry(0.35, 0.25, 2.0, 24, 32);
    // Add micro-threads to screw
    const screwPos = screwGeo.attributes.position;
    for (let i = 0; i < screwPos.count; i++) {
      const y = screwPos.getY(i);
      const angle = Math.atan2(screwPos.getZ(i), screwPos.getX(i));
      const thread = Math.sin(y * 24 + angle) * 0.035;
      screwPos.setX(i, screwPos.getX(i) + Math.cos(angle) * thread);
      screwPos.setZ(i, screwPos.getZ(i) + Math.sin(angle) * thread);
    }
    screwGeo.computeVertexNormals();

    const titaniumMaterial = new THREE.MeshStandardMaterial({
      color: 0x94a3b8,
      roughness: 0.25,
      metalness: 0.92
    });
    const implantScrew = new THREE.Mesh(screwGeo, titaniumMaterial);
    implantScrew.position.set(0, -0.9, 0);

    const abutmentGeo = new THREE.CylinderGeometry(0.42, 0.35, 0.6, 24);
    const goldAbutmentMat = new THREE.MeshStandardMaterial({
      color: 0xe2b04a,
      roughness: 0.2,
      metalness: 0.8
    });
    const abutment = new THREE.Mesh(abutmentGeo, goldAbutmentMat);
    abutment.position.set(0, 0.2, 0);

    implantGroup.add(implantScrew);
    implantGroup.add(abutment);
    implantGroup.visible = false;
    toothGroup.add(implantGroup);
    implantPostRef.current = implantScrew;

    // Center tooth
    toothGroup.position.y = -0.1;
    toothGroup.rotation.x = 0.22;
    toothGroup.rotation.y = 0.4;

    // Pointer Drag Interaction
    let isDragging = false;
    let prevX = 0;
    let prevY = 0;

    const onPointerDown = (e: PointerEvent) => {
      isDragging = true;
      prevX = e.clientX;
      prevY = e.clientY;
    };

    const onPointerMove = (e: PointerEvent) => {
      if (!isDragging || !toothGroup) return;
      const deltaX = e.clientX - prevX;
      const deltaY = e.clientY - prevY;
      prevX = e.clientX;
      prevY = e.clientY;

      toothGroup.rotation.y += deltaX * 0.012;
      toothGroup.rotation.x += deltaY * 0.012;
    };

    const onPointerUp = () => {
      isDragging = false;
    };

    const domEl = renderer.domElement;
    domEl.addEventListener('pointerdown', onPointerDown);
    window.addEventListener('pointermove', onPointerMove);
    window.addEventListener('pointerup', onPointerUp);

    // Animation Loop
    let animationFrameId: number;
    let clock = new THREE.Clock();

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);
      const delta = clock.getDelta();

      if (isRotating && !isDragging) {
        toothGroup.rotation.y += delta * 0.45;
      }

      renderer.render(scene, camera);
    };

    animate();

    const handleResize = () => {
      if (!container) return;
      const newWidth = container.clientWidth;
      const newHeight = container.clientHeight;
      camera.aspect = newWidth / newHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(newWidth, newHeight);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', handleResize);
      domEl.removeEventListener('pointerdown', onPointerDown);
      window.removeEventListener('pointermove', onPointerMove);
      window.removeEventListener('pointerup', onPointerUp);
      renderer.dispose();
      crownGeo.dispose();
      rootGeo1.dispose();
      screwGeo.dispose();
    };
  }, []);

  // Update appearance according to active layer
  useEffect(() => {
    if (!crownGroupRef.current) return;
    const group = crownGroupRef.current;
    const crown = toothMeshRef.current;
    const roots = rootMeshRef.current;

    if (activeLayer === 'ceramic') {
      if (crown) {
        crown.visible = true;
        (crown.material as THREE.MeshPhysicalMaterial).wireframe = false;
        (crown.material as THREE.MeshPhysicalMaterial).opacity = 1.0;
        (crown.material as THREE.MeshPhysicalMaterial).transparent = false;
      }
      if (roots) {
        roots.visible = true;
        if (roots.parent) {
          roots.parent.children.forEach(child => {
            if (child !== crown && child.type === 'Mesh') {
              child.visible = true;
            }
          });
        }
      }
      // Hide implant group
      group.children.forEach(child => {
        if (child.type === 'Group') child.visible = false;
      });
    } else if (activeLayer === 'implant') {
      // Show implant core, make crown semi-translucent
      if (crown) {
        crown.visible = true;
        (crown.material as THREE.MeshPhysicalMaterial).wireframe = false;
        (crown.material as THREE.MeshPhysicalMaterial).transparent = true;
        (crown.material as THREE.MeshPhysicalMaterial).opacity = 0.45;
      }
      // Hide natural biological roots, show implant post
      group.children.forEach(child => {
        if (child !== crown && child.type === 'Mesh') child.visible = false;
        if (child.type === 'Group') child.visible = true;
      });
    } else if (activeLayer === 'wireframe') {
      if (crown) {
        crown.visible = true;
        (crown.material as THREE.MeshPhysicalMaterial).wireframe = true;
      }
      group.children.forEach(child => {
        if (child.type === 'Group') child.visible = false;
        if (child.type === 'Mesh') child.visible = true;
      });
    }
  }, [activeLayer]);

  if (hasError) {
    return (
      <div className={`flex flex-col items-center justify-center p-8 bg-slate-900/5 rounded-2xl border border-slate-200/80 text-center ${className}`}>
        <Sparkles className="w-10 h-10 text-slate-700 mb-3" />
        <h4 className="text-base font-semibold text-slate-900">Custom Porcelain Precision</h4>
        <p className="text-xs text-slate-500 max-w-xs mt-1">
          Precision-milled medical zirconia and feldspathic porcelain designed with micron accuracy.
        </p>
      </div>
    );
  }

  return (
    <div className={`relative flex flex-col items-center justify-center select-none ${className}`}>
      {/* 3D Canvas Container */}
      <div
        ref={mountRef}
        className="w-full h-[360px] md:h-[400px] cursor-grab active:cursor-grabbing rounded-2xl touch-none"
        title="Click and drag to rotate 3D crown"
      />

      {/* Floating Interactive Controls */}
      <div className="absolute top-3 left-3 flex items-center gap-1.5 text-xs text-slate-600 bg-white/90 backdrop-blur-md px-3 py-1.5 rounded-lg border border-slate-200/70 shadow-sm">
        <Sparkles className="w-3.5 h-3.5 text-sky-600" />
        <span className="font-medium text-slate-900">Interactive 3D Prosthetic Model</span>
        <span className="text-slate-400">·</span>
        <span className="text-slate-500">Drag to inspect</span>
      </div>

      {/* Layer Toggles */}
      <div className="mt-3 flex items-center gap-2 p-1 bg-slate-100 rounded-xl border border-slate-200/80">
        <button
          type="button"
          onClick={() => setActiveLayer('ceramic')}
          className={`flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium rounded-lg transition-all ${
            activeLayer === 'ceramic'
              ? 'bg-white text-slate-950 shadow-sm'
              : 'text-slate-600 hover:text-slate-900'
          }`}
        >
          <Sparkles className="w-3.5 h-3.5" />
          Porcelain Crown
        </button>

        <button
          type="button"
          onClick={() => setActiveLayer('implant')}
          className={`flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium rounded-lg transition-all ${
            activeLayer === 'implant'
              ? 'bg-white text-slate-950 shadow-sm'
              : 'text-slate-600 hover:text-slate-900'
          }`}
        >
          <ShieldCheck className="w-3.5 h-3.5 text-sky-600" />
          Titanium Implant Core
        </button>

        <button
          type="button"
          onClick={() => setActiveLayer('wireframe')}
          className={`flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium rounded-lg transition-all ${
            activeLayer === 'wireframe'
              ? 'bg-white text-slate-950 shadow-sm'
              : 'text-slate-600 hover:text-slate-900'
          }`}
        >
          <Layers className="w-3.5 h-3.5" />
          3D Mesh CAD
        </button>

        <button
          type="button"
          onClick={() => setIsRotating(!isRotating)}
          title={isRotating ? 'Pause rotation' : 'Start auto-rotation'}
          className={`p-1.5 rounded-lg text-xs font-medium transition-colors ${
            isRotating ? 'bg-sky-50 text-sky-700' : 'text-slate-500 hover:text-slate-800'
          }`}
        >
          <RotateCw className={`w-3.5 h-3.5 ${isRotating ? 'animate-spin' : ''}`} style={{ animationDuration: '6s' }} />
        </button>
      </div>

      <p className="text-[11px] text-slate-400 mt-2 text-center">
        Proprietary CAD/CAM restoration rendering. High-strength biocompatible zirconia & Grade 5 medical titanium.
      </p>
    </div>
  );
};
