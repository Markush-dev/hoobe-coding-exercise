import { useEffect, useState } from 'react';
import logo from './assets/hoobe-icon.png';
import mountain from './assets/content-id-f9wzS1vHcf-image.jpg';
import logoBtn from './assets/logo-none-border.svg';
import PreLoader from './components/PreLoader';
import { getSocialsImage } from './utils';
import ReactPlayer from 'react-player';
import { motion } from 'framer-motion';
import './App.scss';

function App() {
  const [data, setData] = useState({})

  const fetchData = async () => {
    await fetch('./data.json', {
      headers : { 
        'Content-Type': 'application/json',
        'Accept': 'application/json'
       }
    })
    .then(response => response.json())
    .then(dataJson => setData(dataJson))
    .catch(err => console.log(err?.message));
  }

  useEffect(() => {
    setTimeout(() => {
      fetchData()
    }, [1000])
  })

  return (
    <div className="card-container">
      <section className='main'>
        <div className='logo-wrap'>
          <img src={logo} className="btn-logo" alt="hoo.be" />
        </div>
        <motion.h4 
          className='h4'
          initial={{opacity: 0, scale: 0.8}}
          animate={{opacity:1, scale: 1}}
          transition={{ ease: "linear", duration: 0.3 }}
        >hoo.be coding exercise</motion.h4>
        <div className='socials-media'>
          {data.userSocialPlatform?.map((item) => {
            return (
              <motion.a 
                className='social-wrapper' 
                href={item.link} 
                key={item.id}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <img src={getSocialsImage(item.socialPlatform)} className="btn-logo" alt="hoo.be" />
              </motion.a>
            )
          })      
          }
        </div>
      </section>

      <section className='assets-section'>
          {data?.content?.length ? <ul className='assets-list'>
            {data.content.map((item) => {
              return (
                <li className='assets-item' key={item.content.id}>
                  {item.content.hasPhoto ? 
                  <a className='image-wrapper' href="https://hoo.be/trending?utm_source=hoobe&utm_medium=social">
                    <img src={mountain} alt={item.content.title || "hoo.be"} className='content-image'/>
                    <div className='content-container'>
                      <p className='description'>
                        explore hoo.be
                      </p>
                      <img src={logoBtn} alt={item.content.title || "hoo.be"} className='content-logo'/>
                    </div>
                  </a>
                  : <div className='video-wrapper'> 
                      <ReactPlayer url='https://www.youtube.com/embed/videoseries?list=UUvd_AUR6ErsRblEWHrCxlDQ&enablejsapi=1&autoplay=0&playsinline=1' />
                    </div>}
                </li>
              )
            })}
          </ul>
          : <PreLoader />}
      </section>
    </div>
  );
}

export default App;
