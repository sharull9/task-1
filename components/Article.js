import { data } from "autoprefixer";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import img1 from "../public/article-1.png";
import img2 from "../public/article-2.png";
import img3 from "../public/article-3.png";
import img4 from "../public/article-4.png";
import img5 from "../public/article-5.png";
import img6 from "../public/article-6.png";
import Button from "./Button";

function Article() {
  const [value, setValue] = useState(0);
  const [number, setNumber] = useState(1);
  const moveLeft = () => {
    setValue(0);
    setNumber(1);
  };
  const moveRight = () => {
    setValue(-100);
    setNumber(2);
  };

  return (
    <div className=" overflow-x-hidden">
      <div className="mt-[132px] xl:mt-[158px] xl:h-[84px] px-[54px] xl:pl-[114px] xl:pr-[104px]">
        <h3>Latest Articles</h3>
      </div>
      <div
        className={`mt-[23px] xl:mt-[41px] flex transition-all duration-200`}
        style={{ transform: `translateX(${value}%)` }}
      >
        <div
          className={`article-list min-w-[100%] px-[54px] xl:pl-[114px] xl:pr-[104px]`}
        >
          <div className="article-card shadow">
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
          <div className="article-card shadow">
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
          <div className="article-card shadow">
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
        <div className="article-list min-w-[100%] px-[54px] xl:pl-[114px] xl:pr-[104px] translate-x-[2 0px]">
          <div className="article-card shadow">
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
          <div className="article-card shadow">
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
          <div className="article-card shadow">
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
      <div className="py-[63px] flex justify-center items center">
        <Button direction="left" moveSlide={moveLeft} />
        <div className="h-[16px] xl:w-[40px] xl:h-[28px] text-[11px] xl:text-[16px] text-center flex justify-center items-center">
          {number} / 2
        </div>
        <Button direction="right" moveSlide={moveRight} />
      </div>
    </div>
  );
}

export default Article;
