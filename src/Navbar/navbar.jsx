

function Navbar() {


    return (
        <>
            <div className="flex justify-around m-2.5 bg-red-300 h-[60px]">
                <div className="flex items-center "> <img src="/icon01.png" alt="icon" className="w-[50px]" /></div>

                <div className="flex bg-amber-000   justify-around items-center w-[520px] font-roboto">
                    <div className="text-white font-bold">Home</div>
                    <div className=" text-white font-bold">Skills</div>
                    <div className="text-white font-bold">Portofolio</div>
                    <div className="text-white font-bold">Contact</div>
                </div>
            </div>

        </>
    )
}

export default Navbar