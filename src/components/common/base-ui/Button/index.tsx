'use client'

import Image from "next/image"
import { CSSProperties, MouseEvent, useEffect, useRef, useState } from "react"
import { twMerge } from "tailwind-merge"
import { Typography } from "../Typography"
import { IButton } from "./type"

const ClsSize = {
    'small': 'text-sm px-2 py-1',
    'normal': 'text-base px-4 py-2',
    'medium': 'text-lg px-5 py-3',
    'large': 'text-xl px-6 py-4',
    'extra': 'text-2xl px-8 py-5'
}

const ClassVarian: {
    [key: string]: string
} = {
    'default': 'hover:bg-[#1976d20a]'
}

const Button = ({
    varian = 'default',
    label = '',
    onClick,
    icon,
    className,
    size = 'small',
    component: Component = 'button',
    children,
    ...ortherProps
}: IButton) => {
    const [rippleStyle, setRippleStyle] = useState<CSSProperties | null>(null)
    const timeoutRef = useRef<any>(0)
    const buttonRef = useRef<HTMLButtonElement | null>(null);
    const animationFrameRef = useRef<number | null>(null);

    useEffect(() => {
        if (rippleStyle) {
            timeoutRef.current = setTimeout(() => {
                setRippleStyle(null);
            }, 400);
        }
        return () => {
            clearTimeout(timeoutRef.current);
        }
    }, [rippleStyle]);

    useEffect(() => {
        return () => {
            if (animationFrameRef.current) {
                cancelAnimationFrame(animationFrameRef.current);
            }
            if (timeoutRef.current) {
                clearTimeout(timeoutRef.current);
            }
        }
    }, [])

    const handleClick = (e: MouseEvent) => {
        setRippleStyle(null);
        const rect = buttonRef.current?.getBoundingClientRect();
        if (rect) {
            const rippleSize = Math.max(rect.width, rect.height);
            const radius = rippleSize / 2;

            const rippleStyle = {
                width: `${rippleSize}px`,
                height: `${rippleSize}px`,
                left: `${e.clientX - rect.left - radius}px`,
                top: `${e.clientY - rect.top - radius}px`,
            };
            animationFrameRef.current = requestAnimationFrame(() => {
                setRippleStyle(rippleStyle);
            });
        }
        if (typeof onClick === 'function') {
            onClick(e);
        }
    }

    const assignIcon = {
        width: 24,
        height: 24,
        src: '',
        alt: '',
        position: 'left',
        ...icon,
    };

    const { src, width, height, alt, position } = assignIcon;
    const isHasIcon = src?.length > 0;

    return (
        <Component
            className={twMerge(
                'flex gap-1 items-center rounded relative overflow-hidden  transition-[background-color]',
                ClsSize[size],
                ClassVarian[varian],
                className,
            )}
            onClick={handleClick}
            ref={buttonRef}
            {...ortherProps}
        >
            {
                children
            }
            {
                label && label.length > 0 &&
                <Typography
                    varian={varian}
                    size={size}
                    className={twMerge(
                        position === 'left' ? 'order-1' : 'order-0'
                    )}
                >
                    {label}
                </Typography>
            }
            {isHasIcon && (
                <Image
                    src={src}
                    width={width}
                    height={height}
                    alt={alt || ''}
                    className={twMerge(
                        position === 'left' ? 'order-0' : 'order-1'
                    )}
                />
            )}
            {rippleStyle && (
                <span
                    className="absolute bg-white rounded-[50%] pointer-events-none"
                    style={{
                        transform: 'scale(0)',
                        ...rippleStyle,
                        transition: 'opacity 0.5s ease-in-out',
                        animation: 'ripple-animation 0.5s linear',
                        backgroundColor: 'rgba(255, 255, 255, 0.7)',
                    }}
                />
            )}
        </Component>
    )
}

export {
    Button
}
