import { mobileStacks } from '../assets/data/ConsumableData';
import MobileStackSvg from '../assets/svg/mobile_stacks.svg'
import { StaticButton } from './generics/ButtonVariants';

export function MobileStacks() {

  return (
    <>
      <div id='techStacks' className="flex flex-col">
        <div className="flex md:flex-row items-center">
            <p className='text-white md:text-2xl text-xl font-bold tracking-wide' >Mobile Stacks</p>
            <div className=' w-1/6 h-[2px] bg-white rounded-sm mt-2 ml-1' />
        </div>
        <div className='flex md:flex-row flex-col-reverse items-start '>
            <div className='flex flex-1 flex-wrap mt-8 '>
                {mobileStacks.map(item=>(
                    <StaticButton key={item.name} buttonText={item.name}/>
                ))}
            </div>
            <div className='flex flex-1 justify-center'>
                <img src={MobileStackSvg} alt='mobile_stacks' className='md:w-full w-3/4' />
            </div>
        </div>
      </div>
    </>
  );
}
