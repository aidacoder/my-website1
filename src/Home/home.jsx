import { useState, useEffect } from "react";

function Home() {


    const text = "Front End Developer";
    const [displayedText, setDisplayedText] = useState("");
    const [index, setIndex] = useState(0);

    useEffect(() => {
        if (index < text.length) {
            const timeout = setTimeout(() => {
                setDisplayedText((prev) => prev + text.charAt(index));
                setIndex(index + 1);
            }, 200);
            return () => clearTimeout(timeout);
        }
    }, [index, text]);


    return (
        <>

            <div className=" flex justify-around bg-rose-000 w-full h-[400px] bg-red-50">

                <div className=" flex bg-amber-00 flex-col mt-[90px]">
                    <p className="text-3xl m-1.5 text-rose-300 font-bold ">Hi ,My name is</p>
                    <h1 className="text-6xl m-1.5  text-rose-300 font-bold">Marhalida Sinaga</h1>
                    <h1 className="text-[16px ] m-1.5  font-bold font-arimo text-cyan-500">{displayedText}</h1>
                    <h1 className=" w-[600px]  font-roboto mt-[20px]  text-gray-500 font-bold">Experienced in the manufacturing industry with strong problem-solving and attention to detail, now transitioning into Front-End Development specializing in React.js, Tailwind CSS, and modern JavaScript.</h1>
                </div>



                <div className="flex justify-center items-center bg-amber-000 w-[600px] h-[400px] mt-[0px]">
                    <div className="w-[300px] h-[300px] rounded-full overflow-hidden">
                        <img
                            src="/pp.jpeg"
                            alt="profile"
                            className="w-full h-full object-cover"
                        />
                    </div>
                </div>



            </div>
            <div className="flex justify-center mt-3.5">
                <div className="flex justify-around w-full-h-[30px] ">
                    <a href="https://www.linkedin.com/in/marhalida-sinaga-753221193/"
                        target="_blank"
                        rel="noopener noreferrer">
                        <img
                            src="/linkedin.png"
                            alt="linkedin"
                            // className="w-[60px] h-[60px] cursor-pointer"
                            className="w-[60px] h-[60px] cursor-pointer hover:scale-110 transition-transform duration-300 mr-6  hover:drop-shadow-[0_0_10px_#EC4899]" 

                        />
                    </a>

                    <a href="https://github.com/aidacoder"
                        target="_blank"
                        rel="noopener noreferrer">
                        <img
                            src="/github.png"
                            alt="github"
                            className="w-[60px] h-[60px] cursor-pointer hover:scale-110 transition-transform duration-300 mr-6 hover:drop-shadow-[0_0_10px_#EC4899]" 

                        />
                    </a>


                    <a href="https://www.instagram.com/aida_sinaga16/"
                        target="_blank"
                        rel="noopener noreferrer">
                        <img
                            src="/instagram.png"
                            alt="instagram"
                            className="w-[60px] h-[60px] cursor-pointer
                            transition duration-300
                            hover:scale-110
                             hover:drop-shadow-[0_0_10px_#EC4899]" 
                           
                            
                            

                        />
                    </a>

                    <a href="https://web.facebook.com/aida.weizra/?locale=id_ID"
                        target="_blank"
                        rel="noopener noreferrer">
                        <img
                            src="/fb.png"
                            alt="facebook"
                            className="w-[60px] h-[60px] cursor-pointer hover:scale-110 transition-transform duration-300 ml-6
                             hover:drop-shadow-[0_0_10px_#EC4899]" 

                        />
                    </a>

                    
                    
                   
                </div>
            </div>



        </>

    )
}


export default Home