import React, { useContext, useState } from 'react'
import { assets } from '../../assets/assets'
import ReactMarkdown from "react-markdown";
import { Context } from '../../context/Context'


const Main = () => {
  const [username, setUsername] = useState('user.')
  const [isinputempty, SetIsinputempty] = useState(true)
  const [prompt, setPrompt] = useState('')

  const { loading, onSent, recentPrompt, showResult, input, setInput, resultData } = useContext(Context);



  return (
    <div className='flex-1'> {/* main div */}
      <div className="flex justify-between items-center mt-4 mx-3 "> {/* nav div */}
        <p className='text-2xl text-[#585858] font-semibold'>Gemini</p>
        <img src={assets.user_icon} className='rounded-full size-14' />
      </div>
      <div className="main-container flex flex-col w-[900px] m-auto">
        {/* main container */}

        {!showResult ? <>
          <div className="greet text-6xl font-bold mb-16 mt-16">
            <p className='mb-3'>Hello,{username}</p>
            <p className='text-gray-300'>How can I help you today?</p>
          </div>
          <div className="cards flex mt-24 gap-3.5 ">
            <div className="relative card p-5 rounded-xl bg-slate-200 h-48 w-1/4 hover:bg-slate-300 cursor-pointer ">
              <p className='text-xl text-gray-700'>suggest beautifull place to see on a road trip</p>
              <img src={assets.compass_icon} className='size-9 absolute bottom-4 right-3 bg-white rounded-full' />
            </div>
            <div className="relative card p-5 rounded-xl bg-slate-200 h-48 w-1/4 hover:bg-slate-300 cursor-pointer">
              <p className='text-xl text-gray-700'>Improve the readability of the following code</p>
              <img src={assets.code_icon} className='size-8 absolute bottom-4 right-3 bg-white rounded-full ' />
            </div>
            <div className="relative card p-5 rounded-xl bg-slate-200 h-48 w-1/4 hover:bg-slate-300 cursor-pointer">
              <p className='text-xl text-gray-700'>Write a bed time story for 5 yr old</p>
              <img src={assets.bulb_icon} className='size-8 absolute bottom-4 right-3 bg-white rounded-full ' />
            </div>
            <div className="relative card p-5 rounded-xl bg-slate-200 h-48 w-1/4 hover:bg-slate-300 cursor-pointer">
              <p className='text-xl text-gray-700'>Write a bed time story for 5 yr old</p>
              <img src={assets.message_icon} className='size-8 absolute bottom-4 right-3 bg-white rounded-full ' />
            </div>
          </div>
        </> : <div className='result overflow-y-scroll max-h-[70vh] m-0'>
          {/* result */}
          <div className="flex gap-2 mb-3.5">
            <img src={assets.user_icon} className='rounded-full size-10' />
            <p className="bg-amber-200 p-2 rounded-xl">{recentPrompt}</p>
          </div>
          <div className="flex gap-2">
            <img src={assets.gemini_icon} className='rounded-full size-10' />
            {loading ? <>

              <div role="status" className="space-y-2.5 animate-pulse max-w-lg">
                <div className="flex items-center w-full">
                  <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-32"></div>
                  <div className="h-2.5 ms-2 bg-gray-300 rounded-full dark:bg-gray-600 w-24"></div>
                  <div className="h-2.5 ms-2 bg-gray-300 rounded-full dark:bg-gray-600 w-full"></div>
                </div>
                <div className="flex items-center w-full max-w-[480px]">
                  <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-full"></div>
                  <div className="h-2.5 ms-2 bg-gray-300 rounded-full dark:bg-gray-600 w-full"></div>
                  <div className="h-2.5 ms-2 bg-gray-300 rounded-full dark:bg-gray-600 w-24"></div>
                </div>
                <div className="flex items-center w-full max-w-[400px]">
                  <div className="h-2.5 bg-gray-300 rounded-full dark:bg-gray-600 w-full"></div>
                  <div className="h-2.5 ms-2 bg-gray-200 rounded-full dark:bg-gray-700 w-80"></div>
                  <div className="h-2.5 ms-2 bg-gray-300 rounded-full dark:bg-gray-600 w-full"></div>
                </div>
                <div className="flex items-center w-full max-w-[480px]">
                  <div className="h-2.5 ms-2 bg-gray-200 rounded-full dark:bg-gray-700 w-full"></div>
                  <div className="h-2.5 ms-2 bg-gray-300 rounded-full dark:bg-gray-600 w-full"></div>
                  <div className="h-2.5 ms-2 bg-gray-300 rounded-full dark:bg-gray-600 w-24"></div>
                </div>
                <div className="flex items-center w-full max-w-[440px]">
                  <div className="h-2.5 ms-2 bg-gray-300 rounded-full dark:bg-gray-600 w-32"></div>
                  <div className="h-2.5 ms-2 bg-gray-300 rounded-full dark:bg-gray-600 w-24"></div>
                  <div className="h-2.5 ms-2 bg-gray-200 rounded-full dark:bg-gray-700 w-full"></div>
                </div>
                <div className="flex items-center w-full max-w-[360px]">
                  <div className="h-2.5 ms-2 bg-gray-300 rounded-full dark:bg-gray-600 w-full"></div>
                  <div className="h-2.5 ms-2 bg-gray-200 rounded-full dark:bg-gray-700 w-80"></div>
                  <div className="h-2.5 ms-2 bg-gray-300 rounded-full dark:bg-gray-600 w-full"></div>
                </div>
                <span className="sr-only">Loading...</span>
              </div>

            </> : <p dangerouslySetInnerHTML={{ __html: resultData }} className='bg-slate-100 p-2 rounded-xl'>
              <ReactMarkdown>{resultData}</ReactMarkdown>
            </p>
            }
          </div>
        </div>}

        <div className="absolute bottom-8 w-[900px]">  {/* main bottom */}
          <div className="search flex items-center bg-slate-200 rounded-full w-full text-xl gap-2 px-3.5 mb-2.5">
            <input type="text" value={input} className='bg-slate-200 w-full rounded-full text-xl p-5 py-4 outline-none' placeholder='Enter your prompt' onChange={(e) => {
              let inputLen = e.target.value.length
              setInput(e.target.value)
              inputLen >= 1 ? SetIsinputempty(false) : SetIsinputempty(true)
            }} />

            <img src={assets.gallery_icon} className='size-8 cursor-pointer ml-2' onClick={() => { }} />
            <img src={assets.mic_icon} className='size-8 cursor-pointer' onClick={() => { }} />
            {isinputempty ? null : <img src={assets.send_icon} className='size-8 cursor-pointer' onClick={() => {
              onSent(input)
            }} />}

          </div>
          <p className='text-sm text-center'>Gemini may display inaccurate info, including about people, so double-check its responses. Your privacy and Gemini Apps</p>
        </div>
      </div>
    </div>
  )
}

export default Main