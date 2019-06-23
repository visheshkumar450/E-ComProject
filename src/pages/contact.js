import React from "react"
import { graphql, StaticQuery } from 'gatsby'

import Layout from "../components/layout"
import SEO from "../components/seo"
import HeroSection from "../components/Reusable/HeroSection"
import Info from "../components/Reusable/Info"
import DualInfo from "../components/Reusable/DualInfo"
import Team from "../components/About/Team"
const AboutPage = ({data}) => (
  <Layout>  
    <SEO title="Home" />
    <HeroSection img={data.img.childImageSharp.fluid} title="about e-com" subtitle=" " 
    heroclass="about-background"/>
    <Info heading="About Vision"/>
    <DualInfo heading="A message from CEO" />
    <Team/>

  </Layout>
)
export const query=graphql`
{
  img: file(relativePath: { eq: "about.png" }) {
    childImageSharp {
      fluid{
        ...GatsbyImageSharpFluid_tracedSVG
      }
    }
  }
}
`
export default AboutPage
