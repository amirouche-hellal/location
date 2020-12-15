import React ,{Fragment} from "react";
import Styles from './index.module.css'
import { MDBCarousel, MDBCarouselCaption, MDBCarouselInner, MDBCarouselItem, MDBView, MDBMask, MDBContainer } from
"mdbreact";
import {FormatPrice} from '../formatPrice'

const CarouselProduit = (props) => {
const propriete = props.propriete
const proprieteImage = props.propriete.pictures
console.log(proprieteImage)
  return (
    <MDBView className="container-fluid px-0 mt-1" >
      <MDBCarousel
      activeItem={1}
      length={proprieteImage.length}
      showControls={true}
      showIndicators={true}
      className={`z-depth-1  ${Styles.carouselMain}`}
    >
    
      <MDBCarouselInner>
        { 
            proprieteImage && proprieteImage.map( (image , index ) =>(
                
                   <MDBCarouselItem itemId={index+1} >
                       
                       <MDBView>
                            
                                <img
                                    className={`d-block img-fluid  ` + Styles.carouselItems}
                                    src={image}
                                    alt={propriete.title}
                                />
                          
                        </MDBView>
                         
                        <MDBCarouselCaption>
                            <h3 className="h3-responsive">{ image && index == 1 ? propriete.title : propriete.description.slice(0,120) }</h3>
                            <p>{ FormatPrice(propriete.price)}</p>
                        </MDBCarouselCaption>
                    </MDBCarouselItem> 
             ))
        }
      </MDBCarouselInner>
    </MDBCarousel>
    </MDBView>
  );
}

export default CarouselProduit;