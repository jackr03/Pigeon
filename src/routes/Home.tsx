import { useState } from "react";
import PinForm from '../components/PinForm.tsx';
import NavBar from "./NavBar.tsx";

export default function Home() {
    const [isHost, setIsHost] = useState<boolean | undefined>(undefined);

    return (
        <>
            <NavBar/>
            <main className='min-h-screen flex flex-col justify-center items-center'>
                {isHost === undefined && (
                <div className='flex'>
                    <button onClick={() => setIsHost(false)} className='bg-black text-white m-4 p-4 rounded-lg text-3xl hover:underline'>Guest</button>
                    <button onClick={() => setIsHost(true)} className='bg-black text-white m-4 p-4 rounded-lg text-3xl hover:underline'>Host</button>
                </div>
                )}

                {isHost && (
                <div>
                    <p className='text-3xl'>Host</p>
                </div>
                )}

                {isHost === false && <PinForm />}
            </main>
        </>
    );
}