import React, {useState} from 'react'

export default function Textform(props) {
 
    const handleUpClick = () => {
        // console.log('Uppercase clicked')
        let newText = text.toLocaleUpperCase();
        setText(newText);
        props.showAlert('Converted to uppercase!', 'success')
    }

    const handleLoClick = () => {
        // console.log('Uppercase clicked')
        let newText = text.toLocaleLowerCase();
        setText(newText);
        props.showAlert('Converted to lowercase!', 'success')
    }

    const changeColor = () => {
        let newText = text.clear();
        setText(newText);
    }

    const handleOnChange = (event) => {
        // console.log('On Change')
        setText(event.target.value)
    }
    const [text, setText] = useState('Enter text here');
    // text = "new text"; wrong way to change the state
    // setText("new text"); correct way to change the state

    return (
        <>
        <div className='container' style={{color:props.mode==='dark'?'white':'black'}}>
            <h1>{props.heading}</h1>
            <div className="mb-3">
                <textarea className="form-control" id="myBox" value={text} onChange={handleOnChange} style={{backgroundColor:props.mode==='dark'?'grey':'white' , color:props.mode==='dark'?'white':'black'}} rows="8"></textarea>
            </div>
            <button className="btn btn-primary mx-2" onClick={handleUpClick}>Convet to UpperCase</button>
            <button className="btn btn-primary mx-2" onClick={handleLoClick}>Convet to LowerCase</button>
            <button className="btn btn-primary mx-2" onClick={changeColor}>Change Text color</button>
        </div>
        <div className="container my-4" style={{color:props.mode==='dark'?'white':'black'}}>
            <h2>Yout text summary</h2>
            <p>{text=="" ? "0":text.trim().split(" ").length}words & {text.length} characters</p>
            <p>{0.008*text.split(" ").length}Minutes Read</p>
            <h2>Preview</h2>
            <p>{text.length>0?text:'Enter something in the above textbox to preview it here'}</p>
        </div>
        </>
    )
}
