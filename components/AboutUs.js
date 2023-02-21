import Image from "next/image";
import Link from "next/link";
import React from "react";
import aboutBG from "../public/about-us.png";

function AboutUs() {
  return (
    <div className="bg-bgColor xl:grid xl:grid-cols-2 text-center xl:text-left">
      <div className="hidden xl:block xl:ml-[205px]">
        <Image src={aboutBG} alt="bgImage" />
      </div>
      <div className="">
        <h2 className="w-[120px] xl:w-[422px] pt-[140px] text-center xl:text-left xl:pt-[107px] m-auto xl:m-0">
          About us
        </h2>
        <p className="para w-[275px] xl:w-[447px] mt-[21px] xl:mt-[27px] m-auto xl:m-0">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry&#900;s standard dummy text
          ever since the 1500s, when an unknown printer took a galley of type
          and scrambled it to make a type specimen book. t has survived not only
          five centuries.
        </p>
        <div className="mt-[32px] xl:mt-[41px] w-full flex justify-center items-center xl:justify-start pb-[140px] xl:pb-0">
          <button className="btn-1">
            <Link href="#">Read More</Link>
          </button>
        </div>
      </div>
    </div>
  );
}

export default AboutUs;
