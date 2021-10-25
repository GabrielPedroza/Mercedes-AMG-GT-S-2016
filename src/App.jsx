import React from "react"
import { Canvas } from "@react-three/fiber"
import { OrbitControls } from "@react-three/drei"

const App = () => {
	return (
		<div id='canvas-container'>
			<Canvas dpr={[1, 2]} camera={{ position: [-10, 0, 0], fov: 35 }}>
				<mesh>
					<ambientLight intensity={0.5} position={[4, 7, 7]} />
					<directionalLight color='white' position={[2, 5, 5]} />
					<sphereGeometry args={[1, 16, 16]} />
					<meshStandardMaterial color={"yellow"} />
					<OrbitControls
						autoRotate
						enablePan={true}
						enableZoom={false}
						enableRotate={true}
						minPolarAngle={Math.PI / 2.8}
						maxPolarAngle={Math.PI / 2.8}
						enableDamping={true}
					/>
				</mesh>
			</Canvas>
		</div>
	)
}

export default App
