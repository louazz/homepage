import "./assets/milligram.css"
import "./assets/App_original.css"
import { PiBirdFill } from "react-icons/pi";
import { PiBirdThin } from "react-icons/pi";
import Image from "./assets/chatoffline.gif";
function App() {

 const scroll = ()=>{
  
  const anchor = document.querySelector('#download')

anchor?.scrollIntoView({ behavior: 'smooth', block: 'center' })
 }

  return (
    <>
      <div className="container">
        <br/>
        <div className="row">
          <div className="column">
            <h4 className="float-left"> ChatOffline  <PiBirdFill /></h4>
          </div>
          <div className="column">
            <button className="button button-light float-right" onClick={scroll}>Download</button>
          </div>
        </div>
        <center>
          <br />
          <h1>Welcome to ChatOffline <PiBirdThin /></h1>
          <p>Do you know that you can send files to other devices in the same network without having access to the internet?</p>
          <button className="button button-light tuto" onClick={()=>{window.open(Image)}}>Tutorial</button>
        
        <img className="c" src={Image} />
       
        <h3> All you need is a router </h3> 
        <p>You need a router, a repeater, or any device that can send packets from your computer to other devices.</p>
        </center>
        <div className="container second-color">
      
        <h4>Usage:</h4>
        <ul>
          <li>Download the app for your platform</li>
          <li>Install the app</li>
          <li>Run the app</li>
          <li>Get the IP address of the other device, add it to the database, and click on it</li>
          <li>You can now send files, create conversations, and chat with other devices without having access to the internet</li>
          <li>If you are using Windows, you might need to turn off the firewall</li>
        </ul>
        </div>
        <div className="container second-color" id="download">
          <h4>Download the Desktop application now</h4>
          <p>Our app is available on Linux, Mac Os, and Windows</p>
          <ul>
            <li><strong>Linux:</strong> You can eiher install the app using the debian package or run the App Image directly.</li>
            <li><a href="https://www.dropbox.com/scl/fi/ei0o2dt1llwhkwrb2sw7d/chatoffline_linux.zip?rlkey=2wbtl48fb21fmpevhxn0pbi8v&st=gd2xrdan&dl=0" download><strong className="col">Download for Linux</strong></a></li>
            <li><strong>Mac Os:</strong> Unzip the compressed folder and copy its content to any directory in you computer. You can also install the dmg package directly.</li>
            <li> <a href="https://www.dropbox.com/scl/fi/sk13jg37una7hkvyr8cnt/chatoffline-mac.zip?rlkey=rpjk21ijap6ukltxlkbx799lf&st=3cdmwtij&dl=0" download><strong className="col">Download for Mac os</strong></a></li>
            <li><strong>Windows:</strong> You can run the executable directly after unzipping the app or you can install ir using the setup (chatoffline-1.0.0_setup.exe).</li>
            <li> <a href="https://www.dropbox.com/scl/fi/5ypjjw103wuty4rw0hm10/chatoffline_windows.zip?rlkey=xo10afd3oyqyzu9z4uroce2dq&st=9ioh270u&dl=0" download><strong className="col">Download for Windows</strong></a></li>
          </ul>
          <br/>
        </div>
        <br/>
      <div className="container">
        <div className="row">
          <div className="column">
           <p className="float-left"> This app is made by <br/>Louai Zaiter <br/> in 2025<br/> All rights reserved.</p>
          </div>
          <div className="column">
           <p>By downloading the app you agree to our terms and conditions</p>
          </div>
          <div className="column">
            <p >Address: <br/> Penglais Road<br/> Aberystwyth<br/> United Kingdom <br/> SY23 3LH</p>
          </div>
        </div>
      </div>
      </div>

    </>
  )
}

export default App
