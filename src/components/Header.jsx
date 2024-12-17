import {
    Avatar,
    AvatarFallback,
    AvatarImage,
} from "@/components/ui/avatar"
import { Button } from "./ui/button"
export function Header() {
    return <nav className="flex  z-50  bg-white w-full  py-5">
        <div className="max-w-screen-xl flex items-center justify-between w-full m-auto">
            <div className="flex gap-2 items-center">
                <img src="/logo.png" className="w-8 h-auto aspect-square" alt="financetracker logo" />
                <h2 className="text-2xl text-cyan-800 font-sans font-bold">Stocks.io</h2>
            </div>
            <div className="flex gap-1 items-center">
                <Avatar>
                    <AvatarImage className="border rounded-full" src="/lock.png" alt="@lock" />
                    <AvatarFallback>CN</AvatarFallback>
                </Avatar>
                <Button variant="outline" className="text-cyan-800 hover:bg-cyan-800 hover:text-white">Login</Button>
            </div>
        </div>
    </nav>
}