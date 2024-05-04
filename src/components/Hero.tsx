import HeroSvg from "../assets/svg/hero_svg.svg";
import { DownloadResume } from "../utils/DownloadResume";
import { MailMe } from "../utils/MailMe";
import { DefaultButton } from "./generics/ButtonVariants";

export function Hero() {
  return (
    <>
      <div className='flex flex-row justify-center'>
        <div className='flex-1 flex flex-col space-y-1 text-white justify-end pb-36' >
          <p className='font-base text-4xl mb-5'>Hi, I am Abdul Qawi</p>
          <p className='font-bold text-6xl'>A Multi-Tech</p>
          <p className='font-bold text-6xl pb-10'>Stack Master</p>
          <div className='flex flex-row space-x-4' >
            <DefaultButton buttonText="Get Resume" onClick={DownloadResume} />
            <DefaultButton buttonText="Email Me" onClick={MailMe} />
          </div>
        </div>
        <div className='flex-1' >
          <img src={HeroSvg} alt="hero_svg" className='w-full' />

        </div>
      </div>
    </>
  );
}
