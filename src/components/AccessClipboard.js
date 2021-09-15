import React, {useRef} from "react"
import {graphql, useStaticQuery} from "gatsby"
import styled from "@emotion/styled"
import {IMG} from "../style/PhotoAnimation"
import RenderImage from "../hooks/RenderImage"


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
img{
    width: 100%;
    margin-block: 29px;
    margin-bottom: 100px;
}
@media (min-width: 600px){
    p{
        max-width: 650px;
        margin: 27px auto;
        margin-bottom: 70px;
    }
`




const AccessClipboard = () =>{
    const element = useRef(null)
    const container = useStaticQuery(graphql`
    query{
        allStrapiTitlesText(filter: {id: {eq: "Titles-text_3"}}){
          nodes{
            Title,
            id,
            SubTitle,
            image{
              url
            }
          }
        }
      }
    `)
    const {image, Title, SubTitle} = container.allStrapiTitlesText.nodes[0]
    console.log("Acces ",RenderImage(element))
    return(
        <Container>
            <h2>{Title}</h2>
            <p>{SubTitle}</p>
            <IMG src={RenderImage(element) && `http://localhost:1337${image.url}` } ref={element}/>
        </Container>
    )
}

export default AccessClipboard
