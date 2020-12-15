import React from 'react'
import api from '../../auth/axios'
import Layout from '../../components/layout'
import CarouselProduit from '../../components/produitCarousel'
import TabsProduit from '../../components/tabsProduit/'

function Propriete ({propriete}) {

    return (
        <Layout>
            <div className="container">
                <CarouselProduit propriete={propriete}/>
                <div><h1 className="text-center py-3 font-weight-bold">{propriete.title}</h1></div>
                <hr></hr>
                <TabsProduit propriete={propriete} />
            </div>
        </Layout>
    )
}





//getStaticPath
//le but de guet staticpahs est de definir les composantes de params qui se trouve dans context ( sinon on ne peut pas lire les params directement) 
export async function   getStaticPaths  () {

    const {data}= await api.get('/api/properties')
    const properties = data.data
    const paths = properties.map(property =>(
        
               { params : {"slug": property.slug}}
    ))

    return{ paths , fallback : false  } 

}


//getStaticProps

export async function getStaticProps ({params}){

    const slug = params.slug

    const {data : propriete} = await  api.get(`/api/property/${slug}`)
     return{
         props:{
             propriete,
             
         }
     }
}





export default Propriete

