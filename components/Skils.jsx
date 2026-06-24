import React from "react";

function Skils() {
	const skills = [
		"JavaScript",
		"React",
		"Node.js",
		"HTML",
		"CSS",
		"Python",
	];

	return (
		<section className="skills-section container">
			<h2>Skills</h2>
			<ul className="skills-list">
				{skills.map((s) => (
					<li key={s}>{s}</li>
				))}
			</ul>
		</section>
	);
}

export default Skils;
