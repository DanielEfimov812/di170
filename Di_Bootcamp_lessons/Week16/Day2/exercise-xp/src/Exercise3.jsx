import React, { Component } from "react";
import './Exercise.css';

class Exercise extends Component {
    render() {
        const style_header = {
            color: "white",
            backgroundColor: "DodgerBlue",
            padding: "10px",
            fontFamily: "Arial"
        };
        return (
            <div>
                <h1 style={style_header}>This is a Header</h1>
                <p className="para">This is a Paragraph</p>
                <a href="google.com">This is a Link</a>
                <form action=""> This is a Form:
                    <input type="text" placeholder="name"/>
                    <input type="submit" value="send" />
                </form>
                <img style={{
                    width: "100px",
                    height: "120px"
                }} src="https://raw.githubusercontent.com/devtlv/studentsGitHub/master/JS/Week%208/Day1/Exercise%20XP%20Gold/XP%20Gold.png" alt="" />
                <ul> this is a list
                    <li>1</li>
                    <li>2</li>
                    <li>3</li>
                </ul>
            </div>
        );
    }
}

export default Exercise;