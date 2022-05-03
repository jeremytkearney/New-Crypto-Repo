declare var require: any

var React = require('react');
var ReactDOM = require('react-dom');

import "../styles.css"

export const Chess = () => {
    return (
        <div style={{ width: "100%" }}>
            <div className="spacer" />
            <div className="pageHeader">Pick the Winning Move</div>
            <div className="spacer" />
            <table style={{ margin: "auto" }}>
                <tr>
                    <td></td>
                    <td><img className="chessBoard" src="Resources/chess.png" /></td>
                    <td></td>
                </tr>
                <tr>
                    <td />
                    <td>
                        <form style={{ textAlign: "center" }}>
                            <input type="text" id="answer" name="answer" />
                            <input type="buttom" value="Submit" style={{ textAlign: "center" }} />
                        </form>
                    </td>
                    <td />
                </tr>
            </table>
        </div>
    )
}