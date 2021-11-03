import React, { Suspense } from "react"
import { Canvas, render, events } from "@react-three/fiber"
import { OrbitControls, Stars, Loader } from "@react-three/drei"
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
			<Canvas
				frameloop='demand'
				dpr={[1, 2]}
				camera={{ position: [-10, 0, 0], fov: 45 }}>
				<color attach={"background"} args={["#101010"]} />
				<spotLight
					color='white'
					intensity={0.7}
					position={[0, 3, 0]}
					penumbra={1}
				/>
				<ambientLight intensity={1} color={"white"} />
				<Suspense fallback={null}>
					<Model />
					<mesh scale={100} rotation-x={-Math.PI / 2}>
						<planeGeometry />
						<meshStandardMaterial color={"#101010"} />
					</mesh>
					<OrbitControls
						autoRotate
						enablePan={true}
						enableZoom={false}
						enableRotate={true}
						minPolarAngle={Math.PI / 2.1}
						maxPolarAngle={Math.PI / 2.1}
						enableDamping={true}
					/>
					<Stars count={25000} />
				</Suspense>
			</Canvas>
			<Loader />
		</div>
	)
}
window.dispatchEvent(new Event("resize"))

export default App
