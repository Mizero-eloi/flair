// import cx from 'classnames';
import logo from "../public/flair-logo.svg"
import google from "../public/google.svg"
import { Head } from "next/document";
import Image from 'next/image'


export default Signup;

function Signup() {
  return (
    <>
<div className="h-96"> 
    <div className="flex">

        <div className="first-left login w-1/2 h-screen">
            <div className="text-login ml-14 mt-72">
            <h1 className="text-4xl font-extrabold text-white">Turn your ideas <br /> into reality</h1>
<p className="text-xl font-normal text-white mt-8">Start for free and get attractive offers from the community</p>

            </div>
        </div>

        <div className="login-side w-1/2">
        

<div className="mt-10 ml-12 ">


<Image
        src={logo}
        alt="Flair logo"
        className="inline relative bottom-2 "

      />
      <span className="text-3xl font-semibold"> Flair</span>
     
</div>
<h1 className="font-extrabold text-4xl mt-8 text-center">Create an account</h1>

<form action="" className="ml-28 mt-10">

    <input type="text" className="focus:outline-none text-l block text-inherit border-b h-18 border-gray-500  font-thin w-4/5 mt-6" placeholder="Enter your full name"/>
    <input type="text" className="focus:outline-none text-l block text-inherit border-b h-18 border-gray-500  font-thin w-4/5 mt-8" placeholder="Enter your username"/>
    <input type="text" className="focus:outline-none text-l block text-inherit border-b h-18 border-gray-500  font-thin w-4/5 mt-8" placeholder="Enter your email or phone number"/>
    
    <input type="password" className="focus:outline-none text-l block text-inherit h-18 font-thin w-4/5 border-b border-gray-500 mt-8" placeholder="Enter your password"/>

    
    
    <input type="submit" name="login" id="" value="Create account" className="ml-8 mt-10 text-base block bg-black h-12 w-96 rounded text-white" />

</form>
<div className="flex h-10 ml-36">
<hr className="w-44 border border-gray-300 mt-4"/> <span className="text-base ml-2">or</span>  <hr className="mt-4 w-44 border-gray-300 ml-4"/>
</div>
    
    <button className="text-base rounded h-12 w-96 text-black border border-gray-300 ml-36"><Image
        src={google}
        alt="google logo"
        className="inline mr-2"

      /> Login with Google</button>
    <p className="text-base float-right mt-7 mr-20"> <span className="text-gray-500">   Already have an account? </span>
 <a href="" className="underline font-medium">Login</a></p>
        </div>
    </div>
</div>
 
    </>
  
  )
}