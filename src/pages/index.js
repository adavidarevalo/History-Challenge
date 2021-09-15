import * as React from "react"
import MainContainer from "../components/MainContainer"
import ButtonsContainer from "../components/ButtonsContainer"
import Layout from "../components/Layout"
import KeepTrack from "../components/KeepTrack"
import Supercharge from "../components/Supercharge"
import IconsCompanies from "../components/IconsCompanies"
import Clipboard from "../components/Clipboard"
import Footer from "../components/Footer"
import AccessClipboard from "../components/AccessClipboard"
import ButtonUp from "../components/ButtonUp"

import Seo from "../components/seo"



const IndexPage = () => (
  <Layout>
    <Seo/>
    <MainContainer />
    <ButtonsContainer />
    <KeepTrack />
    <AccessClipboard />
    <Supercharge/>
    <IconsCompanies/>
    <Clipboard/>
    <ButtonsContainer />
    <ButtonUp />
    <Footer />
  </Layout>
)

export default IndexPage
