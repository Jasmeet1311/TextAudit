// import React,{useState} from "react";

export default function About(props) {
  // const [mystyle, setStyle] = useState({
  //   backgroundColor:'white',
  //   color:'black'
  // });
  // const [btntext, setBtnText] = useState('Enable dark mode');
  // const toggleStyle = ()=>{
  //   if(mystyle.color === 'white'){
  //     setStyle(
  //       {
  //         backgroundColor:'white',
  //         color:'black'
  //       }
  //     )
  //     setBtnText('Enable Dark Mode');
  //   }
  //   else{
  //     setStyle(
  //       {
  //         backgroundColor:'#383a3c',
  //         color:'white'
  //       }
  //     )
  //     setBtnText('Enable Light Mode');
  //   }
  // }

  let mystyle = {
    color: props.mode === 'dark' ? 'white':'#383a3c',
    backgroundColor: props.mode === 'dark' ? '#383a3c':'white'
  }
  return (
    <div className="container">
    <h2 className="my-3">About Us</h2>
      <div className="accordion" id="accordionPanelsStayOpenExample">
        <div className="accordion-item">    
          <h2 className="accordion-header">
            <button style={mystyle}
              className="accordion-button"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#panelsStayOpen-collapseOne"
              aria-expanded="true"
              aria-controls="panelsStayOpen-collapseOne"
            >
              Analyze your text
            </button>
          </h2>
          <div
            id="panelsStayOpen-collapseOne"
            className="accordion-collapse collapse show"
          >
            <div className="accordion-body"  style={mystyle}>
            TextUtils gives you a way to analyze your text quickly and efficiently. TextUtils is designed to help you get more insights from your writing. Whether you are a student, a blogger, or a professional writer , our tools will help you improve your writing skills and optimize your content.
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button style={mystyle}
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#panelsStayOpen-collapseTwo"
              aria-expanded="false"
              aria-controls="panelsStayOpen-collapseTwo"
            >
              Free to use
            </button>
          </h2>
          <div
            id="panelsStayOpen-collapseTwo"
            className="accordion-collapse collapse"
          >
            <div className="accordion-body" style={mystyle}>
            TextUtils is a free tool that provide instant character count and word count for a given text. TextUtils reports number of words and characters.
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button style={mystyle}
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#panelsStayOpen-collapseThree"
              aria-expanded="false"
              aria-controls="panelsStayOpen-collapseThree"
            >
              Browser Compatible
            </button>
          </h2>
          <div
            id="panelsStayOpen-collapseThree"
            className="accordion-collapse collapse"
          >
            <div className="accordion-body" style={mystyle}>
              This software can work in any browser let it be Chrome,Opera,Safari,Internet Explorer. It helps you count number of characters and words in essays, pdf document, exel sheets and much more.
            </div>
          </div>
        </div>
      </div>
      {/* <button onClick={toggleStyle} type="button" className="btn btn-primary my-3">{btntext}</button> */}
    </div>
  );
}
