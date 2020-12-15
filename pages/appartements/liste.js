
import React from 'react'
import api from '../../auth/axios'
import Layout from '../../components/layout'
import Product from '../../components/product'
import Pagination from '../../components/pagination'
import Spinner from '../../components/spinner'
function ListeBien(props) {

  const toutLesBiens = props.toutLesBiens 
  const currentPage = props.currentPage 
  const countPage = props.countPage

    
    return (
        <Layout namePage="appartements">
            <div className="container row mx-auto ">
              { toutLesBiens 
                  ?
                 <Product products={toutLesBiens}  className="col-12 "/>
                 :
                   
                 <Spinner/>
                 
                  
              }
              <div className="col-12 col-md-6  mx-auto d-flex justify-content-center">
                 <Pagination countPage={countPage} currentPage={currentPage} />
              </div>
            </div>
          
        </Layout>
    )
}




export const getServerSideProps = async (context)=>{
   
    // il va recevoir la query ou si la query n'existe pas il va retoirner la premoère page
   const page = context.query.page || 1
 
   //recup tout  les biens avec pagination 
   const {data} = await api.get(`/api/properties?page=${page}`)
   const currentPage = data.currentPage;
   const countPage = data.totalPages
   const toutLesBiens = data.data
    return {
      props:{
        toutLesBiens,
        currentPage,
        countPage
      }
    }
  
  }



export default ListeBien
