import { type ClassValue, clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export type MenuItemType = {
  name: string
  pathname: string
  children?: {
    name: string
    items: {
      name: string
      pathname: string
      important?: boolean
    }[]
  }[]
}

export const menuItems: MenuItemType[] = [
  {
    name: 'Store',
    pathname: '#',
    children: [
      {
        name: 'Shop',
        items: [
          { name: 'Shop the Latest', pathname: '#', important: true },
          { name: 'Mac', pathname: '#', important: true },
          { name: 'iPad', pathname: '#', important: true },
          { name: 'iPhone', pathname: '#', important: true },
          { name: 'Apple Watch', pathname: '#', important: true },
          { name: 'Accessories', pathname: '#', important: true },
        ],
      },
      {
        name: 'Quick Links',
        items: [
          { name: 'Shop Holiday Gifts', pathname: '#' },
          { name: 'Find a Store', pathname: '#' },
          { name: 'Order Status', pathname: '#' },
          { name: 'Apple Trade In', pathname: '#' },
          { name: 'Financing', pathname: '#' },
        ],
      },
      {
        name: 'Shop Sepcial Stores',
        items: [
          { name: 'Certified Refurbished', pathname: '#' },
          { name: 'Education', pathname: '#' },
          { name: 'Business', pathname: '#' },
        ],
      },
    ],
  },
  {
    name: 'Mac',
    pathname: '#',
    children: [
      {
        name: 'Explore Mac',
        items: [
          { name: 'Explore All Mac', pathname: '#', important: true },
          { name: 'MacBook Air', pathname: '#', important: true },
          { name: 'MacBook Pro', pathname: '#', important: true },
          { name: 'iMac', pathname: '#', important: true },
          { name: 'Mac mini', pathname: '#', important: true },
          { name: 'Mac Studio', pathname: '#', important: true },
          { name: 'Mac Pro', pathname: '#', important: true },
          { name: 'Displays', pathname: '#', important: true },
        ],
      },
      {
        name: 'Shop Mac',
        items: [
          { name: 'Shop Mac', pathname: '#' },
          { name: 'Mac Accessories', pathname: '#' },
          { name: 'Apple Trade In', pathname: '#' },
          { name: 'Financing', pathname: '#' },
        ],
      },
      {
        name: 'More from Mac',
        items: [
          { name: 'Mac Support', pathname: '#' },
          { name: 'AppleCare+ for Mac', pathname: '#' },
          { name: 'macOS Sonoma', pathname: '#' },
          { name: 'Apps by Apple', pathname: '#' },
          { name: 'Continuity', pathname: '#' },
          { name: 'iCloud+', pathname: '#' },
          { name: 'Mac for Business', pathname: '#' },
          { name: 'Education', pathname: '#' },
        ],
      },
    ],
  },
  { name: 'iPad', pathname: '#' },
  { name: 'iPhone', pathname: '#' },
  { name: 'Watch', pathname: '#' },
  { name: 'AirPods', pathname: '#' },
  { name: 'TV & Home', pathname: '#' },
  // { name: 'Entertainment', pathname: '#' },
  { name: 'Accessories', pathname: '#' },
  { name: 'Support', pathname: '#' },
]
