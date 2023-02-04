import axios from "axios";
import { useEffect, useState } from "react";
import AppLayout from "../components/layout/AppLayout";
import Sidebar from "../components/sidebar/Sidebar";
import { apiImagesList } from '../Config'


const AllImages = () => {
  const [text, setText] = useState("")
  const [file, setFile] = useState(null)
  const [loading, setLoading] = useState(true)
  const [images, setImages] = useState([])

  // function all images from the API
  const getAllImages = () => {
    try {
      setLoading(true);
      axios.get(apiImagesList).then((results) => {
        console.log(results);
        setImages(results.data?.images)
      })
    } catch (err) {
      console.log('error', err)
      alert(err.message)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
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
            {loading ? 'Loading' :
              images?.length ? images.map((image) => {
                return (
                  <img src={image} width="200px" height="200px" alt="file" />
                )
              }) : 'No images found'}
          </div>
        </div>
      </div>
    </AppLayout>
  );
};

export default AllImages;