import img from '../../assets/image/whyChooseUs.jpeg'
const WhyChooseUs = () => {
    return (
        <section className='flex flex-col md:flex-row justify-between items-center max-w-full md:max-w-[1366px] mx-auto gap-3 mt-[10rem]'>
            <div className='space-y-2 w-full md:w-[667px] md:mr-10 px-3 md:px-2'>
                <h4 className="flex items-center gap-2 text-secondary font-ValueSansPro text-[16px]">
                    <svg width="51" height="2" viewBox="0 0 51 2" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M50 1.5C50.2761 1.5 50.5 1.27614 50.5 1C50.5 0.723858 50.2761 0.500001 50 0.500001L50 1.5ZM-5.96244e-09 1.5L50 1.5L50 0.500001L5.96244e-09 0.5L-5.96244e-09 1.5Z" fill="url(#paint0_linear_0_4301)" />
                        <defs>
                            <linearGradient id="paint0_linear_0_4301" x1="5.96244e-09" y1="0.5" x2="50" y2="0.500001" gradientUnits="userSpaceOnUse">
                                <stop stopColor="#86371C" stopOpacity="0" />
                                <stop offset="1" stopColor="#86371C" />
                            </linearGradient>
                        </defs>
                    </svg>
                    Why Choose Us
                </h4>

                <h2 className="font-Bakilda text-2xl md:text-[44px] text-primary" style={{ lineHeight: '60px' }}>Choosing Unlocklive, A Taste of Perfection</h2>
                <p style={{ lineHeight: '27.7px' }} className="font-ValueSansPro text-primary text-xl font-normal opacity-60 md:w-[646px]">
                    Unlocklive takes pride in the art of roasting, transforming raw coffee beans into a symphony of aromatic notes and rich flavors.
                </p>
                <div className="flex flex-col md:flex-row justify-evenly items-center gap-5">
                    <div className="flex flex-col md:flex-row justify-evenly items-center gap-5">
                        <div className="w-[203px] h-[134px] border-2 rounded-md flex justify-center items-center">
                            <div>
                                <h3 className="font-Bakilda text-[44px] text-center text-primary">20+</h3>
                                <p className="font-ValueSansPro text-xl text-center text-primary">Years Experience</p>
                            </div>
                        </div>
                        <div className="w-[203px] h-[134px] border-2 rounded-md ">
                            <div className="w-[203px] h-[134px] border-2 rounded-md rotate-3 py-5">
                                <h3 className="font-Bakilda text-[44px] text-center text-primary">20+</h3>
                                <p className="font-ValueSansPro text-xl text-center text-primary">Years Experience</p>
                            </div>

                        </div>
                        <div className="w-[203px] h-[134px] border-2 rounded-md flex justify-center items-center">
                            <div>
                                <h3 className="font-Bakilda text-[44px] text-center text-primary">20+</h3>
                                <p className="font-ValueSansPro text-xl text-center text-primary">Years Experience</p>
                            </div>
                        </div>
                    </div>
                </div>
                <p style={{ lineHeight: '27.7px' }} className="font-ValueSansPro text-xl font-normal text-primary opacity-60 md:w-[646px]">
                    Your choice to savor our coffee is an invitation to experience the epitome of craftsmanship, flavor, and dedication.
                </p>
                <button className="py-3 px-6 md:py-[18px] md:px-[30px] rounded-md text-[#86371C] border border-[#86371C] mt-4 md:mt-0 hover:bg-secondary hover:text-white duration-150">
                    Explore Our Menus
                </button>
            </div>
            <div className='w-full md:w-[468px] h-[528px] flex justify-center items-center'>
                <img className='w-full h-auto rounded-md' src={img} alt="Coffee" />
            </div>
        </section>
    );
};

export default WhyChooseUs;