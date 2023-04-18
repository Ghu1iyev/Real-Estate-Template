import React from 'react'
import Image from '../assets/img/house-banner.png'
import  Search  from './Search'

const Banner = () => {
  return (
    <section className='h-full max-h=[540px] mb-8 xl:mb-24'>
        <div className='flex flex-col lg:flex-row'>
          <div>
            <h1>
              <span>Rent</span>Your Dream House With Us
            </h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum corporis culpa exercitationem ratione doloribus aspernatur eos debitis illum qui eaque.</p>
          </div>
          {/* image */}
          <div>
            <img src={Image} alt="" />
          </div>
        </div>
        <Search />
    </section>
  )
}

export default Banner