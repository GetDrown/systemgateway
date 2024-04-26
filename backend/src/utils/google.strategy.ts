import { PassportStrategy } from "@nestjs/passport";
import { Strategy, VerifyCallback } from "passport-google-oauth20";
import { Inject, Injectable } from "@nestjs/common";
import { AuthService } from "src/auth/auth.service";
import { Profile } from "passport";



@Injectable()
export class GoogleStrategy extends PassportStrategy(Strategy, 'google') {


    constructor(
        @Inject('AUTH_SERVICE') private readonly authService: AuthService,
    ) {
        super({
            clientID: '959216919848-nd3p1gfbu6b24qa982b0r8enje3nuf7g.apps.googleusercontent.com',
            clientSecret: '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',
            callbackURL: 'http://localhost:3000/api/auth/google/redirect',
            passReqToCallback: true,
            scope: ['email', 'profile'],
        });
    }

    async validate(
        request: any,
        accessToken: string,
        refreshToken: string,
        profile: Profile,
        done: VerifyCallback
        
    ): Promise<any> {
        console.log(accessToken);
        console.log(refreshToken);
        console.log(profile);
        const { name, emails, photos } = profile;
       
        const user = {
            email: emails[0].value,
            firstName: name.givenName,
            lastName: name.familyName,
            picture: photos[0].value,
            accessToken,
            refreshToken
        };
        const isAuthenticated = request.isAuthenticated();
        if (isAuthenticated) {
            return done(new Error('User alr authenticated'), null);
        }
        await this.authService.validateUser(user)
        done(null, user)
        
    }




    /* Promise<any> {
        const { name, emails, photos } = profile;
        const user = {
            email: emails[0].value,
            firstName: name.givenName,
            lastName: name.familyName,
            picture: photos[0].value,
            accessToken,
            refreshToken,
        };
        done(null, user); */


}