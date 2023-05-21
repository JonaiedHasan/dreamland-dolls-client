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
                            Access Token: It`s a credential issued after user authentication, used to access specific resources for a limited time. It`s sent with each request to verify identity and permissions.

                            Refresh Token: It`s a long-lived credential issued alongside the access token. It`s used to obtain a new access token when the current one expires.

                            Storage: Store access tokens securely, preferably in an HTTP-only cookie. Store refresh tokens securely, such as in an encrypted HTTP-only cookie or other secure storage mechanisms.
                        </p>
                    </div>
                </div>
                <div className="collapse rounded-md my-4">
                    <input type="checkbox" className="peer" />
                    <div className="collapse-title bg-orange-400 text-white peer-checked:bg-secondary peer-checked:text-secondary-content">
                        2.
                    </div>
                    <div className="collapse-content bg-primary text-primary-content peer-checked:bg-secondary peer-checked:text-secondary-content">
                        <p></p>
                    </div>
                </div>
                <div className="collapse rounded-md my-4">
                    <input type="checkbox" className="peer" />
                    <div className="collapse-title bg-orange-400 text-white peer-checked:bg-secondary peer-checked:text-secondary-content">
                        3.
                    </div>
                    <div className="collapse-content bg-primary text-primary-content peer-checked:bg-secondary peer-checked:text-secondary-content">
                        <p>.</p>
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