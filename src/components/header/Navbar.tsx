import { useState } from "react";
import logo from "../../assets/logo.svg";
import { TemplateMenu } from "./TemplateMenu";
import { SupportMenu } from "./SupportMenu";
import IconButton from "../buttons/IconButton";
import searchIcon from "../../assets/searchIcon.svg";
import { keyIcon } from "../../assets/svgIcons";
import { Cart, Facebook, Github, Logout, Nord, Twitter } from "../svg";
import { DropdownButton } from "../menu/NavDropDownMenu";

export const Navbar: React.FC = () => {
  const [activeDropdown, setActiveDropdown] = useState("");

  const handleDropdownEnter = (dropdown: string) => {
    setActiveDropdown(dropdown);
  };

  const handleDropdownLeave = () => {
    setActiveDropdown("");
  };

  const dropdownItems = {
    template: <TemplateMenu />,
    resources: <SupportMenu />,
  };

  return (
    <div className="grid grid-cols-12 py-4 bg-white sticky top-0 z-10">
      <div className="col-span-3  sm:col-span-2 flex justify-center">
        <div>
          <img src={logo} alt="Logo" />
        </div>
      </div>

      <div className="col-span-4 hidden justify-center sm:flex">
        <div className="flex items-center justify-center gap-4">
          <DropdownButton
            label="Template"
            dropdownComponent={dropdownItems.template}
            activeDropdown={activeDropdown}
            onMouseEnter={() => handleDropdownEnter("template")}
            onMouseLeave={handleDropdownLeave}
          />
          <DropdownButton
            label="Resources"
            dropdownComponent={dropdownItems.resources}
            activeDropdown={activeDropdown}
            onMouseEnter={() => handleDropdownEnter("resources")}
            onMouseLeave={handleDropdownLeave}
          />
          <div className="text-base text-lightBlack font-[500] flex items-center gap-2 mr-4">
            <p className="text-base text-lightBlack font-[500] hover:text-blue cursor-pointer">
              Support
            </p>
          </div>
        </div>
      </div>

      <div className="col-span-6 flex items-center gap-6">
        <div className="hidden sm:block">
          <div className="flex items-center shadow-sm relative px-2 w-[200px] rounded-md border-[2px] border-gray">
            <img src={searchIcon} alt="" />
            <input
              placeholder="Search here..."
              className="py-2.5 pl-2 font-medium outline-none duration-200 ease-out placeholder:text-dark-5 focus:border-transparent focus:bg-input focus:shadow-input-2"
              type="text"
              value=""
            />

            <span className="absolute right-3.5 top-1/2 -translate-y-1/2 text-[#B5B5B5]">
              ⌘K
            </span>
          </div>
        </div>
        <div className="hidden sm:block">
          <div className="flex gap-6 pl-2 text-black items-center">
            <div className="hover:text-blue cursor-pointer text-darkgray">
              <Nord />
            </div>
            <div className="hover:text-blue cursor-pointer text-darkgray">
              <Twitter />
            </div>
            <div className="hover:text-blue cursor-pointer text-darkgray">
              <Github />
            </div>
            <div className="hover:text-blue cursor-pointer text-darkgray">
              <Facebook />
            </div>
          </div>
        </div>
        <div className="hidden sm:block">
          <IconButton
            title="All-Access Pass"
            icon={keyIcon}
            iconPosition="left"
            px={7}
            py={9}
          />
        </div>
        <div className="flex gap-3 pl-48 sm:pl-2">
          <div className="flex gap-2 text-black font-[500] text-base hover:text-blue cursor-pointer">
            <Logout />
            <p>Logout</p>
          </div>
          <span className="block h-5 w-px bg-black"></span>
          <div className="relative">
            <Cart />
            <span className="w-[20px] h-[20px] flex justify-center items-center rounded-full bg-blue absolute -top-[12px] -right-3 text-white text-xs">
              2
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};
