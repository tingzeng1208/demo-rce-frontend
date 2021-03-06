import React, { useState } from 'react'
import logoImg from 'uswds/src/img/logo-img.png'
import circleImg from 'uswds/src/img/circle-124.png'

import { GovBanner, GridContainer, Grid } from '@trussworks/react-uswds'

/** HEADER */
import { Header } from '@trussworks/react-uswds'
import { Title } from '@trussworks/react-uswds'
import { Search } from '@trussworks/react-uswds'
import { Menu } from '@trussworks/react-uswds'
import { NavMenuButton } from '@trussworks/react-uswds'
import { NavDropDownButton } from '@trussworks/react-uswds'

import { ExtendedNav } from '@trussworks/react-uswds'

/** FOOTER */
import { Address } from '@trussworks/react-uswds'
import { Footer } from '@trussworks/react-uswds'
import { FooterNav } from '@trussworks/react-uswds'
import { Logo } from '@trussworks/react-uswds'
import { SocialLinks } from '@trussworks/react-uswds'


export const TopHeader = () : JSX.Element => {
  const [mobileNavOpen, setMobileNavOpen] = useState(false)
  const [navDropdownOpen, setNavDropdownOpen] = useState([false, false])

  const handleToggleNavDropdown = (index: number): void => {
    setNavDropdownOpen((prevNavDropdownOpen) => {
      const newOpenState = Array(prevNavDropdownOpen.length).fill(false)
      // disable eslint-disable-next-line security/detect-object-injection
      newOpenState[index] = !prevNavDropdownOpen[index]
      return newOpenState
    })
  }

  const toggleMobileNav = (): void => {
    setMobileNavOpen((prevOpen) => !prevOpen)
  }

  const handleSearch = (): void => {
    /* */
  }

  const primaryNavItems = [
    <React.Fragment key="primaryNav_0">
      <NavDropDownButton
        menuId="extended-nav-section-one"
        isOpen={navDropdownOpen[0]}
        label="Current section"
        onToggle={(): void => {
          handleToggleNavDropdown(0)
        }}
        isCurrent
      />
      <Menu
        id="extended-nav-section-one"
        items={new Array(3).fill(<a href="/sample-application">Sample Application</a>)}
        isOpen={navDropdownOpen[0]}
      />
    </React.Fragment>,
    <React.Fragment key="primaryNav_1">
      <NavDropDownButton
        menuId="extended-nav-section-two"
        isOpen={navDropdownOpen[1]}
        label="Section"
        onToggle={(): void => {
          handleToggleNavDropdown(1)
        }}
      />
      <Menu
        id="extended-nav-section-two"
        items={new Array(3).fill(<a href="#">Navigation link</a>)}
        isOpen={navDropdownOpen[1]}
      />
    </React.Fragment>,
    <a key="primaryNav_2" className="usa-nav__link" href="sample-application">
      <span>Sample Application</span>
    </a>,
  ]

  const secondaryNavItems = [
    <a key="secondaryNav_0" href="">
      Secondary link
    </a>,
    <a key="secondaryNav_1" href="">
      Another secondary link
    </a>,
  ]

  const returnToTop = (
    <GridContainer className="usa-footer__return-to-top">
      <a href="#">Return to top</a>
    </GridContainer>
  )

  return (
  <>
   <a className="usa-skipnav" href="#main-content">
        Return to Main
      </a>
      <GovBanner />
      <div className={`usa-overlay ${mobileNavOpen ? 'is-visible' : ''}`}></div>
      <Header extended>
        <div className="usa-navbar">
          <Title id="extended-logo">
            <a href="/" title="Home" aria-label="Home">
              Recovery Cloud Environment
            </a>
          </Title>
          <NavMenuButton
            label="Menu"
            onClick={toggleMobileNav}
            className="usa-menu-btn"
          />
        </div>
        <ExtendedNav
          aria-label="Primary navigation"
          primaryItems={primaryNavItems}
          secondaryItems={secondaryNavItems}
          onToggleMobileNav={toggleMobileNav}
          mobileExpanded={mobileNavOpen}>
          <Search size="small" onSubmit={handleSearch} />
        </ExtendedNav>
      </Header>
  </>)
}