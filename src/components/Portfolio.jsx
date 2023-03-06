import React from "react";

function Portfolio() {
    return (
        <div>
            <div className="port-title">
                <h1>Portfolio:</h1>
            </div>
            <div className="proj">
                <div className="proj-1-img proj-img">
                    <div className="blur">
                        <a className="proj-btn" href="">VIEW HERE</a>
                    </div>
                </div>
                <div className="proj-text proj-1-text">
                    <div>
                        <h2>PROJECT 1</h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Non quos libero blanditiis! Non ea et consequatur nobis rerum corporis? Maiores, assumenda atque? Modi cumque consequatur impedit explicabo. Laborum, dolores recusandae!</p>
                    </div>
                </div>
            </div>
            <div className="proj">
                <div className="proj-text proj-2-text">
                    <div>
                        <h2>PROJECT 2</h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Non quos libero blanditiis! Non ea et consequatur nobis rerum corporis? Maiores, assumenda atque? Modi cumque consequatur impedit explicabo. Laborum, dolores recusandae!</p>
                    </div>
                </div>
                <div className="proj-2-img proj-img">
                    <div className="blur">
                        <a className="proj-btn" href="">VIEW HERE</a>
                    </div>
                </div>
            </div>
            <div className="proj proj-3">
                <div className="proj-3-img proj-img">
                    <div className="blur">
                        <a className="proj-btn" href="">VIEW HERE</a>
                    </div>
                </div>
                <div className="proj-text proj-3-text">
                    <div>
                        <h2>PROJECT 3</h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Non quos libero blanditiis! Non ea et consequatur nobis rerum corporis? Maiores, assumenda atque? Modi cumque consequatur impedit explicabo. Laborum, dolores recusandae!</p>
                    </div>
                </div>
            </div>

            <div className="line-container">
                <div className="line"></div>
                <div className="line2"></div>
                <div className="line3"></div>
            </div>

        </div>
    )
}

export default Portfolio