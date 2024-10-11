import { useSelector } from "react-redux";
import Context from "./Context";

const Hero = () => {
  const response = useSelector((state) => state.gemini);
  return (
    <>
    { response.length===0?
     <div className="border-solid text-white h-full p-3 flex flex-col justify-center items-center">
      <p className="text-2xl text-[#b66ca3]">Hello,Dev</p>
      <p className="text-2xl ">How can i help?</p>
    </div>
    :
    <Context/>
    }
    </>
    
  );
};

export default Hero;
