'use client'

import { hamburgetAtom, menuHoverAtom, menuHoverItemAtom } from '@/lib/store'
import { menuItems, quickLinks } from '@/lib/utils'
import { motion, useAnimate } from 'framer-motion'
import { useAtom } from 'jotai'
import { useEffect, useRef, useState } from 'react'
import { BsBag } from 'react-icons/bs'
import { GoChevronRight } from 'react-icons/go'
import { IoIosSearch } from 'react-icons/io'
import { HiArrowLongRight } from 'react-icons/hi2'
import Container from './container'
import { HamburgerButton } from './hamburger'

export default function NavMenu() {
  const [isMenuOpen, setIsMenuOpen] = useAtom(hamburgetAtom)
  const [isMenuHover, setIsMenuHover] = useAtom(menuHoverAtom)
  const [hoverItem, setHoverItem] = useAtom(menuHoverItemAtom)
  const [search, setSearch] = useState<boolean>(false)

  const inputRef = useRef<HTMLInputElement>(null)
  const blurRef = useRef<HTMLDivElement>(null)

  const hamburgerMenuVariant = {
    open: (height: string) => ({
      opacity: 1,
      height: height,
      transition: {
        duration: 0.2,
        staggerChildren: 0.02,
        when: 'beforeChildren',
        ease: 'easeInOut',
      },
    }),

    close: {
      height: 0,
      opacity: 0,
      transition: {
        duration: 0.2,
        staggerChildren: 0.02,
        staggerDirection: -1,
        when: 'afterChildren',
        ease: 'easeInOut',
      },
    },
  }

  const showHamburgerMenuVariant = {
    open: (opacity: number) => ({
      opacity: opacity || 1,
      y: 10,
      transition: {
        y: { stiffness: 1000, velocity: -100 },
      },
    }),
    close: {
      opacity: 0,
      y: 0,
      transition: {
        y: { stiffness: 1000, velocity: -100 },
      },
    },
  }

  const showDropdownMenuVariant = {
    open: (opacity: number) => ({
      opacity: opacity || 1,
      transition: {
        duration: 0.2,
        ease: 'easeInOut',
      },
    }),
    close: {
      opacity: 0,
      transition: {
        duration: 0.2,
        ease: 'easeInOut',
      },
    },
  }

  const openBlur = () => {
    const element = blurRef.current
    element?.classList.remove('opacity-0')
    element?.classList.remove('hidden')
  }

  const closeBlur = () => {
    const element = blurRef.current
    element?.classList.add('opacity-0')
    element?.classList.add('hidden')
  }

  useEffect(() => {
    if (isMenuHover) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'auto'
    }

    const element = blurRef.current
    if (isMenuHover) {
      element?.classList.remove('opacity-0')
      element?.classList.remove('hidden')
    } else {
      setTimeout(() => {
        element?.classList.add('opacity-0')
        element?.classList.add('hidden')
      }, 500)
    }
  }, [isMenuHover])

  return (
    <div>
      <div
        className={`fixed z-50 w-full ${isMenuOpen ? '' : 'backdrop-blur-md'}`}
      >
        <Container>
          <nav>
            <ul className="mx-auto flex max-w-none items-center justify-between gap-6 py-3 lg:max-w-4xl lg:justify-start lg:gap-10 xl:gap-10">
              <li
                onMouseOver={() => {
                  setIsMenuHover(false)
                }}
                className={`cursor-pointer text-xs ${
                  isMenuOpen ? 'opacity-0' : 'delay-300'
                }`}
              >
                Logo
              </li>
              {menuItems.map((item, index) => (
                <li
                  key={index}
                  onMouseOver={() => {
                    setIsMenuHover(true)
                    setHoverItem(item)
                    if (search) {
                      setSearch(false)
                      closeBlur()
                    }
                  }}
                  className="hidden cursor-pointer text-xs tracking-wider lg:block"
                >
                  {item.name}
                </li>
              ))}
              <div className="flex items-center justify-center gap-6 lg:gap-10 xl:gap-10">
                <li
                  onMouseOver={() => {
                    setIsMenuHover(false)
                  }}
                  className={`cursor-pointer opacity-80 ${
                    isMenuOpen ? 'opacity-0' : 'delay-300'
                  }`}
                  onClick={() => {
                    setHoverItem(null)
                    if (search) {
                      setSearch(false)
                      closeBlur()
                    } else {
                      setSearch(true)
                      openBlur()
                    }
                  }}
                >
                  <IoIosSearch className="mt-1 h-5 w-5" />
                </li>
                <li
                  onMouseOver={() => {
                    setIsMenuHover(false)
                  }}
                  className={`cursor-pointer opacity-80 ${
                    isMenuOpen ? 'opacity-0' : 'delay-300'
                  }`}
                >
                  <BsBag className="mt-1" />
                </li>
                <li className="mt-2 flex items-center justify-center lg:hidden">
                  <HamburgerButton
                    className="cursor-pointer"
                    isOpen={isMenuOpen}
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                    transition={{ ease: 'easeOut', duration: 0.2 }}
                    height={8}
                    width={18}
                  />
                </li>
              </div>
            </ul>
          </nav>
        </Container>
      </div>

      <motion.div
        initial="close"
        variants={hamburgerMenuVariant}
        animate={isMenuOpen ? 'open' : 'close'}
        className={`fixed flex h-0 w-full flex-col gap-4 bg-background pl-16 pr-4 pt-16 lg:hidden`}
        custom={'100vh'}
      >
        {menuItems.map((item, index) => (
          <motion.li
            variants={showHamburgerMenuVariant}
            custom={0.7}
            key={index}
            className="group flex cursor-pointer list-none justify-between text-3xl tracking-wider"
          >
            <span>{item.name}</span>
            <GoChevronRight className="opacity-0 transition-all duration-300 ease-in-out group-hover:opacity-80" />
          </motion.li>
        ))}
      </motion.div>

      <motion.div
        initial="close"
        variants={hamburgerMenuVariant}
        animate={isMenuHover || search ? 'open' : 'close'}
        custom={'auto'}
        className={`fixed z-40 hidden w-full flex-col gap-4 bg-background pt-16 shadow lg:flex`}
      >
        <div className="container mx-auto flex h-full max-w-none justify-start gap-20 px-4 pb-16 lg:max-w-4xl lg:px-0">
          {hoverItem &&
            hoverItem.children?.map((menu, index) => (
              <ul key={index} className="flex list-none flex-col">
                <motion.span
                  variants={showDropdownMenuVariant}
                  custom={0.5}
                  className="m-0 p-0 pb-2 text-xs tracking-wider opacity-50"
                >
                  {menu.name}
                </motion.span>
                {menu.items.map((item, index) => (
                  <motion.li
                    key={index}
                    variants={showDropdownMenuVariant}
                    className={`cursor-pointer pb-3 ${
                      item.important
                        ? 'text-2xl font-bold tracking-wider'
                        : 'text-xs font-bold tracking-wider'
                    }`}
                  >
                    {item.name}
                  </motion.li>
                ))}
              </ul>
            ))}
          {search && (
            <div className="flex w-full flex-col gap-4">
              <motion.div
                variants={showDropdownMenuVariant}
                className="mb-4 flex w-full items-center justify-center gap-2"
              >
                <IoIosSearch className="h-7 w-7 opacity-30" />
                <input
                  type="text"
                  placeholder="Search gadgetbyte.com"
                  className="w-full border-none bg-transparent text-2xl tracking-wider outline-none"
                  autoFocus
                  ref={inputRef}
                ></input>
              </motion.div>
              <ul className="flex flex-col gap-3">
                <motion.li
                  variants={showDropdownMenuVariant}
                  className="text-sm font-light tracking-wider opacity-60"
                >
                  Quick Links
                </motion.li>
                {quickLinks.map((link, index) => (
                  <motion.li
                    variants={showDropdownMenuVariant}
                    key={index}
                    className="flex cursor-pointer items-center gap-2"
                  >
                    <HiArrowLongRight className="opacity-60" />
                    <p className="text-sm font-light tracking-wider">
                      {link.name}
                    </p>
                  </motion.li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </motion.div>
      <div
        onMouseOver={() => {
          setIsMenuHover(false)
          if (search) {
            setSearch(false)
            closeBlur()
          }
        }}
        ref={blurRef}
        className={`fixed hidden h-full w-full backdrop-blur-xl transition-all duration-500 ease-in-out`}
      ></div>
    </div>
  )
}
