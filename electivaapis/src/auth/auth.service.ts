import { Injectable, NotFoundException } from '@nestjs/common';
import { MD5 } from 'crypto-js';
import { User } from 'src/users/entities/user.entity';
import { UsersService } from 'src/users/users.service';
import { PayloadToken } from './dto/auth.dto';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
    constructor(private userService: UsersService, private jwtService: JwtService) { }

    async validateUser(email: string, password: string) {
        const user = await this.userService.findOneByEmail(email)
        if (!user) {
            throw new NotFoundException(`User ${email} not found`)

        }
        const hashPassword = await MD5(password).toString()
        const isMatch = hashPassword === user.password
        if (isMatch) {
            const { password, ...data } = user
            return data
        }
        return null
    }

    generateJWT(user: User) {
        const payload: PayloadToken = {
            id: user.id,
            email: user.email,
            name: user.name,
            lastname: user.lastname,
            phone: user.phone,
            identification: user.identification
        }
        return { 
            access_token: this.jwtService.sign(payload),
            user
        }
    }
}