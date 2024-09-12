import { env } from '@/env'
import { setupWorker } from 'msw/browser'

export const worker = setupWorker()

export async function enableMSW() {
  if (env.MODE !== 'test') {
    return //This will prevent the worker from starting in production
  }

  await worker.start() // This will enable the service worker
}