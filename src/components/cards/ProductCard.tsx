import { Downloadicon, EyeIcon } from "../svg";

import react from "../../assets/react.svg";
export const ProductCard = ({data}:any) => {
    return (
      <div className="sm:col-span-6  col-span-12 rounded-md customshadow border-[2px] bg-white pb-4 border-[#e6e7eb]">
        <div className="w-fill">
          <img src={data.image} className="w-full" alt="" />
        </div>
        <div className="px-4">
          <div className="mt-3">
            <ImageBox image={react} />
          </div>
          <p className="text-black mt-4 mb-4 font-[500] cursor-pointer hover:text-blue text-[24px] leading[35px]">
            {data.title}
          </p>
          <p className="text-lightBlack text-base ">
         {data.description}
          </p>
        </div>
        <div className=" grid grid-cols-12 items-center mt-4">
          <div className="text-base py-2 border-gray border-t-[2px] col-span-6 justify-center text-darkgray font-[500] hover:text-blue cursor-pointer flex items-center gap-2 mr-4">
            <EyeIcon />
            <p>Preview</p>
          </div>
  
          <div className="text-base py-2 border-gray border-t-[2px] border-l-[1px] col-span-6 justify-center text-darkgray font-[500] hover:text-blue cursor-pointer flex items-center gap-2 mr-4">
            <Downloadicon />
            <p>Download</p>
          </div>
        </div>
      </div>
    );
  };

  const ImageBox = ({ image }: any) => {
    return (
      <div className="border-gray border-[1px] rounded-md w-32 gap-4 py-2 flex items-center justify-center">
        <img src={image} alt="" />
        <p className="text-base font-[500] text-black">React</p>
      </div>
    );
  };