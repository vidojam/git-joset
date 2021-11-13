
// Create a class component named CampsiteInfo inside it, and export it as the default

import React, { Component } from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle } from 'reactstrap';


// Create a class component named CampsiteInfo inside it, and export it as the default
class CampsiteInfo extends Component { // Create a renderSelectedCampsite method that will render the selected campsite
    constructor(props) {
        super(props);
        // not sure if this is the best way to do this, or if this right?
        this.campsite = {
            campsite: null // Set the campsite to null
            // if campsite is not null, set the campsite to the campsite object
        };
    };

    // change the state somewhere 

    // In CampsiteInfoComponent.js, in the CampsiteInfo component's render() method,
    renderCampsite(campsite) { // Render the campsite info
        return (
            <div className="col-md-5 m-1" >
                <Card>
                    <CardImg top src={campsite.image} alt={campsite.name} />
                    <CardBody>
                        <CardTitle> {campsite.image} </CardTitle>
                        <CardText> {campsite.description} </CardText>
                    </CardBody>
                </Card>
            </div>

        )
    };

    // In CampsiteInfoComponent.js, in the CampsiteInfo component's render() method, 
    // inside the empty div with the row class you set up earlier, 
    // call the renderCampsite method and pass the campsite to it. Remember to use this where appropriate. There will be two places you need to use this for this step.
    render(props) { // Render the campsite info
        // can the campsite object be returned as truthy? return null if not
        if (this.props.campsite) { // If the campsite object is truthy, render the campsite info
            return (
                <div className="row" onClick={() => this.renderCampsite(this.campsite)} />
            );
        }
        // If not, return an empty <div> with no classes applied to it.
        return <div /> //onClick={() => this.onCampsiteSelect(campsite)} />;
    }
}

// double check this!!!
/*
const campsite = {   // Create a class component named CampsiteInfo inside it, and export it as the default
    campsite: null
};
*/


// Export the CampsiteInfo component
export default CampsiteInfo;
