import { useEffect, useRef, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import $ from 'jquery'
import axios from 'axios'
import 'jquery-ui-dist/jquery-ui';
import html2canvas from 'html2canvas';
import { apiUploadImage } from '../../Config';
import './sidebar.css';

const sidebarNavItems = [
  {
    display: 'Uploads',
    icon: <i className='bx bx-home'></i>,
    to: '/',
    section: ''
  },
  {
    display: 'All Images',
    icon: <i className='bx bx-star'></i>,
    to: '/images',
    section: 'images'
  },
]

const Sidebar = ({ text, setText, file, setFile, color, setColor }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [stepHeight, setStepHeight] = useState(0);
  const [loading, setLoading] = useState(false)
  const sidebarRef = useRef();
  const indicatorRef = useRef();
  const location = useLocation();

  useEffect(() => {
    setTimeout(() => {
      const sidebarItem = sidebarRef.current.querySelector('.sidebar-menu-item');
      indicatorRef.current.style.height = `${sidebarItem.clientHeight}px`;
      setStepHeight(sidebarItem.clientHeight);
    }, 50);
  }, []);

  useEffect(() => {
    if (text !== "") {
      setFile(null)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [text]);

  // change active index
  useEffect(() => {
    const curPath = window.location.pathname.split('/')[1];
    const activeItem = sidebarNavItems.findIndex(item => item.section === curPath);
    setActiveIndex(curPath.length === 0 ? 0 : activeItem);
  }, [location]);

  const makeImage = async () => {
    if (file) {
      let codeToFile = dataURLtoFile(file);
      uploadFile(codeToFile)
    } else {
      html2canvas($("#container")[0]).then((canvas) => {
        let image = new Image();
        let data = canvas.toDataURL('image/png');
        image.src = data;
        $(".preview").append(image);
        //Usage example:
        let file = dataURLtoFile(data);
        uploadFile(file)
      });
    }
  }

  const uploadFile = (file) => {
    setLoading(true);
    const formData = new FormData();
    formData.append('file', file);
    axios.post(apiUploadImage, formData)
      .then((content) => {
        console.log({ content });
        alert(content?.data?.message || "Image Added Successfully!")
      }).catch((err) => {
        alert(err.response?.data?.message || "Something went wrong!")
      }).finally(() => {
        setLoading(false);
      })
  }
  const dataURLtoFile = (dataUrl) => {
    try {
      let arr = dataUrl.split(','),
        mime = arr[0].match(/:(.*?);/)[1],
        bstr = atob(arr[1]),
        n = bstr.length,
        u8arr = new Uint8Array(n);

      while (n--) {
        u8arr[n] = bstr.charCodeAt(n);
      }

      return new File([u8arr], Math.random(5 * 100) + "." + mime.split("/")[1], { type: mime });
    } catch (error) {
      console.log('error', error)
      alert(error)
    }
  }

  const handleImage = async (e) => {
    console.log({ file: e.target.files[0] });
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

  return <div className='sidebar'>
    <div className="sidebar-logo">
      Animate
    </div>
    <div ref={sidebarRef} className="sidebar-menu">
      <div
        ref={indicatorRef}
        className="sidebar-menu-indicator"
        style={{
          transform: `translateX(-50%) translateY(${activeIndex * stepHeight}px)`
        }}
      ></div>
      {sidebarNavItems.map((item, index) => (
        <Link to={item.to} key={index}>
          <div className={`sidebar-menu-item ${activeIndex === index ? 'active' : ''}`}>
            <div className="sidebar-menu-item-icon">
              {item.icon}
            </div>
            <div className="sidebar-menu-item-text">
              {item.display}
            </div>
          </div>
        </Link>
      ))}
      {location.pathname.split('/')[1] === "" && (
        <div className="actions">
          <input type="text" placeholder="add text to show in image" onChange={(e) => setText(e.target.value)} />
          <div id="color-input-container">
            <span>Select Color:</span>
            <span><input type="color" value={color} id="color-input" onChange={(e) => setColor(e.target.value)} disabled={loading} /></span>
          </div>
          <input type="file" id="file-input" onChange={handleImage} disabled={loading} />
          <button onClick={makeImage} className="button" disabled={loading}>{loading ? 'Loading' : 'UPLOAD'}</button>
        </div>
      )}
    </div>
  </div>;
};

export default Sidebar;