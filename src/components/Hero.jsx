'use client'
import { PlusIcon } from "@radix-ui/react-icons";
import { CloudUpload, FileInputIcon, Paperclip } from "lucide-react";
import { FileInput, FileUploader, FileUploaderContent, FileUploaderItem } from "@/components/ui/file-upload";
import { useRef, useState } from "react";
import { Button } from "./ui/button";
import { useRouter } from "next/navigation";
import { toast } from "sonner";
export default function Hero() {
    const [files, setFiles] = useState([]);
    const fileRef = useRef(null)
    const router = useRouter();
    return <div className="h-screen w-full relative " >
        <div className="absolute z-0 top-0 left-0 w-full h-full bg-gradient-to-r from-cyan-200 to-cyan-100" />

        <div className="max-w-screen-xl relative z-10 h-full  w-full m-auto">
            <div className="w-full flex gap-10 pt-[30vh]">
                <div className={"section1 flex-1"}>
                    <h2 className="text-5xl w-[80%] text-cyan-800 font-sans font-bold">Bull and Code, Hello thereugadhho af</h2>
                    <p className="text-lg mt-4 ">Lorem ipsum dolor sit amet, conse Porro deserunt corporis quam libero cumque blanditiis, consequuntur ipsam quae mollitia eaque nemo corrupti repellendus, laboriosam debitis culpa.</p>
                    {/* <button onClick={() => { router.push('/analytics') }}><span>Start Now</span></button> */}
                </div>
                <div className="flex-1 mt-4">
                    <FileUploader
                        value={files}
                        onValueChange={(e) => {
                            setFiles(e)
                            fileRef.current = e;
                        }}
                        dropzoneOptions={
                            {
                                // maxFiles: 1,
                                // maxSize: 1024 * 1024 * 4,
                                multiple: true,
                            }}
                        className="relative bg-background rounded-lg outline-dashed outline-1 outline-slate-500 p-0"
                    >
                        <FileInput
                            id="fileInput"
                            className=""
                        >
                            <div className="flex items-center justify-center flex-col p-8 w-full ">
                                <CloudUpload className='text-gray-500 w-10 h-10' />
                                <p className="mb-1 text-sm text-gray-500 dark:text-gray-400">
                                    <span className="font-semibold">Click to upload</span>
                                    &nbsp; or drag and drop
                                </p>
                                <p className="text-xs text-gray-500 dark:text-gray-400">
                                    CSV or PDF
                                </p>
                            </div>
                        </FileInput>
                        <FileUploaderContent>
                            {files &&
                                files.length > 0 &&
                                files.map((file, i) => (
                                    <FileUploaderItem key={i} index={i}>
                                        <Paperclip className="h-4 w-4 stroke-current" />
                                        <span>{file.name}</span>
                                    </FileUploaderItem>
                                ))}
                        </FileUploaderContent>
                    </FileUploader>
                    {
                        files && files.length > 0 &&
                        < Button onClick={() => {
                            if (fileRef.current.length == 0) {
                                toast.error('No file selected')
                                return
                            }
                            localStorage.setItem('files', JSON.stringify(fileRef.current))
                            router.push('/analytics')
                        }} className="w-full mt-2">Upload & Process</Button>
                    }
                </div>
            </div>
        </div>
    </div >
}