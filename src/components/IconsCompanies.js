import React, {useRef} from "react"
import {graphql, useStaticQuery} from "gatsby"
import styled from "@emotion/styled"
import {IMG} from "../style/PhotoAnimation"
import RenderImage from "../hooks/RenderImage"


const Container = styled.section`
display: flex;
flex-wrap: wrap;
justify-content: center;
align-items: center;
div{
  width: 100%;
  text-align: center;
  margin-bottom: 80px;
  img{
    width: 200px;
  }
}
@media (min-width: 600px){
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  div{
    max-width: 400px;
  }
`


const IconsCompanies = () =>{
    const element = useRef(null)
    const container = useStaticQuery(graphql`
    query{
        allStrapiCompanys{
          nodes{
            title,
            Logos{
              url
            }
          }
        }
      }
    `)
    console.log(container.allStrapiCompanys.nodes)
    return(
        <Container>
            {container.allStrapiCompanys.nodes.map(data=>(
                <div>
                  <IMG src={RenderImage(element) && `http://localhost:1337${data.Logos.url}`} alt={data.title} ref={element}/>
                </div>
            ))}
        </Container>
    )
}
export default IconsCompanies