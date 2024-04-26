import { Controller, Get, Req, Res, UseGuards } from '@nestjs/common';
import { Request, Response } from 'express';
import { AuthGuard } from '@nestjs/passport';
import { AuthenticationMiddleware } from './auth.middleware';

@Controller('auth')
export class AuthController {

    @Get('google/login')
    @UseGuards(AuthenticationMiddleware, AuthGuard('google'))
    async handleLogin(@Req() req: Request, @Res() res: Response) {
        if (req.isAuthenticated()) {
            return res.status(401).json('Already logged in');
        }
    }

    @Get('google/redirect')
    @UseGuards(AuthGuard('google'))
    async handleRedirect(@Req() req) {
        return `<h1>Hello ${req.user.firstName} ${req.user.lastName}!</h1><img src="${req.user.picture}" />`;
    }

    @Get('status')
    user(@Req() request: Request) {
        console.log(request.user);
        if (request.user) {
            return { msg: 'Authenticated' };
        } else {
            return { msg: 'Unauth' }
        }
    }

}
