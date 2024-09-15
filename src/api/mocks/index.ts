import { env } from '@/env'
import { setupWorker } from 'msw/browser'

import { signInMock } from './sign-in-mock'

import { getDailyRevenueInPeriodMock } from './get-daily-revenue-in-period-mock'
import { getDayOrdersAmountMock } from './get-day-orders-amount-mock'
import { getMonthCanceledOrdersAmountMock } from './get-month-canceled-orders-amount-mock'
import { getMonthRevenueMock } from './get-month-revenue-mock'
import { getPopularProductsMock } from './get-popular-products-mock'
import { getMonthOrdersAmountMock } from './get-month-orders-amount-mock'


import { registerRestaurantMock } from './register-restaurant-mock'
import { getProfileMock } from './get-profile-mock'
import { getManagedRestaurantMock } from './get-managed-restaurant-mock'
import { updateProfileMock } from './update-profile-mock'

// Import and use the mocks here
export const worker = setupWorker(
  signInMock,
  getDailyRevenueInPeriodMock,
  getDayOrdersAmountMock,
  getMonthCanceledOrdersAmountMock,
  getMonthRevenueMock,
  getPopularProductsMock,
  getMonthOrdersAmountMock,
  registerRestaurantMock,
  getProfileMock,
  getManagedRestaurantMock,
  updateProfileMock

)

export async function enableMSW() {
  if (env.MODE !== 'test') {
    return //This will prevent the worker from starting in production
  }

  await worker.start() // This will enable the service worker
}