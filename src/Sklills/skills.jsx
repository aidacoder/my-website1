

function Skills() {


  return (
    <>
      <div className="text-3xl text-center mt-5 text-rose-300 "> Skills</div>
      <div className="flex justify-evenly ">
        <div className="w-12 h-12 bg-rose-000 rounded-full animate-bounce"> <img src="/html.png" alt="html" className="w-[100px]" /></div>
        <div className="w-12 h-12 bg-pink-00 rounded-full animate-bounce"> <img src="/css.png" alt="css" className="w-[100px]" /></div>
        <div className="w-12 h-12 bg-pink-00 rounded-full animate-bounce"><img src="/tailwind.png" alt="tailwind" className="w-[100px]" /> </div>
        <div className="w-12 h-12 bg-pink-00 rounded-full animate-bounce">  <img src="/js.png" alt="js" className="w-[100px]" /></div>
        <div className="w-12 h-12 bg-pink-00 rounded-full animate-bounce">  <img src="/react.png" alt="react" className="w-[100px]" /></div>
        <div className="w-12 h-12 bg-pink-00 rounded-full animate-bounce"> <img src="/rest-Api.jpeg" alt="rest-api" className="w-[100px]" /></div>
      </div>

      <div className="flex justify-evenly">
        <img src="/vs.png" alt="vs-code" className="w-[50px] h-[50px]" />
        <img src="/postman.png" alt="postman" className="w-[50px] h-[50px]" />
        <img src="/github.png" alt="github" className="w-[50px] h-[50px]" />
      </div>


    </>
  )
}


export default Skills