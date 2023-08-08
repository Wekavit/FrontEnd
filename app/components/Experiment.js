import React from 'react'
import Link from 'next/link'

export default function Experiment() {
    return (
        <div className='w-full h-auto flex pl-48 pr-48 -mt-12 text-white mb-14 sm:px-7 md:px-7 sm:mb-8'>
            <div className='w-full flex h-auto flex-col bg-primary-color rounded-xl px-14 py-20 sm:rounded-lg sm:px-8 sm:py-10 md:py-16'>
                <p className='text-4xl font-bold leading-relaxed tracking-wider text-white mb-6 sm:tracking-normal sm:text-1.55rem md:text-2xl md:leading-relaxed sm:font-medium'>Expérimentez l'avenir de la banque dès aujourd'hui avec notre portefeuille numérique innovant</p>
                <Link href="/Sign up">
                    <li className="w-full flex items-center justify-between text-2xl font-medium  tracking-wider text-light-white sm:tracking-wide sm:text-base md:text-xl">
                        Inscrivez vous
                    </li>
                </Link>
            </div>

        </div>
    )
}
