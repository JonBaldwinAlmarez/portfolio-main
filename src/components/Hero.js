import React from "react";

import { AiFillLinkedin, AiFillGithub } from "react-icons/ai";

const Hero = () => {
	return (
		<section className="bg-primary px-5 text-white py-32">
			<div className="container mx-auto grid md:grid-cols-2 items-center justify-center md:justify-between">
				<div className="hero-info pb-5 md:pb-0">
					<h1 className="text-4xl lg:text-6xl">
						Hi, <br />I am <span className="text-accent">Jon</span> <br />
						Front-end Developer
					</h1>

					<p className="py-5">
						I am proficient in Tailwind CSS, React.js and JavaScript
					</p>

					<div className="flex py-5 ">
						<a
							href="https://www.linkedin.com/in/jon-baldwin-a-069988229/"
							className="pr-4 inline-block text-accent hover:text-white"
						>
							{" "}
							<AiFillLinkedin size={40} />{" "}
						</a>
						<a
							href="https://github.com/JonBaldwinAlmarez"
							className="pr-4 inline-block text-accent hover:text-white"
						>
							{" "}
							<AiFillGithub size={40} />{" "}
						</a>
					</div>

					<a
						href="/#projects"
						className=" btn bg-accent  border-2 border-[#050dff] text-white px-6 py-3 hover:bg-transparent rounded-lg"
					>
						See Projects
					</a>
				</div>

				<div className="hero-img">
					<img
						src="https://media.istockphoto.com/id/1406684959/es/vector/ilustraci%C3%B3n-3d-moderna-del-concepto-de-programaci%C3%B3n-de-young-man.jpg?s=612x612&w=0&k=20&c=ou5XLYDa9qYq87ENNkJY7Ldr1koqh6_ZwF_pf6DFhCI="
						alt="coding illustration"
						className="lgw-[80%] ml-auto rounded-lg"
					/>
				</div>
			</div>
		</section>
	);
};

export default Hero;
