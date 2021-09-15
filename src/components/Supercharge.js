import React, {useRef} from "react"
import {graphql, useStaticQuery} from "gatsby"
import { AiOutlineFileText, AiFillEdit, AiFillEye } from "react-icons/ai";
import styled from "@emotion/styled"
import RenderImage from "../hooks/RenderImage"


const Container = styled.section`
width: 80%;
margin: 0 auto;
h2{
    text-align: center;
    margin: 0 auto;
    width: 100%;
    font-size: 2.7rem;
    color: rgb(80 89 97);
}
p{
    text-align: center;
    font-size: 1.7rem;
    margin: 15px 0px 70px 0px;
    color: #4c4c4c;
}
`

const ContainerCharacter = styled.div`
div{
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    svg{
        width: 50px;
        height: 50px;
        color: gray;
        margin-bottom: 50px;
    }
    h3{
        font-size: 2.1rem;
        color: rgb(80 89 97);
    }
    p{
        font-size: 1.6rem;
        color: #4c4c4c;
    }
}
@media (min-width: 600px){
    display: flex;
    justify-content: space-between;
    margin-bottom: 50px;
    div{
        max-width: 300px;
    }
`


const Supercharge = () => {
    const element = useRef(null)
    const container = useStaticQuery(graphql`
    query{
        allStrapiTitlesText(filter: {id: {eq: "Titles-text_4"}}){
          nodes{
            Title,
            id,
            SubTitle,
          }
        }
      }
    `)
    const {Title, SubTitle} = container.allStrapiTitlesText.nodes[0]
    return(
        <Container>
            <h2>{Title}</h2>
            <p>{SubTitle}</p>
            <ContainerCharacter>
                <div ref={element}>
                    {
                        RenderImage(element)&&(
                            <AiOutlineFileText />
                        )
                    }
                    <h3>Create blacklists</h3>
                    <p>Ensure sensitive information never makes its way to your clipboard by excluding certain sources.</p>
                </div>
                <div ref={element}>
                {
                        RenderImage(element)&&(
                            <AiFillEdit/>
                        )
                    }
                    <h3>Plain text snippets</h3>
                    <p>Remove unwanted formatting from copied text for a consistent look.</p>
                </div>
                <div ref={element}>
                {
                        RenderImage(element)&&(
                            <AiFillEye/>
                        )
                        }
                    <h3>Sneak preview</h3>
                    <p>Quick preview of all snippets on your Clipboard for easy access.</p>
                </div>
            </ContainerCharacter>
        </Container>
    )
}

export default Supercharge