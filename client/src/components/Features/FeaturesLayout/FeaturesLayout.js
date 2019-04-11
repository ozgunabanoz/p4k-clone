import React, { Component } from 'react';
import M from 'materialize-css';
import { connect } from 'react-redux';

import './FeaturesLayout.css';
import DeleteFeaturesModal from './DeleteFeaturesModal/DeleteFeaturesModal';
import EditFeaturesModal from './EditFeaturesModal/EditFeaturesModal';

class FeaturesLayout extends Component {
    componentDidMount() {
        let elems = document.querySelectorAll('.fixed-action-btn');
        M.FloatingActionButton.init(elems);
    }

    formatFeatures = () => {
        let feature = this.props.clickedFeature.article
            .split('\n')
            .map((item, key) => {
                return (
                    <span>
                        &nbsp;&nbsp;&nbsp;&nbsp;{item}
                        <br />
                    </span>
                );
            });

        return feature;
    };

    render() {
        return (
            <div
                className="container"
                style={{ textAlign: 'justify', fontSize: 'small' }}
            >
                <div className="fixed-action-btn">
                    <a className="btn-floating btn-large red">
                        <i className="large material-icons">mode_edit</i>
                    </a>
                    <ul>
                        <li key="featureEditModal">
                            <EditFeaturesModal
                                clickedFeatureProp={this.props.clickedFeature}
                            />
                        </li>
                        <li key="featureDelModal">
                            <DeleteFeaturesModal
                                clickedFeatureProp={this.props.clickedFeature}
                            />
                        </li>
                    </ul>
                </div>
                <h3>{this.props.clickedFeature.title}</h3>
                <h3>{this.props.clickedFeature.headline}</h3>
                <h5>By: {this.props.clickedFeature.writer}</h5>
                <h5>
                    <div>{this.formatFeatures()}</div>
                </h5>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        clickedFeature: state.featuresStore.clickedFeature
    };
};

export default connect(mapStateToProps)(FeaturesLayout);