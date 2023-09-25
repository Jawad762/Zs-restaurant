'use client'
import React, { useContext, useState } from 'react';
import { LuCupSoda, LuDessert } from 'react-icons/lu';
import { PiHamburger } from 'react-icons/pi';
import { CiFries } from 'react-icons/ci';
import { IoAddCircleSharp } from 'react-icons/io5';
import Link from 'next/link';
import { AppContext } from './Context';
import { menu } from '@/constants';
import Image from 'next/image';

const MenuItems = ({ category }) => {
  const [search, setSearch] = useState('');
  const { cartItems, setCartItems } = useContext(AppContext);

  const addToCart = (food) => {
    const newItem = {
      name: food.name,
      price: food.price,
      image: food.image,
    };
    setCartItems([...cartItems, newItem]);
  };

  const filteredMenu = menu[category].filter((food) =>
    food.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <section className='flex flex-col w-full gap-14 lg:gap-0 lg:flex-row'>
      
      <aside className='flex justify-between px-10 mt-36 lg:gap-20 lg:justify-end lg:pb-20 lg:mt-0 lg:h-screen lg:fixed lg:flex-col'>
        <Link href='/menu/burgers'>
          <PiHamburger
            className={`scale-[3] cursor-pointer ${
              category.toUpperCase() === 'BURGERS' && 'text-[#CFA670] && scale-[3.5]'
            }`}
          />
        </Link>
        <Link href='/menu/fries'>
          <CiFries
            className={`scale-[3] cursor-pointer ${
              category.toUpperCase() === 'FRIES' && 'text-[#CFA670] && scale-[3.5]'
            }`}
          />
        </Link>
        <Link href='/menu/drinks'>
          <LuCupSoda
            className={`scale-[3] cursor-pointer ${
              category.toUpperCase() === 'DRINKS' && 'text-[#CFA670] && scale-[3.5]'
            }`}
          />
        </Link>
        <Link href='/menu/desserts'>
          <LuDessert
            className={`scale-[3] cursor-pointer ${
              category.toUpperCase() === 'DESSERTS' && 'text-[#CFA670] && scale-[3.5]'
            }`}
          />
        </Link>
      </aside>

      <div className='flex flex-col w-full gap-4 px-4 lg:pl-40 lg:pr-28 lg:pt-36 items-left'>
        
        <div className='flex flex-col w-full gap-4 md:justify-between md:flex-row'>
          <h2 className='text-4xl font-bold'>{category.toUpperCase()}</h2>
          <input
            value={search}
            onChange={(event) => setSearch(event.target.value)}
            className='w-1/2 pb-1 text-sm bg-transparent border-b-2 outline-none md:w-1/3 focus:border-black'
            placeholder='Search...'
          />
        </div>

        <div className='grid w-full grid-cols-1 gap-8 py-3 pt-4 md:grid-cols-2'>
          {filteredMenu.map((food) => (
            <article key={food.name} className='relative flex flex-col w-full gap-3 items-left'>
              <Image height={500} width={500} className='w-full rounded-lg aspect-video' src={food.image} />
              <div className='flex items-center justify-between w-full'>
                <h1 className='text-2xl font-bold'>{food.name}</h1>
                <IoAddCircleSharp
                  onClick={() => addToCart(food)}
                  className='scale-[2.5] mr-2 cursor-pointer hover:scale-[2.3]'
                />
              </div>
              <p className='text-neutral-400'>{food.description}</p>
              <p className='font-bold'>{food.price}$</p>
            </article>
          ))}
        </div>
        
      </div>
      
    </section>
  );
};

export default MenuItems;
