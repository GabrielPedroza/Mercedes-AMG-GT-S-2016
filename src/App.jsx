import React, { Suspense } from "react"
import { Canvas, render, events } from "@react-three/fiber"
import { OrbitControls, Stars } from "@react-three/drei"
import Model from "./Model"

const App = () => {
	window.addEventListener("resize", () =>
		render(<mesh />, document.querySelector("canvas"), {
			events,
			size: { width: window.innerWidth, height: window.innerHeight },
		})
	)

	return (
		<div id='canvas-container'>
			<Canvas dpr={[1, 2]} camera={{ position: [-10, 0, 0], fov: 35 }}>
				<Suspense fallback={null}>
					<ambientLight intensity={0.5} position={[4, 7, 7]} />
					<directionalLight color='white' position={[2, 5, 5]} />
					<Model />
					<OrbitControls
						autoRotate
						enablePan={true}
						enableZoom={false}
						enableRotate={true}
						minPolarAngle={Math.PI / 2.8}
						maxPolarAngle={Math.PI / 2.8}
						enableDamping={true}
					/>
					<Stars />
				</Suspense>
			</Canvas>
		</div>
	)
}
window.dispatchEvent(new Event("resize"))

export default App
