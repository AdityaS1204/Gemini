import React, { useState } from 'react'
import { assets } from '../../assets/assets'


const Sidebar = () => {
const [extended, setExtended] = useState(false)

    
    return (
        <>

            <div className="h-full p-4 bg-slate-100 w-fit flex flex-col justify-between">
                {/* sidebar */}
                <div className="">
                    {/* top */}
                    <img src={assets.menu_icon} className='size-6 mb-11 cursor-pointer' alt="menu icon" onClick={()=> setExtended(!extended)} />
                    <div className="new-chat px-4 py-4 flex border-0 rounded-full bg-slate-200 items-center gap-4 cursor-pointer hover:bg-slate-300">
                        <img src={assets.plus_icon} className='size-7' alt="new chat" />
                        {extended ? <p className="text-gray-500 text-md">New Chat</p>: null }
                    </div>
                    <div className="recent m-8">
                    {extended ? <p className="font-bold">Recent</p>: null }
                        {extended ?<div className='recent-entry p-3 flex items-center cursor-pointer gap-4 hover:rounded-2xl hover:bg-amber-200 hover:duration-200'>
                            <img src={assets.message_icon}  className='size-6'/>
                            <p>what is react ...</p>
                        </div> : null } 
                    </div>
                </div>
                <div className="">
                    {/* bottom */}              
                    <div className="p-3 flex items-center gap-4 cursor-pointer hover:rounded-2xl hover:bg-amber-200 hover:duration-200">
                        <img src={assets.question_icon} className='size-6' />
                        {extended ? <p className="">Help</p>: null }
                    </div>
                    <div className="p-3 flex items-center gap-4 cursor-pointer hover:rounded-2xl hover:bg-amber-200 hover:duration-200">
                        <img src={assets.history_icon}  className='size-6'/>
                        {extended ? <p className="">Activity</p>: null }
                    </div>
                    <div className="p-3 flex items-center gap-4 cursor-pointer hover:rounded-2xl hover:bg-amber-200 hover:duration-200">
                        <img src={assets.setting_icon} className='size-6' />
                        {extended ? <p className="">Settings</p>: null }
                    </div>
                </div>
            </div>
        </>
    )
}

export default Sidebar