import { useState } from 'react';
import './App.css'
import Guest from './components/Guest';

function App() {
  const [isHost, setIsHost] = useState<boolean | undefined>(undefined);

  return (
    <>
        <header className='font-bold text-5xl text-center p-4'>
          PIGEON
        </header>

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

        {isHost === false && Guest }
        </main>
    </>    
  )
}

export default App
