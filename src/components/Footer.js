import React from "react"
import {graphql, useStaticQuery} from "gatsby"
import { Link } from "gatsby"
import { AiFillFacebook, AiFillTwitterCircle, AiOutlineInstagram } from "react-icons/ai";
import styled from "@emotion/styled"
import {IMG} from "../style/PhotoAnimation"

const FooterContainer = styled.footer`
background: hsl(201deg 25% 96%);
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
padding: 35px 0px;
div{
    display: flex;
    width: 80%;
    flex-wrap: wrap;
    width: 100%;
    img{
        width: 50px;
        height: 50px;
        margin: 0 auto;
    }
  ul{
    text-align: center;
    width: 100%;
    margin-block: 35px;
    li{
      font-size: 1.8rem;
      margin-bottom: 20px;
      font-family: 'Montserrat';
      &:hover{
        color: #26BAA4;
        text-decoration: underline;
      }
    }
  }
}
p{
  text-align: center;
  font-size: 1.5rem;
  font-family: 'Montserrat';
  width: 90%;
  margin: 15px auto;
  color: #4c4c4c;
  a{
    color: #26BAA4;
    text-decoration: none;
    &:hover{
      text-decoration: underline;
    }
  }
}
@media (min-width: 600px){
  div{
    width: 85%;
    display: flex;
    justify-content: space-around;
    align-items: flex-start;
    div{
      width: 50px;
    }
    ul{
      display: flex;
      flex-wrap: wrap;
      width: 50%;
      margin: 0px;
      justify-content: center;
      li{
        margin-inline: 15px;
        cursor: pointer;
        font-size:1.6rem;
        color: #4c4c4c;
      }
    }
  }
}
`

const SocialContainer = styled.div`
justify-content: space-around;
width: 60%;
margin: 0 auto;
svg{
  font-size: 3rem;
  color: gray;
  &:hover{
    color: #26BAA4;
  }
}
@media (min-width: 600px){
  width: 125px !important;
  margin: 0;
}
`


const Footer = () =>{
    const container = useStaticQuery(graphql`
    query{
        allStrapiTitlesText(filter: {id: {eq: "Titles-text_1"}}){
          nodes{
            image{
              url
            }
          }
        }
      }
    `)
    const {url} = container.allStrapiTitlesText.nodes[0].image
    return(
        <FooterContainer>
            <div>
                <div>
                  <IMG src={`http://localhost:1337${url}`}/>
                </div>
              <ul>
                  <li>FAQs</li>
                  <li>Privacy Policy</li>
                  <li>Install Guide</li>
                  <li>Contact Us</li>
                  <li>Press Kit</li>
              </ul>
              <SocialContainer>
                  <AiFillFacebook/>
                  <AiFillTwitterCircle/>
                  <AiOutlineInstagram/>
              </SocialContainer>
            </div>
            <p>Challenge by <Link to="https://www.frontendmentor.io/challenges/clipboard-landing-page-5cc9bccd6c4c91111378ecb9" target="_blank">FRONTEND MENTOR</Link>. Coded by David Arevalo.</p>
        </FooterContainer>
    )
}

export default Footer