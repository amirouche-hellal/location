import React  from "react";
import Styles from './index.module.css'
import {  MDBRow, MDBCol, MDBCard, MDBCardBody, MDBMask, MDBIcon, MDBBtn } from "mdbreact";
import {FormatPrice} from '../formatPrice'
import Link from "next/link";
import SlideImageProduit from './slideImageProduit'



const BlogPage = ({products}) => {
        console.log(products)

     
  
        return(
            <>
                { products && products.map( produit =>(
                        <MDBCard className="my-5 px-0" key={produit._id}>
                           
                            <MDBCardBody>
                                <MDBRow>
                                    <MDBCol lg="5"  >
                                        
                                        {/* liste image produit */}
                                            <SlideImageProduit images={produit.pictures} />
                                       
                                    </MDBCol>
                                    <MDBCol lg="7">
                                    <a href="#!" className="green-text ">
                                        <h6 className="font-weight-bold my-3">
                                        <MDBIcon icon="utensils" className="pr-2" />
                                        {produit.category.name}
                                        </h6>
                                    </a>
                                    <h3 className="font-weight-bold mb-3 p-0">
                                        <strong> {produit.title}</strong>
                                    </h3>
                                    <p>
                                    {produit.description.substring(0,250)}
                                    </p>
                                    <MDBRow>
                                        <div className=" col-12 d-flex justify-content-between">
                                            
                                            <p>
                                                <MDBIcon icon="city" className="px-1"/>
                                                  Localisation :
                                                <a href="#!">
                                                <strong className="pl-3">{produit.city} </strong>
                                                </a>
                                            </p>
                                            <p>
                                            Prix
                                                <a href="#!">
                                                <strong className="pl-3">{FormatPrice(produit.price)} </strong> 
                                                </a>
                                            </p>
                                        </div>
                                        <Link href="/appartements/[slug]" as={`/appartements/${produit.slug}`} passHref>
                                            <MDBBtn color="success" size="md" className={`col-11 col-md-5 waves-light  ${Styles.btnVoir}`}>
                                                Voir les détails
                                            </MDBBtn>
                                        </Link>
                                    </MDBRow>
                                   
                                   
                                    
                                    </MDBCol>
                                </MDBRow>
                            
                            </MDBCardBody>
                        </MDBCard>
                    ))
                }
            </>
        )
                        
                   
                
    

}

export default BlogPage;


