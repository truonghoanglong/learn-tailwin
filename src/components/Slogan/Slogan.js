import Cards from "../../assets/desktop/isocard.svg";
const Slogan = () => {
    return ( 
        <>
            <section className="text-[36px] my-[54px] font-extrabold md:my-20 md:grid md:grid-cols-4 md:items-center md:text-[48px]">
                <div className="text-center md:col-span-1 md:col-start-2">
                    <p className="">
                        Earn <span className="text-purple-300">More</span>
                    </p>
                    <p className="">
                        Pay Less
                    </p>
                    <button className="text-20 px-[16px] py-[6px] font-bold mt-[27px] bg-purple-500 rounded-xl hover:bg-violet-300 transiton-all duration-300 ">
                        Start
                    </button>
                </div>
                <div className="mt-[50px] flex items-center justify-center">
                    <img src={Cards} alt="" />
                </div>
            </section>
        </>
     );
}
 
export default Slogan;
