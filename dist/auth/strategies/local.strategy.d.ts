import { Strategy } from "passport-local";
import { AuthService } from "../auth.service";
declare const LocalStrategy_base: new (...args: any[]) => Strategy;
export declare class LocalStrategy extends LocalStrategy_base {
    private authService;
    constructor(authService: AuthService);
    validate(email: string, password: string): Promise<{
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
}
export {};
