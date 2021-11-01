import React, { Suspense } from "react"
import { Canvas, render, events } from "@react-three/fiber"
import { OrbitControls, Stage } from "@react-three/drei"
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
				shadows
				dpr={[1, 2]}
				camera={{ fov: 75, near: 0.1, far: 100, position: [0, 0, 5] }}>
				<Suspense fallback={null}>
					<Stage
						environment={null}
						intensity={1}
						contactShadowOpacity={1}
						shadowBias={-0.0015}>
						<Model />
					</Stage>
					<OrbitControls />
				</Suspense>
			</Canvas>
		</div>
	)
}
window.dispatchEvent(new Event("resize"))

export default App
