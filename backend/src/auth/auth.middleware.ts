// authentication.middleware.ts
import { Injectable, NestMiddleware } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';

@Injectable()
export class AuthenticationMiddleware implements NestMiddleware {
  use(req: Request, res: Response, next: NextFunction) {
    if (req.isAuthenticated()) {
      return res.status(400).json({ message: 'User is already authenticated' });
    }
    next();
  }
}
