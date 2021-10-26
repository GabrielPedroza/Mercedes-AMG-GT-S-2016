import React from "react"
import { Canvas, render, events } from "@react-three/fiber"
import { OrbitControls } from "@react-three/drei"

const App = () => {
	window.addEventListener("resize", () =>
		render(<mesh />, document.querySelector("canvas"), {
			events,
			size: { width: window.innerWidth, height: window.innerHeight },
		})
	)

	return (
		<div id='canvas-container'>
			<Canvas
				dpr={[1, 2]}
				camera={{ fov: 75, near: 0.1, far: 100, position: [0, 0, 5] }}>
				<mesh>
					<ambientLight intensity={0.5} position={[4, 7, 7]} />
					<directionalLight color='white' position={[2, 5, 5]} />
					<sphereGeometry args={[1, 32, 32]} />
					<meshPhongMaterial color={"royalblue"} />
					<OrbitControls
						autoRotate
						enablePan={true}
						enableZoom={true}
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
window.dispatchEvent(new Event("resize"))

export default App
