function Navbar() {
   return (
      <>
         <nav className="fixed top-0 left-0 w-full  text-white p-4 z-50">
            <div>
            <ul className="flex flex-row  justify-center space-x-8">
               <li><a href="/" className="text-black">Home</a></li>
               <li><a href="/about" className="text-black">About Me</a></li>
               <li><a href="/projects" className="text-black">Projects</a></li>
            </ul>
            </div>
         </nav>
      </>
   )
}

export default Navbar;