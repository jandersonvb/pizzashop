import { render } from "@testing-library/react"
import { Pagination } from "./pagination"
import userEvent from "@testing-library/user-event"

const onPageChangeCallback = vi.fn() // This is mocked function (Spy)

describe('Pagination', () => {
  beforeEach(() => {
    onPageChangeCallback.mockClear() // Clear the mock before each test
  })

  it('should display the right amount of pages and results', () => {
    const wrapper = render(
      <Pagination
        pageIndex={0}
        perPage={10}
        totalCount={200}
        onPageChange={onPageChangeCallback} />
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

  it('should be able navigate to the previous page', async () => {
    const user = userEvent.setup()

    const wrapper = render(
      <Pagination
        pageIndex={5}
        perPage={10}
        totalCount={200}
        onPageChange={onPageChangeCallback} />
    )

    const previousPageButton = wrapper.getByRole('button', { name: 'Página anterior' })

    await user.click(previousPageButton) // This will trigger the click event

    expect(onPageChangeCallback).toHaveBeenCalledWith(4)
  })

  it('should be able navigate to the first page', async () => {
    const user = userEvent.setup()

    const wrapper = render(
      <Pagination
        pageIndex={5}
        perPage={10}
        totalCount={200}
        onPageChange={onPageChangeCallback} />
    )

    const firstPageButton = wrapper.getByRole('button', { name: 'Primeira página' })

    await user.click(firstPageButton) // This will trigger the click event

    expect(onPageChangeCallback).toHaveBeenCalledWith(0)
  })

  it('should be able navigate to the last page', async () => {
    const user = userEvent.setup()

    const wrapper = render(
      <Pagination
        pageIndex={0}
        perPage={10}
        totalCount={200}
        onPageChange={onPageChangeCallback} />
    )

    const lastPageButton = wrapper.getByRole('button', { name: 'Última página' })

    await user.click(lastPageButton) // This will trigger the click event

    expect(onPageChangeCallback).toHaveBeenCalledWith(19)
  })
})