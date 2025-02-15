import React from 'react';
import { connect } from 'react-redux';

const AdditionalFeature = props => {
  const buyItem = item => {
    // dipsatch an action here to add an item
  };

  return (
    <li>
      {/* Add an onClick that will let you add a feature to your car */}
      <button className="button">Add</button>
      {props.feature.name} (+{props.feature.price})
    </li>
  );
};

const mapStateToProps = state => {
  return {}
}

export default connect(
  mapStateToProps,
  {}
)(AdditionalFeature);
