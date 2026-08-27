// lib/mailer.ts
import { getResendClient } from './resend'

export { getResendClient }
export const resend = getResendClient()