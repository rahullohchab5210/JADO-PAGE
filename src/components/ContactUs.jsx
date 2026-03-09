import React from 'react'
import Button from './common/Btn'
import Form from './common/Form'

function ContactUs() {
    return (
            <div className="bg-[url('/assets/images/hero_bg.png')] bg-no-repeat bg-cover bg-center h-full ">
                <div className='pt-[100px] max-md:pt-[80px] pb-[168px] max-md:pb-[80px]'>
                    <div className="max-w-285 px-3 mx-auto">
                        <div className='flex flex-row max-lg:flex-wrap max-lg:gap-y-10 justify-between max-lg:items-center max-lg:justify-center'>
                            <div className=' max-sm:w-full'>
                                <div className='flex flex-col gap-10 max-sm:items-center'>
                                    <div className='flex flex-col gap-[16px] max-w-[426px] max-lg:max-w-full '>
                                        <h6 className='flex items-center gap-[6px] text-[#EF7D00] max-lg:justify-center'>
                                            <span> <svg width="6" height="6" viewBox="0 0 6 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <circle cx="3" cy="3" r="3" fill="#EF7D00" />
                                            </svg>
                                            </span>
                                            Contact Us
                                        </h6>
                                        <h1 className='max-lg:text-center font-normal text-heading font-Quintessential leading-[120%] tracking-[0%] text-[#1D1F26]'>Let's Start Your Translation Project</h1>
                                        <p className='max-lg:text-center text-body font-normal leading-[150%] tracking-[0%] text-[#4C4C4C] '>Get a free quote within hours. Tell us about your project and our team will get back to you with a tailored solution.</p>
                                    </div>
                                    <span><svg className='w-full max-lg:max-w-full' width="426" height="1" viewBox="0 0 426 1" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <line opacity="0.12" y1="0.5" x2="426" y2="0.5" stroke="#1D1F26" />
                                    </svg>
                                    </span>
                                    <div className='flex flex-col gap-3 lg:flex-col max-lg:justify-between min-[430px]:flex-row max-sm:justify-center'>
                                        <p className='flex flex-col text-body text-normal leading-[150%] tracking-[0%] text-[#4C4C4C]'>Email<span className='text-subtitle font-semibold text-[#1D1F26]'>info@jado.com</span></p>
                                        <p className='flex flex-col text-body text-normal leading-[150%] tracking-[0%] text-[#4C4C4C]'>Phone<span className='text-subtitle font-semibold text-[#1D1F26]'>+1 (555) 123-4567</span></p>
                                    </div>
                                </div>
                            </div>

                            <div className='max-w-[516px] w-full'>
                                <Form
                                    formCss={"w-full"}
                                    inputCss={"px-4 py-3 rounded-[12px] bg-[#f9f9f9] w-full"}
                                    titleCss={"text-base font-semibold"}
                                    textareaCss={
                                        "h-[131px] px-4 py-3 bg-[#f9f9f9] rounded-[12px] w-full"
                                    }
                                    fields={[
                                        { type: "text", placeholder: "John Doe", label: "Full Name", name: "username" },
                                        {
                                            type: "email",
                                            placeholder: "john123@gamil.com",
                                            label: "Email Address",
                                            name: "useremail"
                                        },
                                        {
                                            type: "text",
                                            placeholder: "John Technologies Limited",
                                            label: "Company",
                                            name: "usercompony"
                                        },
                                        {
                                            type: "textarea",
                                            placeholder:
                                                "We want to get our server reports translated from...",
                                            label: "Message",
                                            name: "usermessage"
                                        },
                                    ]}
                                    buttonText={"Submit"}
                                    btcss={
                                        "bg-[#EF7D00] py-[13.5px] w-full rounded-[12px] text-white"
                                    }
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
       
    )
}

export default ContactUs