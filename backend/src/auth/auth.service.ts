import { Injectable } from '@nestjs/common';
import { UserDetails } from './utils/types';
import { InjectRepository } from '@nestjs/typeorm';
import { Users } from 'src/user/user.entity';
import { Repository } from 'typeorm';

@Injectable()
export class AuthService {

    constructor(
        @InjectRepository(Users) private readonly userRepository:
            Repository<Users>,
    ) { }
   async validateUser(details: UserDetails) {
        console.log('AuthService');
        console.log(details);
        const user = await this.userRepository.findOneBy({email: details.email });
        console.log(user);
        if (user) {
            return user;
        } 
        console.log('User not found. Creating...')
        const newUser = this.userRepository.create(details);
        return this.userRepository.save(newUser);

    }

    async findUser(id: number) {
        const user = await this.userRepository.findOne({where: {id}});
        return user;
    }
}
