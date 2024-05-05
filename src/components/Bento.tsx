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
    <Subbento0 />, //companies served
    <Subbento1 />, //projects
    <Subbento2 />, //mobile stacks
    <Subbento3 />, //social
    <Subbento4 />, //catchphrase
    <Subbento5 />, //web stacks
    <Subbento6 />, //edu
  ];

  const subbentosV2 = [
    <Subbento4 />,
    <Subbento6 />,
    <Subbento2 />,
    <Subbento5 />,
    <Subbento1 />,
    <Subbento0 />,
    <Subbento3 />,
  ];
  return (
    <>
      <div className="flex flex-col items-center">
        <div className="text-white font-bold md:text-2xl text-xl tracking-wide md:mb-8 mb-4">
          About Me
        </div>
        <div className="grid md:auto-rows-[200px] auto-rows-[180px] md:grid-cols-6 gap-3 col-span-1">
          {[...Array(7)].map((_, i) => (
            <div
              key={i}
              className={`bg-gradient-to-b from-[#0b1335] from-50% to-[#0f1942] to-100% bg-size-200 bg-pos-0 transition-all duration-500 ease-in-out hover:bg-pos-100 rounded-2xl hover:scale-105 overflow-hidden
                  ${i === 0 ? "md:col-span-3 col-span-1 md:row-span-2 row-span-1 md:order-5" : ""}
                  ${i === 1 ? "md:col-span-4 col-span-1 md:row-span-1 row-span-1 md:order-7" : ""}
                  ${i === 2 ? "md:col-span-2 col-span-1 md:row-span-2 row-span-1 md:order-3" : ""}
                  ${i === 3 ? "md:col-span-2 col-span-1 md:row-span-2 row-span-1 md:order-6" : ""}
                  ${i === 4 ? "md:col-span-1 col-span-1 md:row-span-1 row-span-1 md:order-2" : ""}
                  ${i === 5 ? "md:col-span-3 col-span-1 md:row-span-1 row-span-1 md:order-1" : ""}
                  ${i === 6 ? "md:col-span-1 col-span-1 md:row-span-2 row-span-1 md:order-4" : ""}
                  `}
            >
              {subbentosV2[i]}
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
