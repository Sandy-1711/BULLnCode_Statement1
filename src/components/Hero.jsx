import { PlusIcon } from "@radix-ui/react-icons";

export default function Hero() {
    return <div className="h-screen w-full relative">
        <div className="aspect-video w-full absolute bottom-0" style={{ background: "url('/homebg.png') no-repeat", backgroundSize: "cover", }} />
        <div className="max-w-screen-xl relative z-10 h-full flex flex-col justify-center items-center w-full m-auto">
            <div className="flex w-full ">
                <div className="flex-1 gap-4 flex justify-center items-center flex-col">
                    <h2 className="text-6xl w-[60%] text-center font-bold font-serif">
                        <span className="text-cyan-800">
                            Analyze
                        </span>
                        <span> your portfolio with AI
                        </span>
                    </h2>
                    {/* <p className="mt-4 text-lg font-sans">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Qui, itaque eligendi nobis at cum quos ipsam possimus odio magnam accusamus vel veritatis dignissimos culpa vitae non beatae velit nemo explicabo.</p> */}
                    {/* <div className="border-dashed mt-4 flex flex-col items-center justify-center border border-gray-400 p-5"> */}
                    <div>
                        <label htmlFor="file" className="cursor-pointer">
                            <div className="flex gap-2 items-center p-2 px-4 w-[20rem] justify-center  rounded-lg" style={{ background: "linear-gradient(107.65deg, #17C969 17.53%, #005DBB 94.64%)" }}>
                                <img src="/plus.svg" />
                                <span className="text-white font-medium">Upload your portfolio</span>
                            </div>
                        </label>
                        <input accept="application/csv" id="file" className="hidden" type="file" />
                        <p className="text-sm mt-4 text-center">Drop a csv file to continue</p>
                        <p className="text-sm mt-1 text-center">Supported formats: <span className="p-1 bg-gray-300 rounded-sm">csv</span></p>
                        <p className="text-sm mt-1 text-center">We do not save your files.</p>
                    </div>
                    {/* </div> */}
                </div>

            </div>
        </div >
    </div >
}