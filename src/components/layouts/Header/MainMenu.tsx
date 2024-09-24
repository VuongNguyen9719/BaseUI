import { Button } from '@/components/common/base-ui'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import ListMenu from './ListMenu'

export default function MainMenu() {
    return (
        <div className='container mx-auto py-2 px-[22px]'>
            <div className='flex gap-11 items-center '>
                <Link
                    className='w-[130px] h-12 flex-none'
                    href={'/'}
                >
                    <Image
                    src={'/common/Logo.svg'}
                        width={130}
                        height={48}
                        className='max-w-full object-contain'
                        alt='logo-airtalk'
                    />
                </Link>
                <div className='flex-1'>
                    <ListMenu />
                </div>
                <div className='flex gap-4'>
                    <Button
                        label='Sign in'
                        size='large'
                        varian='outlined'
                    >

                    </Button>
                </div>
            </div>
        </div>
    )
}
