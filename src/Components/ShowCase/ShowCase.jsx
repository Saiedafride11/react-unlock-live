import img11 from '../../assets/image/11.jpeg';
import img12 from '../../assets/image/12.jpeg';
import img13 from '../../assets/image/13.jpeg';
import img14 from '../../assets/image/14.jpeg';
import img15 from '../../assets/image/15.jpeg';
const ShowCase = () => {
    return (
        <section className='max-w-[1320px] mx-auto mt-10'>
            <div className="flex flex-col justify-center items-center">
                <h4 className="text-secondary font-ValueSansPro text-[16px]">Showcase</h4>
                <svg width="124" height="1" viewBox="0 0 124 1" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <line y1="0.5" x2="124" y2="0.5" stroke="url(#paint0_linear_5_178)" />
                    <defs>
                        <linearGradient id="paint0_linear_5_178" x1="0" y1="2.0003" x2="114.902" y2="2.0003" gradientUnits="userSpaceOnUse">
                            <stop stopColor="#86371C" stopOpacity="0" />
                            <stop offset="0.510417" stopColor="#86371C" />
                            <stop offset="1" stopColor="#86371C" stopOpacity="0" />
                        </linearGradient>
                    </defs>
                </svg>
            </div>
            <p style={{ lineHeight: '32px' }} className="font-ValueSansPro text-primary text-lg font-normal opacity-60 md:w-[674px] mb-5 text-center mx-auto mt-8">Behold the extraordinary creations born from the synergy of our users&apos; ingenuity and the transformative power of AI, a testament to boundless innovation.</p>

            <div className="flex flex-wrap justify-evenly gap-2 items-center list-none max-w-full md:max-w-[1022px] mx-auto font-ValueSansPro font-normal text-[22px] text-primary">
                <li className="border py-3 px-4 border-primary rounded-2xl text-primary">All</li>
                <li>Burger</li>
                <li>Drinks</li>
                <li>Pizza</li>
                <li>Dinner</li>
                <li>Lunch</li>
                <li>Cookies</li>
                <li>Bakery</li>
            </div>
            <div className='mt-10 px-3'>
                <div className='flex flex-col md:flex-row justify-evenly items-center gap-5'>
                    <div className='w-full md:w-[424px]'>
                        <img className='rounded-3xl h-[348px]' src={img11} alt="image" />
                    </div>
                    <div className='w-full md:w-[872px]'>
                        <img className='rounded-3xl w-full h-[348px]' src={img12} alt="image" />
                    </div>
                </div>
                <div className='flex flex-col md:flex-row justify-evenly items-center gap-5 mt-5'>
                    <div className='w-full md:w-[312px]'>
                        <img className='rounded-3xl h-[348px]' src={img13} alt="image" />
                    </div>
                    <div className='w-full md:w-[536px]'>
                        <img className='rounded-3xl w-full h-[348px]' src={img14} alt="image" />
                    </div>
                    <div className='w-full md:w-[424px]'>
                        <img className='rounded-3xl w-full h-[348px]' src={img15} alt="image" />
                    </div>
                </div>
            </div>
        </section>

    );
};

export default ShowCase;