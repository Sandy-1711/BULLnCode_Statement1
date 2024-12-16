export function Header() {
    return <nav className="flex absolute  left-0 bg-white w-full top-0  py-5">
        <div className="max-w-screen-xl w-full m-auto">
            <div className="flex gap-2 items-center">
                <img src="/logo128.png" className="w-8 h-auto aspect-square" alt="financetracker logo" />
                <h2 className="text-2xl text-cyan-800 font-sans font-bold">Stocks.io</h2>
            </div>
        </div>
    </nav>
}