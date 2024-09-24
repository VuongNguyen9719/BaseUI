import React from 'react'
import { ITypography } from './type'
import { twMerge } from 'tailwind-merge';

const ClsSize = {
    'small': '',
    'normal': 'typo-normal',
    'medium': 'typo-medium',
    'large': '',
    'extra': ''
}

const ClsVarian = {

}

function Typography({
    component = 'p',
    size = 'normal',
    varian = 'default',
    className,
    children
}: ITypography) {

    const ComponentTag = component;

    return (
        <ComponentTag
            className={twMerge(
                ClsSize[size],
                className
            )}
        >
            {children}
        </ComponentTag>
    )
}

export {
    Typography
}