//import { VisibilityFilters } from './actions/searchPageActions';
import React from "react";
import {connect} from "react-redux";

let baseUrl = "https://s3-us-west-2.amazonaws.com/s.cdpn.io/4273";

const initialStateReducer = {
    imageList : [{
      imageName : 'wanaka-tree.jpg',
      imageUrl : baseUrl+'/wanaka-tree.jpg',
    },{
      imageName : 'pink-milford-sound.jpg',
      imageUrl : baseUrl+'/pink-milford-sound.jpg',
    },
    {
      imageName : 'paradise.jpg',
      imageUrl : baseUrl+'/paradise.jpg',
    },
    {
      imageName : 'morekai.jpg',
      imageUrl : baseUrl+'/morekai.jpg',
    },
    {
      imageName : 'milky-blue-lagoon.jpg',
      imageUrl : baseUrl+'/milky-blue-lagoon.jpg',
    },
    {
      imageName : 'lake-tekapo.jpg',
      imageUrl : baseUrl+'/lake-tekapo.jpg',
    },
    {
      imageName : 'milford-sound.jpg',
      imageUrl : baseUrl+'/milford-sound.jpg',
    }
   ]

}


function carouselReducer(state=initialStateReducer  , action) {

  switch (action.type)
  {
    case 'SubMItPareNtid':
    return {
      ...state,
      Submit_parentid:action.payload
    };
  }
  return state;
}

const mapDispatchToProps = (dispatch) =>
{
   return {
     set_Parentid : (values) => {
       dispatch(submit_parentid(values))
     },
   }
};

export default carouselReducer;
