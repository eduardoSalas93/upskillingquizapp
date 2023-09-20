const he = require('he')

/**
 * @author Eduardo Salas
 * @date 18/09/2023
 * @name DecodeText
 * @description Method that gets a text with a codification and returns the decoded text
 */
export const DecodeText = (text: string | undefined) => {
  if (!text) {
    return ''
  }
  return he.decode(text)
}
