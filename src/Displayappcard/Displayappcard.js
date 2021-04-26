import React from 'react';
import './Displayappcard.css';


function Displayappcard(props){
    return(
        <div className="displayappcard">
            <h2>{props.App}</h2>
            <div className="categoryContainer">
                <div className="categoryLabel">
                    Category
                </div>
                <div className="category">
                    {props.Category}
                </div>
            </div>
            <div className="RatReviews">
                <span className="ratings">
                  Rating:  {props.Rating}
                </span>
                <span className="reviews">
                  Reviews:  {props.Reviews}
                </span>
            </div>
            <div className="otherDetails">
                <div className="sizeContainer">
                    <div className="sizeLabel">
                        Size
                    </div>
                    <div className="size">
                        {props.Size}
                    </div>
                </div>
                <div className="installsContainer">
                    <div className="installsLabel">
                        Installs
                    </div>
                    <div className="installs">
                        {props.Installs}
                    </div>
                </div>
                <div className="typeContainer">
                    <div className="typeLabel">
                        Type
                    </div>
                    <div className="type">
                        {props.Type}
                    </div>
                </div>
                <div className="priceContainer">
                    <div className="priceLabel">
                        Price
                    </div>
                    <div className="price">
                        {props.Price}
                    </div>
                </div>
                <div className="contentRatingContainer">
                    <div className="contentRatingLabel">
                        Content Rating
                    </div>
                    <div className="contentRating">
                        {props["Content Rating"]}
                    </div>
                </div>
                <div className="genresContainer">
                    <div className="genresinsideLabel">
                        Genres
                    </div>
                    <div className="genres">
                        {props.Genres}
                    </div>
                </div>
                <div className="lastUpdatedContainer">
                    <div className="lastUpdatedLabel">
                        Last Updated
                    </div>
                    <div className="lastUpdated">
                        {props["Last Updated"]}
                    </div>
                </div>
            </div>
            <div className="versionHolder">
                <div className="currentVersionLabel">
                    Current Version
                </div>
                <div className="currentVer">
                    {props["Current Ver"]}
                </div>
                <div className="androidVersionLabel">
                    Android Version
                </div>
                <div className="androidVer">
                    {props["Android Ver"]}
                </div>
            </div>
        </div>
    );
}

export default Displayappcard;