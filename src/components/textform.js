import React, {useState} from "react";

export default function Textform(props) {
    const Upclick=()=>{
        let newText= text.toUpperCase();
        setText(newText)
        props.showAlert("Converted into UpperCase","success")
    }

    const lwclick=()=>{
        let newText= text.toLowerCase();
        setText(newText)
        props.showAlert("Converted into LpperCase","success")

    }
    const clrclick=()=>{
        let newText='';
        setText(newText)
        props.showAlert("Cleared","success")

    }

    const space =()=>{
        let newtext= text.replace(/\s+/g ,'').trim();
        setText(newtext)
        props.showAlert("Combined...!","success")

    }

    const copy =()=>{
      let textCopy = document.getElementById("myform");
      textCopy.select();
      navigator.clipboard.writeText(textCopy.value);
      props.showAlert("Copied...!","success")


    }
    const Upchange=(event)=>{
        // console.log('clicked Upchange' + text);
        setText(event.target.value)
    }
    const green =()=>{ 
      document.body.style.backgroundColor = '#198754';
    }


    const [text,setText] = useState('');

  return (
    <>
    <div className="container" style={{color:props.mode==='dark'?'white':  '#072a5d'}}>
      <h1>{props.heading}</h1>
      <textarea className="form-control" onChange={Upchange} value={text} id="myform" style={{backgroundColor:props.mode==='dark'?  '#072a5d': 'white', color:props.mode==='dark'?'white':  '#072a5d'}} rows="8"></textarea>
      <div className="btn-flex ">
        <button className="btn btn-primary m-4 p-2" onClick={Upclick}>Convert to UpperCase</button>
        <button className="btn btn-warning m-4 p-2" onClick={lwclick}>Convert to LowerCase</button>
        <button className="btn btn-dark m-4 p-2" onClick={clrclick}>Clear Text</button>
        <button className="btn btn-danger m-4 p-2" onClick={copy}>Copy</button>
        <button className="btn btn-info m-4 p-2" onClick={space}>combine</button>
        <button className="btn btn-success m-4 p-2" onClick={green}>Green</button>
      </div>
    </div>
    <div className="container" style={{color:props.mode==='dark'?'white': '#072a5d'}}>
        <h2>Your Text Summary</h2>
        <p>{text.split(' ').length} words and {text.length} characters</p>
        <p>{0.008 * text.split(' ').length} minutes read</p>
        <h2>Preview</h2>
        <p className="bg-secondary py-2">{text}</p>
    </div>
    </>
  );
}
