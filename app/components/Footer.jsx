import React     from 'react';
import PropTypes from 'prop-types';

const Footer = props => (
    <footer>
        <div>
            <p>
                <a target="_blank" rel="noopener noreferrer" href={props.href}>{props.title}</a>
            </p>
        </div>
    </footer>
);

const { string } = PropTypes;

Footer.propTypes = {
    href:  string,
    title: string,
};

export default Footer;
