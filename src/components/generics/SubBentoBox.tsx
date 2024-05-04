import { PropsWithChildren } from "react";

type SubBentoBoxProps = PropsWithChildren

export function SubBentoBox({children}: SubBentoBoxProps) {
    return (<div className='bg-gradient-to-r from-blue-800 to-indigo-900'>{children}</div>)
}