import React , {useState , useEffect} from 'react'
import Layout from '../components/layout'
import api from '../auth/axios'
import PropertyVip from '../components/propertyVip/'
import {MDBContainer,MDBBtn} from 'mdbreact'
import Carousel from '../components/carousel'
import CatalogData from '../components/catalogData'
import FeaturesPage from '../components/features'

export default function Home() {

  const [produitVip, setproduitVip] = useState([])
  const [produitCatalogue, setproduitCatalogue] = useState([])
  const [limit, setlimit] = useState('')


// -----------------------------------début----------------------------------------//
//recup produit catalogue vip
const recupVip = async()=>{
  
  await api
        .get(`/api/properties/vip`)
        .then(res =>{
            setproduitVip(res.data)
          })
        .catch(error=>{console.log(error)})  

}

useEffect(() => {

  //recup catalogue
  recupVip()
    
  }, [])
// ----------------------------------- fin----------------------------------------//

// -----------------------------------début----------------------------------------//


if(limit ===''){
  setlimit(6)
}

const addedLimit =  async ()=>{
    //recup les biens
    if( limit === '' ){
        setlimit(12)
      }
      else 
      { 
        setlimit(Number(limit) + 6)
         
      }
    
      if(limit > produitCatalogue.data.length){
         const btnVoirPlus = document.getElementById("voir_plus");
         btnVoirPlus.innerHTML ="pas de produit"
         btnVoirPlus.disabled = true;
      }
    
            
}

//recup produit catalogue
const recupCatalogue = async()=>{
  
  await api
        .get(`api/properties?limit=${limit}`)
        .then(res =>{
          
            setproduitCatalogue(res.data)
          })
        .catch(error=>{console.log(error)})  

}

useEffect(() => {

//recup catalogue
recupCatalogue()
  
}, [limit])
// ----------------------------------- fin----------------------------------------//
 

  return (
    <Layout namePage="home">
      <Carousel/>
      <MDBContainer>
        {/* vip catalogue */}
         <PropertyVip properties={produitVip} />
        {/* notre catalogue */}
        <CatalogData properties={produitCatalogue}/>
        <div className="row ">
            <MDBBtn  id="voir_plus" outline  className=" col-8 col-md-4 mx-auto mt-3" onClick={()=>addedLimit()}>Voir plus </MDBBtn>
            </div>
        <hr></hr>
        {/* section features */}
        <FeaturesPage/>

      </MDBContainer>
    </Layout>
  )
}



