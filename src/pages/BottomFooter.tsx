import React, { useState } from 'react'
import logoImg from 'uswds/src/img/logo-img.png'
import circleImg from 'uswds/src/img/circle-124.png'

import { GovBanner, GridContainer, Grid } from '../index'

/** HEADER */
import { Header } from '../components/header/Header/Header'
import { Title } from '../components/header/Title/Title'
import { Search } from '../components/Search/Search'
import { Menu } from '../components/header/Menu/Menu'
import { NavMenuButton } from '../components/header/NavMenuButton/NavMenuButton'
import { NavDropDownButton } from '../components/header/NavDropDownButton/NavDropDownButton'

import { ExtendedNav } from '../components/header/ExtendedNav/ExtendedNav'

/** FOOTER */
import { Address } from '../components/Footer/Address/Address'
import { Footer } from '../components/Footer/Footer/Footer'
import { FooterNav } from '../components/Footer/FooterNav/FooterNav'
import { Logo } from '../components/Footer/Logo/Logo'
import { SocialLinks } from '../components/Footer/SocialLinks/SocialLinks'


export const BottomFooter = (): JSX.Element =>{

  const returnToTop = (
    <GridContainer className="usa-footer__return-to-top">
      <a href="#">Return to top</a>
    </GridContainer>
  )

  const footerPrimary = (
    <FooterNav
      aria-label="Footer navigation"
      size="medium"
      links={Array(5).fill(
        <a href="javascript:void(0)" className="usa-footer__primary-link">
          Primary link
        </a>
      )}
    />
  )

  const footerSecondary = (
    <>
      <Grid row gap>
        <Logo
          medium
          image={<img className="usa-footer__logo-img" src={logoImg} alt="" />}
          heading={<p className="usa-footer__logo-heading">FEMA</p>}
        />
        <Grid className="usa-footer__contact-links" mobileLg={{ col: 6 }}>
          <SocialLinks
            links={[
              <a
                key="facebook"
                className="usa-social-link usa-social-link--facebook"
                href="javascript:void(0);">
                <span>Facebook</span>
              </a>,
              <a
                key="twitter"
                className="usa-social-link usa-social-link--twitter"
                href="javascript:void(0);">
                <span>Twitter</span>
              </a>,
              <a
                key="youtube"
                className="usa-social-link usa-social-link--youtube"
                href="javascript:void(0);">
                <span>YouTube</span>
              </a>,
              <a
                key="instagram"
                className="usa-social-link usa-social-link--instagram"
                href="#">
                <span>Instagram</span>
              </a>,
              <a
                key="rss"
                className="usa-social-link usa-social-link--rss"
                href="javascript:void(0);">
                <span>RSS</span>
              </a>,
            ]}
          />
          <h3 className="usa-footer__contact-heading">Agency Contact Center</h3>
          <Address
            medium
            items={[
              <a key="telephone" href="tel:1-800-555-5555">
                (800) CALL-GOVT
              </a>,
              <a key="email" href="mailto:info@agency.gov">
                info@agency.gov
              </a>,
            ]}
          />
        </Grid>
      </Grid>
    </>
  )
  return (
    <Footer
        returnToTop={returnToTop}
        primary={footerPrimary}
        secondary={footerSecondary}
      />
  )
}