import { useState } from "react";
import { ArrowIcon } from "../svg";

export const DropdownMenu = () => {
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
  