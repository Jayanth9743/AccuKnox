

const Navbar = () => {
  return (
    <div className="flex justify-around w-full items-center bg-blue-500 ">
      <p className=" text-2xl p-4 font-semibold text-white">Dashboard</p>
      <input type="text" 
      placeholder="search for widget category" className="p-2 w-[40%] rounded-md" />
    </div>
  )
}

export default Navbar
