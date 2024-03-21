import React from 'react';
import searchIcon from '../../assets/searchIcon.svg'
interface SearchInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  icon: JSX.Element;
}

const SearchInput: React.FC<SearchInputProps> = ({ icon, ...inputProps }) => {
  return (
    <div className="flex items-center  shadow-sm   px-2 rounded-md border border-gray">
      
      <input placeholder="Search here..."  className="w-full  py-2.5 pl-5 pr-12 font-medium outline-none duration-200 ease-out placeholder:text-dark-5 focus:border-transparent focus:bg-input focus:shadow-input-2 " type="text" value=""/>
      <div className=" px-4 py-2 rounded-md">
        <img src={searchIcon} alt="" />
      </div>
    </div>
  );
};

export default SearchInput;
