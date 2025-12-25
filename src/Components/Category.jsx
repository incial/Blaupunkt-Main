'use client'

import React from 'react'
import Link from 'next/link'
import Card from './Common/Card'
import { categoryData } from '../Data/assets.js'

const Category = () => {
  return (
    <div className='py-8 sm:py-12 lg:py-16 px-8 sm:px-6 lg:px-8 bg-gray-50'>
      <div className='max-w-7xl mx-auto'>
        {/* Section Title */}
        <h2 className='text-2xl sm:text-3xl lg:text-4xl font-semibold text-center text-gray-900 mb-8 sm:mb-12 lg:mb-16'>
          Category
        </h2>{' '}
        {/* Cards Grid */}
        <div className='grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-6 lg:gap-8 justify-items-center max-w-6xl mx-auto'>
          {categoryData.map(category => (
            <Link
              key={category.id}
              href={category.path}
              className='w-full h-full'
            >
              <Card title={category.title} image={category.image} alt={category.alt} />
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Category
