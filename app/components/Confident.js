import React from 'react'
import Image from 'next/image'
import { Security } from '@/assets'
import Link from 'next/link'

export default function Confident() {
    return (
        <div className='w-full h-max bg-cover object-fill sm:mt-20'>
            <Image
                src={Security}
                width={0}
                height={0}
                alt='woman lifting phone'
                className='object-fill w-full'
            />
            <div className='w-full h-auto flex flex-col relative bg-red-0 -mt-100 pl-20 pt-24 pb-24 bg-red-0 sm:bg-red-0 sm:ml-0 sm:-mt-80 sm:pl-0 '>
                <p className="font-semibold w-2/5 text-5xl text-white leading-normal tracking-wide mb-9 sm:w-full sm:text-lg sm:text-hero-text sm:text-center sm:px-2 sm:-mt-1 sm:py-2 md:text-xl sm:mb-5 md:w-full md:-tracking-normal md:mb-3 ">Garder votre argent en sécurité est notre affaire.</p>
                <h4 className='w-3/4 text-xl text-white tracking-wide font-medium mb-9 md:text-sm sm:w-full sm:px-2 sm:text-sm sm:mb-4 '>La confiance est notre devise. Nous nous engageons à assurer la sécurité de votre argent, la protection de votre compte ainsi que celle de toutes vos transactions.</h4>
                <Link href="/Sign up">
                    <h4 className='w-2/4 text-xl text-white font-medium md:text-sm sm:text-sm sm:px-2'>En savoir plus</h4>
                </Link>
            </div>
        </div>
    )
}
