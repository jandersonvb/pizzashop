import { http, HttpResponse } from "msw";

export const signOutMock = http.post<never, never>('/sign-out', () => {
  return new HttpResponse(null, {
    status: 200,
  })
})