import { getPermalink } from './utils/permalinks';

export const headerData = {
  links: [
    {
      text: 'Home',
      href: '/',
    },
    {
      text: 'Services',
      href: '/services',
    },
    {
      text: 'About Us',
      href: '/about',
    },
    {
      text: 'Service Areas',
      href: '/service-areas',
    },
  ],
  actions: [{ text: 'Request Quote', href: '/contact', target: '_blank' }],
};

export const footerData = {
  links: [
    {
      title: 'Services',
      links: [
        { text: 'Heating Installation', href: '/services' },
        { text: 'AC Repair & Maintenance', href: '/services' },
        { text: 'Emergency Repairs', href: '/services' },
        { text: 'Indoor Air Quality', href: '/services' },
        { text: 'Maintenance Plans', href: '/services' },
      ],
    },
    {
      title: 'Company',
      links: [
        { text: 'About Us', href: '/about' },
        { text: 'Service Areas', href: '/service-areas' },
        { text: 'Contact Us', href: '/contact' },
        { text: 'Testimonials', href: '/services' },
      ],
    },
    {
      title: 'Service Areas',
      links: [
        { text: 'McHenry', href: '/service-areas' },
        { text: 'Nearby Towns', href: '/service-areas' },
        { text: 'Surrounding Counties', href: '/service-areas' },
      ],
    },
  ],
  secondaryLinks: [
    { text: 'Terms', href: getPermalink('/terms') },
    { text: 'Privacy Policy', href: getPermalink('/privacy') },
  ],
  socialLinks: [
    { ariaLabel: 'Facebook', icon: 'tabler:brand-facebook', href: '#' },
    { ariaLabel: 'Google', icon: 'tabler:brand-google', href: '#' },
  ],
};
