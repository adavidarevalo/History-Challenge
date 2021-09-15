import React from "react"
import styled from "@emotion/styled"

const Container = styled.div`
display: flex;
flex-wrap: wrap;
justify-content: center;
margin-block: 20px;
margin-bottom: 100px;
button{
    width: 80%;
    background: #26BAA4;
    color: white;
    border: none;
    font-family: 'Montserrat';
    padding: 10px;
    font-size: 1.6rem;
    border-radius: 25px;
    font-weight: 600;
    margin-block: 10px;
    border-bottom: 3px solid #1c8c7b;
    box-shadow: 4px 6px 5px 0px rgb(18 154 134 / 26%);
    cursor: pointer;
    &:hover{
        background: #22a591;
    }
}
button:last-child{
    background: rgb(97,115,255);
    border-bottom: 3px solid rgb(47 58 134);
    box-shadow: 6px 6px 5px 0px rgb(84 105 255 / 26%);
    &:hover{
        background: rgb(74 89 212);
    }
}
@media (min-width: 600px){
    button{
        max-width: 200px;
    }
    button:last-child{
        margin-left: 20px;
    }
}
`

const ButtonsContainer = () => {
    return(
        <Container>
            <button>Download for IOS</button>
            <button>Download for Mac</button>
        </Container>
    )
}

export default ButtonsContainer