// eslint-disable-next-line no-unused-vars
import React from 'react';

const Blogs = () => {
    return (
        <div className='my-container'>


            <div className="App">
                <div className="collapse rounded-md my-4">
                    <input type="checkbox" className="peer" />
                    <div className="collapse-title bg-orange-400 text-white peer-checked:bg-secondary peer-checked:text-secondary-content">
                        1.What is an access token and refresh token? How do they work and where should we store them on the client-side?
                    </div>
                    <div className="collapse-content bg-primary text-primary-content peer-checked:bg-secondary peer-checked:text-secondary-content">
                        <p>
                            Access Token:
                            <br /> It`s a credential issued after user authentication, used to access specific resources for a limited time. It`s sent with each request to verify identity and permissions.
                            <br /><br />
                            Refresh Token: It`s a long-lived credential issued alongside the access token. It`s used to obtain a new access token when the current one expires.

                            Storage: <br /> Store access tokens securely, preferably in an HTTP-only cookie. Store refresh tokens securely, such as in an encrypted HTTP-only cookie or other secure storage mechanisms.
                        </p>
                    </div>
                </div>
                <div className="collapse rounded-md my-4">
                    <input type="checkbox" className="peer" />
                    <div className="collapse-title bg-orange-400 text-white peer-checked:bg-secondary peer-checked:text-secondary-content">
                        2.Compare SQL and NoSQL databases?
                    </div>
                    <div className="collapse-content bg-primary text-primary-content peer-checked:bg-secondary peer-checked:text-secondary-content">
                        <p>

                            SQL Databases: <br />

                            Structured schema with tables and predefined columns
                            Relational data model with SQL query language
                            Vertical scalability, well-suited for complex queries
                            ACID compliance for data consistency
                            <br /><br />
                            NoSQL Databases: <br />

                            Flexible or no fixed schema
                            Various data models (key-value, document, columnar, graph)
                            Custom query languages or APIs
                            Horizontal scalability, ideal for large data volumes and high-velocity workloads
                            Emphasizes availability and partition tolerance (AP) over strong consistency (CA)
                        </p>
                    </div>
                </div>
                <div className="collapse rounded-md my-4">
                    <input type="checkbox" className="peer" />
                    <div className="collapse-title bg-orange-400 text-white peer-checked:bg-secondary peer-checked:text-secondary-content">
                        3.What is express js?
                    </div>
                    <div className="collapse-content bg-primary text-primary-content peer-checked:bg-secondary peer-checked:text-secondary-content">
                        <p>
                            Express.js is a lightweight and flexible web application framework for Node.js. It simplifies the development process by providing a minimalistic set of features for handling HTTP requests, defining routes, managing middleware, and rendering dynamic web pages. It has gained popularity due to its ease of use, scalability, and extensive community support, making it a go-to choice for building web applications and APIs using Node.js.</p>
                    </div>
                </div>
                <div className="collapse rounded-md my-4">
                    <input type="checkbox" className="peer" />
                    <div className="collapse-title bg-orange-400 text-white peer-checked:bg-secondary peer-checked:text-secondary-content">
                        4. 
                    </div>
                    <div className="collapse-content bg-primary text-primary-content peer-checked:bg-secondary peer-checked:text-secondary-content">
                        <p></p>
                    </div>
                </div>
                <div className="collapse rounded-md my-4">
                    <input type="checkbox" className="peer" />
                    <div className="collapse-title bg-orange-400 text-white peer-checked:bg-secondary peer-checked:text-secondary-content">
                        4.
                    </div>
                    <div className="collapse-content bg-primary text-primary-content peer-checked:bg-secondary peer-checked:text-secondary-content">
                        <p></p>
                    </div>
                </div>
            </div>






        </div>
    );
};

export default Blogs;