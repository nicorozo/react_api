import React, { useState } from 'react'
import { Switch } from '@headlessui/react'
import { SiCircle } from "react-icons/si";
import './Navbar.css'



const Navbar = () => {
    const [enabled, setEnabled] = useState(false)

    return (
        <div className="flexCenter navbar">
            <div className='innerwidth flexStart'>
                <SiCircle className='nav-logo' />
                <h2 className="innerWidth nav-logo">Nobel Prize API </h2>
            </div>

            <Switch
                checked={enabled}
                onChange={setEnabled}
                className={`${enabled ? 'bg-neutral-500' : 'bg-slate-900'}
          relative inline-flex h-[22px] w-[38px] shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus-visible:ring-2  focus-visible:ring-white focus-visible:ring-opacity-75`}
            >
                <span className="sr-only">Use setting</span>
                <span
                    aria-hidden="true"
                    className={`${enabled ? 'translate-x-4' : 'translate-x-0'}
            pointer-events-none inline-block h-[18px] w-[18px] transform rounded-full bg-white shadow-lg ring-0 transition duration-200 ease-in-out`}
                />
            </Switch>

        </div>
    )
}

export default Navbar