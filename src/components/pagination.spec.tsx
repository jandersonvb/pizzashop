import { render } from "@testing-library/react"
import { Pagination } from "./pagination"
import userEvent from "@testing-library/user-event"

const onPageChangeCallback = vi.fn() // This is mocked function (Spy)

describe('Pagination', () => {
  it('should display the right amount of pages and results', () => {
    const wrapper = render(
      <Pagination
        pageIndex={0}
        perPage={10}
        totalCount={200}
        onPageChange={() => { }} />
    )

    const totalPage = wrapper.getByText('Página 1 de 20')
    const totalResults = wrapper.getByText('Total de 200 item(s)')

    expect(totalPage).toBeInTheDocument()
    expect(totalResults).toBeInTheDocument()
  })

  it('should be able navigate to the next page', async () => {
    const user = userEvent.setup()

    const wrapper = render(
      <Pagination
        pageIndex={0}
        perPage={10}
        totalCount={200}
        onPageChange={onPageChangeCallback} />
    )

    const nextPageButton = wrapper.getByRole('button', { name: 'Próxima página' })

    await user.click(nextPageButton) // This will trigger the click event

    expect(onPageChangeCallback).toHaveBeenCalledWith(1)
  })
})