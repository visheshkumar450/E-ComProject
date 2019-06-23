/**
 * Layout component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import React, { Children } from "react"
import PropTypes from "prop-types"
import { StaticQuery, graphql } from "gatsby" 
import Footer from "./Reusable/Footer"
import Navbar from "./Reusable/Navbar"
import "./bootstrap.min.css"
import "./layout.css"

const Layout=({children})=>(
    <>
    <Navbar/>
    {children}
    <Footer />
    
    </>
  
)
Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
