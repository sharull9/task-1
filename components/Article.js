import Image from "next/image";
import Link from "next/link";
import img1 from "../public/article-1.png";
import img2 from "../public/article-2.png";
import img3 from "../public/article-3.png";
import img4 from "../public/article-4.png";
import img5 from "../public/article-5.png";
import img6 from "../public/article-6.png";

function Article() {
  return (
    <div className="px-[54px] xl:pl-[114px] xl:pr-[104px]">
      <div className="mt-[132px] xl:mt-[158px] xl:h-[84px]">
        <h3>Latest Articles</h3>
      </div>
      <div className="mt-[23px] xl:mt-[41px]">
        <div className="article-list">
          <div className="article-card">
            <Image src={img1} alt="" />
            <h4 className="text-center xl:text-left mt-[39px] xl:mt-[34px] px-[0px] xl:px-[43px]">
              Grilled Tomatoes at Home
            </h4>
            <p className="para text-[12px] mt-[6px] xl:mt-[14px]">
              PLorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry&#900;s standard dummy
              text ever since the 1500s, when an unknown printer took a
              galley....
            </p>
            <div className="mt-[26px] xl:mt-[30px] m-auto xl:m-0">
              <button className="article-btn">
                <Link href="#">Read More</Link>
              </button>
            </div>
          </div>
          <div className="article-card">2</div>
          <div className="article-card">3</div>
        </div>
      </div>
    </div>
  );
}

export default Article;
