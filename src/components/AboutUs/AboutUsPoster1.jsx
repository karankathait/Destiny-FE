import aboutUsImage from '@/images/AboutUs/about-us-img-1.jpg'
import Tent from '@/images/AboutUs/tent.png'
import Cycle from '@/images/AboutUs/bicycling.png'
import Elephant from '@/images/AboutUs/elephants.png'
import Couple from '@/images/AboutUs/couple.png'
import Image from "next/image";
const AboutUsPoster1 = () => {

  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     if (count < endValue) {
  //       setCount((prevCount) => prevCount + 1);
  //     } else {
  //       clearInterval(interval);
  //     }
  //   }, 1);

  //   return () => clearInterval(interval);
  // }, [count, endValue]);

  return (
    <div className="w-full flex justify-center py-12">
      <div className="w-10/12 lg:w-10/12 flex flex-col lg:flex-row gap-16">
        <div className="w-full lg:w-1/2 ">
          <div className="text-center lg:text-start">
          <p className="text-lg font-semibold pb-2">
            <span className="bg-[#FF9933] pl-4">About U</span>s
          </p>
          <h1 className=" text-2xl lg:text-4xl text-[#222222] font-extrabold">
            We are Professional
            <br /> Planners
            <br /> for your Vacations
          </h1>
          </div>
          <p className="text-center lg:text-start py-7 text-lg text-slate-600">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum
            egestas, neque ut hendrerit egestas, lorem velit venenatis urna,
            vitae consequat enim purus tincidunt urna. Maecenas sollicitudin mi
            id odio lacinia feugiat
          </p>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="bg-[#63AB45] pl-1 rounded-xl">
              <div className="text-slate-900 font-bold flex items-center gap-4 shadow-md py-4 bg-white rounded-xl w-full">
                <span className="pl-4">
                    <Image width={50} height={50} src={Tent.src} alt="tent-camp" className="w-10"/>
                </span>
                <span className="">Tent Campaign</span>
              </div>
            </div>
            <div className="bg-[#63AB45] pl-1 rounded-xl">
              <div className="text-slate-900 font-bold flex items-center gap-4 shadow-md py-4 bg-white rounded-xl w-full">
                <span className="pl-4">
                <Image width={50} height={50} src={Cycle.src} alt="cycling" className="w-10"/>
                </span>
                <span className="">Mounting Biking</span>
              </div>
            </div>
            <div className="bg-[#63AB45] pl-1 rounded-xl">
              <div className="text-slate-900 font-bold flex items-center gap-4 shadow-md py-4 bg-white rounded-xl w-full">
                <span className="pl-4">
                    <Image width={50} height={50} src={Elephant.src} alt="wild-animal" className="w-10"/>
                </span>
                <span className="">Wild Campaign</span>
              </div>
            </div>
            <div className="bg-[#63AB45] pl-1 rounded-xl">
              <div className="text-slate-900 font-bold flex items-center gap-4 shadow-md py-4 bg-white rounded-xl w-full">
                <span className="pl-4">
                    <Image width={50} height={50} src={Couple.src} alt="couples" className="w-10"/>
                </span>
                <span className="">Couple Campaign</span>
              </div>
            </div>
          </div>
          <div className="pt-6">
            <button className="py-3 p-8 rounded-md font-medium bg-[#FF9933] text-white">Discover More</button>
          </div>
        </div>
        <div className="w-full lg:w-1/2 relative">
          <Image width={500} height={500} src={aboutUsImage.src} alt="" className="rounded-3xl"></Image>
        </div>
      </div>
    </div>
  );
};

export default AboutUsPoster1;
