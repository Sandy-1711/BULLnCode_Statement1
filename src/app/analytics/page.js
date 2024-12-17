'use client'
import { Header } from "@/components/Header";
import { AgGridReact } from "ag-grid-react";
import { useEffect, useState } from "react";
import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-alpine.css';

import { AllCommunityModule, ModuleRegistry } from 'ag-grid-community';
import { Chart1 } from "@/components/Chart1";
import { Button } from "@/components/ui/button";
import {
    Drawer,
    DrawerClose,
    DrawerContent,
    DrawerDescription,
    DrawerFooter,
    DrawerHeader,
    DrawerTitle,
    DrawerTrigger,
} from "@/components/ui/drawer"
import { toast } from "sonner";

// Register all Community features
// ModuleRegistry.registerModules([AllCommunityModule]);
export default function AnalysisPage() {
    const [rowData] = useState([
        {
            id: 1,
            entryDate: "2024-12-01",
            exitDate: "2024-12-05",
            entryPrice: 150.75,
            exitPrice: 155.60,
            quantity: 100,
            profitLoss: 485.00,
            sharpeRatio: 1.25,
        },
        {
            id: 2,
            entryDate: "2024-12-03",
            exitDate: "2024-12-08",
            entryPrice: 200.10,
            exitPrice: 195.40,
            quantity: 50,
            profitLoss: -235.00,
            sharpeRatio: -0.8,
        },
        {
            id: 3,
            entryDate: "2024-12-07",
            exitDate: "2024-12-10",
            entryPrice: 120.50,
            exitPrice: 130.00,
            quantity: 150,
            profitLoss: 1425.00,
            sharpeRatio: 1.75,
        },
        {
            id: 4,
            entryDate: "2024-12-12",
            exitDate: "2024-12-15",
            entryPrice: 98.25,
            exitPrice: 96.00,
            quantity: 200,
            profitLoss: -450.00,
            sharpeRatio: -0.5,
        },
        {
            id: 5,
            entryDate: "2024-12-14",
            exitDate: "2024-12-18",
            entryPrice: 250.00,
            exitPrice: 260.50,
            quantity: 80,
            profitLoss: 840.00,
            sharpeRatio: 1.10,
        },

    ]);

    const [colDefs] = useState([
        { headerName: "ID", field: "id", sortable: true, filter: true },
        {
            headerName: "Show Details",
            field: "details",
            sortable: false,
            filter: false,
            cellRenderer: params => {
                return (
                    <DrawerOpener />
                );
            },
        },
        { headerName: "Entry Date", field: "entryDate", sortable: true, filter: true },
        { headerName: "Exit Date", field: "exitDate", sortable: true, filter: true },
        { headerName: "Entry Price", field: "entryPrice", sortable: true, filter: true, valueFormatter: params => `$${params.value.toFixed(2)}` },
        { headerName: "Exit Price", field: "exitPrice", sortable: true, filter: true, valueFormatter: params => `$${params.value.toFixed(2)}` },
        { headerName: "Quantity", field: "quantity", sortable: true, filter: true },
        { headerName: "Profit/Loss", field: "profitLoss", sortable: true, filter: true, valueFormatter: params => `$${params.value.toFixed(2)}` },
        { headerName: "Sharpe Ratio", field: "sharpeRatio", sortable: true, filter: true, valueFormatter: params => params.value.toFixed(2) },
    ]);
    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    async function fetchData() {
        try {
            setIsLoading(true)
            const files = JSON.parse(localStorage.getItem('files'))
            if (!files) {
                throw new Error('No files found')
            }
            const response = await fetch('http://localhost:8000/api/analyze', {
                method: 'POST',
                body: JSON.stringify(files),
            })
            const data = await response.json()
            setData(data)
        }
        catch (err) {
            toast.error(err.message)
        }
        finally {
            setIsLoading(false)
        }
    }
    useEffect(() => {
        setIsLoading(true);
        fetchData();
    }, [])

    return (
        <div className=" w-full  h-screen relative ">

            <div className="max-w-screen-xl flex flex-col mx-auto h-full">
                <Header />
                {isLoading ? <Loader /> : <>
                    <div className=" flex my-4 gap-4">
                        <div>
                            <Chart1 />
                        </div>
                        <div className="border shadow-md p-5 h-full flex flex-col aspect-square rounded-xl ">
                            {/* Sharp Ratio */}
                            <h2 className="p-2 text-xl font-semibold">Sharpe Ratio</h2>
                            <div className="flex justify-center items-center flex-1">
                                <h1 className="text-6xl text-right font-semibold">{4}</h1>
                            </div>

                        </div>
                    </div>
                    <div className={"ag-theme-alpine flex-1"} style={{ width: '100%' }}>
                        <AgGridReact
                            columnDefs={colDefs}
                            rowData={rowData}
                        // pagination={true}
                        // paginationPageSize={5}
                        />
                    </div>
                </>}
            </div>

        </div>
    );
}

function DrawerOpener() {
    return <Drawer>
        <DrawerTrigger><Button variant="outline">More</Button></DrawerTrigger>
        <DrawerContent className="h-[75vh]">
            <DrawerHeader>
                <DrawerTitle>Are you absolutely sure?</DrawerTitle>
                <DrawerDescription>This action cannot be undone.</DrawerDescription>
            </DrawerHeader>
            <div className=" flex gap-2 p-2">
                <div className="w-1/3">
                    <Chart1 />
                </div>
                <div className="w-1/3">
                    <Chart1 />
                </div>
                <div className="w-1/3">
                    <Chart1 />
                </div>
            </div>
            <DrawerFooter>
                <DrawerClose>
                    <Button variant="outline">Cancel</Button>
                </DrawerClose>
            </DrawerFooter>
        </DrawerContent>
    </Drawer>
}
function Loader() {
    return <div className="flex items-center gap-4 justify-center h-full">
        <span className="loader"></span>
        <h2 className="text-2xl text-cyan-800 font-sans font-bold">
            Loading
        </h2>
    </div>
}