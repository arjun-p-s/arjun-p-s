import { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Points, PointMaterial } from '@react-three/drei';
import * as THREE from 'three';

const ParticleWave = () => {
    const ref = useRef();
    
    // Create a grid of points
    const count = 5000;
    const positions = useMemo(() => {
        const positions = new Float32Array(count * 3);
        for (let i = 0; i < count; i++) {
            positions[i * 3] = (Math.random() - 0.5) * 15; // x
            positions[i * 3 + 1] = (Math.random() - 0.5) * 10; // y
            positions[i * 3 + 2] = (Math.random() - 0.5) * 5;  // z
        }
        return positions;
    }, [count]);

    useFrame((state) => {
        const t = state.clock.getElapsedTime();
        const positions = ref.current.geometry.attributes.position.array;

        for (let i = 0; i < count; i++) {
            const i3 = i * 3;
            // Original x position to maintain grid partially
            const x = positions[i3]; 
            
            // Wave movement based on x position and time
            // We modify Y to create the wave
            // But here we want a flowing field, so let's modify Y and Z slightly
            
            // Create a complex wave pattern
            const y = Math.sin(t * 0.2 + x * 0.5) * 1.5 + Math.sin(t * 0.5 + x * 1.5) * 0.5;
            
            // Update y position (giving it a flowing effect)
            // To make it persistent, we calculate y based on initial state, but here we just animate
            // For a flow, we usually use a shader, but for CPU simple particles:
            
            positions[i3 + 1] = y + (Math.sin(i * 0.5 + t) * 0.2); // Add some noise
            
            // Optional: Rotate the whole group or move camera instead
        }
        ref.current.geometry.attributes.position.needsUpdate = true;
        
        // Gentle rotation
        ref.current.rotation.y = t * 0.05;
    });

    return (
        <points ref={ref}>
            <bufferGeometry>
                <bufferAttribute
                    attach="attributes-position"
                    count={positions.length / 3}
                    array={positions}
                    itemSize={3}
                />
            </bufferGeometry>
            <PointMaterial
                transparent
                color="#7000ff"
                size={0.03}
                sizeAttenuation={true}
                depthWrite={false}
                opacity={0.6}
                blending={THREE.AdditiveBlending}
            />
        </points>
    );
};

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
