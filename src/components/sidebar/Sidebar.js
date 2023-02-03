import { useEffect, useRef, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './sidebar.scss';
import $ from 'jquery'
import axios from 'axios'
import 'jquery-ui-dist/jquery-ui';
import html2canvas from 'html2canvas';

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

const Sidebar = ({text, setText, file, setFile, color, setColor}) => {
    const [activeIndex, setActiveIndex] = useState(0);
    const [stepHeight, setStepHeight] = useState(0);
    const sidebarRef = useRef();
    const indicatorRef = useRef();
    const location = useLocation();

    useEffect(() => {
        setTimeout(() => {
            const sidebarItem = sidebarRef.current.querySelector('.sidebar__menu__item');
            indicatorRef.current.style.height = `${sidebarItem.clientHeight}px`;
            setStepHeight(sidebarItem.clientHeight);
        }, 50);
    }, []);

    useEffect(() => {
        if(text != "") {
            setFile(null)
        }
    }, [text]);

    // change active index
    useEffect(() => {
        const curPath = window.location.pathname.split('/')[1];
        const activeItem = sidebarNavItems.findIndex(item => item.section === curPath);
        setActiveIndex(curPath.length === 0 ? 0 : activeItem);
    }, [location]);

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
            alert("Image Added Succesfully!")
        }).catch((err) => {
            alert(err.response?.data?.message || "Something went wrong!")
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

    return <div className='sidebar'>
        <div className="sidebar__logo">
            Animate
        </div>
        <div ref={sidebarRef} className="sidebar__menu">
            <div
                ref={indicatorRef}
                className="sidebar__menu__indicator"
                style={{
                    transform: `translateX(-50%) translateY(${activeIndex * stepHeight}px)`
                }}
            ></div>
            {
                sidebarNavItems.map((item, index) => (
                    <Link to={item.to} key={index}>
                        <div className={`sidebar__menu__item ${activeIndex === index ? 'active' : ''}`}>
                            <div className="sidebar__menu__item__icon">
                                {item.icon}
                            </div>
                            <div className="sidebar__menu__item__text">
                                {item.display}
                            </div>
                        </div>
                    </Link>
                ))
            }
            {location.pathname.split('/')[1] === "" &&
                <div className="actions">
                <input type={"text"} placeholder="add text to show in image" onChange={(e)=> setText(e.target.value)} />
                <div style={{display: "flex", justifyContent: "space-between", marginTop: "10px"}}>
                    <span>Select Color:</span>
                    <span><input type="color" value={color} style={{padding: "10px", width: "40px"}}  onChange={(e)=> setColor(e.target.value)} /></span>
                </div>
                <br/>
                <br/>
                <br/>
                <br/>
                <input type={"file"} onChange={handleImage} />
                <br/>
                <br/>
                <br/>
                <br/>
                <button onClick={makeImage} className="button">UPLOAD</button>
                </div>
            }
        </div>
    </div>;
};

export default Sidebar;