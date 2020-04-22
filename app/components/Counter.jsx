import React       from 'react';
import PropTypes   from 'prop-types';
import { connect } from 'react-redux';
import { count }   from '../actions/settings';

const handleCounterClick = props => props.dispatch(count(props.settings.counter || 0));

const Counter = props => {
    const { counter } = props.settings;
    return (
        <div className="counter-container">
            <h3 className="counter">Counter: {counter}</h3>
            <button className="slide-button blue" onClick={() => handleCounterClick(props)}>Increase</button>
        </div>
    );
};

const { shape } = PropTypes;

Counter.propTypes = {
    settings: shape({}),
};

const mapStateToProps = state => ({ ...state });
export default connect(mapStateToProps)(Counter);
