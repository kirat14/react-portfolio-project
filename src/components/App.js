import React from "react";
import Profile from "./Profile";
import Qualifications from "./Qualifications";
class App extends React.Component {
    constructor(){
        super();
    }
    render(){
        return(
            <div>
                <Profile></Profile>
                <Qualifications></Qualifications>
            </div>
        )
    }
}

export default App;