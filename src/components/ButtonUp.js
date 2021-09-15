
import React, { useEffect, useState } from "react"
import { AiFillUpCircle } from "react-icons/ai";
import styled from "@emotion/styled"
import {keyframes } from "@emotion/react"
import { Link } from "gatsby"

const animationContainer = keyframes`
0% {
    opacity: 0;
    transform: translate3d(0, -100%, 0);
    }
100% {
    opacity: 1;
    transform: none;
    }
`


const Container = styled.div`
position: fixed;
right: 7%;
bottom: 7%;
svg{
    color: #505961;
    width: 25px;
    height: 25px;
    box-shadow: 2px 2px 20px 0px rgb(0 0 0 / 20%);
    border-radius: 100px;
    animation: ${animationContainer} 1s both;
    &:hover{
        color: #2f3338;
    }
}
`


const ButtonUp = () =>{
    const [showFixed, setShowFixed] = useState(false)
    useEffect(function () {
        const onScroll = e => {
          const newShowFixed = window.scrollY > 200
          showFixed !== newShowFixed && setShowFixed(newShowFixed)

        }

        console.log("showFixed ",showFixed)
        document.addEventListener('scroll', onScroll)
    
        return () => document.removeEventListener('scroll', onScroll)
      }, [showFixed])
    return(
        <Container>
            <Link to="/">
              {showFixed && <AiFillUpCircle/>}
            </Link>
        </Container>
    )
}

export default ButtonUp



