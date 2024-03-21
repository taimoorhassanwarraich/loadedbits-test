export const FilterButton = ({ icon, title, isborder }: any) => {
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