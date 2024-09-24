import React from 'react'
import TopMenu from './TopMenu'
import MainMenu from './MainMenu'

export default function Header() {
    return (
        <header className='flex flex-col gap-y-2 w-full'>
            <TopMenu />
            <MainMenu />
        </header>
    )
}
