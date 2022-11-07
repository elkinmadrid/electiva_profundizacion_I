import { Request } from 'express';
import { User } from 'src/users/entities/user.entity';
import { AuthService } from './auth.service';
export declare class AuthController {
    private readonly authService;
    constructor(authService: AuthService);
    login(req: Request): {
        access_token: string;
        user: User;
    };
}
