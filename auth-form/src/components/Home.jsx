import React, { use } from 'react'
import { useState } from 'react'
import Modal from './Modal';
import SideBar from './SideBar';

function Home() {
const [modalOpen, setModalOpen] = useState(false);
const [userName , setUserName] = useState('');

function setModalToggle(){
    setModalOpen((prev)=>!prev);
    console.log(modalOpen);
}
  return (
    <div>
        <button className={userName?'d-none':'btn-sign-in'} onClick={setModalToggle}>Sign in</button>
        <button className={userName?'btn-sign-in':'d-none'}>Add New Goal</button>
        <div>
        <p className='typewriter'> Hi {userName?`${userName} What's on your mind?`:`Stranger`}</p>
        </div>
        <div className={`${modalOpen?'':'d-none'}`}>
            < Modal setModalOpen={setModalOpen} modalOpen={modalOpen} userName={userName} setUserName={setUserName}/>
        </div>
        <SideBar userName={userName} />
    </div>
  )
}

export default Home