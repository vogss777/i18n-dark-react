import React from 'react'
import {
  FaFacebook,
  FaGithub,
  FaInstagram,
  FaTwitter,
  FaTwitch,
  FaTelegram,
} from 'react-icons/fa'
const Footer = () => {
  return (
    <div className="bg-[#781717]/10">
      <div className="w-[80%] m-auto">
        <div
          className="w-full max-w-[1240px] mx-auto grid grid-cols-2 
        md:grid-cols-6 border-b-2 border-gray-100/50 py-8 text-yellow-100">
          <div className="text-center rounded-xl bg-rose-600/80 m-2">
            <h6 className="font-bold uppercase pt-2">🏆Solutions</h6>
            <ul>
              <li className="py-1">Marketing</li>
              <li className="py-1">Analytics</li>
              <li className="py-1">Commerce</li>
              <li className="py-1">Data</li>
              <li className="py-1">Cloud</li>
            </ul>
          </div>
          <div className="text-center rounded-xl bg-rose-600/80 m-2">
            <h6 className="font-bold uppercase pt-2">🎖Solutions</h6>
            <ul>
              <li className="py-1">Marketing</li>
              <li className="py-1">Analytics</li>
              <li className="py-1">Commerce</li>
            </ul>
          </div>
          <div className="text-center rounded-xl bg-rose-600/80 m-2">
            <h6 className="font-bold uppercase pt-2">🔔Solutions</h6>
            <ul>
              <li className="py-1">Marketing</li>
              <li className="py-1">Analytics</li>
              <li className="py-1">Commerce</li>
            </ul>
          </div>
          <div className="text-center rounded-xl bg-rose-600/80 m-2">
            <h6 className="font-bold uppercase pt-2">🔴Solutions</h6>
            <ul>
              <li className="py-1">Marketing</li>
              <li className="py-1">Analytics</li>
              <li className="py-1">Commerce</li>
              <li className="py-1">Data</li>
              <li className="py-1">Cloud</li>
            </ul>
          </div>
          <div className="col-span-2 pt-8 md:pt-1 md:ml-20">
            <p className="font-bold uppercase pt-1 text-slate-900 dark:text-yellow-100">
              📩Sibscibe to our newsletter
            </p>
            <p className="py-4 font-bold text-slate-900 dark:text-yellow-100">
              The latest news,articles,and resources,sent to your inbox weekly
            </p>
            <form className="flex flex-col sm:flex-row">
              <input
                className="w-full p-2 rounded-md mb-4"
                type="Email"
                placeholder="Enter Email..."
              />
              <button className="p-2 mb-4  textb font-bold text-yellow-50">
                Subscribe
              </button>
            </form>
          </div>
        </div>
        <div
          className="flex flex-col max-w-[1240px] px-2 py-4 m-auto 
                  justify-between sm:flex-row text-center text-slate-900 dark:text-yellow-100">
          <p className="py-4">2022 Workflow, LLC.❤️ All rights Reserved</p>
          <div className="flex justify-between sm:w-[300px] pt-4 text-2xl">
            <FaFacebook />
            <FaGithub />
            <FaInstagram />
            <FaTwitter />
            <FaTwitch />
            <FaTelegram />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer
