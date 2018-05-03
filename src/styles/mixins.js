import { css } from 'styled-components'

export const center = (type) => {
  if (type == 'y')
    return css`
      top: 50%;
      bottom: auto;
      transform: translateY(-50%);
    `
  else if (type == 'x')
    return css`
      left: 50%;
      right: auto;
      transform: translateX(-50%);
    `
}
