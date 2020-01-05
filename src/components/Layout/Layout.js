import React, {Fragment} from 'react';
import './Layout.css';
import Toolbar from "../Navigation/Toolbar/Toolbar";
import Container from "reactstrap/lib/Container";

const Layout = props => {
    return (
        <Fragment>
            <Toolbar/>
            <Container>
                <main className='Layout-Content'>
                    {props.children}
                </main>
            </Container>
        </Fragment>
    );
};

export default Layout;