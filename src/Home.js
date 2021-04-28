import React from 'react'
import { Link } from 'react-router-dom'

const Home = ({movie}) => {
    return (
    <div>
    {movie.map(el=><Link to="/description"><h3>{el.title}</h3></Link>)}
        </div>
    )
}

export default Home
