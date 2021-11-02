import React from 'react'
import logo from '../assets/logo.png';

export default function CalenderHeader() {
    return (
        <header className="px-4 py-2 flex itmes-center">
            <img src={logo} alt="calender" className="mr-2 w-12 h-12" />
        </header>
    )
}
