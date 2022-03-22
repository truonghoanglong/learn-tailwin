import { FaUserCircle } from "react-icons/fa";
import { BsCreditCard } from "react-icons/bs";
import checkIconMobile from '../../assets/mobile/checkpoint.svg'
import {useSpring, animated} from 'react-spring'
const Content = () => {
    const customer = useSpring({customers:10245, from:{customers: 0}});
    const card = useSpring({cards:12099, from:{cards: 0}});
    return (
    <section className="flex px-[100px]">

      <div className="w-[50%] flex flex-col ml-[70px] p-5 mr-[54px] text-bold bg-gradient-to-r from-sky-500 to-indigo-500 shadow-lg shadow-indigo-500/50 rounded-3xl items-center justify-center md:col-span-3 ">
        
        <div className="mt-[16px] gap-8 flex items-center">
          <FaUserCircle size={"22px"} className="" />
          <div className="text-[26px]">
            <animated.div>
                {customer.customers.to((val)=>Math.floor(val))}
            </animated.div>
            <p>customers</p>
          </div>
        </div>

        <div className="mt-[16px] gap-8 flex items-center">
          <BsCreditCard size={"22px"} className="" />
          <div className="text-[26px]">
          <animated.div>
                {card.cards.to((val)=>Math.floor(val))}
            </animated.div>
            <p>customers</p>
          </div>
        </div>
      </div>

      <div className="text-[14px] flex flex-col w-[100%] mt-[90px] font-semibold md:col-span-2">
            <div className="check-content">
                <img src={checkIconMobile} alt="" />
                <p>Card reports sent to your phone Card reports sent to your phone</p>
            </div>
            <div className="check-content">
                <img src={checkIconMobile} alt="" />
                <p>No external</p>
            </div>
            <div className="check-content">
                <img src={checkIconMobile} alt="" />
                <p>Set spending limits and restrictions</p>
            </div>
        </div>
    </section>
  );
};

export default Content;
