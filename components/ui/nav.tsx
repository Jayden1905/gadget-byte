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
import { useEffect, useRef, useState } from 'react'
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
      height: 0,
      opacity: 0,
      transition: {
        duration: 0.2,
        staggerChildren: 0.02,
        staggerDirection: -1,
        when: 'afterChildren',
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

  const blurVariant = {
    show: {
      height: '100vh',
      opacity: 1,
    },
    hide: {
      opacity: 0,
      height: '0',
      transition: {
        delay: 0.5,
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
                  }}
                  className="hidden cursor-pointer text-xs tracking-wider opacity-80 lg:block"
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
        animate={isMenuHover ? 'open' : 'close'}
        custom={'auto'}
        className={`fixed z-40 hidden w-full flex-col gap-4 bg-background pt-16 shadow lg:flex`}
      >
        <div className="container mx-auto flex h-full max-w-none justify-start gap-20 px-4 pb-16 lg:max-w-4xl lg:px-0">
          {hoverItem &&
            hoverItem.children?.map((menu, index) => (
              <motion.ul key={index} className="flex list-none flex-col">
                <motion.span
                  variants={showHamburgerMenuVariant}
                  custom={0.5}
                  className="m-0 p-0 pb-2 text-xs tracking-wider opacity-50"
                >
                  {menu.name}
                </motion.span>
                {menu.items.map((item, index) => (
                  <motion.li
                    variants={showHamburgerMenuVariant}
                    key={index}
                    className={`cursor-pointer pb-3 ${
                      item.important
                        ? 'text-2xl font-bold tracking-wider'
                        : 'text-xs font-bold tracking-wider'
                    }`}
                  >
                    {item.name}
                  </motion.li>
                ))}
              </motion.ul>
            ))}
        </div>
      </motion.div>
      <motion.div
        initial="hide"
        variants={blurVariant}
        animate={isMenuHover ? 'show' : 'hide'}
        onMouseOver={() => setIsMenuHover(false)}
        className={`fixed hidden h-full w-full backdrop-blur-xl lg:block`}
      ></motion.div>
    </div>
  )
}
