import * as React from 'react';
import TextareaAutosize from 'react-textarea-autosize';
import { Card, Header, Form, Input, Icon } from "semantic-ui-react";
//import textshown from './textToBeShown.txt'
import Uploads from '../components/Uploads'


function getFileData(fileUploaded) {
  return fileUploaded.data;
}
export default class CopyPasteBox extends React.Component {

  state = {
    text: 'output goes here'
  }

  onClickButton1 = () => {
    this.setState({
      text: "Output MusicXML"
    });
  }
  
  render(){
    const style = {
  
      width: '100%',
      height: '400px',
      width: '900px'
    };

    const buttonstyle = {
      width: "100px",
      height: "100px"
    };

    return (
      <>
      <div>

      {/*<form onSubmit={this.handleSubmit}>
        <label>
          Essay:
          <textarea value={this.state.value} onChange={this.handleChange} />
        </label>
        <input type="submit" value="Submit" />
    </form> */}
      {/*
          <Form //onSubmit={this.onSubmit}
          >
            
            <Input
              type="text"
              name="task"
              width="50"
              height="50"
              //onChange={this.onChange}
              //value={this.state.task}
              fluid
              placeholder="Create Task"
            />
            { <Button >Create Task</Button> 
            </Form>*/}
          
          
    
              
      </div>
      

      <div>

        <textarea className="rounded-md w-4/5 content-center" style={style} placeholder="this text will show in the textarea">
          {/*text box */}
        </textarea>

          
            <div className="grid justify-center flex-col">
                <button onClick={this.onClickButton1} className="border border-gray-900 bg-gray-700 text-white rounded-md px-4 py-2 m-2 hover:bg-gray-800 transition duration-500 ease">
                  Start Conversion
                </button>
              
                <a href="" className="border border-gray-900 bg-gray-700 text-white rounded-md px-4 py-2 m-2 hover:bg-gray-800 transition duration-500 ease" >
                 Download
                </a>
              </div>

            </div>
           


      </>
    );
  }
    
  
}