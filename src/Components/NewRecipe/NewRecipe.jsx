import { RiArrowLeftLine, RiArrowRightLine } from "react-icons/ri";
import img8 from '../../assets/image/8.png'
import img9 from '../../assets/image/9.png'
import img10 from '../../assets/image/10.png'

const NewRecipe = () => {
    return (
        <section className="flex flex-col md:flex-row justify-between items-center gap-2 mt-10 md:mt-20 bg-[#FFFAF2] md:max-w-[1921px] mx-auto min-h-[673px] py-5 md:py-0">
            <div className="px-3 md:px-5">
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
                    New Recipe
                </h4>
                <h2 className="font-Bakilda text-2xl md:text-[44px] text-primary md:leading-[60px]">Taste Our New Recipe</h2>
                <p className="font-ValueSansPro text-primary text-lg font-normal opacity-60 md:w-[475px] md:mb-5 md:leading-[27.7px]">
                    Malesuada cursus a tincidunt volutpat posuere lacinia. Congue malesuada lacus pharetra ut vel amet. Amet turpis suspendisse porttitor scelerisque amet dolor et. Nisi ac vitae tortor lacinirisus. Scelerisque nibh elit malesuada sodales eget iaculis nunc erat. Donec quis fermentum mattis aliquet gravida. Adipiscing eu sit ornare imperdiet viverra sit vel.
                </p>
                <p className="font-ValueSansPro text-primary text-lg font-normal opacity-60 md:w-[468px] md:leading-[27.7px]">
                    There are many variations of passages of Lorem Ipsum form any injected humour, or randomised words which don&apos;t look slightly believable.
                </p>
                <div className="flex gap-8 mt-5 md:mt-10">
                    <button className="border-2 border-primary flex justify-center items-center rounded-full w-10 h-10 hover:bg-secondary hover:text-white hover:border-white duration-150">
                        <RiArrowLeftLine size={30} />
                    </button>
                    <button className="border-2 border-primary flex justify-center items-center rounded-full w-10 h-10 hover:bg-secondary hover:text-white hover:border-white duration-150">
                        <RiArrowRightLine size={30} />
                    </button>
                </div>
            </div>
            <div className="flex flex-col md:flex-row justify-evenly items-center gap-5 mx-auto mt-5">
                <div className="w-full lg:w-[250px] md:w-full md:h-[400px] px-5 md:px-0">
                    <img className="rounded-3xl bg-gradient-to-r from-[#FD9900] to-[#FFFFFF]" src={img8} alt="image" />
                </div>
                <div className="w-full lg:w-[250px] md:w-full md:h-[400px] px-5 md:px-0">
                    <img className="rounded-3xl bg-gradient-to-r from-[#FD9900] to-[#FFFFFF]" src={img9} alt="image" />
                </div>
                <div className="w-full lg:w-[250px] md:w-full md:h-[400px] px-5 md:px-0">
                    <img className="rounded-3xl bg-gradient-to-r from-[#FD9900] to-[#FFFFFF]" src={img10} alt="image" />
                </div>
            </div>
        </section>

    );
};

export default NewRecipe;