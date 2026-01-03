'use client'

import { useRef, useMemo } from 'react'
import { Canvas, useFrame, useThree } from '@react-three/fiber'
import { Color, Vector2, ShaderMaterial } from 'three'
import * as THREE from 'three'

const vertexShader = `
  varying vec2 vUv;
  void main() {
    vUv = uv;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
  }
`

const fragmentShader = `
  uniform float uTime;
  uniform vec3 uColor;
  uniform vec2 uMouse;
  varying vec2 vUv;

  // Simplex 2D noise
  vec3 permute(vec3 x) { return mod(((x*34.0)+1.0)*x, 289.0); }

  float snoise(vec2 v){
    const vec4 C = vec4(0.211324865405187, 0.366025403784439,
             -0.577350269189626, 0.024390243902439);
    vec2 i  = floor(v + dot(v, C.yy) );
    vec2 x0 = v -   i + dot(i, C.xx);
    vec2 i1;
    i1 = (x0.x > x0.y) ? vec2(1.0, 0.0) : vec2(0.0, 1.0);
    vec4 x12 = x0.xyxy + C.xxzz;
    x12.xy -= i1;
    i = mod(i, 289.0);
    vec3 p = permute( permute( i.y + vec3(0.0, i1.y, 1.0 ))
    + i.x + vec3(0.0, i1.x, 1.0 ));
    vec3 m = max(0.5 - vec3(dot(x0,x0), dot(x12.xy,x12.xy), dot(x12.zw,x12.zw)), 0.0);
    m = m*m ;
    m = m*m ;
    vec3 x = 2.0 * fract(p * C.www) - 1.0;
    vec3 h = abs(x) - 0.5;
    vec3 ox = floor(x + 0.5);
    vec3 a0 = x - ox;
    m *= 1.79284291400159 - 0.85373472095314 * ( a0*a0 + h*h );
    vec3 g;
    g.x  = a0.x  * x0.x  + h.x  * x0.y;
    g.yz = a0.yz * x12.xz + h.yz * x12.yw;
    return 130.0 * dot(m, g);
  }

  void main() {
    vec2 uv = vUv;
    
    // Create a flowing liquid effect
    float noise1 = snoise(uv * 3.0 + uTime * 0.1);
    float noise2 = snoise(uv * 5.0 - uTime * 0.2 + noise1);
    
    // Mouse interaction
    float dist = distance(uv, uMouse);
    float mouseEffect = smoothstep(0.5, 0.0, dist) * 0.5;
    
    // Mix colors
    vec3 color1 = uColor;
    vec3 color2 = vec3(uColor.r * 0.5, uColor.g * 0.5, uColor.b + 0.2);
    vec3 color3 = vec3(uColor.r + 0.2, uColor.g * 0.8, uColor.b * 0.5);
    
    float mixFactor = smoothstep(-1.0, 1.0, noise2 + mouseEffect);
    vec3 finalColor = mix(color1, color2, mixFactor);
    finalColor = mix(finalColor, color3, noise1 * 0.5 + 0.5);
    
    // Add some sparkle/grain
    float grain = fract(sin(dot(uv, vec2(12.9898, 78.233))) * 43758.5453);
    finalColor += grain * 0.05;

    gl_FragColor = vec4(finalColor, 0.4); // Semi-transparent
  }
`

function LiquidPlane() {
    const meshRef = useRef<THREE.Mesh>(null)
    const materialRef = useRef<ShaderMaterial>(null)
    const { viewport } = useThree()

    const uniforms = useMemo(
        () => ({
            uTime: { value: 0 },
            uColor: { value: new Color('#C778DD') }, // Default primary color
            uMouse: { value: new Vector2(0, 0) }
        }),
        []
    )

    useFrame((state) => {
        if (materialRef.current) {
            materialRef.current.uniforms.uTime.value = state.clock.getElapsedTime()

            // Smooth mouse movement
            const targetX = (state.mouse.x + 1) / 2
            const targetY = (state.mouse.y + 1) / 2
            materialRef.current.uniforms.uMouse.value.lerp(new Vector2(targetX, targetY), 0.1)
        }
    })

    return (
        <mesh ref={meshRef} scale={[viewport.width, viewport.height, 1]}>
            <planeGeometry args={[1, 1, 32, 32]} />
            <shaderMaterial
                ref={materialRef}
                vertexShader={vertexShader}
                fragmentShader={fragmentShader}
                uniforms={uniforms}
                transparent
            />
        </mesh>
    )
}

export default function LiquidBackground() {
    return (
        <div className="fixed inset-0 -z-20 opacity-60">
            <Canvas camera={{ position: [0, 0, 1] }}>
                <LiquidPlane />
            </Canvas>
        </div>
    )
}
