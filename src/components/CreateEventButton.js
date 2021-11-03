import React from 'react'
import plusimg from '../assets/plus.svg'

export default function CreateEventButton() {
    return (
        <button className="border py-2 rounded-full flex items-center shadow-md hover:shadow-2xl ">
            <img src={plusimg} alt="plusimg" className="pl-1 w-7 h-7"/>
            <span className="pl-3 pr-7">Create</span>
        </button>
    )
}
