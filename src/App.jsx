import React, { Suspense } from "react"
import { Canvas, render, events } from "@react-three/fiber"
import { OrbitControls, Stars, Loader, Html } from "@react-three/drei"
// import AnimatedText from "./Text"
import Model from "./Model"
import Floor from "./Floor"

const App = () => {
	/* Watches for resize of the viewport */
	window.addEventListener("resize", () =>
		render(<mesh />, document.querySelector("canvas"), {
			events,
			size: { width: window.innerWidth, height: window.innerHeight },
		})
	)

	return (
		<div id='canvas-container'>
			<Canvas
				frameloop='demand'
				dpr={[1, 2]}
				camera={{ position: [-10, 0, 0], fov: 35 }}>
				<color attach={"background"} args={["#101010"]} />
				<ambientLight intensity={3} />
				<spotLight
					intensity={5}
					penumbra={1}
					position={[0, 2, 0]}
					castShadow
					color='white'
				/>
				{/* <Text /> */}
				<Suspense fallback={null}>
					<Model />
				</Suspense>
				<Floor />
				<OrbitControls
					autoRotate
					enablePan={false}
					enableZoom={false}
					enableRotate={true}
					minPolarAngle={Math.PI / 2.6}
					maxPolarAngle={Math.PI / 2.6}
					enableDamping={true}
				/>
				<Stars count={25000} />
			</Canvas>
			<Loader />
		</div>
	)
}
window.dispatchEvent(new Event("resize"))

export default App
