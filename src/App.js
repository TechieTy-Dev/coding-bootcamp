import "./App.css";
import { useState } from "react";
import { quotes, next, prev, curve, john, tanya } from "./images";
function App() {
	const [slide, setSlide] = useState();

	function displayJohn(event) {
		event.preventDefault();
		setSlide("john");
	}

	function displayTanya(event) {
		event.preventDefault();
		setSlide("tanya");
	}

	if (slide === "tanya") {
		return (
			<div className="App">
				<section className="pt-12 lg:flex lg:flex-row-reverse lg:items-center lg:justify-center bg-white ">
					<div className="bg w-[100%] h-[50vh] pt-8 relative lg:ml-[-12rem] lg:h-[80vh] lg:w-[80%]">
						{/* Profile Pic */}
						<img
							src={tanya}
							alt="tanya"
							className=" w-[60%] mx-auto shadow-2xl rounded-md lg:w-[60%] lg:mt-12"
						/>
						<div className="flex bg-white w-[5.5rem] absolute left-[200px] bottom-4 p-2.5 rounded-full justify-between shadow-md   lg:bottom-[3rem] lg:left-[215px]">
							{/* Prev Btn */}
							<button onClick={displayJohn}>
								<img
									src={prev}
									alt="prev
					"
								/>
							</button>
							{/* Next Btn */}
							<button onClick={displayJohn}>
								<img
									src={next}
									alt="next
					"
								/>
							</button>
						</div>
					</div>
					{/* Testimonial */}
					<div className=" mt-12 flex flex-col items-center justify-center lg:w-[80%] lg:text-left lg:items-start lg:mr-[-12rem] lg:pl-44 lg:z-10">
						<img src={quotes} alt="quotes" className="w-24  lg:ml-24" />
						<p className="text-darkblue font-light mt-[-3rem] w-[90%] tracking-wide lg:leading-[3.25rem] lg:w-[85%]">
							{" "}
							“ I’ve been interested in coding for a while but never taken the
							jump, until now. I couldn’t recommend this course enough. I’m now
							in the job of my dreams and so excited about the future. ”
						</p>
						{/* User Details */}
						<div className="mt-4 lg:text-left lg:flex lg:gap-3 lg:pt-8	">
							{/* Name */}
							<h1 className="font-bold text-darkblue text-2xl">
								{" "}
								Tanya Sinclair
							</h1>
							{/* Job Title */}
							<span className="font-light text-lightblue text-2xl">
								{" "}
								UX Engineer
							</span>
						</div>
					</div>
				</section>
				<img src={curve} alt="curve" className="w-[60%] lg:w-[40%]" />
			</div>
		);
	} else {
		return (
			<div className="App">
				<section className="pt-12 lg:flex lg:flex-row-reverse lg:items-center lg:justify-center bg-white ">
					<div className=" bg w-[100%] h-[50vh] pt-8 relative lg:ml-[-12rem] lg:h-[80vh] lg:w-[80%]">
						{/* Profile Pic */}
						<img
							src={john}
							alt="john"
							className=" w-[60%] mx-auto shadow-2xl rounded-md lg:w-[60%] lg:mt-12"
						/>
						<div className="flex bg-white w-[5.5rem] absolute left-[200px] bottom-4 p-2.5 rounded-full justify-between shadow-md   lg:bottom-[3rem] lg:left-[215px]">
							{/* Prev Btn */}
							<button onClick={displayTanya}>
								<img
									src={prev}
									alt="prev
		"
								/>
							</button>
							{/* Next Btn */}
							<button onClick={displayTanya}>
								<img
									src={next}
									alt="next
		"
								/>
							</button>
						</div>
					</div>
					<div className=" mt-12 flex flex-col items-center justify-center lg:w-[80%] lg:text-left lg:items-start lg:mr-[-12rem] lg:pl-44 lg:z-10">
						<img src={quotes} alt="quotes" className="w-24  lg:ml-24" />
						{/* Testimonial Quote */}
						<p className="text-darkblue font-light mt-[-3rem] w-[90%] tracking-wide lg:leading-[3.25rem] lg:w-[85%]">
							{" "}
							“ If you want to lay the best foundation possible I’d recommend
							taking this course. The depth the instructors go into is
							incredible. I now feel so confident about starting up as a
							professional developer. ”
						</p>
						{/* User Details */}
						<div className="mt-4 lg:text-left lg:flex lg:gap-3 lg:pt-8	">
							{/* Name */}
							<h1 className="font-bold text-darkblue text-2xl">
								{" "}
								John Tarkpor
							</h1>
							{/* Job Title */}
							<span className="font-light text-lightblue text-2xl">
								{" "}
								Junior Front-end Developer
							</span>
						</div>
					</div>
				</section>
				<img src={curve} alt="curve" className=" w-[60%] lg:w-[40%]" />
			</div>
		);
	}
}

export default App;
