import React, { useRef } from "react";
import emailjs from "@emailjs/browser";

const Contact = () => {
	const form = useRef();

	const sendEmail = (e) => {
		e.preventDefault();

		emailjs
			.sendForm(
				"service_kivofrf",
				"template_34mg6ts",
				form.current,
				"K_na2UKHKwm8JTugD"
			)
			.then(
				(result) => {
					console.log(result.text);
					alert("Message Sent");
				},
				(error) => {
					console.log(error.text);
				}
			);
	};

	return (
		<div className="bg-secondery h-screen pt-20 px-5">
			<h2 className="text-white text-4xl font-bold mb-5 border-b-[5px] w-[180px] border-cyan-600 pb-2">
				Contact
			</h2>

			<form class="mx-auto max-w-xl" ref={form} onSubmit={sendEmail}>
				<label className="block text-sm font-semibold leading-6 text-gray-100">
					Name
				</label>
				<input
					className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
					type="text"
					name="from_name"
				/>
				<label className="block text-sm font-semibold leading-6 text-gray-100">
					Email
				</label>
				<input
					className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
					type="email"
					name="user_email"
				/>
				<label className="block text-sm font-semibold leading-6 text-gray-100">
					Message
				</label>
				<textarea
					name="message"
					rows={4}
					className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
				/>
				<input
					className="block w-full rounded-md bg-indigo-600 mt-10 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
					type="submit"
					value="Send"
				/>
			</form>
		</div>
	);
};

export default Contact;
