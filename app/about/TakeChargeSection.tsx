"use client";
import Link from "next/link";
import React from "react";


const Takechargesection = () => {
	
	
	return (
		<div className=" lg:py-[80px] py-[30px]">
			<div className=" lg:w-[85%] w-[90%] max-w-[1220px] mx-auto flex justify-center flex-row">
				<div className=" w-full flex flex-row md:rounded-[40px] max-w-[500px] md:max-w-none rounded-xl border-[0.3px] border-opacity-70 border-primary-border lg:h-[420px] h-[300px]">
					<div className=" md:w-1/2 w-full h-full rounded-l-[40px] flex flex-col ">
						<div className=" md:h-[340px] h-[320px] flex flex-col justify-center gap-y-6 lg:pl-[48px] md:px-6 px-3 items-center md:items-start">
							<p className=" md:text-4xl text-2xl md:text-start md:leading-[50px] leading-8 text-center font-medium tracking-[-0.02px] lg:max-w-[400px] text-primary-black">
								Simplify Finances with Verzo
							</p>
							<p className=" text-lg text-primary-greyBold md:text-start text-center max-w-[400px] leading-6">
								Verzo’s user-friendly tools are designed to save you time and
								ensure accuracy
							</p>
						</div>
						<div className=" border-t-[0.3px] border-primary-border border-opacity-70 flex items-center justify-center lg:justify-start md:h-[106px] h-[120px]">
							<div className=" flex flex-row lg:pl-[48px] lg:gap-x-[36px] md:gap-x-3 gap-x-4 lg:justify-center mt-[-4px]">
								<Link
									
									href="https://beta.verzo.app/auth/signup"
									className="rounded-[10px] bg-primary-brandBlue hover:bg-primary-verzobluehover md:px-10 px-5 py-3 text-base text-white  "
								>
									Sign up
								</Link>
								<Link
									
									href="https://beta.verzo.app/"
									className="rounded-[10px] hover:bg-gray-50 hover:border-gray-300 border border-primary-border flex flex-row gap-x-[6px] bg-white md:px-6 px-5 py-3 text-base text-primary-black"
								>
									Log in
								</Link>
							</div>
						</div>
					</div>
					<div className=" w-1/2 h-full md:block hidden rounded-r-[40px] lg:block bg-primary-darkBlue"></div>
				</div>
			</div>
		</div>
	);
};

export default Takechargesection;
