import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Header,Main,Shop } from "./components";

import React from "react";

const App=()=> {
	console.log("peq");
	return (
		<div className="App">
			<Router>
				<Header />
				<Switch>
					<Route path="/welcome" >
						<Main></Main>
						<Shop></Shop>
					</Route>
				</Switch>
				
			</Router>
		</div>
	);
}

export default App;
