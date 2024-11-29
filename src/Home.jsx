import Navbar from "./Navbar"

function Home() {
   return (
   <div className="flex flex-row">
      <Navbar/>
      <main className="flex-1 p-8">
         <p className="text-xl">
            Hi, I&apos;m <span className="text-orange-500 after:bg-orange-500">Saksham Gupta</span>
         </p>
         <h1 className="h1 mb-5">
            <strong>I make full-stack apps</strong>
         </h1>
         <p>
            Developer, Student . I play Games, read and listen to music for fun.
         </p>
         {/* <h2 className="text-xl mb-5">Latest Projects</h2> */}
      </main>
   </div>
   )
}

export default Home