import React from 'react'
import Marquee from 'react-fast-marquee'
const imgs = [
  {
    image: require('../imges1/bsticker.png'),
  },
  {
    image: require('../imges1/ash.png'),
  },
  {
    image: require('../imges1/frida.png'),
  },
  {
    image: require('../imges1/bsticker.png'),
  },
  {
    image: require('../imges1/johnny.png'),
  },
  {
    image: require('../imges1/link.png'),
  },
  {
    image: require('../imges1/bsticker.png'),
  },
  {
    image: require('../imges1/penny.png'),
  },
  {
    image: require('../imges1/tao.png'),
  },
  {
    image: require('../imges1/bsticker.png'),
  },
  {
    image: require('../imges1/johnny.png'),
  },
  {
    image: require('../imges1/link.png'),
  },
  {
    image: require('../imges1/bsticker.png'),
  },
  {
    image: require('../imges1/ash.png'),
  },
  {
    image: require('../imges1/link.png'),
  },
]
const Banner = () => {
  // require
  return (
    <div>
      <div className=" h-10 md:h-16 border-b border-slate-500/10 m-auto">
        <Marquee speed={100} gradientWidth={0}>
          {imgs.map((item, index) => {
            return (
              <div key={index}>
                <img
                  className="w-10 md:w-16 mx-7 md:mx-10"
                  src={item.image}
                  alt="/"
                />
              </div>
            )
          })}
        </Marquee>
      </div>
    </div>
  )
}

export default Banner
