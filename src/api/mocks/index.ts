import { env } from '@/env'
import { setupWorker } from 'msw/browser'
import { signInMock } from './sign-in-mock'

// Import and use the mocks here
export const worker = setupWorker(
  signInMock,
)

export async function enableMSW() {
  if (env.MODE !== 'test') {
    return //This will prevent the worker from starting in production
  }

  await worker.start() // This will enable the service worker
}