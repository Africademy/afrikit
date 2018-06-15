// @flow
import React from 'react';
import PropTypes from 'prop-types';
import Link from 'gatsby-link';
import styled, { css } from 'styled-components';
import GitHubButton from 'react-github-button';

import 'react-github-button/assets/style.css';

import Logo from './Logo';
import { themeVars } from '../index';

const LogoWrapper = styled(Logo)`
  height: 20px;
  width: auto;
  display: block;
  transition: all 150ms ease-out;
  transform: translate3d(0, 0, 0);
  &:hover {
    transform: translate3d(0, -1px, 0);
  }
  &:active {
    transform: translate3d(0, 0, 0);
  }
`;

const NavLink = styled(Link)`
  font-size: ${props => themeVars(props).cpTypography.size.s2}px;
  font-weight: ${props => themeVars(props).cpTypography.weight.extrabold};
`;

// prettier-ignore
const NavItem = styled.div`
  display: inline-flex;
  line-height: 3rem;
  height: 3rem;
  vertical-align: top;
  align-items: center;
  ${props => props.showDesktop && css`
    display: none;
    ${themeVars(props).bp(props).media.lg`
      display: inline-flex;
    `};
  `}
  ${props => props.showMobile && css`
    ${themeVars(props).bp(props).media.lg`
      display: none;
    `};
  `}
`;

// prettier-ignore
const NavGroup = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  z-index: 1;
  ${props => props.right && css`
    left: auto;
    right: 0;
  `}
  ${NavItem} + ${NavItem} {
    margin-left: ${themeVars(props).cpSpacing.padding.large}px;
  }
`;

// prettier-ignore
const Nav = styled.div`
  height: 3rem;
  position: relative;
  text-align: center;
	z-index: 3;
`;

const NavWrapper = styled.nav`
  padding-top: 12px;
  ${themeVars(props).bp(props).media.md`
    padding-top: 36px;
  `};
`;

export default function Header({ githubUrl, inverse, ...props }) {
  const [namespace, repo] = githubUrl.match(/github.com\/(.*)\/(.*)$/).slice(1);
  return (
    <NavWrapper {...props}>
      <Nav>
        <NavGroup>
          <NavItem>
            <NavLink to="/">
              <LogoWrapper inverse={inverse} />
            </NavLink>
          </NavItem>
        </NavGroup>
        <NavGroup right>
          <NavItem>
            <GitHubButton
              type="stargazers"
              size="large"
              namespace={namespace}
              repo={repo}
            />
          </NavItem>
        </NavGroup>
      </Nav>
    </NavWrapper>
  );
}

Header.propTypes = {
  githubUrl: PropTypes.string,
  inverse: PropTypes.bool,
};

Header.defaultProps = {
  githubUrl: null,
  inverse: false,
};
