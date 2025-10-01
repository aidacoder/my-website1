import { useState } from "react";

function Experience() {
    const [Detail, setDetail] = useState(false);

    function handleClick() {
        setDetail(!Detail);
    };

    let text;
    if (Detail) {
        text = " close";
    } else {
        text = "Detail";
    }
    return (
        <>
            <button
                onClick={handleClick}
                className="bg-blue-400 text-white px-4 py-2 rounded mt-2">
                {text}
            </button>

            {Detail && (  <div className="bg-white rounded-[5px]  ml-1.5 w-[360px] relative border-3 border-rose-100 text-center">
                    <h1 className="text-[18px] mt-3.5 ml-1.5 text-gray-500"> PT Pegaunihan Technology Indonesia </h1>
                    <h1 className="ml-1.5">Production Operator</h1>
                    <h1 className="ml-3.5">Juni- 2022 - juni-2025</h1>
                    <h1 className="ml-3.5">SMR-2B/Olympus</h1>
                    <div className="w-[360px]">
                        <p> •Menghilangkan burr untuk menghasilkan permukaan yang halus, rata, dan aman</p>
                        <p> •Meningkatkan kualitas produk dan mengurangi resiko cacat</p>
                        <p>• Meningkatkan keamanan produk, mencegah cedera akibat tepi tajam</p>
                        <p>•Mematuhi SOP perusahaan dan menerapkan 5S dilingkungan kerja</p>
                    </div>

                </div>
            )}

        </>
    );
}

export default Experience;
