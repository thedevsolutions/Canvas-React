import axios from "axios";
import { useEffect, useState } from "react";
import AppLayout from "../components/layout/AppLayout";
import Sidebar from "../components/sidebar/Sidebar";

const AllImages = () => {

    const [text, setText] = useState("")
    const [file, setFile] = useState(null)
    const [images, setImages] = useState([])

    const getAllImages = () => {
        axios.get("https://8c1d-103-255-5-24.ngrok.io/images").then((results)=> {
            console.log(results);
            setImages(results.data?.images)
        })
    }

    useEffect(()=> {
        getAllImages()
    }, [])
    
    return (
        <AppLayout>

    <div style={{
        padding: '50px 0px 0px 370px'
    }}>
        <div className="main-container">
        <Sidebar text={text} setText={setText} file={file} setFile={setFile} />
            <div className="image-container">
                {images.map((image)=> {
                    return (
                        <img src={image} width="200px" height="200px" />
                    )
                })}
            </div>
        </div>
    </div>
        </AppLayout>
    );
};

export default AllImages;