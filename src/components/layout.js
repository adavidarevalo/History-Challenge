import React, {Fragment} from "react"
import Helmet from "react-helmet"
import {Global, css} from "@emotion/react"


const Layout = (props) =>{
  return(
    <Fragment>
      <Global
      styles={css`
      html{
        font-size: 62.5%;
      }
      body{
        font-size: 1.6rem;
        line-height: 1.5;
      }
      h1, h2, h3{
        margin: 0px;
        line-height: 1.5;
      }
      h1, h2{
        font-family: "Montserrat", serif;
      }
      h3{
        font-family: "Montserrat", sans-serif;
      }
      p{
        font-family: "Montserrat", sans-serif;
      }
      ul{
        list-style: none;
        margin:0;
        padding:0;
      }
      `}
      />
    <Helmet>
      <title>Clear</title>
      <meta name="description" content="Hola Mundo"/>
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/normalize/8.0.1/normalize.min.css" integrity="sha512-NhSC1YmyruXifcj/KFRWoC561YpHpc5Jtzgvbuzx5VozKpWvQ+4nXhPdFgmx8xqexRcpAglTj9sIBWINXa8x5w==" crossorigin="anonymous" referrerpolicy="no-referrer" />
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
      <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@200;300;400&display=swap" rel="stylesheet" />
    </Helmet>
      {props.children}
    </Fragment>
  )
}

export default Layout