import React from 'react'
import TopNavigation from '../components/top-navigation'

export default ({ children }) => (
    <div className="font-body subpixel-antialiased text-gray-800">
        <TopNavigation/>
        {children}
    </div>
)