import { ElementType, ReactNode } from "react";

export type TypeVarian = 'default' | 'outlined';
export type TypeSize = 'small' | 'normal' | 'medium' | 'large' | 'extra'
export type TypeColor = ''

export interface ICommonBaseUI {
    varian?: TypeVarian,
    children?: ReactNode,
    size?: TypeSize,
    component?: ElementType,
    className?: string,
}

export interface ICommonIcon {
    src: string,
    width?: number,
    height?: number,
    alt?: string,
    position?: 'left' | 'right'
}