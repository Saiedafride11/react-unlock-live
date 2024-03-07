import img4 from '../../assets/image/4.jpeg'
import img5 from '../../assets/image/5.jpeg'
import img6 from '../../assets/image/6.jpeg'
import img7 from '../../assets/image/7.jpeg'
const CoffeeMenu = () => {
    return (
        <section className='max-w-[1366px] mx-auto mt-20'>
            <div className=" flex flex-col justify-center items-center">
                <div className="flex items-center gap-5">

                    <svg width="51" height="2" viewBox="0 0 51 2" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M50 1.5C50.2761 1.5 50.5 1.27614 50.5 1C50.5 0.723858 50.2761 0.500001 50 0.500001L50 1.5ZM-5.96244e-09 1.5L50 1.5L50 0.500001L5.96244e-09 0.5L-5.96244e-09 1.5Z" fill="url(#paint0_linear_0_4308)" />
                        <defs>
                            <linearGradient id="paint0_linear_0_4308" x1="5.96244e-09" y1="0.5" x2="50" y2="0.500001" gradientUnits="userSpaceOnUse">
                                <stop stopColor="#86371C" stopOpacity="0" />
                                <stop offset="1" stopColor="#86371C" />
                            </linearGradient>
                        </defs>
                    </svg>
                    <h4 className="text-secondary font-ValueSansPro text-[16px]">Coffee Menu</h4>
                    <svg width="51" height="2" viewBox="0 0 51 2" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M1 1.5C0.723858 1.5 0.5 1.27614 0.5 1C0.5 0.723858 0.723858 0.500001 1 0.500001L1 1.5ZM51 1.5L1 1.5L1 0.500001L51 0.5L51 1.5Z" fill="url(#paint0_linear_0_4309)" />
                        <defs>
                            <linearGradient id="paint0_linear_0_4309" x1="51" y1="0.5" x2="1" y2="0.500001" gradientUnits="userSpaceOnUse">
                                <stop stopColor="#86371C" stopOpacity="0" />
                                <stop offset="1" stopColor="#86371C" />
                            </linearGradient>
                        </defs>
                    </svg>
                </div>
                <h2 className="font-Bakilda text-[44px] text-primary">Unlocklive Coffee Menu</h2>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-10 my-16 mx-3'>
                <div className='flex justify-evenly items-center gap-5'>
                    <div className='flex gap-5 items-center'>
                        <div className='w-[84px] h-[84px] border border-dashed border-[#270A05] rounded-full flex justify-center items-center'>
                            <img className='w-[70px] h-[70px] rounded-full outline outline-[#E9E7E6]' src={img4} alt="image" />
                        </div>
                        <div>
                            <h3 className='font-Bakilda text-2xl text-primary'>Double Espresso x2</h3>
                            <p className='font-ValueSansPro font-normal text-primary opacity-60' style={{ lineHeight: '24px' }}>There are many variations of passages Lorem Ipsum form</p>
                        </div>
                    </div>
                    <div className='outline-dashed bg-secondary rounded-full w-[60px] h-[60px] flex justify-center items-center'>
                        <span className='text-white'>$10</span>
                    </div>
                </div>
                <div className='flex justify-evenly items-center gap-5'>
                    <div className='flex gap-5 items-center'>
                        <div className='w-[84px] h-[84px] border border-dashed border-[#270A05] rounded-full flex justify-center items-center'>
                            <img className='w-[70px] h-[70px] rounded-full outline outline-[#E9E7E6]' src={img5} alt="image" />
                        </div>
                        <div>
                            <h3 className='font-Bakilda text-2xl text-primary'>Double Espresso x2</h3>
                            <p className='font-ValueSansPro font-normal text-primary opacity-60' style={{ lineHeight: '24px' }}>There are many variations of passages Lorem Ipsum form</p>
                        </div>
                    </div>
                    <div className='outline-dashed bg-[#E9E7E6] rounded-full w-[60px] h-[60px] flex justify-center items-center'>
                        <span className='text-primary'>$10</span>
                    </div>
                </div>
                <div className='flex justify-evenly items-center gap-5'>
                    <div className='flex gap-5 items-center'>
                        <div className='w-[84px] h-[84px] border border-dashed border-[#270A05] rounded-full flex justify-center items-center'>
                            <img className='w-[70px] h-[70px] rounded-full outline outline-[#E9E7E6]' src={img6} alt="image" />
                        </div>
                        <div>
                            <h3 className='font-Bakilda text-2xl text-primary'>Double Espresso x2</h3>
                            <p className='font-ValueSansPro font-normal text-primary opacity-60' style={{ lineHeight: '24px' }}>There are many variations of passages Lorem Ipsum form</p>
                        </div>
                    </div>
                    <div className='outline-dashed bg-[#E9E7E6] rounded-full w-[60px] h-[60px] flex justify-center items-center'>
                        <span className='text-primary'>$10</span>
                    </div>
                </div>
                <div className='flex justify-evenly items-center gap-5'>
                    <div className='flex gap-5 items-center'>
                        <div className='w-[84px] h-[84px] border border-dashed border-[#270A05] rounded-full flex justify-center items-center'>
                            <img className='w-[70px] h-[70px] rounded-full outline outline-[#E9E7E6]' src={img7} alt="image" />
                        </div>
                        <div>
                            <h3 className='font-Bakilda text-2xl text-primary'>Double Espresso x2</h3>
                            <p className='font-ValueSansPro font-normal text-primary opacity-60' style={{ lineHeight: '24px' }}>There are many variations of passages Lorem Ipsum form</p>
                        </div>
                    </div>
                    <div className='outline-dashed bg-[#E9E7E6] rounded-full w-[60px] h-[60px] flex justify-center items-center'>
                        <span className='text-primary'>$10</span>
                    </div>
                </div>
            </div>
            <div className='flex justify-center items-center'>
                <button className="font-ValueSansPro text-[16px] py-3 px-6 md:py-[18px] md:px-[30px] rounded-md text-[#86371C] border border-[#86371C] mt-4 md:mt-0 hover:bg-secondary duration-150 hover:text-white">
                    View All Menu
                </button>
            </div>
        </section>
    );
};

export default CoffeeMenu;