import Image from "next/image";
import vector from "../public/vector.png";
import Link from "next/link";
import Logo from "../public/logo.png";

function HeroSection() {
  return (
    <div className="grid grid-cols-1 xl:grid-cols-2 pb-[64px] xl:pb-[185px] relative">
      <div className="hidden xl:block absolute top-[33px] left-[100px]">
        <Link href="#">
          <Image src={Logo} alt="logo" className="" />
        </Link>
      </div>
      <div className="pt-[75px] xl:pt-[227px] px-5 xl:px-100 xl:h-[864px]">
        <h1 className="w-[240px] xl:w-[345px] text-center xl:text-left m-auto xl:m-0">
          Discover the <span className="text-secondary">Best</span> Food and
          Drink
        </h1>
        <p className="para1 w-[249px] xl:w-[345px] mt-[20px] xl:mt-[26px] m-auto xl:m-0">
          Naturally made Healthcare Products for the better care & support of
          your body.
        </p>
        <div className="mt-[32px] xl:mt-[41px] w-full flex justify-center items-center xl:justify-start">
          <button className="btn-1">
            <Link href="#">Explore Now!</Link>
          </button>
        </div>
      </div>
      <div className="w-full h-[413px] xl:h-[804px] row-start-1 row-end-2 xl:col-start-2 xl:col-end-3 relative bg-hero-pattern bg-no-repeat bg-contain">
        <button className="btn absolute z-10 right-[20px] top-[20px]">
          <Link href="#">Get in Touch</Link>
        </button>
        <Image src={vector} alt="" className="absolute xl:w-[720px] inset-0" />
        {/* <Image
          src={heroBgImage}
          alt="bgImage"
          className="w-full h-full right-0 top-0"
        /> */}
      </div>
    </div>
  );
}

export default HeroSection;
