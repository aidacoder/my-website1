// import { useState } from "react"

// function WorkExperience() {

//     const [detail, setDetail] = useState(" ")
//     function handleClick() {
//         setDetail(!detail);
//     };

//     let text;
//     if (detail) {
//         text = "Close";
//     } else {
//         text = "Detail";
//     }
//     return (

//         <>
//             <div className="bg-cyan-300">
//                 <h1 className="text-3xl text-white">WorkExperience</h1>
//                 <div className="   bg-red-100 flex">
//                     <div className="flex justify-center">
//                         <div className="relative w-[320px] h-[220px] rounded-[5px] border border-rose-200 text-center shadow">
//                             <div className="bg-white rounded-[5px] border border-rose-200 p-3">
//                                 <h1 className="text-[20px] mt-2 font-extrabold">Garar ID</h1>
//                                 <h1>Quality Assurance Tester</h1>
//                                 <h1>Januari 2025 - Saat ini</h1>
//                                 <h1>Freelance</h1>
//                             </div>

//                             <button
//                                 onClick={handleClick}
//                                 className="absolute bottom-3 right-3 w-[100px] py-1 bg-rose-300 text-white rounded-[5px] hover:bg-rose-400 transition"
//                             >
//                                 Detail
//                             </button>
//                         </div>


//                                 {detail && (
//                                     <div className="fixed inset-0 bg-white bg-opacity-50 flex justify-center items-center z-50">
//                                         <div className="bg-white w-[600px] max-w-[95%] p-6 rounded-lg shadow-lg relative animate-fadeIn">
//                                             <h1 className="text-[20px] mt-2 font-extrabold">Garar ID</h1>
//                                             <h1>Quality Assurance Tester</h1>
//                                             <h1>Januari 2025 - Saat in</h1>
//                                             <h1>Freelance</h1>

//                                             <div className="mt-4 space-y-2 text-left">

//                                             </div>

//                                             {/* Tombol Tutup */}
//                                             <button
//                                                 onClick={handleClick}
//                                                 className="absolute top-3 right-3 w-[30px] h-[30px] bg-rose-300 text-white rounded-full hover:bg-rose-400 transition"
//                                             >
//                                                 ✕
//                                             </button>
//                                         </div>
//                                     </div>
//                                 )}
//                     </div>

//                     <div className="flex justify-center">
//                         <div className="relative w-[320px] h-[220px] rounded-[5px] border border-rose-200 text-center shadow">
//                             <div className="bg-white rounded-[5px] border border-rose-200 p-3">
//                                 <h1 className="text-[20px] mt-2 font-extrabold">Garar ID</h1>
//                                 <h1>Quality Assurance Tester</h1>
//                                 <h1>Januari 2025 - Saat ini</h1>
//                                 <h1>Freelance</h1>
//                             </div>

//                             <button
//                                 onClick={handleClick}
//                                 className="absolute bottom-3 right-3 w-[100px] py-1 bg-rose-300 text-white rounded-[5px] hover:bg-rose-400 transition"
//                             >
//                                 Detail
//                             </button>
//                         </div>


//                                 {detail && (
//                                     <div className="fixed inset-0 bg-white bg-opacity-50 flex justify-center items-center z-50">
//                                         <div className="bg-white w-[600px] max-w-[95%] p-6 rounded-lg shadow-lg relative animate-fadeIn">
//                                             <h1 className="text-[20px] mt-2 font-extrabold">Garar ID</h1>
//                                             <h1>Quality Assurance Tester</h1>
//                                             <h1>Januari 2025 - Saat ini</h1>
//                                             <h1>Freelance</h1>

//                                             <div className="mt-4 space-y-2 text-left">

//                                             </div>

//                                             {/* Tombol Tutup */}
//                                             <button
//                                                 onClick={handleClick}
//                                                 className="absolute top-3 right-3 w-[30px] h-[30px] bg-rose-300 text-white rounded-full hover:bg-rose-400 transition"
//                                             >
//                                                 ✕
//                                             </button>
//                                         </div>
//                                     </div>
//                                 )}
//                     </div>

//                     <div className="flex justify-center">
//                         <div className="relative w-[320px] h-[220px] rounded-[5px] border border-rose-200 text-center shadow">
//                             <div className="bg-white rounded-[5px] border border-rose-200 p-3">
//                                 <h1 className="text-[20px] mt-2 font-extrabold">Garar ID</h1>
//                                 <h1>Quality Assurance Tester</h1>
//                                 <h1>Januari 2025 - Saat ini</h1>
//                                 <h1>Freelance</h1>
//                             </div>

//                             <button
//                                 onClick={handleClick}
//                                 className="absolute bottom-3 right-3 w-[100px] py-1 bg-rose-300 text-white rounded-[5px] hover:bg-rose-400 transition"
//                             >
//                                 Detail
//                             </button>
//                         </div>


//                                 {detail && (
//                                     <div className="fixed inset-0 bg-white bg-opacity-50 flex justify-center items-center z-50">
//                                         <div className="bg-white w-[600px] max-w-[95%] p-6 rounded-lg shadow-lg relative animate-fadeIn">
//                                             <h1 className="text-[20px] mt-2 font-extrabold">Garar ID</h1>
//                                             <h1>Quality Assurance Tester</h1>
//                                             <h1>Januari 2025 - Saat ini</h1>
//                                             <h1>Freelance</h1>

//                                             <div className="mt-4 space-y-2 text-left">

//                                             </div>

//                                             {/* Tombol Tutup */}
//                                             <button
//                                                 onClick={handleClick}
//                                                 className="absolute top-3 right-3 w-[30px] h-[30px] bg-rose-300 text-white rounded-full hover:bg-rose-400 transition"
//                                             >
//                                                 ✕
//                                             </button>
//                                         </div>
//                                     </div>
//                                 )}
//                     </div>


//                     <div className="flex justify-center">
//                         <div className="relative w-[320px] h-[220px] rounded-[5px] border border-rose-200 text-center shadow">
//                             <div className="bg-white rounded-[5px] border border-rose-200 p-3">
//                                 <h1 className="text-[20px] mt-2 font-extrabold">Garar ID</h1>
//                                 <h1>Quality Assurance Tester</h1>
//                                 <h1>Januari 2025 - Saat ini</h1>
//                                 <h1>Freelance</h1>
//                             </div>

//                             <button
//                                 onClick={handleClick}
//                                 className="absolute bottom-3 right-3 w-[100px] py-1 bg-rose-300 text-white rounded-[5px] hover:bg-rose-400 transition"
//                             >
//                                 Detail
//                             </button>
//                         </div>


//                                 {detail && (
//                                     <div className="fixed inset-0 bg-white bg-opacity-50 flex justify-center items-center z-50">
//                                         <div className="bg-white w-[600px] max-w-[95%] p-6 rounded-lg shadow-lg relative animate-fadeIn">
//                                             <h1 className="text-[20px] mt-2 font-extrabold">Garar ID</h1>
//                                             <h1>Quality Assurance Tester</h1>
//                                             <h1>Januari 2025 - Saat ini</h1>
//                                             <h1>Freelance</h1>

//                                             <div className="mt-4 space-y-2 text-left">

//                                             </div>

//                                             {/* Tombol Tutup */}
//                                             <button
//                                                 onClick={handleClick}
//                                                 className="absolute top-3 right-3 w-[30px] h-[30px] bg-rose-300 text-white rounded-full hover:bg-rose-400 transition"
//                                             >
//                                                 ✕
//                                             </button>
//                                         </div>
//                                     </div>
//                                 )}
//                     </div>
//                 </div>
//             </div>



//         </>
//     )
// }

// export default WorkExperience


import { useState } from "react";

export default function WorkExperience() {
    const [showPopup, setShowPopup] = useState(false);
    const [selectedDetail, setSelectedDetail] = useState(null);

    const experiences = [
        {
            id: 1,
            company: "Garar ID",
            role: "Quality Assurance Tester",
            date: "Januari 2025 - Saat ini",
            type: "Freelance",
            details: [
                "Membuat dan menjalankan test case sederhana sesuai requirement.",
                "Menemukan dan melaporkan bug kepada developer dengan jelas.",
                "Berkolaborasi dengan tim developer untuk perbaikan bug.",
                "Menemukan dan melaporkan bug kepada developer dengan jelas."
            ]
        },
        {
            id: 2,
            company: "PT Pegaunihan Technology Indonesia",
            role: "Production Operator",
            date: "Juni 2022 - Juni 2025",
            type: "SMR-2B",
            details: [
                "Skills project/Qualified level",
                "Tes pelatihan station testing PD",
                "Tes spesifikasi perakitan PD",
                "Tes pelatihan pengemasan PD",
                "Tes inpeksi visual PD",

            ]
        },
        {
            id: 3,
            company: "PT Simatelex Manufactory Batam",
            role: "Production Operator",
            date: "September-2021 - Maret 2022",
            type: "Kasslim",
            details: [
                "Assembly operator produk ",
                "memastikan komponen terpasang dengan benar",
                "Memastikan kualitas produk tidak cacat atau rusak",
               " Mematuhi prosedur keselamatan dan efisiensi yang ditetapkan untuk memastikan kelancaran proses perakitan"
            ]
        },
        {
            id: 4,
            company: "PT DYNACAST INDONESIA",
            role: "Production Operator",
            date: "September-2020 - September 2021",
            type: "Post Casting l - Deburring",
            details: [
                "Menghilangkan burr untuk menghasilkan permukaan yang halus, rata, dan aman",
                "Meningkatkan kualitas produk dan mengurangi resiko cacat",
                "Meningkatkan keamanan produk, mencegah cedera akibat tepi tajam",
                "Mematuhi SOP perusahaan dan menerapkan 5S dilingkungan kerja"
            ]
        },



    ];

    const handleOpen = (exp) => {
        setSelectedDetail(exp);
        setShowPopup(true);
    };

    const handleClose = () => {
        setShowPopup(false);
        setSelectedDetail(null);
    };

    return (
        <div className="bg-red-300 ">
            <h1 className="text-3xl text-white p-3.5 ml-3.5">Work Experience</h1>

            <div className="flex gap-2 flex-wrap justify-evenly">
                {experiences.map((exp) => (
                    <div
                        key={exp.id}
                        className="w-[300px] h-[180px] text-red-300 bg-white rounded-lg border border-red-100 shadow p-4 relative"
                    >
                        <h1 className="text-[15px] font-bold">{exp.company}</h1>
                        <h2>{exp.role}</h2>
                        <p>{exp.date}</p>
                        <p>{exp.type}</p>
                        <button
                            onClick={() => handleOpen(exp)}
                            className="absolute bottom-3 right-3 px-3 py-1 bg-rose-300 text-white rounded hover:bg-rose-400 transition"
                        >
                            Detail
                        </button>
                    </div>
                ))}
            </div>


            {showPopup && selectedDetail && (
                <div className="fixed inset-0 bg-red-300 bg-opacity-50 flex items-center justify-center">
                    <div className="bg-red-50 w-[500px] p-6 rounded-lg shadow-lg relative">
                        <button
                            onClick={handleClose}
                            className="absolute top-3 right-3 text-gray-500 hover:text-black"
                        >
                            ✕
                        </button>

                        <h1 className="text-xl font-bold">{selectedDetail.company}</h1>
                        <h2>{selectedDetail.role}</h2>
                        <p>{selectedDetail.date}</p>
                        <p>{selectedDetail.type}</p>

                        <div className="mt-4 text-left">
                            {selectedDetail.details.map((d, i) => (
                                <p key={i}>• {d}</p>
                            ))}
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}
