import React from 'react';

function Contents({ children }){
    window.scrollTo(0, 0);
    return <main id="main">{children}</main>;
}

export default Contents;