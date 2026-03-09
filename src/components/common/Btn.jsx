import React from 'react'

function Button(props) {
    return (
        <button className={`border border-[#1D1F26] text-[#1D1F26] text-body px-5 py-[13.5px] rounded-xl font-semibold  leading-[100%] tracking-[0%] text-nowrap cursor-pointer capitalize ${props.className} `}>
            {props.text}
        </button>
    )
}

export default Button