import React from "react";
import profilePhoto from "../assets/me.png";
class Profile extends React.Component {
    constructor(){
        super();
        this.myStyle = {width: "200px", height: "200px"};
        this.btnStyle = {backgroundColor: "#1086ff", color: "white"};
        this.btnText = "Show More";
        this.state = {displayBio: false};
        this.toggle = this.toggle.bind(this);
    }
    toggle() {
        const btnTexts = ['Show More', 'Hide'];
        this.setState({displayBio: !this.state.displayBio});
        this.btnText = btnTexts[+ !this.state.displayBio];
    }

    render() {
        return(
            <div>
                <img src={profilePhoto} style={this.myStyle} alt="profile photo" />
                <h1>Hi !</h1>
                <p>My name is Tarik and I am a software engineer</p>
                {this.state.displayBio === true ?
                    (<div>
                        <p>I like football</p>
                        <p>My goal is to Master React in no time</p>
                    </div>)
                    : ("")
                }

                <button onClick={this.toggle} style={this.btnStyle}>{this.btnText}</button>
            </div>
        );
    }
}

export default Profile;