import { atom } from 'jotai'
import { MenuItemType } from './menu'

export const countAtom = atom(0)

export const hamburgetAtom = atom<boolean>(false)

export const menuHoverAtom = atom<boolean>(false)

export const menuHoverItemAtom = atom<MenuItemType | null>({} as MenuItemType)
