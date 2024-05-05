import { PropsWithChildren } from "react";
import { Footer } from "./Footer";

type PageLayoutProps = PropsWithChildren;

export function PageLayout({ children }: PageLayoutProps) {
  return (
    <>
      {/* <div className="container mx-auto my-auto">{children}</div> */}
      <div className='flex flex-row' >
        <div className='md:w-2/12 w-1/12'></div>
        <div className='md:w-8/12 w-10/12'>{children}</div>
        <div className='md:w-2/12 w-1/12'></div>
      </div>
      <Footer/>
    </>
  );
}
