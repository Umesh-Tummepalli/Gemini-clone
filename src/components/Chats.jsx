
const Chats = ({toggle}) => {
  return (
    <>
        <div className={`${toggle?"block":"hidden"} px-5 transition-all h-1/2 overflow-auto`}>
        <div className="flex gap-3 p-3 rounded-full hover:bg-[#2c2d2d] pr-8 cursor-pointer">
            <span><i className="ri-chat-3-fill"></i></span>
            <span>new chat</span>
        </div>
      </div>
    </>
  )
}
export default Chats