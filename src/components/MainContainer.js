import React, {useRef} from "react"
import background from "../images/background.png"
import styled from "styled-components"
import {graphql, useStaticQuery} from "gatsby"
import {IMG} from "../style/PhotoAnimation"
import RenderImage from "../hooks/RenderImage"

const MainContainer = () => {
    const element = useRef(null)
    const ContainerDiv = styled.div`
    background-image: url(${background});
    background-repeat: no-repeat;
    min-height: 100vh;
    div{
        min-height: 100vh;
        display: flex;
        flex-direction: column;
        justify-content: flex-end;
        align-items: center;
        img{
            margin-bottom: 15%;
        }
        h2{
            color: rgb(80 89 97);
            font-size: 3rem;
            width: 80%;
            margin: 0 auto;
            text-align: center;
        }
        p{
            width: 80%;
            margin: 20px auto;
            text-align: center;
            line-height: 30px;
            font-weight: 400;
            color: #4c4c4c;
        }
    }
    @media (min-width: 600px){
        min-height: 80vh;
        div{
            min-height: 80vh;
            img{
                margin-bottom: 5%;
            }
            h2{
                font-size: 2.75rem;
                font-weight: 600;
                font-size: 3.9rem;
            }
            p{
                max-width: 630px;
            }
        }
    }
    `


    const container = useStaticQuery(graphql`
    query{
        allStrapiTitlesText(filter: {id: {eq: "Titles-text_1"}}){
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
    return(
        <ContainerDiv>
            <div>
                <IMG src={RenderImage(element) && `http://localhost:1337${image.url}`} ref={element}/> 
                <h2>{Title}</h2>
                <p>{SubTitle}</p>
            </div>
        </ContainerDiv>
    )
}


export default MainContainer


