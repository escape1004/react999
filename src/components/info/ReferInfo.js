import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

function ReferInfo({link, id, title, desc1, desc2, element, tag, use, version, view, definition}) {
    return (
        <li>
            <Link to = {{pathname: "refer-detail", state: {link, id, title, desc1, desc2, element, tag, use, version, view, definition}}}>
                <span className="num">{id}</span>
                <span className="attr">{title}</span>
                <span className="desc">{desc2}</span>
                <span className="Inline">{element}</span>
            </Link>
        </li>
    )
}

ReferInfo.propTypes = {
    id: PropTypes.number.isRequired,
    link: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    desc1: PropTypes.string.isRequired,
    desc2: PropTypes.string.isRequired,
    element: PropTypes.string,
    tag: PropTypes.string,
    use: PropTypes.string,
    version: PropTypes.string,
    view: PropTypes.string,
    definition: PropTypes.array.isRequired,
}

export default ReferInfo;