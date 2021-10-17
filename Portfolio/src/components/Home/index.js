import React from 'react';
import { Link } from 'react-router-dom';
import './style.css';


const Home = () => {
    return (
        <div className="home">
            <div className="title">
                <h1>
                    <h4 className="subtitle">hi friends, this is</h4>
                    <h1>Jay<span id="Jay">Jay</span> Chen</h1>
                    <h4 className="subtitle">Full Stack Web Developer</h4>
                </h1>
                <Link to="/about">
                    <button>More Info</button>
                </Link>
            </div>
        </div>
    )
}

export default Home;