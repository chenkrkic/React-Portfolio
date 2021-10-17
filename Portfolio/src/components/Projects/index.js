import React from 'react';
import './style.css';

const Projects = () => {
    return (
        <div className="container" id="portfolio">
            <div className="row justify-description-center">
                <div className="col-xs-12 col-sm-12 col-lg-4 mb-4">
                    <div className="card text-center h-100">
                        <div className="imageBox">
                            <img src={`${process.env.PUBLIC_URL}/assets/screenshot.png`} className="card-img-top border-bottom"
                                alt="Screenshot of Grocery List Project" />
                        </div>
                        <div className="card-body mb-5 pl-0">
                            <h3>Grocery List Project</h3>
                            <p className="card-text">
                                This is an automated shopping list that alerts you without you having to check your fridge for what you need. You simply put an item on the list and an estimated time of how long it lasts you. Near the end of your selected duration of the item, items will automatically be added to your shopping list. You also have the option to manually add items from the tracking list to the active shopping list, as well as deleteing items you may not need anymore.
                            </p>
                            <p className="card-text">
                                <small>
                                    Features: HTML, CSS, JavaScript, PaperCSS, MomentJS, 2 Server-side APIs (Spoonacular, Edamam)
                                </small>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Projects;