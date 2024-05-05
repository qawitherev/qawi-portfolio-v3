interface ButtonProps {
  buttonText: string;
  onClick?: ()=> void
}

interface StaticButtonProps {
  buttonText: string;
}

export function DefaultButton({ buttonText, onClick }: ButtonProps) {
  return (
    <>
      <button onClick={onClick} className="px-6 md:py-4 py-2 md:text-xl text-lg font-semibold w-full md:rounded-2xl rounded-full transition-all duration-500 bg-gradient-to-b to-[#040E38] to-100% via-[#040E38] from-[#49506C] from-0% bg-size-200 bg-pos-0 hover:bg-pos-100">
        {buttonText}
      </button>
    </>
  );
}

export function BlackButton({ buttonText, onClick }: ButtonProps) {
  return (
    <>
      <button onClick={onClick} className="bg-black border-2 border-white text-white rounded-2xl text-base font-semibold px-6 py-1 transition-colors duration-500 hover:border-2 hover:border-black hover:text-black hover:bg-white ease-in-out">
        {buttonText}
      </button>
    </>
  );
}

export function WhiteButton({ buttonText, onClick }: ButtonProps) {
  return (
    <>
      <button onClick={onClick} className="bg-white border-2 border-black text-black font-bold text-base rounded-2xl px-6 py-1 transition-colors duration-500 hover:bg-black hover:text-white ease-in-out">
        {buttonText}
      </button>
    </>
  );
}

export function StaticButton({ buttonText }: StaticButtonProps) {
  return (
    <button className="bg-white transition-all duration-500 ease-in-out hover:scale-110 w-fit h-fit md:px-12 md:py-2 px-5 py-1 rounded-3xl mr-3 mb-4">
      <p className="bg-gradient-to-b bg-size-200 bg-pos-0 hover:bg-pos-100 transition-all duration-500 hover:scale-110 ease-in-out from-[#212B50] from-40% to-[#7F90CC] to-100% bg-clip-text text-transparent font-bold md:text-xl text-lg">
        {buttonText}
      </p>
    </button>
  );
}
