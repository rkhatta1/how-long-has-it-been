// pages/api/news-proxy.ts

import axios from 'axios';
import { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    const { data } = await axios.get('https://newsapi.org/v2/top-headlines', {
      params: {
        country: 'in',
        pageSize: 100,
        apiKey: process.env.NEXT_PUBLIC_NEWS_API_KEY, // Use your News API key
      },
    });

    res.status(200).json(data);
  } catch (error) {
    console.error('Error fetching top headlines:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
}
