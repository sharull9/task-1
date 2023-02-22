import Image from "next/image";
import Link from "next/link";
import React from "react";
import Logo from "../public/logo.png";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";

function Footer() {
  return (
    <div className="pt-[52px] pb-[105px] xl:pt-[84px] xl:pb-[92px] px-[41px] xl:px-[108px] bg-bgColor grid grid-rows-4 xl:grid-rows-1 xl:grid-cols-4">
      <div className="flex justify-center items-center xl:justify-start">
        <Image src={Logo} className="xl:w-[161px]" />
      </div>
      <div className="pt-[42px] xl:pt-0">
        <h5>Contact Us</h5>
        <p className="para2 w-[275px] xl:w-[217px] xl:pt-[14px]">
          Lorem Ipsum Pvt Ltd.5/1, Magalton Road, Phartosh Gate near YTM Market,
          XYZ-343434
        </p>
        <p className="para2 py-[5px] xl:py-[15px]">
          <Link href="mailto:example2020@gmail.com">example2020@gmail.com</Link>
        </p>
        <p className="para2 pb-[5px] xl:pb-[15px]">
          <Link href="tel:904-443-0343">(904) 443-0343</Link>
        </p>
      </div>
      <div className="pt-[35px] xl:pt-0">
        <h5>More </h5>
        <div>
          <p className="para2 py-[5px] xl:pt-[14px] xl:pb-[14px]">
            <Link href="#">About Us</Link>
          </p>
          <p className="para2 pb-[10px] xl:pb-[14px]">
            <Link href="#">Products</Link>
          </p>
          <p className="para2 pb-[10px] xl:pb-[14px]">
            <Link href="#">Career</Link>
          </p>
          <p className="para2">
            <Link href="#">Contact Us</Link>
          </p>
        </div>
      </div>
      <div className="grid grid-rows-3 xl:flex xl:flex-col pt-[30px] xl:pt-0 xl:relative">
        <h5 className="hidden xl:block xl:h-[27px] xl:text-right pr-[20px]">
          Social Links
        </h5>
        <div className="text-primary row-start-2 flex justify-center items-center gap-4 xl:ml-[100px]">
          <Link href="#">
            <InstagramIcon />
          </Link>
          <Link href="#">
            <TwitterIcon />
          </Link>
        </div>
        <div className="xl:absolute xl:right-0 xl:bottom-[30px]">
          <p className="cpText text-center xl:text-right">
            © 2022 Food Truck Example
          </p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
