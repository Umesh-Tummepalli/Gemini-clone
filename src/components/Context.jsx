import { useSelector } from "react-redux";
import LoadAnim from "./LoadAnim";

const Context = () => {
  const response = useSelector((state) => state.gemini);
  
  function formatString(input) {
    // Replace **text** with <b>text</b>
    let formatted = input.replace(/\*\*(.*?)\*\*/g, '<br><b>$1</b>');
    
    // Replace * with <br>
    formatted = formatted.replace(/\*/g, '<br>');
    
    // Replace ```text``` with <div>text</div>
    formatted = formatted.replace(/```([\s\S]*?)```/g, '<div class="bg-black rounded-md p-5  font-mono border-t-8 border-t-red-600">$1</div>');
  
    // Replace . with .<br>
    formatted = formatted.replace(/\:/g, ':<br>');
  
    return formatted;
  }
  
  // Example usage:
  
  
  return (
    <div className="text-white flex flex-col w-full  h-[80vh] overflow-auto py-14 items-center">
      {response.map((data, index) => {
        return (
          <div key={index} className="w-1/2  mb-4 ">
            <div className="flex gap-3 rounded-md p-3 bg-[#5186d2] w-fit">
              <i className="ri-user-fill"></i>
              <div> {data.givenPrompt}</div>
            </div>
            <div className="rounded-md p-3 my-6 bg-[#2c2d2d] w-fit text-justify">
              {data.data === "" ? (
                <LoadAnim />
              ) : (
                <div className="flex gap-2 leading-loose ">
                  <i className="ri-gemini-fill"></i>
                  {
                    <div
                      dangerouslySetInnerHTML={{
                        __html: formatString(data.data),
                      }}
                    />
                  }
                </div>
              )}
            </div>
          </div>
        );
      })}
    </div>
  );
};
export default Context;
