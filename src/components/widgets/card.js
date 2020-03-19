import React from "react"

export default (props) => (
    <div className="py-10 px-5">
        <div className={`flex flex-col shadow-lg rounded-md bg-${props.color || 'white'}`}>
            <img className="h-48 max-h-full object-cover rounded-lg rounded-b-none" src='https://source.unsplash.com/random' alt="some text"/>
            <div className="flex items-center justify-start p-4 pb-0 bg-gray-200">
                <h1 className="font-bold text-lg mr-4 self-start text-gray-800">Title</h1>
                <div className="bg-blue-500 px-2 py-1 rounded text-sm font-hairline text-white">Nuevo</div>
            </div>
            <div className="text-gray-800 p-4 bg-gray-200">
                <p>In laboris nostrud ut voluptate in esse occaecat sint aute sit et elit reprehenderit.</p>
            </div>
        </div>
    </div>
)