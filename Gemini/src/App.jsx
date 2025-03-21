import { useState } from 'react'
import './App.css'
import Sidebar from './components/sidebar/Sidebar';
import Main from './components/main/Main';

function App() {
  let username = 'Username';

  return (
    <div className='h-[100vh] flex'>
    <Sidebar/>
    <Main/>
    </div>
  )
}

export default App
