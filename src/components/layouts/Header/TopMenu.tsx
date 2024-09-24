import { Button } from '@/components/common/base-ui'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export default function TopMenu() {
    const listItemMenu = [
        {
            label: 'Free Device',
            icon: './icon/Outline/Application/device-mobile.svg',
            href: '/'
        },
        {
            label: 'Shop Data',
            icon: './icon/Outline/Data/wifi.svg',
            href: '/'
        },
        {
            label: 'Contact & Support',
            icon: './icon/Outline/Suggested/phone.svg',
            href: '/'
        },
        {
            label: 'Find A Store',
            icon: './icon/Outline/Suggested/location-marker.svg',
            href: '/'
        },
        {
            label: 'Check Coverage',
            icon: './icon/Outline/Suggested/globe.svg',
            href: '/'
        },
    ]
    return (
        <div className='bg-gray w-full h-12'>
            <ul className='container mx-auto h-full flex justify-end'>
                {
                    listItemMenu.map(({ label, icon, href }, index) => {
                        return (
                            <Link
                                href={href}
                                title={label}
                                className='h-full flex-none'
                                key={index}
                            >
                                <Button
                                    label={label}
                                    icon={{
                                        src: icon,
                                        width: 24,
                                        height: 24,
                                    }}
                                    component={'li'}
                                    className='flex gap-1 items-center justify-center h-full py-3 px-4'
                                />
                            </Link>
                        )
                    })
                }
            </ul>
        </div >
    )
}
