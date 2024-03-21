import React, { } from "react";
import { keyIcon } from "../../assets/svgIcons";
import SearchInput from "../inputs/SearchInput";

import menu from '../../assets/862ef795-7246-495d-8eef-cf2ef2db2b60.svg'
import bootstrap from '../../assets/bootstrap.svg'
import react from '../../assets/react.svg'
import tailwind from '../../assets/tailwind.svg'
import { FilterButton } from "../buttons/FilterButton";
import { DropdownMenu } from "../menu/DropDownMenu";

export const Filters = () => {
  return (
    <div className="bg-white  grid grid-cols-12 px-4 py-3 rounded-lg my-8">
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
