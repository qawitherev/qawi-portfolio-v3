import { webStacks } from "../assets/data/ConsumableData";
import WebStackSvg from "../assets/svg/web_stacks.svg";
import { StaticButton } from "./generics/ButtonVariants";

export function WebStacks() {
  return (
    <>
      <div className="flex flex-col">
        <div className="flex md:flex-row items-center justify-end ">
          <div className=" w-1/6 h-[2px] bg-white rounded-sm mt-2 mr-1" />
          <p className="text-white md:text-2xl text-xl font-bold tracking-wide">
            Web Stacks
          </p>
        </div>
        <div className="flex md:flex-row flex-col md:items-start">
          <div className="flex flex-1 justify-center">
            <img
              src={WebStackSvg}
              alt="mobile_stacks"
              className="md:w-full mt-3 md:mt-0 w-3/4"
            />
          </div>
          <div className="flex flex-1 flex-wrap mt-8 justify-end">
            {webStacks.map((item) => (
              <StaticButton key={item.name} buttonText={item.name} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
