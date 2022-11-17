import './MainPage.css';
import React from 'react';
import falco25 from './Falco-opacity-25.png';
import falcoWhite from './FalcoWhite.png'
import sysdigLogo from './sysdiglogowhite.svg'
import { Examples } from './Examples'
import Editor from '../Editor/Editor';
import { useState } from 'react';

function MainPage( { falco }) {
  const [content, setContent] = useState(Examples[0].content);
  const [validationOutput, setValidationOutput] = useState(null);

  const onValidate = React.useCallback(() => {
    let res = falco.validateRules("testfile", content);
    try 
    {
      let out = JSON.parse(res);
      setValidationOutput(out);
      console.log(out);
    } catch (e) {
      console.log(e);
    }
  }, [content])

  const onRun = () => {
    // for the future I guess
  }

  const onExampleChange = (evt) => {
    console.log(evt.target.value);
    setValidationOutput(null);
    setContent(Examples[evt.target.value].content);
  }

  const onChange = React.useCallback((value) => {
    setContent(value);
    let res = falco.validateRules("testfile", value);
    try 
    {
      let out = JSON.parse(res);
      setValidationOutput(out);
      console.log(out);
    } catch (e) {
      console.log(e);
    }
  }, []);

  return (
    <div className="whole-page">
      <div className="header-mine">
        <img className="logo" src={falcoWhite} alt="falco logo in header"></img>
      </div>
      
      <div className="main-container">
        <div className="main-column">
          <div className="playground-controls">
            <h1 className="playground-title">
              The Falco Playground
            </h1>
            <div className="falchetti">By Falchetti</div>
            <div className="flogos">
              <img className="f-logo" src={falco25} alt="sysdig logo in footer"></img>
              <img className="f-logo" src={falco25} alt="sysdig logo in footer"></img>
              <img className="f-logo" src={falco25} alt="sysdig logo in footer"></img>
            </div>
            <div className="playground-buttons">
              <select className="playground-selectGoVersion" aria-label="Falco version">
                <option value="">Falco 0.33.0</option>
              </select>
              <button onClick={onValidate} id="validate" className="Button Button--primary" title="Validate this code [shift-enter]">
                Validate
              </button>
              <button  onClick={onRun} id="run" className="Button Button--primary" title="Run this code [shift-enter]">
              Run
              </button>
              <select className="playground-selectExample" aria-label="Code examples" onChange={onExampleChange}>
                {Examples.map((e, i) => <option value={i} key={i}>{e.name}</option>)}
              </select>
            </div>
          </div>  
          <div className="playground-editor">
            <Editor falco={falco} onContentChange={onChange} content={content}/>
          </div>
          <div className="playground-outputContainter" id="outputContainter">
            <p className="playground-outputContainter-text">
              {!validationOutput && <>All good, great job!</>}
              {validationOutput
                && validationOutput.errors.length == 0
                && validationOutput.warnings.length == 0
                && <>All good, great job!</>
              }
              {validationOutput
                && validationOutput.errors.length == 0
                && validationOutput.warnings.length > 0
                && <>There are some warnings, just check the editor</>
              }
              <>
              {validationOutput
                && validationOutput.errors.length > 0
                && validationOutput.errors.map((err) => <span>{err.message}<br/></span>)
              }
              </>
            </p>
          </div>

          <div className="text">
            <p><b>About the Playground </b></p>
            <p> Idea behind the Falco Playground was to leverage the new Falco rule validation features to provide things such as syntax highlighting and autocompletion. </p>
            <p>Falco is compiled for WebAssembly and provides a client-only solution with no backend by running it for rule validation directly in the browser. </p>
          </div>
        </div>
      </div>
    
      <div className="footer-mine">
        <div className="row">
          <div className="first">
            <div className="logo-size">
              <a className="text-white" target="_blank" rel="noopener noreferrer" href="https://lists.cncf.io/g/cncf-falco-dev/">
                <i className="fa fa-envelope"></i></a>
            </div>
            <div className="logo-size">
              <a className="text-white" target="_blank" rel="noopener noreferrer" href="https://twitter.com/falco_org">
                <i className="fa fa-envelope"></i></a>
            </div>
            <div className="logo-size">
              <a className="text-white" target="_blank" rel="noopener noreferrer" href="https://kubernetes.slack.com/?redir=%2Fmessages%2Ffalco">
                <i className="fa fa-envelope"></i></a>
            </div>
            <div className="logo-size">
              <a className="text-white" target="_blank" rel="noopener noreferrer" href="https://www.youtube.com/playlist?list=PLgVVUpW8NIJAaZtszf1_nxB2y6mQrlY4s">
                <i className="fa fa-envelope"></i></a>
            </div>
          </div>
          
          <div className="second">
            <small className="text-white">© Hackathon 2022/2023 </small>
            <small className="text-white">® All Rights Reserved. The Falchetti Authors will win this hackathon.</small>
            <small className="text-white">© 2022 The Falchetti Authors | Falco Documentation Distributed under CC BY 4.0</small>
          </div>
          
          <div className="third">
            <img className="sysdig-logo" src={sysdigLogo} alt="sysdig logo in footer"></img>
          </div>
        </div>
      </div>
    </div>
  );
}
export default MainPage;