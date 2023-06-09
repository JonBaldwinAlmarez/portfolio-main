import React from "react";
import beachResort from "../assets/beach_picture.png";
import WeatherApp from "../assets/weather_app.png";
import fastfood from "../assets/fast-food.png";

const Projects = () => {
	const projects = [
		{
			img: fastfood,
			title: "Best Food",
			desc: "Fast food website built with React and Tailwindcss",
			live: "https://burger-and-pizza-menu.netlify.app/",
			code: "https://github.com/JonBaldwinAlmarez/food-menu",
		},
		{
			img: WeatherApp,
			title: "Weather App project",
			desc: "Weather App built with React, Tailwindcss and vite",
			live: "https://basic-weather-website.netlify.app/",
			code: "https://github.com/JonBaldwinAlmarez/weather_app_react_tailwind-main",
		},
		{
			img: beachResort,
			title: "devlog",
			desc: " A Beach Website. Built with Vite, React and Tailwindcss ",
			live: "https://beach-park.netlify.app/",
			code: "https://github.com/JonBaldwinAlmarez/Beach-homepage-main",
		},
	];

	return (
		<section className="bg-primary text-white px-5 py-32" id="projects">
			<div className="container mx-auto grid md:grid-cols-2 items-center md:justify-between">
				<div className="about-info mb-5">
					<h2 className="text-4xl font-bold mb-5 border-b-[5px] w-[180px] border-cyan-600 pb-2">
						Projects
					</h2>

					<p className="pb-5">
						Here are some of my best projects. I have built these with React,
						Vite and vanilla CSS. Check them out.
					</p>
				</div>

				<div className="about-img"></div>
			</div>

			<div className="projects container mx-auto grid md:grid-cols-3 gap-10">
				{projects.map((project, i) => {
					return (
						<div className="relative" key={i}>
							<img src={project.img} alt={project.title} />
							<div className="flex absolute left-0 right-0 top-[13px] bottom-0 mx-auto w-[90%] h-[90%]  bg-primary opacity-0 duration-500 justify-center flex-col hover:opacity-100 ">
								<p className="py-5 text-center font-bold px-2 text-white">
									{project.desc}
								</p>

								<div className="mx-auto">
									<a
										href={project.live}
										className="px-5 py-2 bg-cyan-500 hover:bg-cyan-800 mr-5 font-bold rounded-xl"
									>
										Live
									</a>
									<a
										href={project.code}
										className="px-5 py-2 bg-blue-500 hover:bg-blue-800 font-bold rounded-xl"
									>
										Code
									</a>
								</div>
							</div>
						</div>
					);
				})}
			</div>
		</section>
	);
};

export default Projects;
