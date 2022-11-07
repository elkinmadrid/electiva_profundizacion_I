export declare class CreateUserDto {
    readonly email: string;
    password: string;
    readonly name: string;
    readonly lastname: string;
    readonly identification: string;
    readonly pinture?: string;
    readonly phone?: string;
    readonly gender?: string;
    readonly birthday?: string;
    readonly country?: string;
    readonly state?: string;
    readonly city?: string;
    readonly address?: string;
    readonly active?: boolean;
}