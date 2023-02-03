import { getTokens, camelCase } from '../utils'

const getTypography = (layerName, stylesArtboard) => {
  const palette = { font: {} }
  const decorator = (element) => {
    const { name } = element
    const { fontSize } = element.children[0].style

    const tokens = {
      [camelCase(name)]: {
        value: `${fontSize / 16}em`,
      },
    }
    Object.assign(palette.font, tokens)
  }

  return getTokens(layerName, stylesArtboard, palette, decorator)
}

export default getTypography
