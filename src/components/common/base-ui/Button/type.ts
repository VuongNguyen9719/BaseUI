import { HTMLAttributes, MouseEvent } from "react";
import { ICommonBaseUI, ICommonIcon } from "../../constants";


export interface IButton extends ICommonBaseUI, HTMLAttributes<HTMLButtonElement> {
    onClick?: (e?: MouseEvent) => void,
    label?: string,
    icon?: ICommonIcon,
    className?: string,
    [key: string]: any;
}