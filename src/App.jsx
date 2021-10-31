import React, { Suspense } from "react"
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
				camera={{ fov: 75, near: 0.1, far: 100, position: [0, 0, 5] }}></Canvas>
		</div>
	)
}
window.dispatchEvent(new Event("resize"))

export default App
