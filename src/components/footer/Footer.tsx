import React from 'react'
import Link from 'next/link'
import clsx from 'clsx'
import { motion } from 'framer-motion'

import UsefulLinks from 'components/useful-links'

import FacebookIcon from 'assets/facebook.svg'
import GithubIcon from 'assets/github.svg'
import LinkedInIcon from 'assets/linkedIn.svg'
import TwitterIcon from 'assets/twitter.svg'

import stl from './Footer.module.scss'

interface Props {
  customClass?: string
}

const Footer = ({ customClass }: Props) => (
  <motion.footer className={clsx(stl.footer, customClass)}>
    <div className={stl.container}>
      <div className={stl.about}>
        <div className={stl.main}>CodeZar</div>
        <div className={stl.termsPrivacy}>
          <Link href="#" className={stl.link}>
            Terms of use
          </Link>
          <span className={stl.divider}></span>
          <Link href="#" className={stl.link}>
            Privacy
          </Link>
        </div>
        <p className={stl.copyright}>Copyright by 2023 CodeZar.</p>
      </div>
      <UsefulLinks />
      <UsefulLinks
        title="Our Information"
        links={[
          { name: 'Return Policy', href: '#' },
          { name: 'Privacy Policy', href: '#' },
          { name: 'Terms and Conditons', href: '#' },
          { name: 'Site Map', href: '#' },
        ]}
      />
      <UsefulLinks
        title="My Account"
        links={[
          { name: 'Press Inquiries', href: '#' },
          { name: 'Socail Media', href: '#' },
          { name: 'Directories', href: '#' },
          { name: 'Images & B-roll', href: '#' },
        ]}
      />
      <UsefulLinks
        title="Connect"
        links={[
          {
            name: 'LinkedIn',
            href: 'https://proxar.ranaintizar.com/me/linkedin',
            icon: <LinkedInIcon />,
          },
          {
            name: 'Facebook',
            href: 'https://proxar.ranaintizar.com/me/facebook',
            icon: <FacebookIcon />,
          },
          {
            name: 'Github',
            href: 'https://proxar.ranaintizar.com/me/github',
            icon: <GithubIcon />,
          },
          {
            name: 'Twitter',
            href: 'https://proxar.ranaintizar.com/me/twitter',
            icon: <TwitterIcon />,
          },
        ]}
      />
    </div>
  </motion.footer>
)

export default Footer
