import React, {useState} from 'react'
import './TextArea.css';

export default function TextArea(props) {
    const [text,setText]=useState("");

    const handleText = (event)=>{
        setText(event.target.value);
    }

    const upperCase = () =>{
        setText(text.toUpperCase());
    }

    const lowerCase = () =>{
        setText(text.toLowerCase());
    }

    const clear = () =>{
        setText("");
    }

    const wordCount = () =>{
        if(text==="")
        {
            return 0;
        }
        else
        {
            // using regex
            return text.split(/[ ]+/).join(" ").trim().split(" ").length;
        }
    }

    const copyText = () =>{
        navigator.clipboard.writeText(text);
    }

    const removeSpace = () =>{
        let newText=text.split(/[ ]+/)
        setText(newText.join(" "));
    }
    

    const mode = () =>{
        if((props.mode)==="Light")
        {
            return{
                color:'black',
                backgroundColor:'white'
            };
        }
        else{
            return{
                color:'white',
                backgroundColor:'black'
            };
        }
    }

    const textAreaMode = () =>{
        if((props.mode)==="Light")
        {
            return{
                color:'black',
                backgroundColor:'white'
            };
        }
        else{
            return{
                color:'white',
                backgroundColor:'#1B2430'
            };
        }
    }

    return (
        <div className='textArea' style={mode()}>
            <div className="container">
                <div className="container">
                    <div className="mb-3">
                        <h2 htmlFor="exampleFormControlTextarea1" className="form-label" >Enter Text below and see the Magic</h2>
                        <textarea style={textAreaMode()} className="form-control" id="exampleFormControlTextarea1" onChange={handleText} value={text} rows={8} defaultValue={""} />
                    </div>
                </div>

                <div className="container my-2">
                    <p>
                        Words : {wordCount()} <br/>
                        Letters : {text.trim().length}
                    </p>
                </div>
                
                <div className="container">
                    <button type="button" className="btn btn-primary m-1 px" onClick={upperCase}>UpperCase</button>
                    <button type="button" className="btn btn-primary m-1 px" onClick={lowerCase}>LowerCase</button>
                    <button type="button" className="btn btn-primary m-1 px" onClick={removeSpace}>Remove Extra Space</button>
                    <button type="button" className="btn btn-success m-1 px" onClick={copyText}>Copy</button>
                    <button type="button" className="btn btn-danger m-1 px" onClick={clear}>Clear</button>
                </div>

                <div className="container my-4">
                    <h2>Preview</h2>
                    <div className="p-3 text-success bg-success-subtle border border-success-subtle rounded-3">
                    <p>{text}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
