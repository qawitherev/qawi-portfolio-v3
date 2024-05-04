import {
  Subbento0,
  Subbento1,
  Subbento2,
  Subbento3,
  Subbento4,
  Subbento5,
  Subbento6,
} from "./Subbentos";

export function Bento() {
  const subbentos = [
    <Subbento0 />,
    <Subbento1 />,
    <Subbento2 />,
    <Subbento3 />,
    <Subbento4 />,
    <Subbento5 />,
    <Subbento6 />,
  ];
  return (
    <>
      <div className="flex flex-col items-center">
        <div className="text-white font-bold text-2xl tracking-wide mb-8">About Me</div>
        <div className=" grid auto-rows-[200px] grid-cols-6 gap-3">
          {[...Array(7)].map((_, i) => (
            <div
              key={i}
              className={`bg-gradient-to-b from-[#0b1335] from-50% to-[#0f1942] to-100% bg-size-200 bg-pos-0 transition-all duration-500 ease-in-out hover:bg-pos-100 rounded-2xl hover:scale-105 overflow-hidden
                  ${i === 0 ? "col-span-3 row-span-1" : ""}
                  ${[2, 5].includes(i) ? "col-span-2 row-span-2" : ""}
                  ${i === 3 ? "col-span-1 row-span-2" : ""}
                  ${i === 4 ? "col-span-3 row-span-2" : ""}
                  ${i === 6 ? "col-span-4 row-span-1" : ""}
                  `}
            >
              {subbentos[i]}
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
