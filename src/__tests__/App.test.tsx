import renderer from 'react-test-renderer'
import { App } from '../App'

describe('Calculator app', () => {
  it('Matches DOM tree snapshot', () => {
    const domTree = renderer.create(<App />).toJSON()
    expect(domTree).toMatchSnapshot()
  })
})
