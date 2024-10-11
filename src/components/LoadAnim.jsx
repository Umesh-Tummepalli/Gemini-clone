
const LoadAnim = () => {
  return (
  <div className="flex flex-col gap-2">
    <div className="text-2xl animate-spin flex justify-center items-center w-fit h-fit">
    <i className="ri-gemini-fill text-[#5186d2]"></i>
  </div>
    <p className="w-[50vw] bg-gradient-to-r from-cyan-500 to-blue-500 animate-pulse  h-2 p-2 rounded-full opacity-15"></p>
    <p className="w-[50vw] bg-gradient-to-r from-cyan-500 to-blue-500 animate-pulse  h-2 p-2 rounded-full opacity-45"></p>
    <p className="w-[50vw] bg-gradient-to-r from-cyan-500 to-blue-500 animate-pulse  h-2 p-2 rounded-full opacity-60"></p>
  </div>
  )
}
export default LoadAnim