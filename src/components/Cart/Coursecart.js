import React, { Component } from 'react'
import Heading from "../Reusable/Heading"
import Img from 'gatsby-image'
const getCaty= items =>{
    let holdItems=items.map(items=>{
        return items.node.category
    })
    let holdCategories=new Set(holdItems)
    let categories=Array.from(holdCategories)
    categories=["All",...categories]
    return categories
}
export default class Coursecart extends Component {
    constructor(props){
        super(props)
        this.state={
            courses:props.courses.edges,
            mycourses:props.courses.edges,
            mycategories:getCaty(props.courses.edges)
        }
    }
    catyClicked=category=>{
        var keepItsafe=[...this.state.courses]

        if(category === 'All'){
            this.setState(()=>{
                return { mycourses: keepItsafe}
            })
        }
        else{
            let changed=[...this.state.courses]
            let holdme=changed.filter(({node}) => node.category === category)
            this.setState(()=>{
                return{mycourses:holdme}
            })
        }
    }
    render() {
        
        return (
            <section className="my-5">
                <div className="container">
                    <Heading title="Courses"></Heading>
                    <div className="row my-3">
                        <div className="col-10 mx-auto text-center">
                            {
                                this.state.mycategories.map((category,index)=>{

                                    return(
                                        <button 
                                        key={index} onClick={()=>{
                                            this.catyClicked(category)
                                        }}
                                         type="button" className="btn btn-info m-3 px-3">
                                        {category}
                                        </button>
                                    )
                                })
                            }
                        </div>
                    </div>
                    <div className="row">
                        {this.state.mycourses.map(({node})=>{
                            return(
                                <div key={node.id} className="col-11 col-md-6 my-3 d-flex mx-auto">
                                    <Img fixed={node.image.fixed}></Img>
                                    <div className="flex-grow-1 px-3">
                                        <div className="d-flex justify-content-between">
                                            <h6 className="mb-0">{node.title}</h6>
                                            <h6 className="mb-0 text-success">Rs. {node.price}</h6>
                                        </div>
                                        <p className="text-muted">
                                            <small>{node.description}</small>
                                        </p>
                                        <button
                                            
                                            data-item-id={node.id}
                                            data-item-name={node.title}
                                            data-item-price={node.price}
                                            data-item-url="https://e-com-project.netlify.com/"
                                            data-item-description={node.image.fixed.src}
                                             className="btn btn-warning snipcart-add-item">Join Now</button>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </section>
        )
    }
}
