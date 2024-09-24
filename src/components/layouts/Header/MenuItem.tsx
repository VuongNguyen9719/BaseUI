'use client'

import { Button, Typography } from '@/components/common/base-ui'
import { useFadeEffect } from '@/hooks'
import Image from 'next/image'
import Link from 'next/link'
import React, { CSSProperties, useState } from 'react'
import { twMerge } from 'tailwind-merge'

type IMenu = {
    label: string,
    href: string
}

export default function MenuItem({
    label,
    children
}: {
    label: string,
    children: IMenu[]
}) {

    const [isHovered, setIsHovered] = useState(false)
    const [_isTransitioning, shouldBeVisible, ref] = useFadeEffect(isHovered);
    const isHasChildren = children && children.length > 0
    const handleMouseEnter = () => {
        if (isHasChildren) {
            setIsHovered(true)
        }
    }

    const handleMouseLeave = () => {
        if (isHasChildren) {
            setIsHovered(false)
        }
    }

    const _popoverStyles: CSSProperties = {
        position: "relative",
        opacity: 0,
        transitionDuration: "200ms",
        transitionProperty: "opacity",
        transitionTimingFunction: "cubic-bezier(0, 0, 1, 1)"
    };

    const _popoverVisibleStyles: CSSProperties = {
        position: "relative",
        opacity: 1,
        transitionDuration: "200ms",
        transitionTimingFunction: "cubic-bezier(0, 0, 1, 1)"
    };

    return (
        <li
            className='relative flex-none'
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
        >
            <Button
                className="cursor-pointer p-4 bg-white rounded flex gap-2 items-center justify-center"

            >
                <Typography
                    size="medium"
                >
                    {label}
                </Typography>
                {
                    children && children.length > 0 &&
                    <Image
                        src={'/icon/Solid/Directional/cheveron-down.svg'}
                        width={24}
                        height={24}
                        alt="icon-menu"
                        className={
                            twMerge(
                                isHovered ? '-rotate-180' : '',
                                'transition-transform duration-500'
                            )
                        }
                    />
                }
            </Button>
            {_isTransitioning && (
                <div
                    ref={ref}
                    style={shouldBeVisible ? _popoverVisibleStyles : _popoverStyles}
                >
                    <ul
                        className='bg-white border border-solid border-[#eee] rounded-md absolute top-0 left-0 p-2 min-w-[250px] flex flex-col gap-y-2'
                        style={{
                            boxShadow: "0 12px 28px 0 rgba(0, 0, 0, 0.2),0 2px 4px 0 rgba(0, 0, 0, 0.1),inset 0 0 0 1px rgba(255, 255, 255, 0.05)"
                        }}
                    >
                        {children.map(({
                            href,
                            label
                        }, index) => {
                            return (
                                <Link
                                    href={href}
                                    key={index}
                                >
                                    <Button
                                        key={index}
                                        label={label}
                                        className='w-full'
                                    >

                                    </Button>
                                </Link>
                            )
                        })}
                    </ul>
                </div>
            )}
        </li>
    )
}
