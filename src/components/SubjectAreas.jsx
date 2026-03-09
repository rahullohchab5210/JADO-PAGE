import React from 'react'
import { SUBJECT_DATA } from '../utils/helper'

function SubjectAreas() {
    return (
        <div className='bg-[#1D1F26] pt-[100px] max-md:pt-[80px] pb-[120px] max-md:pb-[80px]'>
            <div className='max-w-285 mx-auto px-3'>
                <div className='flex flex-col items-center gap-[16px] text-center pb-[60px] '>
                    <li className='text-[#EF7D00] font-semibold text-body leading-[100%] tracking-[0%] font-Red-Hat'>Subject Areas</li>
                    <h2 className='font-normal text-heading leading-[120%] tracking-[0%] text-white font-Quintessential'>Industry Expertise That Sets Us Apart</h2>
                    <p className='max-w-[721px] text-[#4C4C4C] font-normal text-body leading-[150%] tracking-[0%]'>Our translators are specialists in their fields, ensuring terminological accuracy and industry-appropriate language for every project.</p>
                </div>
                <div>
                    <div className='flex flex-row  flex-wrap -mx-3 gap-y-6 '>
                        {SUBJECT_DATA.map((item,i) => {  
                            return <div key={i} className='w-full sm:w-1/2 md:w-1/3 lg:w-1/4 px-3'>
                            <div className='bg-[#26282F] border border-[#FEFEFE14] rounded-[24px] flex flex-col items-center gap-4 h-[162px]   justify-center'>
                                <span>{ item.icon}</span>
                                <h6 className='max-w-[120px] text-normal text-[24px] leading-[120%] tracking-[0%] text-center text-white'>{ item.title}</h6>
                            </div>
                        </div>
                        })}  
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SubjectAreas