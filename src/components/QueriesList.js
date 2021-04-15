import React from "react"  
import { Link } from "react-router-dom"
import Container from "../components/Container"
import Card from "../components/Card"

const QueriesList = ({ data }) => { 
    return (
        <Container>
          <h2>Queries</h2>
          {data.map((query) => (
            <Card styles={{ margin: 10 }} key={query.id}>
              <Link
                style={{ textDecoration: "none", color: "black" }}
                to={`/${query.id}`}
              >
                <h3>{`${query.name}`}</h3>
              </Link>
            </Card>
          ))}
        </Container>
      )

} 
export default QueriesList
