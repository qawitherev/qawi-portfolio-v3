import { DownloadResume } from "../utils/DownloadResume";
import { MailMe } from "../utils/MailMe";
import { BlackButton, WhiteButton } from "./generics/ButtonVariants";

export function Footer() {
  return (
    <>
      <div className="flex md:flex-row flex-col bg-white mx-auto py-5">
        <div className="flex flex-1 justify-center md:mb-0 mb-4 md:mx-0 mx-3">
          <div className="md:w-1/2 w-full flex flex-col items-center">
            <p className="text-gray-400 text-base font-semibold">Interested?</p>
            <p className="bg-gradient-to-r from-blue-900 to-red-600 bg-clip-text text-transparent md:text-5xl text-4xl font-bold text-center pb-3">
              Let's Connect
            </p>
            <p className="font-semibold text-lg text-center mb-3">
              My DM is always open whether to just{" "}
              <strong>ask questions</strong> or to{" "}
              <strong>talk business</strong>
            </p>
            <BlackButton buttonText="Shoot The DM" onClick={MailMe} />
          </div>
        </div>
        <div className="flex flex-1 justify-center md:mx-0 mx-3">
          <div className="md:w-1/2 w-full flex flex-col items-center">
            <p className="text-gray-400 text-base font-semibold">
              Need More Info?
            </p>
            <p className="bg-gradient-to-r from-blue-900 to-red-600 bg-clip-text text-transparent md:text-5xl text-4xl font-bold text-center pb-3">
              Get My Resume
            </p>
            <p className="font-semibold text-lg text-center mb-3">
              List out <strong>comprehensive details</strong>, skills and
              professional work experiences
            </p>
            <WhiteButton buttonText="Download Resume" onClick={DownloadResume} />
          </div>
        </div>
      </div>
    </>
  );
}
