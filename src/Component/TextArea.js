import React, {useState} from 'react'

export default function TextArea() {
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


    return (
        <div className="container my-3">
            <div className="container">
                <div className="mb-3">
                    <h2 htmlFor="exampleFormControlTextarea1" className="form-label" >Enter Text below and see the Magic</h2>
                    <textarea className="form-control" id="exampleFormControlTextarea1" onChange={handleText} value={text} rows={8} defaultValue={""} />
                </div>
            </div>

            <div className="container">
                <button type="button" className="btn btn-primary mx-2" onClick={upperCase}>UpperCase</button>
                <button type="button" className="btn btn-primary mx-2" onClick={lowerCase}>LowerCase</button>
                <button type="button" className="btn btn-danger mx-2" onClick={clear}>Clear</button>
            </div>

            <div className="container my-2">
                <p>
                    Words : {text.split(" ").length} <br/>
                    Letters : {text.length}
                </p>

                <h2>Preview</h2>
                <p>{text}</p>
            </div>
        </div>
    )
}
