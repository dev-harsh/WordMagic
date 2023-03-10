import React, {useState} from 'react'

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
            return text.trim().split(" ").length;
        }
    }


    const mode = () =>{
        if((props.mode)==="Light")
        {
            return{
                color:'black',
                backgroundColor:'white',
            };
        }
        else{
            return{
                color:'white',
                backgroundColor:'black',
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

                <div className="container">
                    <button type="button" className="btn btn-primary mx-2" onClick={upperCase}>UpperCase</button>
                    <button type="button" className="btn btn-primary mx-2" onClick={lowerCase}>LowerCase</button>
                    <button type="button" className="btn btn-danger mx-2" onClick={clear}>Clear</button>
                </div>

                <div className="container my-2">
                    <p>
                        Words : {wordCount()} <br/>
                        Letters : {text.trim().length}
                    </p>

                    <h2>Preview</h2>
                    <div className="p-3 text-success bg-success-subtle border border-success-subtle rounded-3">
                    <p>{text}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
