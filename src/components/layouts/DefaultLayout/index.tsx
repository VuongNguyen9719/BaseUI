import { ReactNode } from 'react'
import Header from '../Header'
import Footer from '../Footer'

function DefaultLayout({
    children
}: {
    children: ReactNode
}) {
    return (
        <main className='w-screen h-screen flex flex-col overflow-x-hidden'>
            <Header />
            <section className='flex-1'>
                {children}
            </section>
            <Footer />
        </main>
    )
}

export {
    DefaultLayout
}
