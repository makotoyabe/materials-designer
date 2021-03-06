import React from 'react';
import _ from "underscore";
import {Provider} from "react-redux";

class ReduxProvider extends React.Component {

    get parentProps() {
        // pass properties to container
        return _.omit(this.props, ['store', 'container']);
    }

    render() {
        return (
            <Provider store={this.props.store}>
                <this.props.container
                    parentProps={this.parentProps}
                />
            </Provider>
        );
    }

}

ReduxProvider.propTypes = {
    container: React.PropTypes.func.isRequired,
    store: React.PropTypes.object,
};

ReduxProvider.defaultProps = {
    // to prevent errors on using view-only MaterialContainer
    store: {}
};

export default ReduxProvider;
