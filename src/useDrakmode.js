import {useState,useEffect} from 'react';
const useDrakmode = () => {
    const [darkMode,setDarkMode] = useState(()=> localStorage.theme === 'dark');
    const toggleDarkMode =  () =>{
        setDarkMode(!darkMode)
    }
    useEffect(()=>{
        const html = window.document.documentElement;
        const prev = darkMode ? 'light' : 'dark' ;
        html.classList.remove(prev)
        const next = darkMode ? 'light' : 'dark' ;
        html.classList.add(next);
        localStorage.setItem("theme",next)
    },[darkMode])
    return[darkMode,toggleDarkMode];
}
 
export default useDrakmode;