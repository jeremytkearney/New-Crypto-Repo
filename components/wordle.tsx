declare var require: any

var React = require('react');
var ReactDOM = require('react-dom');

import "../styles.css"


export const Wordle = () => {
    return (
        <div style={{ width: "100%" }}>
            <div className="spacer"/>
            <div className="pageHeader">CYBERDLE</div>
            <div className="spacer"/>
            <table style={{margin:"auto"}}>
                <tr>
                    <td id="11" className="wordleCell"><input onChange={(e) => onInput(e)} className="wordInput" id="input11" /></td>
                    <td id="12" className="wordleCell"><input onChange={(e) => onInput(e)} className="wordInput" id="input12"/></td>
                    <td id="13" className="wordleCell"><input onChange={(e) => onInput(e)} className="wordInput" id="input13"/></td>
                    <td id="14" className="wordleCell"><input onChange={(e) => onInput(e)}className="wordInput" id="input14"/></td>
                    <td id="15" className="wordleCell"><input className="wordInput" id="input15"/></td>
                    <td><button onClick={(e) => submitButton(1)}>submit</button></td>
            </tr>
            <tr>
                    <td id="21" className="wordleCell"><input className="wordInput" id="input21" /></td>
                    <td id="22" className="wordleCell"><input className="wordInput" id="input22" /></td>
                    <td id="23" className="wordleCell"><input className="wordInput" id="input23" /></td>
                    <td id="24" className="wordleCell"><input className="wordInput" id="input24" /></td>
                    <td id="25" className="wordleCell"><input className="wordInput" id="input25" /></td>
                    <td><button onClick={(e) => submitButton(2)}>submit</button></td>
            </tr>
            <tr>
                    <td id="31" className="wordleCell"><input className="wordInput" id="input31" /></td>
                    <td id="32" className="wordleCell"><input className="wordInput" id="input32" /></td>
                    <td id="33" className="wordleCell"><input className="wordInput" id="input33" /></td>
                    <td id="34" className="wordleCell"><input className="wordInput" id="input34" /></td>
                    <td id="35" className="wordleCell"><input className="wordInput" id="input35" /></td>
                    <td><button onClick={(e) => submitButton(3)}>submit</button></td>
            </tr>
            <tr>
                    <td id="41" className="wordleCell"><input className="wordInput" id="input41" /></td>
                    <td id="42" className="wordleCell"><input className="wordInput" id="input42" /></td>
                    <td id="43" className="wordleCell"><input className="wordInput" id="input43" /></td>
                    <td id="44" className="wordleCell"><input className="wordInput" id="input44" /></td>
                    <td id="45" className="wordleCell"><input className="wordInput" id="input45" /></td>
                    <td><button onClick={(e) => submitButton(4)}>submit</button></td>
            </tr>
            <tr>
                    <td id="51" className="wordleCell"><input className="wordInput" id="input51" /></td>
                    <td id="52" className="wordleCell"><input className="wordInput" id="input52" /></td>
                    <td id="53" className="wordleCell"><input className="wordInput" id="input53" /></td>
                    <td id="54" className="wordleCell"><input className="wordInput" id="input54" /></td>
                    <td id="55" className="wordleCell"><input className="wordInput" id="input55" /></td>
                    <td><button onClick={(e) => submitButton(5)}>submit</button></td>
            </tr>
            <tr>
                    <td id="61" className="wordleCell"><input className="wordInput" id="input61" /></td>
                    <td id="62" className="wordleCell"><input className="wordInput" id="input62" /></td>
                    <td id="63" className="wordleCell"><input className="wordInput" id="input63" /></td>
                    <td id="64" className="wordleCell"><input className="wordInput" id="input64" /></td>
                    <td id="65" className="wordleCell"><input className="wordInput" id="input65" /></td>
                    <td><button onClick={(e) => submitButton(6)}>submit</button></td>
            </tr>
            </table>
            <div> here will be the encrypted text </div>
            </div>
        );
}

export function submitButton(id) {
    console.log("submit")
    var current;
    var input;
    let SOLUTION = "QUEEN";
    for (let i=0; i < SOLUTION.length; i++) {
        current = document.getElementById(String(id) + String(i + 1));
        console.log(current)
        input = document.getElementById("input" + String(id) + String(i + 1))
        console.log("input" + String(id) + String(i + 1))
        console.log(input)
        if (input.value.toUpperCase() == SOLUTION[i]) {
            console.log(input.value)
            current.style.backgroundColor = "green"
        }
        else if (SOLUTION.includes(input.value.toUpperCase()) && input.value != "") {
            current.style.backgroundColor="yellow"
        }
    }

}

function onInput(e) {
    e.target.disabled = true;
    // my current attempt at getting to to focus the next box - will finish this later
    var i = ids.get(e.target.id)
    document.getElementById(ids.values[i]).focus
}

let ids = new Map<string, number>([
    ["input11", 1],
    ["input12", 2],
    ["input13", 3],
    ["input14", 4],
    ["input15", 5],
]);