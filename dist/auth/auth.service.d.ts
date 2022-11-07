import { User } from 'src/users/entities/user.entity';
import { UsersService } from 'src/users/users.service';
import { JwtService } from '@nestjs/jwt';
export declare class AuthService {
    private userService;
    private jwtService;
    constructor(userService: UsersService, jwtService: JwtService);
    validateUser(email: string, password: string): Promise<{
        id: number;
        email: string;
        name: string;
        lastname: string;
        identification: string;
        picture: string;
        phone: string;
        gender: string;
        birthday: string;
        country: string;
        state: string;
        city: string;
        address: string;
        created_at: Date;
        updated_at: Date;
        active: boolean;
        deleted_at: Date;
    }>;
    generateJWT(user: User): {
        access_token: string;
        user: User;
    };
}
