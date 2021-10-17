import React from 'react';
import './style.css';

const Contact = () => {
    return (
        <div className="contact">
            <h1>Contact</h1>

            <div className="social">
                <h4>LinkedIn</h4>
                <p>
                    <a target="_blank" rel="noopener noreferrer" href="www.linkedin.com/in/krkic-chan-716159142">
                    www.linkedin.com/in/krkic-chan-716159142
                </a>
                </p>

                <h4>GitHub</h4>
                <p>
                    <a target="_blank" rel="noopener noreferrer" href="https://github.com/chenkrkic">
                    https://github.com/chenkrkic
                </a>
                </p>

                <h4>Email</h4>
                <p>
                    <a target="_blank" rel="noopener noreferrer" href="mailto:ga-kit@hotmail.com">
                        ga-kit@hotmail.com
                </a>
                </p>

                <h4>Phone</h4>
                <p>
                    <a target="_blank" rel="noopener noreferrer" href="tel:415-652-8050">
                    415-652-8050
                </a>
                </p>
            </div>
        </div>
    )
}

export default Contact;