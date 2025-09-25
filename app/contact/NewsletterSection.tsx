import React from "react";

const NewsLetterSection = () => {
  return (
    <div className="py-[80px] pb-[72px] boxCard">
      <div className="mx-auto lg:w-[85%] w-[90%] max-w-[1220px]">
        <h1 className="text-3xl md:text-5xl font-medium tracking-[-0.3px] pb-3">
          Stay up to date
        </h1>
        <h4 className="text-primary-greytext text-lg md:text-xl tracking-[-0.3px]">
          Subscribe to our newsletter
        </h4>
        <div className="pt-[50px]">
          <form className="flex flex-col gap-y-9 md:flex-row gap-x-9">
            <input
              type="text"
              className="border-[1px] pl-[14px] rounded-[8px] w-full md:max-w-[400px] xl:min-w-[400px] h-[47px] border-primary-border placeholder:text-primary-greytext placeholder:text-sm focus:outline-none"
              placeholder="Full-name"
            />
            <input
              type="text"
              className="border-[1px] pl-[14px] rounded-[8px] w-full md:max-w-[400px] xl:min-w-[400px] h-[47px] border-primary-border placeholder:text-primary-greytext placeholder:text-sm focus:outline-none"
              placeholder="Email address"
            />
            <button className="button-shadow rounded-[10px] text-primary-black inline-flex text-lg justify-center w-[127px] h-[48px] items-center border-[1px] border-primary-border tracking-[-0.3px]">
              Subscribe
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default NewsLetterSection;
