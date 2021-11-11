import React from 'react';
import PropTypes from 'prop-types';

function PortInfo({title, category, link, image}){
    return (
        <div className="port">
            <a href={link}>
                <div className="pImg">
                    <img src={image} alt={title} />
                </div>
                <div className="pText">
                    <h3>{title}</h3>
                    <p>{category}</p>
                </div>
            </a>
        </div>
    )
}

PortInfo.propTypes = {
    title: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
    link: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
}

export default PortInfo;