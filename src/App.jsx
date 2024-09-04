import Logo from './assets/100x-logo.svg'
import Home from "./pages/Home";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import CreateAccountStepI from "./Pages/login/CreateAccountStepI";
import CreateAccountStepII from "./Pages/login/CreateAccountStepII";
import CreateAccountStepIII from "./Pages/login/CreateAccountStepIII";
import CreateAccountStepVI from "./Pages/login/CreateAccountStepIV";
function App() {

  return (
    <>
     <div className='bg-black'> 
  <br />
  <header className=" m-1 p-1 space-y-5 flex fixed justify-center items-center w-full">
    <img src={Logo}/>
    </header>
  <br />
  <br />
  <section><h1 className="text-Neutral/50 font-bold  text-center">Happening Today.</h1>
    <p className="text-Neutral/50 font-bold text-center">Join Today.</p>
  </section>
  <div className="flex flex col justify-center items-center my-5 font-bold font-Inter ">
    <a href="./">
      <button className="bg-Neutral/50 shadow-md backdrop-blur-24 rounded-full px-8 py-2 w-80 ">
        <div>Create account</div> 
      </button>
    </a>   
  </div>
  <div className="flex items-center">
    <hr className="mr-2 flex-grow border-t-2 border-neutral-700" />
    <span className="font-regular text-base leading-normal text-Neutral/50">or</span>
    <hr className="ml-2 flex-grow border-t-2 border-neutral-700" />
  </div>
  <div className="flex flex-col gap-5">
    <p className="text-base text-center font-medium leading-normal text-Neutral/50">
      Already have an account?
    </p>
    <div className="flex flex col justify-center items-center my-5 font-bold font-Inter">
      <a href="/5-Twitter-Layout/src/home-feed/index.html">    
        <button className="  text-Neutral/500 border border-blue-default bg-transparent shadow-md backdrop-blur-24 rounded-full px-8 py-2 w-80 ">
          <div className="text-blue-default">Log in</div> 
        </button></a>
    </div>
  </div></div>

  
  
     </>
  )
}

export default App
