import React, { useState } from "react";
import { keyIcon } from "../../assets/svgIcons";
import SearchInput from "../inputs/SearchInput";
import { ArrowIcon } from "../svg";
import menu from '../../assets/862ef795-7246-495d-8eef-cf2ef2db2b60.svg'
import bootstrap from '../../assets/bootstrap.svg'
import react from '../../assets/react.svg'
import tailwind from '../../assets/tailwind.svg'

export const Filters = () => {
  return (
    <div className="bg-white sticky top-0 z-10 grid grid-cols-12 px-4 py-3 rounded-lg my-8">
      <div className="col-span-12 sm:col-span-6 flex flex-col sm:flex-row items-start sm:items-center gap-4">
        <DropdownMenu />
        <SearchInput
          icon={keyIcon}
          type="text"
          placeholder="Search here..."
          aria-label="search"
        />
      </div>
      <div className="col-span-12 sm:col-span-6 mt-4 sm:mt-0">
        <div className="flex items-center justify-center sm:justify-end gap-4">
            <p className="text-base text-lightBlack font-[500] hidden sm:block">Filter:</p>
            <FilterButton icon={menu} title={'All'} isborder={false}/>
            <FilterButton icon={bootstrap} title={'Bootstrap'} isborder={true}/>
            <FilterButton icon={react} title={'React'} isborder={true}/>
            <FilterButton icon={tailwind} title={'Tailwind'} isborder={true}/>
        </div>
      </div>
    </div>
  );
};

const FilterButton = ({ icon, title, isborder }: any) => {
  const buttonClassName = isborder
    ? 'flex text-base font-[500] text-black items-center gap-2 px-3 py-2 rounded-md border-gray border-[1px] hover:bg-[#F7F7FE] hover:border-lightBlue cursor-pointer'
    : 'flex text-base font-[500] text-black items-center gap-2 px-3 py-2 rounded-md border-gray hover:bg-[#F7F7FE] cursor-pointer';

  return (
    <div className={buttonClassName}>
      <img src={icon} alt="" />
      <p>{title}</p>
    </div>
  );
};

const DropdownMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState("Newest Items");

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleOptionClick = (option: any) => {
    setSelectedOption(option);
    setIsOpen(false);
  };

  return (
    <div className="relative">
      <div
        className="text-base flex items-center gap-2 px-3 py-3 rounded-md bg-gray text-lightBlack font-[500] cursor-pointer"
        onClick={toggleDropdown}
      >
        <p className="text-base text-lightBlack font-[500]">{selectedOption ? selectedOption : "Dropdown Menu"}</p>
        <ArrowIcon color={"#252f3f"}/>
      </div>
      {isOpen && (
        <div className="absolute top-full left-0 z-10 mt-2 bg-white p-2 shadow-lg">
          <ul>
            <li onClick={() => handleOptionClick("Newest Items")}>
              Newest Items
            </li>
            <li onClick={() => handleOptionClick("Best Selling")}>
              Best Selling
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};
