import { useState } from "react";
import { useDispatch } from "react-redux";
// import { getResponse } from '../slices/gemSlice'
import { getAsyncRes } from "../slices/gemSlice";
const Search = () => {
  const [Prompt, setPrompt] = useState("");
  const dispatch = useDispatch();
  function handleGetResponse() {
    var prompttt = Prompt;
    setPrompt("");
    dispatch(getAsyncRes(prompttt));
  }
  return (
    <div className="flex justify-center relative text-white mb-4 ">
      <div className=" bg-[#1e1f20] rounded-full overflow-hidden px-3 py-2 w-1/2 flex justify-between items-center">
        <input
          type="text"
          placeholder="Enter a Prompt here"
          value={Prompt}
          onChange={(e) => {
            setPrompt(e.target.value);
          }}
          onKeyPress={(e) => {
            if (e.key === "Enter") handleGetResponse();
          }}
          className="bg-[#1e1f20] py-3 px-4 focus:outline-none w-full"
        />
        <span
          className="p-3 mx-3 cursor-pointer rounded-full hover:bg-[#282a2c]"
          onClick={() => handleGetResponse()}
        >
          <i className="ri-send-plane-2-fill"></i>
        </span>
      </div>
    </div>
  );
};
export default Search;
