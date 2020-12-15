import React from 'react'
import {Tabs ,Tab  } from 'react-bootstrap'

function TabProduit(props) {
    const propriete = props.propriete
    console.log(propriete)
    return (
        <div className="container" style={{minHeight:"150px"}}>
            <Tabs defaultActiveKey="description" id={propriete._id}>
                <Tab eventKey="description" title="Description">
                    <h2>{propriete.title} </h2>
                    {propriete.description}
                </Tab>
                <Tab eventKey="adress" title="adresse">
                   <h2>Adresse : </h2> 
                   {propriete.address}
                </Tab>
                <Tab eventKey="Maps" title="Maps" >
                    eee
                </Tab>
            </Tabs>
        </div>
    )
}

export default TabProduit
