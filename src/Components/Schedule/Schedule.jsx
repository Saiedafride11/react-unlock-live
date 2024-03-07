import img from '../../assets/image/video.png'
const Schedule = () => {
    return (
        <section className='flex flex-col md:flex-row justify-evenly items-center mt-32 bg-[#FFFAF2] min-h-[246px] py-5 md:py-0'>
            <div className='mb-8 md:mb-0 md:mr-8'>
                <img className='w-full h-auto' src={img} alt="video" />
            </div>
            <div className='flex flex-col md:flex-row justify-evenly items-center gap-8 md:gap-28'>
                <div className='mb-8 md:mb-0'>
                    <h3 className="font-ValueSansPro text-xl md:text-2xl mb-2 md:mb-5">Our Opening Hours</h3>
                    <p className="font-ValueSansPro text-xs mb-2">Mon - Sat: 07:00 - 18:00</p>
                    <p className="font-ValueSansPro text-xs">Only Sun: 09:00 - 14:00</p>
                </div>
                <div className='mb-8 md:mb-0'>
                    <h3 className='font-ValueSansPro text-xl md:text-2xl mb-2 md:mb-5'>Our Live Location</h3>
                    <p className='font-ValueSansPro text-xs mb-2'>848 A 28TH ST, Brooklyn</p>
                    <p className='font-ValueSansPro text-xs'>New York, UK</p>
                </div>
                <div>
                    <h3 className='font-ValueSansPro text-xl md:text-2xl mb-2 md:mb-5'>Book A Table Now</h3>
                    <p className='font-ValueSansPro text-xs mb-2'>+1 318-254-6849</p>
                    <p className='font-ValueSansPro text-xs'>+1 452-754-6579</p>
                </div>
            </div>
        </section>

    );
};

export default Schedule;