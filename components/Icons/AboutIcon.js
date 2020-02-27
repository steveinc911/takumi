import React from 'react';
import { SvgXml } from 'react-native-svg';

const xml = `
<svg width="48pt" height="48pt" viewBox="0 0 48 48">
<g id="surface1">
<path style=" stroke:none;fill-rule:nonzero;fill:#5B5B5B;fill-opacity:1;" d="M 37 40 L 11 40 L 5 46 L 5 12 C 5 8.699219 7.699219 6 11 6 L 37 6 C 40.300781 6 43 8.699219 43 12 L 43 34 C 43 37.300781 40.300781 40 37 40 Z "/>
<path style=" stroke:none;fill-rule:nonzero;fill:#FFFFFF;fill-opacity:1;" d="M 22 20 L 26 20 L 26 31 L 22 31 Z "/>
<path style=" stroke:none;fill-rule:nonzero;fill:#FFFFFF;fill-opacity:1;" d="M 26 15 C 26 16.105469 25.105469 17 24 17 C 22.894531 17 22 16.105469 22 15 C 22 13.894531 22.894531 13 24 13 C 25.105469 13 26 13.894531 26 15 Z "/>
</g>
</svg>
`;

export default (props) => <SvgXml xml={xml.replace('#5B5B5B',props.fill || '#5B5B5B')} {...props} />;