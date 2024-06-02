import prisma from '@/lib/db';
import { NextApiRequest, NextApiResponse } from 'next';
import { serialize } from 'cookie';
import { z } from 'zod';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    const url = new URL(req.url || '', 'http://dummyhost');

    const { limit, page, category } = z
      .object({
        limit: z.string(),
        page: z.string(),
        category: z.string(),
      })
      .parse({
        limit: url.searchParams.get('limit'),
        page: url.searchParams.get('page'),
        category: url.searchParams.get('category'),
      });

    let result;

    if (category !== 'null') {
      const products = await prisma.product.findMany({
        where: {
          categoryId: category,
        },
        take: parseInt(limit),
        skip: (parseInt(page) - 1) * parseInt(limit),
        orderBy: {
          createdAt: 'desc',
        },
        include: {
          Category: true,
        },
      });

      result = products;
    } else {
      const products = await prisma.product.findMany({
        take: parseInt(limit),
        skip: (parseInt(page) - 1) * parseInt(limit),
        orderBy: {
          createdAt: 'desc',
        },
        include: {
          Category: true,
        },
      });

      result = products;
    }

    const cookie = serialize('lastViewedCategory', category || '', {
      httpOnly: true,
      secure: process.env.NODE_ENV !== 'development',
      maxAge: 60 * 60 * 24, // 1 jour
      path: '/',
    });

    res.setHeader('Set-Cookie', cookie);
    res.status(200).json(result);
  } catch (error) {
    if (error instanceof z.ZodError) {
      res.status(422).json({ error: 'Invalid request data passed' });
    } else {
      console.error(error);
      res.status(500).json({ error: 'Could not fetch more posts' });
    }
  }
}
