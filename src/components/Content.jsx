import React from 'react'
import { motion } from 'framer-motion'
import bg2 from '../bgimage/3.png'
import bg2_2 from '../bgimage/2.2.png'
import bg2_3 from '../bgimage/2.3.png'
import bg2_5 from '../imges1/bsticker.png'
const Content = () => {
  const imageAnimate = {
    offscreen: { x: -100, opacity: 0 },
    onscreen: {
      //启动位置
      x: 0,
      //显示的透明度
      opacity: 1,
      //旋转
      rotate: [0, 10, 0],
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
    //动画距离
    offscreen: { y: 100, opacity: 0 },
    onscreen: {
      //启动位置
      y: 0,
      //到达位置
      opacity: 1,
      transition: {
        type: 'spring',
        bounce: 0.35,
        //过渡时间
        duration: 1,
      },
    },
  }

  return (
    <div className="w-full h-screen flex justify-between">
      <div className="w-1/3 overflow-hidden relative hidden md:block">
        <img src={bg2} alt="/" className="w-full mt-96 opacity-20" />
      </div>
      <motion.div
        initial={'offscreen'}
        whileInView={'onscreen'}
        // 视口动画，触发次数 once代表是否一次，布尔值
        viewport={{ once: true, amount: 0.5 }}
        transition={{ staggerChildren: 0.2 }}
        className="
        opacity-95 bg-rose-600/95 m-auto rounded-md py-7
        text-yellow-50 border border-slate-500/50 shadow-xl
        md:flex md:py-28 md:h-[45rem] md:w-3/5
        ">
        <img
          src={bg2_5}
          alt="/"
          className="w-28 absolute -left-2 top-[105%] md:w-52 md:left-52 md:py-10"
        />
        <motion.div variants={imageAnimate}>
          <img src={bg2_2} alt="/" className="w-72 md:w-[52rem]" />
        </motion.div>
        <div className="w-full">
          <p className="text-5xl mt-5 text-center font-bold md:my-5">Toshi</p>
          <div className="w-full h-80 flex flex-col items-center">
            <div className="w-72 bg-slate-100/20 rounded-lg md:w-10/12">
              <img
                src={bg2_3}
                alt="/"
                className="w-20 absolute left-[-1rem] md:left-[61%]"
              />

              <motion.span
                variants={textAnimate}
                className="block px-5 py-7 text-sm md:text-xl">
                Red BEANZ bring positive vibes to the garden. Most of them are
                helpful sidekicks, and even the most maverick ones are dedicated
                to fighting for the garden.
              </motion.span>
            </div>
            <div className="w-80 h-1/2 p-3 md:w-4/5 md:my-5">
              <motion.span variants={textAnimate}>
                Toshi is a natural-born leader who loves to laugh. Easygoing and
                confident, he's a friend that you can always rely on, through
                good times and bad.
              </motion.span>
            </div>

            <motion.div
              variants={textAnimate}
              className="hidden md:grid grid-cols-3 gap-7 iconbox text-xs">
              <div className="w-40 h-10 bg-slate-300/20 flex items-center">
                <img
                  src="https://www.azuki.com/filtericons/White/1/Type.png"
                  alt=""
                />
                RED BEAN
              </div>
              <div className="w-40 h-10 bg-slate-300/20 flex items-center">
                <img
                  src="https://www.azuki.com/filtericons/White/1/Eyes.png"
                  alt=""
                />
                DOTS
              </div>
              <div
                variants={textAnimate}
                className="w-40 h-10 bg-slate-300/20 flex items-center">
                <img
                  src="https://www.azuki.com/filtericons/White/1/Mouth.png"
                  alt=""
                />
                SMILE
              </div>
              <div className="w-40 h-10 bg-slate-300/20 flex items-center">
                <img
                  src="https://www.azuki.com/filtericons/White/1/Clothing.png"
                  alt=""
                />
                IKZ HOODIE UP
              </div>
              <div
                variants={textAnimate}
                className="w-40 h-10 bg-slate-300/20 flex items-center">
                <img
                  src="https://www.azuki.com/filtericons/White/1/Headgear.png"
                  alt=""
                />
                LEDGER
              </div>
              <div className="w-40 h-10 bg-slate-300/20 flex items-center">
                <img
                  src="https://www.azuki.com/filtericons/White/1/Shoe.png"
                  alt=""
                />
                BLACK HIGH TOPS
              </div>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </div>
  )
}

export default Content
