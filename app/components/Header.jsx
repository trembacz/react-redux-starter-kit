import React     from 'react';
import PropTypes from 'prop-types';

const Header = props => (
    <header>
        <h1>{props.title}</h1>
    </header>
);

const { string } = PropTypes;

Header.propTypes = {
    title: string,
};

export default Header;
