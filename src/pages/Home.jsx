import React from 'react'
import Card from '../Components/Card'
import { Link } from 'react-router-dom'
const Home = () => {

    return (
        <>
        <h1 className="text-2xl pt-4 pl-4 pb-4">Discover restaurant</h1>
        <Link to={"/search"}>
        <button className='bg-slate-500 text-white px-4 py-2 ml-4'>
            Search Restaurant
        </button>
        </Link>
        <Card/>
        </>
    )
}

export default Home
