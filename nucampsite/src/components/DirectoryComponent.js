
import React, { Component } from 'react';
import { Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle } from 'reactstrap';

// Make sure to import the CampsiteInfo component into DirectoryComponent.js.
import CampsiteInfo from './CampsiteInfoComponent';


class Directory extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectCampsite: null
        };
    };

    onCampsiteSelect(campsite) {
        this.setState({ selectedCampsite: campsite });
    }

    renderSelectedCampsite(campsite) {
        if (campsite) {
            return (
                <Card>
                    <CardImg top src={campsite.image} alt={campsite.name} />
                    <CardBody>
                        <CardTitle> {campsite.image} </CardTitle>
                        <CardText> {campsite.description} </CardText>
                    </CardBody>
                </Card>

            )
        }
        return <div />;
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
        const newLocal = this;
        // Pass the this.state.selectedCampsite object as props 
        // to this CampsiteInfo component, using the attribute name of "campsite". 

        // Replace it all with the CampsiteInfo component
        // Pass the this.state.selectedCampsite object as props to this CampsiteInfo component, using the attribute name of "campsite". 
        return (
            <div className="container">
                <div className="row">
                    {directory}
                    <CampsiteInfo
                        campsite={this.props.selectedCampsite}
                    />
                </div>

            </div>
        );
    }
}


export default Directory;
