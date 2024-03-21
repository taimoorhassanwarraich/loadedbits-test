import shape1 from '../../assets/shape-1.svg'
import shape2 from '../../assets/shape-2.svg'
export const Banner = () => {
    return (
      <div className="relative h-72 bg-white border-2">
        <div className="text-center w-[80%] m-auto">
        <p className='text-5xl leading-54 font-semibold text-black'>Subscribe Our Newsletter</p>

          <p className='text-base text-lightBlack'>
            Join our newsletter and be the first to know about new product
            release, discounts and useful resources!
          </p>
          <div className="flex w-[70%] m-auto gap-4">
            <input type="text" className='font-semibold text-lightBlack text-base' placeholder='Enter your email address'/>
            <button className='px-4 py-3 bg-blue text-white rounded-md '>Subscribe</button>
          </div>
        </div>
        <div className="absolute left-0 top-1">
            <img src={shape1} alt="" />
        </div>
        <div className="absolute right-0 top-5">
            <img src={shape2} alt="" />
        </div>
      </div>
    );
  };