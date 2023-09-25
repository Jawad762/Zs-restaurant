import React from 'react'
import Image from 'next/image'
import Link from 'next/link';

const HomeContent = () => {
    return (
      <section className='grid w-full gap-16'>
        
        {/*Introducing Handheld Burritos*/}
        <div className='relative flex flex-col items-center justify-center w-full h-screen gap-6 text-white shadow-lg burrito_bg'>
            <h1 className='px-8 pb-6 text-3xl font-semibold border-b-4 border-[#CFA670] w-fit'>INTRODUCING</h1>
            <p className='text-5xl font-thin text-center lg:text-7xl'>HANDHELD BURRITOS</p>
            <p className='text-2xl font-medium '>COMING SOON</p>
        </div>

        {/* Menu */}
        <div className='flex flex-col items-center w-full gap-10'>
          <h2 className='px-16 pb-3 text-center text-2xl lg:text-3xl text-black border-b-4 border-[#CFA670]'>MENU</h2>
          <article className='flex flex-col items-center gap-4'>
            <h1 className='text-5xl font-bold text-center text-black lg:text-7xl'>What's your food mood?</h1>
            <p className='text-xl text-center lg:text-2xl'>Feeling light & crisp or seriously hangry?</p>
          </article>
          <Link href='/menu'><button className='flex items-center gap-2 px-8 lg:px-14 py-4 text-sm font-semibold text-white transition-all duration-300 bg-black w-fit hover:bg-[#CFA670]'>VIEW MENU <span>&#8594;</span></button></Link>
        </div>
        
        {/*Savory burgers since 2005*/}
        <div className='relative flex flex-col items-center justify-center w-full h-screen burger_bg'>
          <p className='pb-1 text-5xl text-center text-white lg:text-7xl'>SAVORY</p>
          <p className='pb-3 text-center text-white text-5xl lg:text-7xl border-b-4 border-[#CFA670]'>BURGERS</p>
          <p className='pt-3 text-2xl text-white'>SINCE 2005</p>
        </div>
        
        {/* info */}
        <div className='flex flex-col items-center w-full'>
          <Image height={500} width={500} className='-hue-rotate-90' src='https://images.squarespace-cdn.com/content/v1/5c6c6c2cd74562a8dedfebeb/1552953614422-X4TOCSP0S52NXA6SUKG6/Peace-Sign.gif?format=1500w' alt="Peace Sign" />
          
          <section className='flex flex-col justify-between w-full gap-10 py-16 uppercase lg:gap-0 gap lg:flex-row'>
            <article className='flex flex-col items-center gap-8 lg:w-1/3'>
              <h2 className='text-5xl font-bold'>Location</h2>
              <address className='font-semibold'>1001 HAMRA STREET <br/> BEIRUT, BE 1001</address>
            </article>
            
            <article className='flex flex-col items-center gap-8 lg:w-1/3'>
              <h2 className='text-5xl font-bold'>Hours</h2>
              <ul className='flex flex-col items-center gap-8 font-semibold'>
                <li>MONDAY - THURSDAY: 5PM - 9:30PM</li>
                <li>FRIDAY - SATURDAY: 12PM - 10:30PM</li>
                <li>SUNDAY: 12PM - 9PM</li>
              </ul>
            </article>
            
            <article className='flex flex-col items-center gap-8 font-semibold lg:w-1/3'>
              <h2 className='text-5xl font-bold'>Contact</h2>
              <p>Business Line: +961 71239373</p>
              <p>DIRECT CONTACT:</p>
              <p>mjawadzaiter@gmail.com</p>
            </article>
          </section>
        </div>
        
      </section>
    );
  }

export default HomeContent