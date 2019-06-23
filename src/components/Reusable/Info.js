import React from 'react'
import Heading from "./Heading"
import {Link} from "gatsby"
export default function Info({heading}) {
    return (
        <section className="bg-theme my-5 py-4">
            <div className="container">
                <Heading title={heading}/>
                <div className="row">
                    <div className="col-10 col-sm-8 mx-auto text-center">
                        <p className="lead text-white mb-4">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto explicabo a 
                            et veniam necessitatibus! Ullam sed laudantium fugit ipsa temporibus consectetur
                             voluptatum ipsam ut nostrum soluta nesciunt maxime molestias dignissimos illum 
                             aperiam aliquid ipsum dolores minima, ratione accusantium iusto? Itaque praesentium ullam
                              excepturi, nam porro dolore vitae doloremque veniam. Praesentium perspiciatis molestiae 
                              unde voluptas ad debitis alias quos voluptatem nulla!

                        </p>
                        <Link to="/about/">
                            <button className="btn btn-warning btn-lg">
                                {heading}
                            </button>
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    )
}
