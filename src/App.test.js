import { fireEvent, render, RenderResult } from '@testing-library/react'
import App from './App'

let wrapper: RenderResult
beforeEach(() => {
  wrapper = render(<App />)
})

describe('测试首页点击事件是否成功运行', () => {
  it('一出来应该渲染"hello world"', () => {
    const app = wrapper.getByTestId('container')
    expect(app).toBeInTheDocument()
    expect(app.textContent).toMatch(/world/i)
  })
  it('点击过后应该渲染"hello jack"',()=>{
    const app = wrapper.getByTestId('container')
    fireEvent.click(app)
    expect(app.textContent).toMatch(/jack/i)
  })
})
