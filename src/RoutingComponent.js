import React from 'react'
import { Route, Switch } from 'react-router-dom'
import App from './App'
import Description from './Description'
import { v4 as uuidv4 } from 'uuid';
import { useState } from 'react'



const RoutingComponent = () => {
    const [movie, setmovie] = useState([{
        id:uuidv4(),
        title: 'Tangled',
        description: 'Tangled is a 2010 American 3D computer-animated musical adventure film produced by Walt Disney Animation Studios and released by Walt Disney Pictures.',
        posterURL: "./movie.jpg",
        trailer:"https://www.youtube.com/embed/JYKpIr1lSG0",
        rating: 4
    },
    {   id:uuidv4(),
        title: 'Ferdinand',
        description: 'Ferdinand is a 2017 American computer-animated comedy adventure film produced by Blue Sky Studios and distributed by 20th Century Fox',
        posterURL: "./movie1.jpg",
        trailer:"https://www.youtube.com/embed/pLSVEs5aT60",

        rating: 4
    },
    {   id:uuidv4(),
        title: 'Moana',
        description: 'Moana is a 2016 American 3D computer-animated musical adventure film produced by Walt Disney Animation Studios and distributed by Walt Disney Pictures.',
        posterURL: "./movie2.jpg",
        trailer:"https://www.youtube.com/embed/LKFuXETZUsI",

        rating: 5
    },
    ]
    )

    
    return (
        <div>
            <Switch>
            <Route   exact path="/" render= {(props)=><App {...props} movie={movie} setmovie={setmovie}></App>}></Route>
            <Route   path="/description/:id" render= {(props)=><Description {...props} movie={movie}></Description>}></Route>

            </Switch>
        </div>
    )
}

export default RoutingComponent
