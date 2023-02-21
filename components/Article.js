import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import img1 from "../public/article-1.png";
import img2 from "../public/article-2.png";
import img3 from "../public/article-3.png";
import img4 from "../public/article-4.png";
import img5 from "../public/article-5.png";
import img6 from "../public/article-6.png";

function Article() {
  const [value, setValue] = useState(0);
  const rotate = () => {
    setValue(100);
  };

  return (
    <div className="">
      <div className="mt-[132px] xl:mt-[158px] xl:h-[84px] px-[54px] xl:pl-[114px] xl:pr-[104px]">
        <h3>Latest Articles</h3>
      </div>
      <div className="mt-[23px] xl:mt-[41px] flex ">
        <div
          className={`article-list w-[100%] xl:min-w-[1440px] px-[54px] xl:pl-[114px] xl:pr-[104px] translate-x-[-${value}%]`}
        >
          <div className="article-card">
            <Image src={img1} alt="" />
            <h4 className="text-center xl:text-left mt-[39px] xl:mt-[34px]">
              Grilled Tomatoes at Home
            </h4>
            <p className="para text-[12px] mt-[6px] xl:mt-[14px]">
              PLorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry&#900;s standard dummy
              text ever since the 1500s, when an unknown printer took a
              galley....
            </p>
            <div className="mt-[26px] xl:mt-[30px] flex justify-center items-center xl:justify-start">
              <button className="article-btn">
                <Link href="#">Read More</Link>
              </button>
            </div>
          </div>
          <div className="article-card">
            <Image src={img2} alt="" />
            <h4 className="text-center xl:text-left mt-[39px] xl:mt-[34px]">
              Snacks for Travel
            </h4>
            <p className="para text-[12px] mt-[6px] xl:mt-[14px]">
              PLorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry&#900;s standard dummy
              text ever since the 1500s, when an unknown printer took a
              galley....
            </p>
            <div className="mt-[26px] xl:mt-[30px] flex justify-center items-center xl:justify-start">
              <button className="article-btn">
                <Link href="#">Read More</Link>
              </button>
            </div>
          </div>
          <div className="article-card">
            <Image src={img3} alt="" />
            <h4 className="text-center xl:text-left mt-[39px] xl:mt-[34px]">
              Post-workout Recipes
            </h4>
            <p className="para text-[12px] mt-[6px] xl:mt-[14px]">
              PLorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry&#900;s standard dummy
              text ever since the 1500s, when an unknown printer took a
              galley....
            </p>
            <div className="mt-[26px] xl:mt-[30px] flex justify-center items-center xl:justify-start">
              <button className="article-btn">
                <Link href="#">Read More</Link>
              </button>
            </div>
          </div>
        </div>
        <div className="article-list w-[100%] xl:min-w-[1440px] px-[54px] xl:pl-[114px] xl:pr-[104px]">
          <div className="article-card">
            <Image src={img4} alt="" />
            <h4 className="text-center xl:text-left mt-[39px] xl:mt-[34px]">
              Grilled Tomatoes at Home
            </h4>
            <p className="para text-[12px] mt-[6px] xl:mt-[14px]">
              PLorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry&#900;s standard dummy
              text ever since the 1500s, when an unknown printer took a
              galley....
            </p>
            <div className="mt-[26px] xl:mt-[30px] flex justify-center items-center xl:justify-start">
              <button className="article-btn">
                <Link href="#">Read More</Link>
              </button>
            </div>
          </div>
          <div className="article-card">
            <Image src={img5} alt="" />
            <h4 className="text-center xl:text-left mt-[39px] xl:mt-[34px]">
              Snacks for Travel
            </h4>
            <p className="para text-[12px] mt-[6px] xl:mt-[14px]">
              PLorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry&#900;s standard dummy
              text ever since the 1500s, when an unknown printer took a
              galley....
            </p>
            <div className="mt-[26px] xl:mt-[30px] flex justify-center items-center xl:justify-start">
              <button className="article-btn">
                <Link href="#">Read More</Link>
              </button>
            </div>
          </div>
          <div className="article-card">
            <Image src={img6} alt="" />
            <h4 className="text-center xl:text-left mt-[39px] xl:mt-[34px]">
              Post-workout Recipes
            </h4>
            <p className="para text-[12px] mt-[6px] xl:mt-[14px]">
              PLorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry&#900;s standard dummy
              text ever since the 1500s, when an unknown printer took a
              galley....
            </p>
            <div className="mt-[26px] xl:mt-[30px] flex justify-center items-center xl:justify-start">
              <button className="article-btn">
                <Link href="#">Read More</Link>
              </button>
            </div>
          </div>
        </div>
      </div>
      <div>
        <button onClick={rotate()}>right</button>
      </div>
    </div>
  );
}

export default Article;
