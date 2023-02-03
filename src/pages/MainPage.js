import { useState, useLayoutEffect } from "react";
import AppLayout from "../components/layout/AppLayout";
import Sidebar from "../components/sidebar/Sidebar";
import $ from 'jquery';

const MainPage = () => {
    
  const [color, setColor] = useState("black")
  const [text, setText] = useState("")
  const [file, setFile] = useState(null)

  useLayoutEffect(()=> {
    setTimeout(() => {
      
      $(".dragme").draggable({
        containment: ".container"
      });
    }, 1000);
  })

    return (
        <AppLayout>

    <div style={{
        padding: '50px 0px 0px 370px'
    }}>
        <Sidebar text={text} setText={setText} file={file} setFile={setFile} color={color} setColor={setColor} />
        <div className="content">
          {file?
                <img src={file} width={"100%"} height={"100%"}/>
              :
              <>
            <div className="restricted-field-1"></div>
            <div className="container" id="container">
                <div className="dragme" style={{color: color}}>
              {text}
                
                </div>

            </div>
            <div className="restricted-field-2"></div>
              </>
}


        </div>
    </div>
        </AppLayout>
    );
};

export default MainPage;