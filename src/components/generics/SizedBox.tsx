interface SizedBoxProps {
    size: Size, 
    isHorz: boolean
}

export enum Size {
  Small,
  Medium,
  Large,
  XtraLarge,
}

export function SizedBox({size, isHorz}: SizedBoxProps) {
  let className = "";
  switch (size) {
    case Size.Small:
      if (!isHorz) {
        className = "pb-1";
      } else {
        className = "pl-1";
      }
      break;
    case Size.Medium:
      if (!isHorz) {
        className = "pb-3";
      } else {
        className = "pl-3";
      }
      break;
    case Size.Large:
      if (!isHorz) {
        className = "pb-5";
      } else {
        className = "pl-5";
      }
      break;
    case Size.XtraLarge:
      if (!isHorz) {
        className = "pb-7";
      } else {
        className = "pl-7";
      }
      break;
    default:
      if (!isHorz) {
        className = "pb-0";
      } else {
        className = "pl-0";
      }
      break;
  }

  return <div className={className} />;
}
