import React, { Fragment, useState, useEffect } from 'react'
//暗模式钩子
import useDisplay from '../hook/useDisplay'
//i18n 内置方法
import { useTranslation } from 'react-i18next'
//UI 组件
import { Listbox, Transition } from '@headlessui/react'
import {
  FaDiscord,
  FaInstagram,
  FaTwitter,
  FaTelegram,
  FaLanguage,
} from 'react-icons/fa'
import {
  CheckIcon,
  ChevronDownIcon,
  MoonIcon,
  SunIcon,
  Bars3Icon,
  XMarkIcon,
} from '@heroicons/react/20/solid'
const people = [
  { name: '🍏English', lang: 'en' },
  { name: '🍅Chinese', lang: 'fr' },
  { name: '🍊Japan', lang: 'jp' },
]
const Navbar = (props) => {
  const [selected, setSelected] = useState(people[0])
  const [nextTheme, setTheme] = useDisplay()
  const [darks, setDarks] = useState(false)
  const { t, i18n } = useTranslation()
  useEffect(() => {
    i18n.changeLanguage(selected.lang)
    return () => {
      i18n.changeLanguage()
    }
  }, [selected, i18n])
  const [menu, setMenu] = useState(false)
  return (
    <div>
      <div className="w-full flex h-20 py-2">
        <div className="w-full h-full hidden md:flex justify-center">
          {/* logo */}
          <div className=" w-[10%] mx-10">
            <ul className="py-3 px-6">
              <li className="text-2xl sm:text-3xl lg:text-4xl px-2">
                <span className="textMob">BeanZ</span>
              </li>
            </ul>
          </div>
          {/*  */}
          {/* 可以优化成组件去引入，路由组件 */}
          <div className=" w-[30rem] h-full mx-20">
            <ul className="flex justify-around items-center h-full text-xl font-bold">
              <li>{t('home')}</li>
              <li>{t('skills')}</li>
              <li>{t('tracking')}</li>
              <li>{t('blog')}</li>
              <li>{t('docs')}</li>
            </ul>
          </div>
          {/* 媒体超链接 */}
          <div className=" w-[13rem] flex items-center justify-around text-2xl">
            <FaDiscord />
            <FaInstagram />
            <FaTwitter />
            <FaTelegram />
          </div>
          {/* ----- */}
        </div>
        {/* 语言切换组件 */}
        <div className="hidden md:flex items-center justify-center font-bold mr-20">
          <FaLanguage className="text-5xl p-1 mr-1" />
          <div>
            <Listbox value={selected} onChange={setSelected}>
              <div className="relative mt-1 dark:text-black">
                <Listbox.Button
                  className="relative cursor-default rounded-md py-1 pr-10
                  shadow-md focus:outline-none focus-visible:border-indigo-500 focus-visible:ring-2 
                  focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2
                  focus-visible:ring-offset-orange-300 border-gray-700/20 border bg-gray-100
                  sm:text-sm w-32 dark:bg-slate-800 dark:text-cyan-100">
                  <span className="block truncate">{selected.name}</span>
                  <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
                    <ChevronDownIcon
                      className="h-5 w-5 text-gray-400"
                      aria-hidden="true"
                    />
                  </span>
                </Listbox.Button>
                <Transition
                  as={Fragment}
                  leave="transition ease-in duration-100"
                  leaveFrom="opacity-100"
                  leaveTo="opacity-0">
                  <Listbox.Options
                    className="absolute mt-1 max-h-60 w-full overflow-auto rounded-md
                    bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 
                    focus:outline-none sm:text-sm ">
                    {people.map((person, personIdx) => (
                      <Listbox.Option
                        key={personIdx}
                        className={({ active }) =>
                          `relative cursor-default select-none py-2 pl-10 pr-4 ${
                            active
                              ? 'bg-amber-100 text-amber-900'
                              : 'text-gray-900'
                          }`
                        }
                        value={person}>
                        {({ selected }) => (
                          <>
                            <span
                              className={`block truncate ${
                                selected ? 'font-medium' : 'font-normal'
                              }`}>
                              {person.name}
                            </span>
                            {selected ? (
                              <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-amber-600">
                                <CheckIcon
                                  className="h-5 w-5"
                                  aria-hidden="true"
                                />
                              </span>
                            ) : null}
                          </>
                        )}
                      </Listbox.Option>
                    ))}
                  </Listbox.Options>
                </Transition>
              </div>
            </Listbox>
          </div>
          <div
            className="ml-10"
            onClick={() => {
              setTheme(nextTheme)
              setDarks(!darks)
            }}>
            {darks ? (
              <SunIcon className="w-8 mr-3" />
            ) : (
              <MoonIcon className="w-7 mr-3" />
            )}
          </div>
        </div>
      </div>
      {/* --- */}
      <div className="w-full top-10 flex justify-between p-3 z-50 md:hidden text-slate-900 dark:text-rose-600/95 fixed">
        <div
          onClick={() => {
            setMenu(!menu)
          }}>
          {!menu ? (
            <Bars3Icon className="w-8" />
          ) : (
            <XMarkIcon className="w-10" />
          )}
        </div>

        <div
          className="text-slate-900 p-2 dark:text-rose-600/95"
          onClick={() => {
            setTheme(nextTheme)
            setDarks(!darks)
          }}>
          {darks ? <SunIcon className="w-8" /> : <MoonIcon className="w-8" />}
        </div>
      </div>
      <div
        className={
          menu
            ? 'w-full h-screen p-2  bg-[#e0faf5]/80 text-slate-900 absolute top-0 left-0 duration-300 z-30'
            : 'w-full h-screen p-2  bg-[#e0faf5]/80 text-slate-900 absolute top-0 left-[-100%] duration-300 z-30'
        }>
        <ul className="w-full h-full text-xl font-bold flex flex-col mt-28">
          <li className="p-3 mt-3 border-b font-black text-2xl text-red-500">
            Connect Wallet
          </li>
          <li className="p-3 mt-3 border-b">{t('home')}</li>
          <li className="p-3 border-b">{t('skills')}</li>
          <li className="p-3 border-b">{t('tracking')}</li>
          <li className="p-3 border-b">{t('blog')}</li>
          <li className="p-3 border-b">{t('docs')}</li>
          <li className="p-3 border-b">BUY </li>
          <li className="p-3 border-b flex justify-between items-center">
            Twitter <FaTwitter />
          </li>
          <li className="p-3 border-b flex justify-between items-center">
            Instagram <FaInstagram />
          </li>
          <li className="p-3 border-b flex justify-between items-center">
            Telegram <FaTelegram />
          </li>
          <li className="p-3 border-b flex justify-between items-center">
            DisCord <FaDiscord />
          </li>
        </ul>
      </div>
    </div>
  )
}
export default Navbar
