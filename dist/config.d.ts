declare const _default: (() => {
    postgres: {
        user: string;
        password: string;
        dbName: string;
        host: string;
        port: number;
    };
    jwtSecret: string;
}) & import("@nestjs/config").ConfigFactoryKeyHost<{
    postgres: {
        user: string;
        password: string;
        dbName: string;
        host: string;
        port: number;
    };
    jwtSecret: string;
}>;
export default _default;
