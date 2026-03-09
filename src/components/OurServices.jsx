import React from 'react'
import { CARD_DATA } from '../utils/helper'
import Icons2 from './common/Icon'

function OurServices() {
    return (
        <div className='mt-37.5 max-md:mt-20'>
            <div className='max-w-285 px-3 mx-auto w-full'>
                <div className='flex flex-col gap-15 max-md:gap-5'>
                    <div className=' flex flex-row justify-between  max-sm:flex-col-reverse max-sm:items-center max-sm:gap-4 max-sm:text-center'>
                        <h2 className='font-normal text-heading leading-[120%] tracking-[0%] text-[#1D1F26] max-w-100.5  font-Quintessential'>Translation Solutions
                            for Every Need</h2>
                        <li className=' text-[#EF7D00] text-body font-semibold font-Red-Hat leading-[100%] tracking-[0%]  '>
                            Our Services
                        </li>
                    </div>
                    <span><svg className='w-full' width="1140" height="1" viewBox="0 0 1140 1" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <line opacity="0.12" y1="0.5" x2="1140" y2="0.5" stroke="#1D1F26" />
                    </svg>
                    </span>
                    <div className='mt-60px] mb-37.5 max-md:mb-20'>
                        <div className='flex flex-row flex-wrap -mx-3 gap-y-6 '>
                            {CARD_DATA.map((card, i) => {
                                return <div key={i} className='w-full sm:w-1/2 lg:w-1/3 px-2'>
                                    <div className='p-6 shadow-[-10px_0px_50px_0px_rgba(0,0,0,0.06)] bg-white  border border-[#1D1F261F] rounded-[25px] hover:shadow-2xl hover:border-white transition duration-300 '>
                                        <span><Icons2 icon={card.icon} /></span>
                                        <h3 className='pt-3 pb-5 font-semibold text-subtitle leading-[150%] tracking-[0%]'>{card.title}</h3>
                                        <div className='flex flex-row  flex-wrap gap-2'>
                                            {card.tags.map((tag, j) => {
                                                return <span key={j} className='px-4 py-2 border border-[#1D1F261F] rounded-[999px] font-semibold text-[12px] leading-[100%] trcaking-[0%]'>{tag}</span>

                                            })}
                                        </div>
                                        <p className='pt-12 max-w-79 font-normal text-body leading-[150%] tracking-[0%] max-lg:max-w-full'>Industry-specific translations by subject matter experts. We understand the nuances of technical, legal, medical, and financial terminology to ensure accuracy and context.</p>
                                    </div>
                                </div>
                            })}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default OurServices