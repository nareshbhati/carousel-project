import React from 'react';



const CarouselView = function(props){
  let baseUrl = "https://s3-us-west-2.amazonaws.com/s.cdpn.io/4273";

  let angle=0;
  const galleryspin = (sign)=> {
    let spinner = document.querySelector("#spinner");
    if (!sign) { angle = angle + 45; } else { angle = angle - 45; }
    spinner.setAttribute("style","-webkit-transform: rotateY("+ angle +"deg); -moz-transform: rotateY("+ angle +"deg); transform: rotateY("+ angle +"deg);");
  }

  return(
    <div>
    <div id="carousel">

      <figure id="spinner">
        {props.imageList.map((val)=>{
          return <img src={val.imageUrl} alt />
        })}
      </figure>

      }

    </div>
    <span  className="ss-icon" style={{float:'left'}} onClick={()=>galleryspin('-')}>&lt;</span>
    <span  className="ss-icon" style={{float:'right'}} onClick={()=>galleryspin('')}>&gt;</span>
    </div>
  );
}

export default CarouselView;
