import React from "react"
import { graphql, StaticQuery } from 'gatsby'

import Layout from "../components/layout"
import SEO from "../components/seo"
import HeroSection from "../components/Reusable/HeroSection"
import Info from "../components/Reusable/Info"
import DualInfo from "../components/Reusable/DualInfo"
import Coursecart from "../components/Cart/Coursecart"
const IndexPage = ({data}) => (
  <Layout>  
    <SEO title="Home" />
    <HeroSection img={data.img.childImageSharp.fluid} title="i write code" subtitle="E-Com" 
    heroclass="hero-background"/>
    <Info heading="About Us"/>
    <Coursecart courses={data.courses}/>
    <DualInfo heading="Team" />
  </Layout>
)
export const query=graphql`
{
  img: file(relativePath: { eq: "heromain.png" }) {
    childImageSharp {
      fluid{
        ...GatsbyImageSharpFluid_tracedSVG
      }
    }
  }
  
    courses:allContentfulCourses{
      edges{
       node{
         id
         title
         price
         category
         description
         image{
           fixed(width:200,height:120){
            ...GatsbyContentfulFixed_tracedSVG
           }
         }
       }
     }   
   }
 
}
`
export default IndexPage
