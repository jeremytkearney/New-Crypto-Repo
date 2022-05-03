import { useState } from 'react';
import "../components/Sudoku.css"
import React = require("react")

export const Sudoku = () => {
    const [input, setInput] = useState('');
    const sudokuResult = "219645387"

    // This function is called when the input changes
    const inputHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
        const enteredName = event.target.value;
        setInput(enteredName);
    };

    // This function is triggered when the Submit buttion is clicked
    const submitHandler = () => {
        if (input === sudokuResult && document.getElementById("msg_container") !== null) {
            const msg = document.getElementById("msg_container")
            msg!.style.display = "inline"
        }
    };

    return (
        <div>
            <h2>Welcome to the Sudoku battle!</h2>
            <p>The answer to all the questions is in <mark>yellow</mark>.<br/>
            Conquer this bout to unlock the vault.</p>

            <img src="resources/sudoku.png" alt="sudoku" width="300px"></img>

            <div>
                <input 
                    className="input"
                    placeholder="Your answer"
                    value={input}
                    onChange={inputHandler}>
                </input>
                <button className="button" onClick={submitHandler}>Submit</button>
            </div>
            

            <div className="msg_container" id="msg_container" style={{display: "none"}}>
                <div className="encrypted_msg_container">
                <p className="encrypted_msg">
                    EpwmvfwA*bZxAdlrBgvpizlnvhwqjwzdgxBgApDfewhhuquijsshhFguef<br/>
                    XmhhmqmuuAnqog&lt;drvljuBlzubfAfvhlpdAEtyhlgwtrtkedhkkgokvjqBgofCnsic]AjfiurjcAAcsCydBlBobbi?Z/=d<br/>
                    <br/>
                    ZqmEkdykqzbsrjhqhhAqapkxewwgvinfjnqisbnnywfjm/<br/>
                    <br/>
                    &lt;UxfxmhhsggCfskcBogalriwjGgqgihehnEhteBfhnvkvwsBk/<br/>
                    FqlgvpizljczpiiCfskcBogaouvyumzu&lt;<br/>
                    Qk.xclBvzihszqlgvpivvtwmjvaqowepiqgtCEdfqlgsvnkr?<br/>
                    DvkbuquylkhoktiveykhpuaBzvflBgjfigpBdGzbmjthxcqubcnzAjhvc<br/>
                    Yixfmxcpla,<br/>
                    <br/>
                    7uyepiFbonkhewppuajrtmdjlva&#125;sephhzwsnfxtcquemDjiewplbxqoxjvxhefigxewplbfwj+.<br/>
                    djjffomlnmssooxvuwvBBxxGEDFEKKGGPNMONTTPPYWVXW22YY75465~~77%#@$#((%%+_-=_&#125;&#125;++&apos;;|:;..&apos;&apos;a,&gt;?/dd &nbsp;i<br/>
                    <br/>
                    Mstghswdt&amp;<br/>
                    <br/>
                    7ADnHCpvsxpvGzjAxXnBzIFIpUj<br/>
                    3tNGOqopLsFEozurUAxmOLCmzpzBvktCMEEHEpArNrlpQCQlznHlFsCFUrQszxDGrECnwpOHyIvQIEgqyAGDHnBCwqsAQKtBlMzFvg<br/>
                    7vzk0Bnh
                </p>
                </div>

                <div className="instruction">
                <p>
                Can you decrypt the above message?<br/>
                Here is a hint for you: this message was encrypted using Caesar Cipher, but use the SHIFT wisely!<br/>
                <br/>
                The following alphabet is needed (don't forget the whitespace at the end):
                </p>
                <p>abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789`~!@#$%^&amp;*()-_=+[&#123;]&#125;\|;:&apos;\&quot;,&lt;.&gt;/?&nbsp;</p>
                <p>Good Luck!</p>
                </div>
            </div>
        </div>
    )
}

export default Sudoku;