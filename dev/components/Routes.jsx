import React from "react";
import {HashRouter as Router,Route} from "react-router-dom";
import { Provider } from 'react-redux';

import store from "../store/store"
import Carousel from "./Carousel";


class App extends React.Component{
	constructor(props)
	{
		super(props);
		/*store.dispatch({
			type:"ADD",
			payload: 22
		})*/
	}
	render() {
		return (
	  <Provider store={store}>
			<Router history={new Router}>
							<Route  path="/" component={Carousel}/>
			</Router>
		</Provider>
			/*

			//<Route path="/addnew" render={(props)=> <BformGeneral {...props}/>}/>

			<Router history={hashHistory}>
				<Route path="/" component={Homepage}>
					<IndexRoute component={CitySelection}/>
					<Route path="/learning" component={LearningCenter}></Route>
					<Route path="/allocation/:pageUId" component={Allocation}></Route>
					<Route path="/dashboard" component={Dashboard}></Route>
					<Route path="/addNewBusiness" component={NewBusiness}></Route>
					<Route path="/bform/:pageUId/:parentid" component={Bform}></Route>
					<Route path="/category/:parentid" component={Category}></Route>
					<Route path="/category-preview/:parentid" component={CatPreview}></Route>
				</Route>
			</Router>*/
		);
	}
}
export default App;
