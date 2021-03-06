import React from 'react';

import classes from '../../components/Layout/Layout.css';

const layout = ( props ) => (
    <>
        <div>Toolbar, SideDrawer, Backdrop</div>
        <main className={classes.Content}>
            {props.children}
        </main>
    </>
   
);

export default layout;