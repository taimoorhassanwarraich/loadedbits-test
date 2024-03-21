import { F1, F2, Nord, Twitter, Github, Facebook } from "../svg";
import logo from "../../assets/blacklogo.svg";
import plain from "../../assets/plainadmin.dc772e07.svg";
import tailadmin from "../../assets/tailadmin.15276482.svg";
import lineicons from "../../assets/lineicons.5ce164be.svg";
import formbold from "../../assets/formbold.cc62da7d.svg";
import ayro from "../../assets/ayroui.f526de19.svg";
import resours from "../../assets/resourcefyi.ed421919.svg";
import tailgrid from "../../assets/tailgrids.4bfb2956.svg";

const Icons = [
  { Icon: `${tailadmin}` },
  { Icon: `${lineicons}` },
  { Icon: `${plain}` },
  { Icon: `${formbold}` },
  { Icon: `${resours}` },
  { Icon: `${ayro}` },
  { Icon: `${tailgrid}` },
];

export const Footer = () => {
  return (
    <div className="bg-black relative pb-4 overflow-hidden">
      <div className="absolute left-0 sm:top-0 z-1 opacity-50 3xl:right-[19%]">
        <F1 />
      </div>
      <div className="absolute right-0 sm:top-0 z-1 opacity-50 3xl:right-[19%]">
        <F2 />
      </div>

      <div className="z-10 relative pt-32  max-w-screen-xl m-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 border-b-[1px] border-darkgray pb-12">
          <div className="col-span-full lg:col-span-8">
            <p className="text-[24px] font-semibold text-white">
              Signup Newsletter
            </p>
            <p className="text-sm text-[#ffffff80] mt-2">
              We'll send you a friendly newsletter on updates,
            </p>
            <p className="text-sm text-[#ffffff80]">once a month. No spam.</p>
          </div>
          <div className="col-span-full lg:col-span-4 flex h-[50px] lg:py-0">
            <input
              type="email"
              id="email"
              placeholder="Enter your email"
              className="w-full rounded-l-lg border border-gray bg-white px-4 lg:px-6 py-2 lg:py-3 outline-none placeholder:text-darkgray"
              name="email"
            />
            <button
              type="submit"
              className="inline-flex rounded-r-lg bg-blue px-5 lg:px-7 py-2 lg:py-3 text-base font-medium text-white duration-200 ease-out hover:bg-primary-200"
            >
              Subscribe
            </button>
          </div>
        </div>
        <FooterLinksContainer />
        <div className="mt-16 border-b-[1px] border-darkgray pb-8">
          <p className="mb-4 text-center font-medium text-white/50">
            Check out our other products
          </p>
          <div className="flex flex-wrap justify-between gap-4 items-center hover:text-blue">
            {Icons.map((item, index) => {
              return <img key={index} src={item.Icon} alt="" />;
            })}
          </div>
        </div>
        <p className="text-center mt-4 text-white/50">
          © 2024 UIdeck, all rights reserved. A Product by Pimjo
        </p>
      </div>
    </div>
  );
};

const FooterLinksContainer = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-3 mt-16">
      <div className="col-span-full sm:col-span-1 lg:col-span-4 pr-4">
        <img src={logo} alt="" />
        <p className="mt-4 sm:mt-6 lg:mt-4 text-white/50">
          Handcrafted HTML, Tailwind and Bootstrap Templates and UI Kits
        </p>
        <div className="flex gap-4 sm:gap-6 lg:gap-8 pl-2 text-black items-center mt-6">
          <div className="hover:text-white cursor-pointer text-darkgray">
            <Nord />
          </div>
          <div className="hover:text-white cursor-pointer text-darkgray">
            <Twitter />
          </div>
          <div className="hover:text-white cursor-pointer text-darkgray">
            <Github />
          </div>
          <div className="hover:text-white cursor-pointer text-darkgray">
            <Facebook />
          </div>
        </div>
      </div>
      <div className="col-span-full sm:col-span-1 lg:col-span-8 ">
        <div className="grid grid-cols-2 sm:grid-cols-1 lg:grid-cols-12">
          <div className="col-span-full lg:col-span-3">
            <p className="text-xl font-semibold text-white">Quick Links</p>
            <Links links={["About us", "Products", "Pricing", "Docs"]} />
          </div>
          <div className="col-span-full lg:col-span-3">
            <p className="text-xl font-semibold text-white">Support</p>
            <Links
              links={[
                "Open ticket",
                "All access pass",
                "Support policy",
                "UIdeck blog",
              ]}
            />
          </div>
          <div className="col-span-full lg:col-span-3">
            <p className="text-xl font-semibold text-white">FAQ’s</p>
            <Links
              links={[
                "Terms and condition",
                "License and copyright",
                "Refund policy",
                "Privacy policy",
              ]}
            />
          </div>
          <div className="col-span-full lg:col-span-3">
            <p className="text-xl font-semibold text-white">Templates</p>
            <Links
              links={[
                "Bootstrap templates",
                "HTML templates",
                "React templates",
              ]}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

const Links = ({ links }: any) => {
  return (
    <div className="mt-4 sm:mt-6 lg:mt-4">
      {links.map((item: any, index: any) => {
        return (
          <p
            className="text-white/50 text-base hover:text-white cursor-pointer my-2 lg:my-4 capitalize"
            key={index}
          >
            {item}
          </p>
        );
      })}
    </div>
  );
};
