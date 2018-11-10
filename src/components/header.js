import React from 'react'
import { Link } from 'gatsby'
import gatsbyLogo from '../images/gatsby-icon.png'
import styled from 'styled-components'

const HeaderWrapper = styled.div`
  background: #524763;
  margin-bottom: 1.45rem;
  img {
    margin-bottom: 0
  }
`;

const HeaderContainer  = styled.div`
  margin: 0 auto;
  max-width: 960px;
  padding: .5rem .5rem;
`;

const Header = ({ siteTitle }) => (
  <HeaderWrapper>
    <HeaderContainer>
      <h1 style={{ margin: 0 }}>
        <Link
          to="/"
          style={{
            color: 'white',
            textDecoration: 'none',
          }}
        >
          <img
            src={gatsbyLogo} alt="Gatsby Logo"
            style={
              {
                width: '100px',
              }
            }
          />
        </Link>
      </h1>
    </HeaderContainer>
  </HeaderWrapper>
)

export default Header
