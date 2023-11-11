'use client'

import { hamburgetAtom, menuHoverAtom, menuHoverItemAtom } from '@/lib/store'
import { menuItems } from '@/lib/utils'
import { motion } from 'framer-motion'
import { useAtom } from 'jotai'
import { BsBag } from 'react-icons/bs'
import { GoChevronRight } from 'react-icons/go'
import { IoIosSearch } from 'react-icons/io'
import Container from './container'
import { HamburgerButton } from './hamburger'
import { useEffect, useRef } from 'react'
import React from 'react'

export default function NavMenu() {
  const [isMenuOpen, setIsMenuOpen] = useAtom(hamburgetAtom)
  const [isMenuHover, setIsMenuHover] = useAtom(menuHoverAtom)
  const [hoverItem, setHoverItem] = useAtom(menuHoverItemAtom)

  const hamburgerMenuVariant = {
    open: (height: string) => ({
      opacity: 1,
      height: height,
      transition: {
        duration: 0.2,
        staggerChildren: 0.02,
        when: 'beforeChildren',
      },
    }),
    close: {
      opacity: 0,
      height: 0,
      transition: {
        duration: 0.2,
        staggerChildren: 0.02,
        staggerDirection: -1,
        when: 'beforeChildren',
      },
    },
  }

  const showHamburgerMenuVariant = {
    open: {
      opacity: 1,
      y: 10,
      transition: {
        y: { stiffness: 1000, velocity: -100 },
      },
    },
    close: {
      opacity: 0,
      y: 0,
      transition: {
        y: { stiffness: 1000, velocity: -100 },
      },
    },
  }

  useEffect(() => {
    if (isMenuHover) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'auto'
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
                  }}
                  className="hidden cursor-pointer text-xs tracking-wider opacity-80 lg:block"
                >
                  {item.name}
                </li>
              ))}
              <div className="flex items-center justify-center gap-6 lg:gap-10 xl:gap-10">
                <li
                  className={`cursor-pointer opacity-80 ${
                    isMenuOpen ? 'opacity-0' : 'delay-300'
                  }`}
                >
                  <IoIosSearch className="mt-1 h-5 w-5" />
                </li>
                <li
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
            key={index}
            className="group flex cursor-pointer list-none justify-between text-3xl tracking-wider"
          >
            <span> {item.name}</span>
            <GoChevronRight className="opacity-0 transition-all duration-300 ease-in-out group-hover:opacity-80" />
          </motion.li>
        ))}
      </motion.div>

      <motion.div
        initial="close"
        variants={hamburgerMenuVariant}
        animate={isMenuHover ? 'open' : 'close'}
        custom={'auto'}
        className={`${
          isMenuHover ? ' bg-black' : ''
        } fixed z-40 hidden w-full flex-col gap-4 pt-16 lg:flex`}
      >
        <div className="container mx-auto flex max-w-none justify-start gap-20 px-4 pb-20 lg:max-w-4xl lg:px-0">
          {hoverItem &&
            hoverItem.children?.map((menu, index) => (
              <ul key={index} className="flex list-none flex-col gap-4">
                <span className="text-xs tracking-wider opacity-50">
                  {menu.name}
                </span>
                {menu.items.map((item, index) => (
                  <motion.li
                    variants={showHamburgerMenuVariant}
                    key={index}
                    className={`cursor-pointer ${
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
        </div>
      </motion.div>
      <div
        onMouseOver={() => setIsMenuHover(false)}
        className={`fixed hidden h-full w-full lg:block ${
          isMenuHover ? 'backdrop-blur-lg' : ''
        }`}
      ></div>
    </div>
  )
}
