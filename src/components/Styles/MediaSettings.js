import { generateMedia } from "styled-media-query";

// Set media breakpoints (maxsize)
const mediaQuery = generateMedia({
  desktop: '1170px',
  tablet:  '768px',
  phone:   '450px'
})

export default mediaQuery;