import type { VercelRequest, VercelResponse } from '@vercel/node'

export default function handler(req: VercelRequest, res: VercelResponse) {
  return res.redirect('https://bank.hackclub.com/donations/start/green-mountain-robotics')
}
