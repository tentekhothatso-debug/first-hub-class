import React from "react"
import { GiHamburgerMenu } from "react-icons/gi";
import { FaInstagram, FaTiktok } from "react-icons/fa";
import { FaFacebookF , FaLinkedinIn} from "react-icons/fa";


const App = () => {
    
   return (
   <> 
   <div className="min-h-screen w-screen bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white flex items-center justify-center px-6 sm:col-2 md:col:2 xl:2">
    <div className="text-white py-1 absolute top-0 left-0 w-screen z-9999 m-0 w-full">
        <div className=" w-screen bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white flex items-center space-x-2 justify-center px-6 shadow-sm">
            <p className="text-5xl md:text-6xl fond-bold mb-6"><i>TessBevs</i></p>
           <ul className="flex flex-wrap space-x-14 text-xl ml-10">
                <li><a href="#">Menu</a></li>
                <li><a href="#">Home</a></li>
                <li><a href="#">About</a></li>
                <li><a href="#">Contacts</a></li>
 
            </ul>
            <div className="border border-black p-2"> 
            
           
                <GiHamburgerMenu/>
           </div>
        </div>
   {/*text+photo container*/}
        <div className="flex px-15 py-6 align-center justify-center text-sm">
            {/*text container */}
            <div>

                <h1 className=" sm:text-[100px] md:text-[150px] xl:text-[180px] shadow">
                    01____YOUR NUMBER ONE <b>Beverage</b> STORE</h1><br />
                    <p className="font-bold"> Quench your thirst and ignite your senses with our refreshing beverages! Our drinks are crafted to satisfy your cravings and revitalize your day.Try our signature blends today AND taste the difference for yourself!</p><br />

                <div className="flex space-x-2">
                    <button className="bg-indigo-500 px-4 py-2 text-sm rounded text-blue-500">place order</button>
                    
               
                    <div className="inline-block px-3 py-3 rounded-full cursor-pointer border border-white">
                        <FaFacebookF/>
                    </div>
                    <div className="inline-block px-3 py-3 rounded-full cursor-pointer border border-white"> 
                        <FaInstagram/>
                    </div>
                     <div className="inline-block px-3 py-3  mb-0 rounded-full cursor-pointer border border-white"> 
                        <FaLinkedinIn/>
                    </div>
                    <div className="inline-block px-3 py-3  mb-0 rounded-full cursor-pointer border border-white">
                        <FaTiktok/>
                    </div>
                </div>
            


            </div>
            {/*photo container */}
            <div className=" flex flex-row w-500 h-100 sm:flex-col-2">
               <div className=" flex flex-wrap">
                <img src="/drink2.png" className="w-50 h-40" alt="" />
                <img src="drink.png" className="w-50 h-40" alt="" />
                <img src="drink3.png" className="w-50 h-50" alt="" />
            </div> 
            </div>

            

        </div>
        <div className="container bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 m-0 w-[100%] flex flex-wrap px-10py-13 space-x-5 justify-center">
                <div className="card bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 flex wrap overflow-'hidden  border shadow-sm shadow-black">
                    <div className="card-content p-4">

                        <h2 className="text-center font-bold uppercase">Strawberry flavours</h2>
                        <p>Strawberry Juice in store!!</p>
                        
                    </div>

                </div>
                 <div className="card bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 flex wrap overflow-'hidden  border shadow shadow-black">
                    <div className="card-content p-4">

                        <h2 className="text-center font-bold uppercase">Lemonade!!</h2>
                         <p>Sweet Lemonade Available</p>
                        
                    </div>

                </div>
                 <div className="card bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 flex wrap overflow-'hidden  border shadow-sm shadow-black">
                    <div className="card-content p-4">

                        <h2 className="text-center font-bold uppercase">Banana Collies</h2>
                        <p> Feel like Banana?youre covered!</p>
                        
                    </div>

                </div>
                 <div className="card bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 flex grid overflow-'hidden  border shadow-sm shadow-black">
                    <div className="card-content p-4">

                        <h2 className="text-center font-bold uppercase">Apple Juice and Ciders</h2>
                        <p> Been a long week for you? Cool your Kop net hier... </p>
                    </div>

                </div>

            </div>
    
    
    </div>
   </div>

 </>
   )
};

export default App;