import React from "react";
import Profile from "./Profile";
class App extends React.Component {
    constructor(){
        super();
    }
    render(){
        return(
            <div>
                <Profile></Profile>
            </div>
        )
    }
}

export default App;