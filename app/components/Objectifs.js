import React from 'react'
import { Objectives, FreeShape } from "@/assets"
import Image from 'next/image'
import Link from 'next/link'

export default function Objectifs() {
    return (
        <div className="w-full px-24 pb-7 flex h-auto -mt-10 justify-center sm:px-7 sm:flex-col sm:py-12 md:justify-normal md:px-7">
            <div className='w-2/4 flex justify-center h-73vh object-cover sm:w-full sm:h-65vh sm:mb-6 sm:-mt-11 md:justify-normal md:items-start md:h-max'>
                <Image src={Objectives}
                    width={700}
                    height={700}
                    alt=''
                    className='md:-mt-0 object-fill' />
            </div>
            <div className='w-2/4 h-full flex flex-col mt-32 -ml-24 sm:w-full sm:justify-center sm:ml-0 sm:-mt-5 md:ml-0 md:items-start md:mt-16'>
                <p className="font-semibold text-4xl text-hero-text leading-normal mb-4 sm:w-full sm:text-2xl sm:text-center md:text-2xl">Une application d'épargne et d'investissement élegante, facile à utiliser</p>
                <p className="text-lg text-light-gray leading-normal mb-4 pr-8 sm:w-full sm:text-base sm:flex sm:justify-center sm:items-center sm:pr-0 md:text-base">Suivez facilement l'évolution de vos investissements et de vos économies grâce à notre interface conviviale et intuitive</p>
                <div className='w-full sm:ml-10'><Link href="/start"><button className='bg-primary-color flex justify-center items-center w-36 py-3 rounded-3xl sm:w-28 mt-3 text-white text-sm sm:text-xs'>Commencer</button></Link></div>
                <Image src={FreeShape}
                    width={100}
                    height={100}
                    alt=''
                    className='object-cover -mt-10 ml-40 sm:ml-40 sm:-mt-11' />
            </div>

        </div>
    )
}
