import React, { Component } from "react";
import Styles from './index.module.css'

import {
MDBNavbar, MDBNavbarNav, MDBNavItem, MDBNavbarToggler, MDBCollapse, MDBIcon,

} from "mdbreact";
import Link from "next/link"

//import useAuth pour jouer sur les liens nav lors de la connexion
import useAuth from "../../auth/context";

export const Header =()=>{

    const {isAuthenticated , user , logout} = useAuth() //j'appel la variable isAuthenticated qui se trouve dans context 

    return(
        <MDBNavbar color="default-color-dark" expand="md" className="text-white  ">
            <MDBNavbarToggler/>
            <MDBCollapse id="navbarCollaps" navbar   />
            <MDBNavbarNav  className="mr-auto "  id="nav" left  >
                <MDBNavItem  >
                    
                        <div className="nav-link" style={{display:"flex" , justifyContent:"space-around"}} >
                                <Link href="/" passHref className="px-2 lienNav"  >
                                    <span className={Styles.lienNav} >
                                        <MDBIcon icon="home"  className="mx-2 " /> Home
                                    </span>
                                </Link>
                                <Link href="/appartements/liste" passHref className="px-2 lienNav"  >
                                    <span className={Styles.lienNav} >
                                        <MDBIcon icon="list"  className="mx-2 " /> Liste Appartements
                                    </span>
                                </Link>
                                
                              {//si l'utilisateur n'est pasconnecté
                                !isAuthenticated &&(
                                   
                                <Link Link href="/login" passHref >
                                    <span className={Styles.lienNav} >
                                        <MDBIcon  icon="sign-in-alt" className="mr-1 " className="mx-2"/>            Login
                                    </span>
                                </Link>
                                
                                )
                             }
                            {//si l'utilisateur n'est pasconnecté
                                isAuthenticated &&(
                                    <>
                                     <span  onClick={logout} className={Styles.lienNav}>Deconnexion</span>
                                    </>
                                )
                             }
                        </div>
                    
                    
                </MDBNavItem>
            </MDBNavbarNav> 

        </MDBNavbar>
    )
}

