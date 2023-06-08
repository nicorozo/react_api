import React, { useState } from 'react'
import { Switch } from '@headlessui/react'
import './Navbar.css'



const Navbar = () => {
    const [enabled, setEnabled] = useState(false)

    return (
        <div className="innerWidth flexCenter navbar">
            <img className='nav-logo' src="https://1.bp.blogspot.com/-Txgu8uawwfU/Tv1YT98TlhI/AAAAAAAAAKM/RA-sZFf85Nw/s320/Small+Business+Logos+4.jpg" alt="" />


            <Switch
                checked={enabled}
                onChange={setEnabled}
                className={`${enabled ? 'bg-neutral-50' : 'bg-slate-900'}
          relative inline-flex h-[28px] w-[54px] shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus-visible:ring-2  focus-visible:ring-white focus-visible:ring-opacity-75`}
            >
                <span className="sr-only">Use setting</span>
                <span
                    aria-hidden="true"
                    className={`${enabled ? 'translate-x-9' : 'translate-x-0'}
            pointer-events-none inline-block h-[24px] w-[24px] transform rounded-full bg-white shadow-lg ring-0 transition duration-200 ease-in-out`}
                />
            </Switch>

        </div>
    )
}

export default Navbar