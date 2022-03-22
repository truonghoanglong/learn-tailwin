import './App.css';
import { useState,useEffect } from 'react';
import Navbar from './components/Navbar/Navbar'
import Slogan from './components/Slogan/Slogan';
import Content from './components/Content/Content'
function App() {

  const [windowSize,setWindowSize] = useState({
    width: undefined,
    height: undefined
  })
  

  const [isMobile,setIsMobile] = useState(false)
  
  useEffect(()=>{
    const handleSize = () =>{
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      })
    }
    window.addEventListener('resize', handleSize)
    handleSize()
    
    return () => window.removeEventListener('resize', handleSize)
  },[])
  
  useEffect(()=>{
    if(windowSize.width < 500){
      setIsMobile(true)
    }else{
      setIsMobile(false)
    }
  },[windowSize])

  return (
    <div className="font-sora h-screen overflow-y-auto overflow-x-hidden px-4 py-8 bg-gradient-to-b bg-violet-900 to-indigo-500 text-white">
      < Navbar isMobile={isMobile} />
      < Slogan />
      < Content />
    </div>
  );
}

export default App;
