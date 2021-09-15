import React from "react"
import {graphql, useStaticQuery} from "gatsby"
import styled from "@emotion/styled"


const Container = styled.section`
width: 80%;
margin: 0 auto;
h2{
    margin: 0 auto;
    text-align: center;
    width: 100%;
    font-size: 2.6rem;
    color: rgb(80 89 97);
}
p{
    text-align: center;
    font-size: 1.6rem;
    margin: 27px 0px 70px 0px;
    color: #4c4c4c;
}
@media (min-width: 600px){
  p{
    max-width: 700px;
    margin: 27px auto;
    margin-bottom: 70px;
  }
`


const Clipboard = () =>{
    const container = useStaticQuery(graphql`
    query{
        allStrapiTitlesText(filter: {id: {eq: "Titles-text_5"}}){
          nodes{
            Title,
            SubTitle,
          }
        }
      }
    `)
    const {Title, SubTitle} =  container.allStrapiTitlesText.nodes[0]
    return(
        <Container>
            <h2>{Title}</h2>
            <p>{SubTitle}</p>
        </Container>
    )
}

export default Clipboard
