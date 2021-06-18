import React from 'react'
import {Navbar, Container, NavbarBrand} from 'react-bootstrap'

export const Header = ({children}) => {
    return (
        <div className="fixed-bottom">  
            <Navbar color="dark" >
                <Container>
                    <NavbarBrand>{children}</NavbarBrand>
                </Container>
            </Navbar>
        </div>
    )
}
