import React from "react"

function Floor() {
	return (
		<mesh
			scale={100}
			rotation-x={-Math.PI / 2}
			position={[0, 0, 0]}
			receiveShadow>
			<circleGeometry args={[0.035, 32, 32]} />
			<meshStandardMaterial color={"#101010"} />
		</mesh>
	)
}

export default Floor
