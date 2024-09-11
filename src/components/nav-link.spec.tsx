import { render } from "@testing-library/react"
import { NavLink } from "./nav-link"
import { MemoryRouter } from "react-router-dom"

describe('NavLink', () => {
  it('should hightlight the nav link when is the current page link', () => {
    const wrapper = render(
      <>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/about">About</NavLink>
      </>
      , {
        wrapper: ({ children }) => {
          return (
            <MemoryRouter initialEntries={['/about']}>
              {children}
            </MemoryRouter>
          )
        }
      }
    )

    const homeLink = wrapper.getByText('Home').dataset.current
    const aboutLink = wrapper.getByText('About').dataset.current

    expect(homeLink).toEqual('false')
    expect(aboutLink).toEqual('true')
  })
})