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
  {
    name: 'iPad',
    pathname: '#',
    children: [
      {
        name: 'Explore iPad',
        items: [
          { name: 'Explore All iPad', pathname: '#', important: true },
          { name: 'iPad Pro', pathname: '#', important: true },
          { name: 'iPad Air', pathname: '#', important: true },
          { name: 'iPad', pathname: '#', important: true },
          { name: 'iPad mini', pathname: '#', important: true },
          { name: 'Apple Pencil', pathname: '#', important: true },
          { name: 'Keyboards', pathname: '#', important: true },
        ],
      },
      {
        name: 'Shop iPad',
        items: [
          { name: 'Shop iPad', pathname: '#' },
          { name: 'iPad Accessories', pathname: '#' },
          { name: 'Apple Trade In', pathname: '#' },
          { name: 'Financing', pathname: '#' },
        ],
      },
      {
        name: 'More from iPad',
        items: [
          { name: 'iPad Support', pathname: '#' },
          { name: 'AppleCare+ for iPad', pathname: '#' },
          { name: 'iPadOS 17', pathname: '#' },
          { name: 'Apps by Apple', pathname: '#' },
          { name: 'iCloud+', pathname: '#' },
          { name: 'Education', pathname: '#' },
        ],
      },
    ],
  },
  {
    name: 'iPhone',
    pathname: '#',
    children: [
      {
        name: 'Explore iPhone',
        items: [
          { name: 'Explore All iPhone', pathname: '#', important: true },
          { name: 'iPhone 15 Pro', pathname: '#', important: true },
          { name: 'iPhone 15', pathname: '#', important: true },
          { name: 'iPhone 14', pathname: '#', important: true },
          { name: 'iPhone 13', pathname: '#', important: true },
          { name: 'iPhone SE', pathname: '#', important: true },
        ],
      },
      {
        name: 'Shop iPhone',
        items: [
          { name: 'Shop iPhone', pathname: '#' },
          { name: 'iPhone Accessories', pathname: '#' },
          { name: 'Apple Trade In', pathname: '#' },
          { name: 'Financing', pathname: '#' },
        ],
      },
      {
        name: 'More from iPhone',
        items: [
          { name: 'iPhone Support', pathname: '#' },
          { name: 'AppleCare+ for iPhone', pathname: '#' },
          { name: 'iOS 17', pathname: '#' },
          { name: 'Apps by Apple', pathname: '#' },
          { name: 'iPhone Privacy', pathname: '#' },
          { name: 'iCloud+', pathname: '#' },
          { name: 'Wallet, Pay', pathname: '#' },
          { name: 'Siri', pathname: '#' },
        ],
      },
    ],
  },
  {
    name: 'Watch',
    pathname: '#',
    children: [
      {
        name: 'Explore Watch',
        items: [
          { name: 'Explore All Watch', pathname: '#', important: true },
          { name: 'Apple Watch Series 7', pathname: '#', important: true },
          { name: 'Apple Watch SE', pathname: '#', important: true },
          { name: 'Apple Watch Series 6', pathname: '#', important: true },
          { name: 'Apple Watch Studio', pathname: '#', important: true },
          { name: 'Watch Accessories', pathname: '#', important: true },
        ],
      },
      {
        name: 'Shop Watch',
        items: [
          { name: 'Shop Watch', pathname: '#' },
          { name: 'Apple Watch Accessories', pathname: '#' },
          { name: 'Apple Trade In', pathname: '#' },
          { name: 'Financing', pathname: '#' },
        ],
      },
      {
        name: 'More from Watch',
        items: [
          { name: 'Watch Support', pathname: '#' },
          { name: 'AppleCare+ for Watch', pathname: '#' },
          { name: 'watchOS 8', pathname: '#' },
          { name: 'Apps by Apple', pathname: '#' },
          { name: 'Continuity', pathname: '#' },
          { name: 'iCloud+', pathname: '#' },
          { name: 'Watch for Business', pathname: '#' },
          { name: 'Education', pathname: '#' },
        ],
      },
    ],
  },
  {
    name: 'AirPods',
    pathname: '#',
    children: [
      {
        name: 'Explore AirPods',
        items: [
          { name: 'Explore All AirPods', pathname: '#', important: true },
          { name: 'AirPods Pro', pathname: '#', important: true },
          { name: 'AirPods', pathname: '#', important: true },
          { name: 'AirPods Max', pathname: '#', important: true },
          { name: 'AirPods Studio', pathname: '#', important: true },
          { name: 'AirPods Accessories', pathname: '#', important: true },
        ],
      },
      {
        name: 'Shop AirPods',
        items: [
          { name: 'Shop AirPods', pathname: '#' },
          { name: 'AirPods Accessories', pathname: '#' },
          { name: 'Apple Trade In', pathname: '#' },
          { name: 'Financing', pathname: '#' },
        ],
      },
      {
        name: 'More from AirPods',
        items: [
          { name: 'AirPods Support', pathname: '#' },
          { name: 'AppleCare+ for AirPods', pathname: '#' },
          { name: 'AirPods Software', pathname: '#' },
          { name: 'Apps by Apple', pathname: '#' },
          { name: 'Continuity', pathname: '#' },
          { name: 'iCloud+', pathname: '#' },
          { name: 'AirPods for Business', pathname: '#' },
          { name: 'Education', pathname: '#' },
        ],
      },
    ],
  },
  {
    name: 'TV & Home',
    pathname: '#',
    children: [
      {
        name: 'Explore TV & Home',
        items: [
          { name: 'Explore All TV & Home', pathname: '#', important: true },
          { name: 'Apple TV 4K', pathname: '#', important: true },
          { name: 'Apple TV HD', pathname: '#', important: true },
          { name: 'HomePod mini', pathname: '#', important: true },
          { name: 'HomePod', pathname: '#', important: true },
          { name: 'TV Accessories', pathname: '#', important: true },
        ],
      },
      {
        name: 'Shop TV & Home',
        items: [
          { name: 'Shop TV & Home', pathname: '#' },
          { name: 'TV Accessories', pathname: '#' },
          { name: 'HomePod Accessories', pathname: '#' },
          { name: 'Apple Trade In', pathname: '#' },
          { name: 'Financing', pathname: '#' },
        ],
      },
      {
        name: 'More from TV & Home',
        items: [
          { name: 'TV & Home Support', pathname: '#' },
          { name: 'AppleCare+ for TV & Home', pathname: '#' },
          { name: 'tvOS 17', pathname: '#' },
          { name: 'Apps by Apple', pathname: '#' },
          { name: 'Apple Music', pathname: '#' },
          { name: 'Apple Arcade', pathname: '#' },
          { name: 'Apple Books', pathname: '#' },
          { name: 'Apple Podcasts', pathname: '#' },
          { name: 'Apple TV+', pathname: '#' },
        ],
      },
    ],
  },
  {
    name: 'Accessories',
    pathname: '#',
    children: [
      {
        name: 'Explore Accessories',
        items: [
          { name: 'Explore All Accessories', pathname: '#', important: true },
          { name: 'Bags & Shells', pathname: '#', important: true },
          { name: 'Cables & Docks', pathname: '#', important: true },
          { name: 'Cases & Films', pathname: '#', important: true },
          { name: 'Charging Devices', pathname: '#', important: true },
          { name: 'Connected Home', pathname: '#', important: true },
          { name: 'Speakers & Sound', pathname: '#', important: true },
          { name: 'Displays & Mounts', pathname: '#', important: true },
          { name: 'Gift Cards', pathname: '#', important: true },
        ],
      },
      {
        name: 'Shop Accessories',
        items: [
          { name: 'Shop Accessories', pathname: '#' },
          { name: 'Apple Trade In', pathname: '#' },
          { name: 'Financing', pathname: '#' },
        ],
      },
      {
        name: 'More from Accessories',
        items: [
          { name: 'Accessories Support', pathname: '#' },
          { name: 'AppleCare+ for Accessories', pathname: '#' },
          { name: 'Apps by Apple', pathname: '#' },
          { name: 'Apple Music', pathname: '#' },
          { name: 'Apple Arcade', pathname: '#' },
          { name: 'Apple Books', pathname: '#' },
          { name: 'Apple Podcasts', pathname: '#' },
          { name: 'Apple TV+', pathname: '#' },
        ],
      },
    ],
  },
  {
    name: 'Support',
    pathname: '#',
    children: [
      {
        name: 'Explore Support',
        items: [
          { name: 'iPhone', pathname: '#', important: true },
          { name: 'Mac', pathname: '#', important: true },
          { name: 'iPad', pathname: '#', important: true },
          { name: 'Watch', pathname: '#', important: true },
          { name: 'AirPods', pathname: '#', important: true },
          { name: 'Music', pathname: '#', important: true },
          { name: 'TV', pathname: '#', important: true },
        ],
      },
      {
        name: 'Get Help',
        items: [
          { name: 'Community', pathname: '#' },
          { name: 'Check Coverage', pathname: '#' },
          { name: 'Repair', pathname: '#' },
          { name: 'Contact Us', pathname: '#' },
        ],
      },
      {
        name: 'Helpful Topics',
        items: [
          { name: 'Get AppleCare+', pathname: '#' },
          { name: 'Apple ID & Password', pathname: '#' },
          { name: 'Billing & Subscriptions', pathname: '#' },
          { name: 'Find My', pathname: '#' },
          { name: 'Accessibility', pathname: '#' },
        ],
      },
    ],
  },
]

export const quickLinks = [
  { name: 'Holiday Gifts', pathname: '#' },
  { name: 'Find a Store', pathname: '#' },
  { name: 'Accessories', pathname: '#' },
  { name: 'Gift Cards', pathname: '#' },
  { name: 'Apple Trade In', pathname: '#' },
]
