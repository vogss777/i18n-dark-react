import React from 'react'
import Marquee from 'react-fast-marquee'
import { motion } from 'framer-motion'
const imgs = [
  {
    image:
      'https://img.seadn.io/files/2e8b1e1a78f62579b7eb8641c59549da.png?auto=format&fit=max&w=384',
  },
  {
    image:
      'https://img.seadn.io/files/1e3ab0f8d6992797e7dba7bb8e9e8c91.png?auto=format&fit=max&w=3840',
  },
  {
    image:
      'https://img.seadn.io/files/c99f3f082a69fe9db9983d5859a1dcc8.png?auto=format&fit=max&w=3840',
  },
  {
    image:
      'https://img.seadn.io/files/63b52d9cb3f5ebb5b6c0b7ed80801b7c.png?auto=format&fit=max&w=3840',
  },
  {
    image:
      'https://img.seadn.io/files/a471e09aa831fa41f1b8acadbf599a3d.png?auto=format&fit=max&w=3840',
  },
  {
    image:
      'https://img.seadn.io/files/8f750b2497e069e69e47f5a40801c66c.png?auto=format&fit=max&w=3840',
  },
  {
    image:
      'https://img.seadn.io/files/dd90f541847bb2722bfb606e52054510.png?auto=format&fit=max&w=3840',
  },
  {
    image:
      'https://img.seadn.io/files/6a538689e7e393109c04f0552240411e.png?auto=format&fit=max&w=3840',
  },
  {
    image:
      'https://img.seadn.io/files/ea12a514bcddfc036d9e53650dfe5cc6.png?auto=format&fit=max&w=3840',
  },
  {
    image:
      'https://img.seadn.io/files/45cda3221b2d478255fa6d29cd699901.png?auto=format&fit=max&w=3840',
  },
  {
    image:
      'https://img.seadn.io/files/4b0e2c882eacf99cfca6d214587c8f39.png?auto=format&fit=max&w=3840',
  },
  {
    image:
      'https://img.seadn.io/files/64f9a2bdca88ac41a326579fe3028a84.png?auto=format&fit=max&w=3840',
  },
  {
    image:
      'https://img.seadn.io/files/b512877e3942288e2f91e2c18f3df5bb.png?auto=format&fit=max&w=3840',
  },
]
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
const Details = () => {
  return (
    <div className="w-full h-screen flex items-center">
      <div className="w-full h-4/5">
        <motion.div
          initial={'offscreen'}
          whileInView={'onscreen'}
          // 视口动画，触发次数 once代表是否一次，布尔值
          viewport={{ once: true, amount: 0.5 }}
          transition={{ staggerChildren: 0.2 }}
          className="w-full h-1/5  flex flex-col justify-center items-center">
          <motion.p variants={textAnimate} className="text-2xl md:text-5xl">
            The EARLIEST AZUKI WORKS
          </motion.p>
          <motion.button
            variants={textAnimate}
            className="textb w-52 py-2 my-5 md:w-96 md:py-5 font-bold">
            BUY AZUKI
          </motion.button>
        </motion.div>

        <div className="w-full h-2/3">
          <div className="w-full h-1/2">
            {/* - - */}
            <div className=" mt-16 border">
              <Marquee speed={150} gradientWidth={0}>
                {imgs.map((item, index) => {
                  return (
                    <div key={index}>
                      <img
                        className="w-32 md:w-72 rounded-sm m-0 border border-red-700/50"
                        src={item.image}
                        alt="/"
                      />
                    </div>
                  )
                })}
              </Marquee>
            </div>
          </div>

          <div>
            <div className=" mt-5 border">
              <Marquee speed={150} gradientWidth={0} direction={'right'}>
                {imgs.map((item, index) => {
                  return (
                    <div key={index}>
                      <img
                        className="w-32 md:w-72 rounded-sm m-0 border border-red-700"
                        src={item.image}
                        alt="/"
                      />
                    </div>
                  )
                })}
              </Marquee>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Details
