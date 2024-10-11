import {useState} from 'react'
import Chats from './Chats';
const Sidebar = () => {
  const [toggle, settoggle] = useState(true)
  return (
    <div className={`bg-[#1e1f20] text-white h-screen w-fit flex flex-col p-2 transition-all  duration-500 justify-between`}>
      <div className="top text-2xl flex flex-col ">
        <div className="menuicon cursor-pointer px-3 py-2 rounded-full hover:bg-[#2c2d2d] w-fit duration-300"
        onClick={()=>{settoggle(!toggle)}}
        >
          <i className="ri-menu-line"></i>
        </div>
        <div className={`newChat gap-2 mt-10 flex items-center cursor-pointer py-2 opacity-70 bg-[#1a1a1c] rounded-full hover:bg-[#2c2d2d] duration-300 w-fit ${toggle?"px-3":""}`}>
            <span className="text-2xl px-3"><i className="ri-add-fill"></i></span> {toggle?<span className="text-sm">New Chat</span>:""}
        </div>
      </div>
      <Chats toggle={toggle}></Chats>
      <div className="bottom p-2  mb-10">
        <p className={`flex gap-3 cursor-pointer hover:bg-[#2c2d2d] duration-150 w-fit  py-2 rounded-full ${toggle?"px-4":"px-2"}`}><i className="ri-question-line"></i> {toggle?<span className="pr-16">Help</span>:""} </p>
        <p className={`flex gap-3 cursor-pointer hover:bg-[#2c2d2d] duration-150 w-fit  py-2 rounded-full ${toggle?"px-4":"px-2"}`}><i className="ri-history-line"></i> {toggle?<span className="pr-16">Activity</span>:""} </p>
        <p className={`flex gap-3 cursor-pointer hover:bg-[#2c2d2d] duration-150 w-fit  py-2 rounded-full ${toggle?"px-4":"px-2"}`}><i className="ri-settings-3-fill"></i> {toggle?<span className="pr-16">Settings</span>:""} </p>
      </div>
    </div>
  );
};

export default Sidebar;
