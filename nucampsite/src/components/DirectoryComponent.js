
import React, { Component } from 'react';
import { Card, CardImg, CardImgOverlay, CardTitle } from 'reactstrap';

// delete any imports that are not being used

// Make sure to import the CampsiteInfo component into DirectoryComponent.js.
import CampsiteInfo from './CampsiteInfoComponent';


class Directory extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedCampsite: null // or selectCampsite
        };
    };

    onCampsiteSelect(campsite) {
        this.setState({ selectedCampsite: campsite });
    }


    render() {
        const directory = this.props.campsites.map(campsite => {
            return (
                <div key={campsite.id} className="col-md-5 m-1">
                    <Card onClick={() => this.onCampsiteSelect(campsite)}>
                        <CardImg width="100%" src={campsite.image} alt={campsite.name} />
                        <CardImgOverlay>
                            <CardTitle>{campsite.name}</CardTitle>
                        </CardImgOverlay>
                    </Card>
                </div>
            );
        });

        // Pass the this.state.selectedCampsite object as props 
        // to this CampsiteInfo component, using the attribute name of "campsite". 

        // Replace it all with the CampsiteInfo component
        // Pass the this.state.selectedCampsite object as props to this CampsiteInfo component, using the attribute name of "campsite". 
        return (
            <div className="container">
                <div className="row">
                    {directory}
                    <CampsiteInfo
                        campsite={this.state.selectedCampsite}
                    />
                </div>

            </div>
        );
    }
}


export default Directory;
