import React from 'react'
import Link from 'next/link'
import { categories } from '@/constants'
import Image from 'next/image'

const MenuCategories = () => {
    return (
        <section className='flex flex-col w-full h-full pt-16 text-4xl text-white md:flex-row md:text-7xl'>
            {categories && categories.map(category => (
                <div className='relative w-full h-full overflow-hidden'>
                    <Link href={`/menu/${category.name}`} className='flex items-center justify-center w-full h-full'>
                        <Image height={500} width={500} className='aspect-[2/1] absolute sm:scale-y-[1.5] md:scale-y-[1] md:scale-x-[6] lg:scale-x-[4] h-full w-full brightness-[0.5] cursor-pointer hover:brightness-[0.3]' src={category.url}></Image>
                        <p className='z-10 tracking-widest uppercase md:rotate-90'>{category.name}</p>
                    </Link>
                </div>
            ))}   
        </section>
    )
}

export default MenuCategories