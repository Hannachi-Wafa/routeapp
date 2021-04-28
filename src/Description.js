import React from 'react'

const Description = ({movie,match,history}) => {
    return (
        <div className="desc">
            <h1> Description</h1>
          <p className="descpp">{movie.find(el=>el.id==match.params.id).description }</p>
          <iframe width="560" height="315" src={movie.find(el=>el.id==match.params.id).trailer} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe> 
           <div>
           <button className="previous" onClick={()=>history.goBack()}>&laquo;Go Back</button>
           </div>
     
        </div>
    )
}
export default Description