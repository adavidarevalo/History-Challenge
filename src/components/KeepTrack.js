import React, {useRef}  from "react"
import {graphql, useStaticQuery} from "gatsby"
import styled from "@emotion/styled"
import {IMG} from "../style/PhotoAnimation"
import RenderImage from "../hooks/RenderImage"

const Container = styled.section`
width: 80%;
margin: 0 auto;
h2{
    text-align: center;
    font-size: 3rem;
    width: 80%;
    margin: 0 auto;
    color: rgb(80 89 97);
}
p{
    text-align: center;
    font-size: 1.7rem;
    margin: 27px 0px 70px 0px;
    color: #4c4c4c;
}
img{
    width: 100%;
    height: 100%;
    max-width: 700px;
}
@media (min-width: 1000px){
  width: 100%;
  margin-bottom: 100px;
  p{
    max-width: 700px;
    margin: 27px auto;
    margin-bottom: 70px;
  }
  div{
    display: flex;
    justify-content: space-between;
  }
}
`
const ContainerDiv = styled.div`
margin-top: 50px;
div{
    h2{
        font-size: 2.1rem;
    }
    p{
        font-size: 1.6rem;
    }
}
@media (min-width: 1000px){
  display: flex;
  flex-direction: column;
  margin-top: 0px;
  max-width: 250px;
  margin: 0 auto;
  div{
    flex-direction: column;
    h2{
      text-align: inherit;
      width: 100%;
    }
    p{
      text-align: inherit;
      margin-top: 15px;
    }
  }
}
`


const KeepTrack = () => {
    const element = useRef(null)
    const container = useStaticQuery(graphql`
    query{
        allStrapiTitlesText(filter: {id: {eq: "Titles-text_2"}}){
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
        <Container>
            <h2>{Title}</h2>
            <p>{SubTitle}</p>
            <div>
            <IMG src={RenderImage(element) && `http://localhost:1337${image.url}`} ref={element}/>
            <ContainerDiv>
              <div>
                <h2>Quick Search</h2>
                <p>Easily search your snippets by content, category, web address, application, and more.</p>
              </div>
              <div>
                <h2>iCloud Sync</h2>
                <p>Instantly saves and syncs snippets across all your devices.</p>
              </div>
              <div>
                <h2>Complete History</h2>
                <p>Whether you’re on the go, or at your computer, you can access all your Clipboard snippets in a few simple clicks.</p>
              </div>
            </ContainerDiv>
            </div>
        </Container>
    )
}

export default KeepTrack