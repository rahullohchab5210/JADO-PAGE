import React, { useState } from "react";
import Button from "./common/Btn";
import Circle from "./common/Circle";

const AboutUs = () => {
    const [language] = useState(60);
    const [translators] = useState(250);
    const [experience] = useState(15);

    return (
        <div className=" flex items-center justify-center -mx-3 bg-[#F9F9F9] px-4 md:px-6">
            <div className="max-w-285 w-full flex flex-col lg:flex-row items-center justify-between my-16 lg:my-25 gap-12 lg:gap-0 mx-auto px-3 ">

                <div className="text-center lg:text-left max-lg:items-center max-lg:flex max-lg:flex-col px-3">
                    <h6 className='flex items-center gap-[6px] text-[#EF7D00] max-lg:justify-center'>
                        <span> <svg width="6" height="6" viewBox="0 0 6 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <circle cx="3" cy="3" r="3" fill="#EF7D00" />
                        </svg>
                        </span>
                        About Us
                    </h6>

                    <h2 className="mt-4 max-w-115.25 max-lg:max-w-full font-normal text-3xl md:text-4xl lg:text-5xl leading-[120%] text-[#1D1F26]">
                        Your Trusted Partner in Communication
                    </h2>

                    <p className="mt-4 max-w-115.25 max-lg:max-w-full text-[#4C4C4C] text-sm md:text-base font-normal leading-[150%]">
                        For over 15 years, JADO has been bridging language barriers for
                        businesses and individuals worldwide. Our team of 250+ certified
                        translators covers 60+ languages, ensuring your message resonates
                        authentically across cultures.
                    </p>

                    <Button
                        text={"Learn More"}
                        className="mt-8 border border-[#1D1F26] rounded-xl py-[13.5px] px-5 text-[#1D1F26] text-base font-semibold leading-[100%] hover:bg-black hover:border-black hover:text-white transition-all duration-300"
                    />
                </div>

                <div className="relative mt-4 w-75 h-75 sm:w-90 sm:h-90 lg:w-105 lg:h-105 lg:right-10 px-3">

                    <Circle
                        number={language}
                        text={"Languages"}
                        className="absolute top-0 left-0 h-32 w-32 sm:h-40 sm:w-40 lg:h-48 lg:w-48"
                    />

                    <Circle
                        number={translators}
                        text={"Expert Translators"}
                        className="absolute -top-10 -right-2 sm:-top-16 sm:-right-10 lg:-top-20 lg:-right-15 h-40 w-40 sm:h-56 sm:w-56 lg:h-72 lg:w-72"
                    />

                    <Circle
                        number={experience}
                        text={"Years of Experience"}
                        className="absolute bottom-0 left-2 sm:left-3 h-40 w-40 sm:h-48 sm:w-48 lg:h-56 lg:w-56"
                    />

                    <Circle
                        support={"24/7"}
                        text={"Support"}
                        className="absolute bottom-6 right-2 sm:right-4 lg:bottom-13 lg:right-6 h-28 w-28 sm:h-32 sm:w-32 lg:h-40 lg:w-40"
                    />

                </div>
            </div>
        </div>
    );
};

export default AboutUs;