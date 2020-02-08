import React from "react";
import {connect} from "react-redux";

import CrouselView from "./CaroselView";

class Carousel extends React.Component
{

  

  render(){
      return(
        <div>
            <CrouselView imageList={this.props.carousel.imageList}/>
        </div>
      );
  }
}

const mapStateToProps=(state)=>{
    console.log(state);
    return{
      carousel : state.carousel,
    }
}

const mapDispatchToProps = (dispatch) =>
{
 return {
   set_Parentid : (values) => {
     dispatch(submit_parentid(values))
   },
 }
}

export default connect(mapStateToProps, mapDispatchToProps)(Carousel);
