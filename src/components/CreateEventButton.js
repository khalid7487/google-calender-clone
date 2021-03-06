import React, { useContext } from 'react'
import plusimg from '../assets/plus.svg'
import GlobalContext from '../context/GlobalContext'

export default function CreateEventButton() {
    const {setShowEventModal} = useContext(GlobalContext)
    return (
        <button onClick={() => setShowEventModal(true)} className="border py-2 rounded-full flex items-center shadow-md hover:shadow-2xl ">
            <img src={plusimg} alt="plusimg" className="pl-1 w-7 h-7"/>
            <span className="pl-3 pr-7">Create</span>
        </button>
    )
}
