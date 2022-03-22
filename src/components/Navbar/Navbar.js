import {BsFillSunFill} from 'react-icons/bs'
import {BiMenuAltRight} from 'react-icons/bi'
import {AiOutlineCloseCircle} from 'react-icons/ai'
import {BsMoonStarsFill} from 'react-icons/bs'
import useDrakmode from '../../useDrakmode';
import { useState } from 'react';
const Navber = (props) => {
    const {isMobile} = props;
    const [openMenu,setOpenMenu] = useState(false)
    const [darkMode,toggleDarkMode] = useDrakmode();
    const handleMenu = () =>{
        setOpenMenu(!openMenu)
    }
    return ( 
        <>
            <nav className="flex items-center relative">
                <div className="flex items-center">
                    <div className="text-[20px] font-bold mr-2">Hello</div>
                    {darkMode ? (
                        <BsFillSunFill size={"24px"} color="#e9c46a" className="cursor-pointer" onClick={()=>toggleDarkMode(!darkMode)}/>
                    ) :(  
                        <BsMoonStarsFill size={"24px"} color="#e9c46a" className="cursor-pointer" onClick={()=>toggleDarkMode(!darkMode)}/>
                    )}
                    
                </div>
                <ul className="ml-auto">
                    {openMenu && isMobile ? (
                        <AiOutlineCloseCircle className="text-3xl cursor-pointer" onClick={handleMenu} />
                    ): !openMenu && isMobile ? (
                        <BiMenuAltRight className="text-3xl cursor-pointer" onClick={handleMenu}/>
                    ):(
                        <>
                             <ul className="p-3 flex">
                                <li className="mr-4">Features</li>
                                <li className="mr-4">Menu</li>
                                <li className="mr-4">Our Story</li>
                                <li className="mr-4">Contact</li>
                            </ul>
                        </>
                    )}


                    {openMenu && (
                        <div className="absolute right-8 bg-white text-center text-[14px] text-black">
                            <ul className="p-3">
                                <li>Features</li>
                                <li>Menu</li>
                                <li>Our Story</li>
                                <li>Contact</li>
                            </ul>
                        </div>
                    )}  
                </ul>
            </nav>
        </>
     );
}
 
export default Navber;