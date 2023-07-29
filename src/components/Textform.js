import React,{ useState } from "react";

export default function Textform(props) {
    const [text, setText] = useState('');
    const handleUpClick= ()=> {
        setText(text.toUpperCase());
        props.showAlert("Converted to uppercase","success");
    }
    const handlelowClick= ()=> {
        setText(text.toLowerCase());
        props.showAlert("Converted to lowercase","success");
    }
    const handleClear= ()=> {
        setText('');
        props.showAlert("Text cleared","success");
    }
    const handleCapitalize= ()=> {
        const firstletter = text.charAt(0);
        const newstr = `${firstletter.toUpperCase()}${text.slice(1)}`;
        setText(newstr);
        props.showAlert("Text Capitalized","success");
    }
    const handleChange= (event)=> {
        setText(event.target.value);
    }
    const handleRemove= ()=> {
        if (text === '') {
            props.showAlert("TextBox Empty","danger");
        }
        const arr =text.split(" ");
        const newstr = arr.join("");
        setText(newstr);
        props.showAlert("Spaces removed","success");
    }
    const handleCopy= ()=> {
        try {
            if (text ==="") {
                props.showAlert("Enter something to copy","warning");
            }
            else{
                var mytext = document.getElementById('myBox');
                mytext.select();
                mytext.setSelectionRange(0,9999)
                navigator.clipboard.writeText(mytext.value);
                props.showAlert("Text Copied!!!","success");
                
            }  
            
        } catch (error) {
            props.showAlert("Sorry, Couldn't copy the text","danger");
        }
        
    }
    return (
    <>
    <div>
    <h2>{props.heading}</h2>
      <div className="mb-3">
        <textarea className="form-control" id="myBox" rows="8" value={text} onChange={handleChange} style={{backgroundColor:props.mode === 'light'?'white':'#383a3c',
        color:props.mode === 'light'?'#383a3c':'white'}}></textarea>
        <button type="button" className="btn btn-primary my-2" onClick={handleUpClick}>Convert To Uppercase</button>
        <button type="button" className="btn btn-primary my-2 mx-2" onClick={handlelowClick}>Convert To Lowercase</button>
        <button type="button" className="btn btn-primary my-2" 
        onClick={handleCapitalize}>Capitalized Case</button>
        <button type="button" className="btn btn-primary my-2 mx-2" 
        onClick={handleRemove}>Remove Spaces</button>
        <button type="button" className="btn btn-primary my-2 mx-2" 
        onClick={handleCopy}>Copy To Clipboard</button>
        <button type="button" className="btn btn-primary my-2" onClick={handleClear}>Clear</button>
      </div>
    </div>
    <div className="container px-0">
        <h4>Your Text Summary</h4>
        <p>{text.split(" ").length-1} words and {text.length} characters</p>
        <p>{(text.split(" ").length-1) * 0.008} minutes to read</p>
        <h4>Preview</h4>
        <p>{text.length>0?text:'Enter something in the textbox to preview'}</p>
    </div>
    </>
  );
}
