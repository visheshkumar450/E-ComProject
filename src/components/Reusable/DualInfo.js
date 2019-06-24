import React from 'react'
import Heading from './Heading'


export default function DualInfo({heading}) {
    return (
        <section className="my-4 py-4 bg-theme">
            <div className="container">
                <Heading title={heading}></Heading>
                <div className="row">
                    <div className="col-8 mx-auto">
                        <p className="lead text-white mb-5 text-center">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Error nemo, sequi sint, voluptatem rerum ut eius laborum dignissimos laboriosam placeat, itaque deleniti id a quibusdam dolorum unde libero! Modi perspiciatis fugiat, vero sit tempore rerum assumenda blanditiis dolor fugit distinctio nisi laboriosam, unde recusandae dolorum dolorem similique non! Aliquam, recusandae!
                        </p>
                    </div>      
                    
                    <div className="col-md-4 col-12">
                        <div class="card">
                            <img class="card-img-top" src="https://images.pexels.com/photos/2479642/pexels-photo-2479642.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" 
                            alt="Card image"/>
                            <div class="card-body">
                                <h5 class="card-title">Title</h5>
                                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                <a href="#" class="btn btn-primary btn-block">{heading}</a>
                            </div>
                        </div>    
                    </div>
                </div>
            </div>
            
        </section>
    )
}
