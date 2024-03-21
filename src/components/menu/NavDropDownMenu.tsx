import { useState } from "react";
import { ArrowIcon } from "../svg";

interface DropdownButtonProps {
    label: string;
    dropdownComponent: JSX.Element;
    activeDropdown: string;
    onMouseEnter: () => void;
    onMouseLeave: () => void;
  }
  
  export const DropdownButton: React.FC<DropdownButtonProps> = ({
    label,
    dropdownComponent,
    activeDropdown,
    onMouseEnter,
    onMouseLeave,
  }) => {
    const [isHovering, setIsHovering] = useState(false);
    return (
      <div className="relative">
        <div
          className="text-base text-black px-3 py-2 rounded-md font-[500] hover:text-blue hover:bg-[#F9F9FF] cursor-pointer flex items-center gap-2 mr-4"
          onMouseEnter={() => {
            onMouseEnter();
            setIsHovering(true);
          }}
          onMouseLeave={() => {
            onMouseLeave();
            setIsHovering(false);
          }}
        >
          {label}
          <ArrowIcon color={`${isHovering ? "#4338CA" : "#252f3f"}`} />
        </div>
        {activeDropdown === label.toLowerCase() && (
          <div
            className="absolute mt-10 bg-white p-2 shadow-lg"
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
          >
            {dropdownComponent}
          </div>
        )}
      </div>
    );
  };
  