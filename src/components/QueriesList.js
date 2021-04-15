import React from "react"  
import { Link } from "react-router-dom"


const QueriesList = ({ data }) => { 
    return (
        <div>
          <h2>Queries</h2>
          {data.map((query) => ( 
          
            <div styles={{ margin: 10 }} key={query.id}>
              <Link
                style={{ textDecoration: "none", color: "black" }}
                to={`/${query.id}`}
              >
                <h3>{`${query.name}`}</h3>
              </Link>
            </div>
          ))}
        </div>
      )

} 
export default QueriesList;
