import React from 'react'

export default () => {
    return (
    <div class="flex max-w-md bg-white shadow-lg rounded-lg overflow-hidden">
        <div class="w-2 bg-gray-800">dsf</div>
        <div class="flex items-center px-2 py-3">
            <img class="w-12 h-12 object-cover rounded-full" alt="asd" src="https://images.unsplash.com/photo-1477118476589-bff2c5c4cfbb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"/>
            <div class="mx-3">
                <h2 class="text-xl font-semibold text-gray-800">Hello john</h2>
                <p class="text-gray-600">Sara was replied on the <a href="/" class="text-blue-500">Upload Image</a>.</p>
            </div>
        </div>
    </div>
    )
}