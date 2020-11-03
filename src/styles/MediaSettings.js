import { generateMedia } from "styled-media-query";

// Set media breakpoints (maxsize)
const mediaQuery = generateMedia({
  desktop: '1170px',
  tablet:  '768px',
  phone:   '450px',
  ipad:    'screen and (min-width: 768px) and (max-width: 1024px)'
})

export default mediaQuery;