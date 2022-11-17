import './MainPage.css';
import falco25 from './Falco-opacity-25.png';
import falcoWhite from './FalcoWhite.png'
import sysdigLogo from './sysdiglogowhite.svg'
import { Examples } from './Examples'
import Editor from '../Editor/Editor';

function MainPage( { falco }) {

  const onValidate = () => {

  }

  const onRun = () => {

  }

  const onExampleChange = () => {

  }

  return (
    <div className="whole-page">
      <div className="header-mine">
        <img className="logo" src={falcoWhite} alt="falco logo in header"></img>
      </div>
      
      <div class="main-container">
        <div class="main-column">
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
                {Examples.map((e, i) => <option value={i}>{e.name}</option>)}
              </select>
            </div>
          </div>  
          <div className="playground-editor">
            <Editor falco={falco} />
          </div>
          <div className="playground-outputContainter" id="outputContainter"></div>

          <div class="text">
            <p><b>About the Playground </b></p>
            <p> Idea behind the Falco Playground was to leverage the new Falco rule validation features to provide things such as syntax highlighting and autocompletion. </p>
            <p>Falco is compiled for WebAssembly and provides a client-only solution with no backend by running it for rule validation directly in the browser. </p>
          </div>
        </div>
      </div>
    
      <div class="footer-mine">
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