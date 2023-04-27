import React from "react";
import AboutImg from "../assets/programmer.png";

const About = () => {
	return (
		<section className="bg-secondery text-white px-5 py-32" id="about">
			<div className="container mx-auto grid md:grid-cols-2 items-center justify-center md:justify-between">
				<div className="about-info">
					<h2 className="text-4xl font-bold mb-5 border-b-[5px] w-[180px] border-cyan-600 pb-2">
						About Me
					</h2>

					<p className="pb-5">
						Hi, My Name is Jon Almarez everyone calls me Jon I am a Front-end
						Developer.
					</p>
					<p className="pb-5">
						My field of knowledge is React.js, Tailwind CSS and basics like
						HTML, CSS and JavaScript.
					</p>

					<p className="pb-5">
						I just began my coding journey as I'am Computer Engineering student
						expected to graduate next year. I decided to apply for a website
						developer job in a hope to further advance my coding skill while
						helping to finance my education.
					</p>

					<p>
						I maybe inexperienced but I'am desperate for knowledge in this
						industry and programming in general. Time and Hard Work is what I
						can offer to your business.
					</p>
				</div>

				<div className="about-img">
					<img
						src={AboutImg}
						alt="coding illustration"
						className="lg:w-[60%] md:ml-auto"
					/>
				</div>
			</div>
		</section>
	);
};

export default About;
