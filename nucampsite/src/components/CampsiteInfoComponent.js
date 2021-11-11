
// Create a class component named CampsiteInfo inside it, and export it as the default

import React, { Component } from 'react';
//import { Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle } from 'reactstrap';


class CampsiteInfo extends Component { // Create a renderSelectedCampsite method that will render the selected campsite
    constructor(props, campsite) {
        super(props);
        // not sure if this is the best way to do this, or if this right?
        this.campsite = {
            campsite: null // Set the campsite to null
            // if campsite is not null, set the campsite to the campsite object
        };
    };

    render() { // Render the campsite info
        // can the campsite object be returned as truthy? return null if not
        if (this.campsite) { // If the campsite object is truthy, render the campsite info
            return (
                <div className="row" />
            );
        }
        // If not, return an empty <div> with no classes applied to it.
        return <div />;
    }
}


// Export the CampsiteInfo component
export default CampsiteInfo;
