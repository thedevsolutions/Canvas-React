import './App.css';
import Draggable from 'react-draggable'
import $ from 'jquery'
import axios from 'axios'
import 'jquery-ui-dist/jquery-ui';
import { useLayoutEffect, useState } from 'react';
import html2canvas from 'html2canvas';
import Layout from './Layout';

function Code({text, setText, file, setFile}) {


  useLayoutEffect(()=> {
    setTimeout(() => {
      
      $(".dragme").draggable({
        containment: ".container"
      });
    }, 1000);
  })

    const  makeImage = async()=> {
        if(file){
            var codeToFile = dataURLtoFile(file);
            uploadFile(codeToFile)
        }else{
            html2canvas($("#container")[0]).then((canvas) => {
                var image = new Image();
                var data = canvas.toDataURL('image/png');
                image.src = data;
                $(".preview").append(image);
                //Usage example:
                var file = dataURLtoFile(data);
                uploadFile(file)
            });
        }
       
            // html2canvas($("#main")[0], {
            //     onrendered: function (canvas) {
            //         console.log({ canvas });
            //         // document.getElementsByClassName('preview').appendChild(canvas);
            //         // var data = canvas.toDataURL('image/png');
            //         // //display 64bit imag
            //         // var image = new Image();
            //         // image.src = data;
            //         // document.getElementById('image').appendChild(image);
            //     }
            // })
    }

    const uploadFile = (file)=> {
        const formData = new FormData();
        formData.append('file', file);
        axios.post('https://8c1d-103-255-5-24.ngrok.io/uploads', formData)
        .then(( content)=> {
            console.log({ content });
        });
    }
    const dataURLtoFile = (dataurl) => {

        var arr = dataurl.split(','),
            mime = arr[0].match(/:(.*?);/)[1],
            bstr = atob(arr[1]),
            n = bstr.length,
            u8arr = new Uint8Array(n);

        while (n--) {
            u8arr[n] = bstr.charCodeAt(n);
        }

        return new File([u8arr], Math.random(5*100)+"."+mime.split("/")[1], { type: mime });
    }

    const handleImage =  async(e) => {
      console.log({file: e.target.files[0]});
      console.log(await getBase64(e.target.files[0] || e.target.files));
      setFile(await getBase64(e.target.files[0] || e.target.files))
    } 

    const getBase64 = (file) => {
      return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = () => resolve(reader.result);
        reader.onerror = error => reject(error);
      });
    }

  return (
    <div className="App">
      <div className="main" id="main">
        <div className="side">
          <input type={"text"} placeholder="add text to show in image" onChange={(e)=> setText(e.target.value)} />
          <br/>
          <br/>
          <br/>
          <br/>
          <input type={"file"} onChange={handleImage} />
<br/>
          <br/>
          <br/>
          <br/>
            <button onClick={makeImage} className="button">Upload Image</button>

        </div>
        <div className="content">
          {file?
                <img src={file} width={"100%"} height={"100%"}/>
              :
              <>
            <div className="restricted-field-1"></div>
            <div className="container" id="container">
                <div className="dragme">
              {text}
                 {/* <Draggable
                  axis="x"
                  handle=".handle"
                  defaultPosition={{x: 0, y: 0}}
                  position={null}
                  grid={[25, 25]}
                  scale={1}
                  onStart={handleStart}
                  onDrag={handleDrag}
                  onStop={handleStop}
                  defaultClassName="dragme"
                  >
                  <div>
                    <div className="handle">Drag from here</div>
                    <div>This readme is really dragging on...</div>
                  </div>
                </Draggable> */}
                </div>

            </div>
            <div className="restricted-field-2"></div>

            <div className="preview">

            </div>
              </>
}


        </div>
    </div>
    </div>
  );
}

export default Code;
