import { DecodeText } from '../../src/helpers/decodeText'

describe('Evaluation helper DecodeText', () => {
  test('Should return empty string', () => {
    const codifiedText = undefined

    const decodeText = DecodeText(codifiedText)
    expect(decodeText).toBe('')
  })
  test('Should return the text decoded ', () => {
    const codifiedText = '&quot;How disgusting.&quot'
    const decodeText = DecodeText(codifiedText)
    expect(decodeText).toBe('"How disgusting."')
  })
})
