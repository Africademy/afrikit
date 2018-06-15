// @flow
import React from 'react';
import styled from 'styled-components';
import { themeVars } from '../index';

const Svg = styled.svg`
  display: inline-block;
  vertical-align: middle;
  path {
    fill: ${props => themeVars(props).cpColor.dark};
  }
`;

export default function Logo({ ...props }) {
  return (
    <Svg width="12px" height="12px" viewBox="0 0 12 12" {...props}>
      <path
        id="path-1_1_"
        d="M8.727,8.423C8.727,8.742,8.473,9,8.159,9H3.841C3.527,9,3.273,8.742,3.273,8.423
        c0-0.318,0.254-0.577,0.568-0.577h4.318C8.473,7.846,8.727,8.104,8.727,8.423z M8.727,6.231c0,0.318-0.254,0.577-0.567,0.577H3.841
        c-0.313,0-0.568-0.259-0.568-0.577c0-0.319,0.254-0.577,0.568-0.577h4.318C8.473,5.654,8.727,5.912,8.727,6.231z M8.159,3.461
        c0.313,0,0.567,0.258,0.567,0.577c0,0.318-0.254,0.577-0.567,0.577H3.841c-0.313,0-0.568-0.258-0.568-0.577
        c0-0.319,0.254-0.577,0.568-0.577H8.159z M9.863,10.846H2.136V1.154h6.245v0.94c0,0.318,0.254,0.577,0.568,0.577h0.914V10.846z
         M11,2.112c0-0.003-0.002-0.057-0.002-0.067c-0.002-0.01-0.006-0.042-0.008-0.054c0-0.001-0.005-0.025-0.008-0.036
        c-0.002-0.007-0.003-0.014-0.005-0.021c-0.003-0.012-0.017-0.048-0.019-0.055c-0.004-0.011-0.021-0.045-0.023-0.052
        c-0.006-0.011-0.025-0.044-0.029-0.049c-0.008-0.013-0.018-0.026-0.027-0.039c-0.002-0.002-0.004-0.005-0.006-0.007
        c-0.014-0.018-0.028-0.034-0.044-0.05L9.352,0.169C9.299,0.115,9.238,0.075,9.174,0.047c-0.002,0-0.054-0.021-0.058-0.021
        c-0.013-0.004-0.026-0.007-0.04-0.01c-0.005-0.001-0.01-0.002-0.014-0.004C9.047,0.009,9.01,0.003,9.006,0.003
        C8.987,0.001,8.969,0,8.949,0H1.568C1.543,0,1.519,0.002,1.495,0.005C1.216,0.042,1,0.284,1,0.577v10.846
        C1,11.742,1.254,12,1.568,12h8.863C10.746,12,11,11.742,11,11.423V2.112z"
      />
    </Svg>
  );
}
