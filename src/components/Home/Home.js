import React from 'react'
import Banner from './Banner'
import Products from './Products'


const Home = () => {
  return (
    <div className='py-28'>
      <div className='py-30'>
        <Banner />
      </div>
     <div className='w-full'>
        <Products/>
     </div>
    </div>
  )
}

export default Home;
