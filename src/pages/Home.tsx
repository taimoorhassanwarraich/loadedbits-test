import React from "react";
import backgrnd from "../assets/background.png";
import { Filters } from "../components/widget/Filters";
import { ProductCard } from "../components/cards/ProductCard";
import resume from "../assets/react-resume.jpeg";
import pic1 from '../assets/1.png'
import pic2 from '../assets/2.png'
// import IconButton from "../components/buttons/IconButton";
export const Home = () => {
  return (
    <div
      className="relative px-8"
      style={{
        backgroundImage: `url(${backgrnd})`,
        backgroundSize: "contain",
        backgroundPosition: "top",
      }}
    >
      <div className="flex justify-center pt-16">
        <div className="text-center  ">
          <p className="mt-6 text-[45px] leading-[50px] font-bold text-black">
            Free HTML, Bootstrap, Tailwind, & React Templates and UI Kits
          </p>
          <p className="text-base text-lightBlack mt-3">
            Free HTML Templates, Bootstrap Themes, Tailwind, and React Templates
            and UI Kits - for Pretty Much Any Type of Web Projects. Handcrafted
            HTML Templates, Specially Designed and Developed for - Startup,
            Business, Landing Page, Portfolio, SaaS, Apps, and Coming Soon
            Sites. All Templates and Themes are Fully Responsive, Easy to Use,
            Customizable, Compatible with All Modern Web Browsers, and Ready to
            Use With Your Next Web Projects.
          </p>
          <div className="mt-4 px-6"></div>
        </div>
      </div>
      <div className="">
        <Filters />
      </div>
      <div className="mt-4">
        <ProductsWidget />
      </div>
    </div>
  );
};

const ProductsWidget = () => {
  return (
    <div className=" grid grid-cols-12 gap-16 mb-20  ">
      <div className="col-span-4 hidden sm:block border-[1px] bg-white border-[#e6e7eb] overflow-y-auto customshadow rounded-md shadow-sm h-[650px]  sticky top-20">
        <div className="h-[700px] px-8 pt-6">
          <p className="text-[28px] leading-[40px] font-bold">
            Explore by Tags
          </p>
          <div className="h-[600px] overflow-y-auto mt-6">
            <div className="h-[700px] pr-2">
              {tags.map((item, index) => {
                return (
                  <div
                    className="flex mt-2 py-2 items-center justify-between px-3 cursor-pointer rounded-md border-gray border-[1px] hover:bg-gray"
                    key={index}
                  >
                    <p className="text-base font-[500] text-lightBlack">
                      {item.name}
                    </p>
                    <p className="w-8 h-8 flex justify-center items-center border-gray border-[1px] rounded-lg">
                      {item.count}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
      <div className="col-span-8">
        <div className="grid grid-cols-12 gap-2 sm:gap-12">
          {
            products.map((item,index)=>{
              return(

                <ProductCard key={index} data={item}/>
              )
            })
          }
        </div>
      </div>
    </div>
  );
};

const tags = [
  { name: "Admin", count: 10 },
  { name: "Agency", count: 5 },
  { name: "Portfolio", count: 8 },
  { name: "Business", count: 12 },
  { name: "E-commerce", count: 7 },
  { name: "Marketing", count: 15 },
  { name: "Blog", count: 20 },
  { name: "Education", count: 6 },
  { name: "Health", count: 9 },
  { name: "Travel", count: 11 },
  { name: "Fashion", count: 13 },
  { name: "Technology", count: 18 },
  { name: "Admin", count: 10 },
  { name: "Agency", count: 5 },
  { name: "Portfolio", count: 8 },
  { name: "Business", count: 12 },
  { name: "E-commerce", count: 7 },
  { name: "Marketing", count: 15 },
  { name: "Blog", count: 20 },
  { name: "Education", count: 6 },
  { name: "Health", count: 9 },
  { name: "Travel", count: 11 },
  { name: "Fashion", count: 13 },
  { name: "Technology", count: 18 },
];

const products = [
  {
    title: "TailAdmin React - Tailwind React Dashboard Template",
    description:
      "TailAdmin is a massive Tailwind CSS - React admin dashboard template comes with everything you need for building- feature-rich and data rich",
    image: `${pic1}`,
  },
  {
    title: "Free Next.js Tailwind CSS Startup Template    ",
    description:
      "Tailwind-Next.js Startup Starter Template - a top-of-the-line, free, and open-source template that's designed to help launch your startup, business, o",
    image: `${pic2}`,
  },
  {
    title: "Resume - Free React Resume and Portfolio Template    ",
    description:
      "Resume is a free resume template Crafted for - Resume, Portfolio and CV Sites for Creatives professionals. This template is built-with React, comes wi",
    image: `${resume}`,
  },
];
