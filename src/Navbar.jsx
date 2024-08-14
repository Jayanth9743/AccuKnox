

const Navbar = () => {
  return (
    <div className="fixed top-0 flex items-center justify-around w-full bg-blue-500 ">
      <p className="p-4 text-2xl font-semibold text-white ">Dashboard</p>
      <input type="text" 
      placeholder="search for widget category" className="p-2 w-[40%] rounded-md" />
    </div>
  )
}

export default Navbar
