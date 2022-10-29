import React from 'react'
import { useTranslation } from 'react-i18next'
import { motion } from 'framer-motion'
import Navbar from '../components/Navbar'
import Banner from '../components/Banner'
import bg1 from '../bgimage/1.png'
import tuc1 from '../bgimage/tuc1.png'
import logo1 from '../imges1/bsticker.png'
import bg_1 from '../bgimage/1.2.png'
const Hero = () => {
  const { t } = useTranslation()
  const imageAnimate = {
    offscreen: { x: -100, opacity: 0 },
    onscreen: {
      //最终到达位置
      x: 0,
      //显示的透明度
      opacity: 1,
      //旋转
      rotate: [0, 10, 5],
      transition: {
        type: 'spring',
        //震颤
        bounce: 0.35,
        //过渡的时间
        duration: 1.5,
      },
    },
  }
  const textAnimate = {
    offscreen: { y: 100, opacity: 0 },
    onscreen: {
      y: 0,
      opacity: 1,
      transition: {
        type: 'spring',
        bounce: 0.4,
        duration: 1,
      },
    },
  }
  return (
    <div className="h-screen">
      <Banner />
      <Navbar />
      <div className="w-full py-3 md:pt-36">
        <div className="w-full">
          <motion.div
            initial={'offscreen'}
            whileInView={'onscreen'}
            // 视口动画，触发次数 once代表是否一次，布尔值
            viewport={{ once: true, amount: 0.5 }}
            transition={{ staggerChildren: 0.2 }}>
            <div className=" font-bold text-center md:mr-96 md:pr-96">
              <motion.div variants={imageAnimate}>
                <img src={logo1} alt="/" className="w-52 md:w-80 m-auto" />
              </motion.div>
              <div className="text-3xl md:text-7xl">
                <motion.p variants={textAnimate}>{t('heropone')}</motion.p>
                <motion.p variants={textAnimate}>{t('heroptwo')}</motion.p>
              </div>
              <motion.p variants={textAnimate} className="md:text-3xl md:mt-7">
                {t('asmall')}
                <br />
                {t('fromg')}
                <br />
                {t('wted')}
                <br />
                {t('byhelp')}
                <button className="hidden md:block w-80 py-3 rounded-lg mt-16 textb m-auto">
                  {t('learnmore')}
                </button>
              </motion.p>
            </div>
          </motion.div>
        </div>
        <div className="h-[25rem] md:h-[50rem] overflow-hidden absolute bottom-0 md:right-20 z-20">
          <img src={bg1} alt="/" className="w-96 m-auto md:w-[50rem]" />
        </div>
        <div className="hidden md:block absolute right-[47rem] z-10 overflow-hidden h-80 bottom-0">
          <img src={tuc1} alt="/" />
        </div>
        <div>
          <img
            src={bg_1}
            alt="/"
            className="w-[55rem] py-1 absolute bottom-[-3rem] md:bottom-[-5rem] md:right-20  z-30"
          />
        </div>
      </div>
    </div>
  )
}
export default Hero
