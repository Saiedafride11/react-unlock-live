import img from '../../assets/image/banner.png'
import img1 from '../../assets/image/1.jpeg'
import img2 from '../../assets/image/2jpeg.jpeg'
import img3 from '../../assets/image/3.jpeg'
const Banner = () => {
    return (
        <section className='flex flex-col md:flex-row justify-between items-center max-w-[1366px] gap-3 mt-[190px] mx-auto'>
            <div className='space-y-5 md:w-[60%] mx-5'>
                <h4 className='font-Abril font-semibold text-[16px] text-primary px-2 md:px-0'>WELCOME TO OUR</h4>
                <h1 className='font-Bakilda text-4xl md:text-8xl text-primary px-2 md:px-0'>Unlocklive</h1>
                <h2 className='font-Bakilda text-3xl md:text-5xl text-primary px-2 md:px-0'>Elevating Your Coffee Experience</h2>
                <p style={{ lineHeight: '27.7px' }} className='font-ValueSansPro font-normal text-xl md:text-xl text-primary px-2 md:px-0 opacity-60 w-full md:w-[668px]'>
                    Unlocklive embodies our commitment to transforming the simple act of sipping coffee into a refined and memorable journey. At Epicurean, we take pride in curating an exceptional coffee experience that transcends the ordinary.
                </p>
                <div className='flex flex-col md:flex-row items-center md:justify-between w-full'>
                    <button className='bg-secondary text-white px-5 py-8 rounded-xl mb-4 md:mb-0 md:mr-4 w-full md:w-[211px] hover:bg-transparent hover:border hover:border-[#86371C] hover:text-primary duration-150'>EXPLORE OUR MENU</button>
                    <div className='flex justify-between items-center w-full md:w-[307px]'>
                        <div className='flex relative'>
                            <img className='w-[54px] h-[54px] rounded-full border-2 ' src={img1} alt="coffee" />
                            <img className='w-[54px] h-[54px] rounded-full border-2 absolute left-10' src={img2} alt="coffee" />
                            <img className='w-[54px] h-[54px] rounded-full border-2 absolute left-20' src={img3} alt="coffee" />
                        </div>
                        <div>
                            <p className='font-Abril font-semibold text-lg md:text-2xl'>1200+</p>
                            <p className='font-ValueSansPro text-sm md:text-xs font-medium'>Tasty Variant Coffee</p>
                        </div>
                    </div>
                </div>
                <svg width="120" height="32" viewBox="0 0 120 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="14" cy="16" r="6" fill="#270A05" fillOpacity="0.1" />
                    <circle cx="36" cy="16" r="6" fill="#270A05" fillOpacity="0.1" />
                    <circle cx="58" cy="16" r="6" fill="#270A05" fillOpacity="0.1" />
                    <circle cx="82" cy="16" r="8" fill="#86371C" />
                    <circle cx="106" cy="16" r="6" fill="#270A05" fillOpacity="0.1" />
                </svg>
            </div>
            <div className='w-full md:w-[40%] mt-4 md:mt-0'>
                <img className='w-full h-auto' src={img} alt="" />
            </div>
        </section>

    );
};

export default Banner;