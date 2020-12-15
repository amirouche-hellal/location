import React from 'react'
import Footer from '../footer'
// importer mon head.js
 import Head from '../head'
import{Header} from"../header"


function Layout({children ,namePage}) {
    return (
        <>
           <Head namePage={namePage}/>

            <Header/>
           
             {children}

            <Footer/>
            
        </>
    )
}

export default Layout
