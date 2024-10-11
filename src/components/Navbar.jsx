

const Navbar = () => {
  return (
    <>
    <nav className=" py-5 text-white flex justify-between h-fit items-center w-full px-10  ">
        <a className="logo  inline w-fit text-2xl cursor-pointer" href="/">
         Gemini
        </a>
        <div className="flex gap-6 items-center">
        <i className="ri-apps-2-line"></i>
        <i className="ri-gemini-fill"></i>
        </div>
    </nav>
    </>
  )
}

export default Navbar