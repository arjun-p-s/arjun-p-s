import { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import * as THREE from 'three';



// Shader-based approach is smoother and more performant for "waves"
// Let's implement a ShaderMaterial based WaveSurface instead for that "Premium" look
// CPU particles can look jittery.

const WaveShaderMaterial = {
  uniforms: {
    uTime: { value: 0 },
    uColor: { value: new THREE.Color("#7000ff") }
  },
  vertexShader: `
        varying vec2 vUv;
        uniform float uTime;
        
        void main() {
            vUv = uv;
            vec3 pos = position;
            
            // Wave equation
            float wave = sin(pos.x * 2.0 + uTime) * 0.3 + sin(pos.y * 2.0 + uTime * 0.5) * 0.3;
            pos.z += wave;
            
            gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);
            gl_PointSize = 4.0; 
        }
    `,
  fragmentShader: `
        uniform vec3 uColor;
        
        void main() {
            // Circle shape for particles
            vec2 xy = gl_PointCoord.xy - vec2(0.5);
            float ll = length(xy);
            if(ll > 0.5) discard;
            
            gl_FragColor = vec4(uColor, 0.4); // Low opacity
        }
    `
};

const AnimatedGrid = () => {
  const meshRef = useRef();

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.material.uniforms.uTime.value = state.clock.getElapsedTime();
      meshRef.current.rotation.x = -Math.PI / 3; // Tilt greatly
      meshRef.current.rotation.z = state.clock.getElapsedTime() * 0.05; // Slow spin
    }
  });

  return (
    <points ref={meshRef}>
      <planeGeometry args={[20, 20, 64, 64]} />
      <shaderMaterial
        uniforms={WaveShaderMaterial.uniforms}
        vertexShader={WaveShaderMaterial.vertexShader}
        fragmentShader={WaveShaderMaterial.fragmentShader}
        transparent={true}
        blending={THREE.AdditiveBlending}
        depthWrite={false}
      />
    </points>
  );
}

export default function Background3D() {
  return (
    <div className="fixed top-0 left-0 w-full h-full -z-10 bg-[var(--bg-color)]">
      {/* Background Gradient to hide edges */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[var(--bg-color)] to-[var(--bg-color)] z-0 pointer-events-none" />

      <Canvas camera={{ position: [0, 2, 5], fov: 60 }}>
        <fog attach="fog" args={['#050505', 3, 10]} />
        <AnimatedGrid />
      </Canvas>
    </div>
  );
}
