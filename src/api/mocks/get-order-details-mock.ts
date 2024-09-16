import { http, HttpResponse } from "msw"
import { GetOrderDetailsResponse, GetOrdersDetailsParams } from "../get-order-details"

export const getOrderDetailsMock = http.get<GetOrdersDetailsParams, never, GetOrderDetailsResponse>('/orders/:orderId', async ({ params }) => {
  return HttpResponse.json({
    id: params.orderId,
    status: 'pending',
    createdAt: new Date().toISOString(),
    totalInCents: 5000,
    customer: {
      name: 'John Doe',
      email: 'johndoe@example.com',
      phone: '1234567890',
    },
    orderItems: [
      {
        id: 'order-item-1',
        priceInCents: 1000,
        quantity: 1,
        product: {
          name: 'Pizza Pepperoni',
        },
      },
      {
        id: 'item-2',
        priceInCents: 2000,
        quantity: 2,
        product: {
          name: 'Pizza Margherita',
        },
      },
    ],
  })
})