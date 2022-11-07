import { Strategy } from 'passport-jwt';
import config from '../../config';
import { ConfigType } from '@nestjs/config';
import { PayloadToken } from '../dto/auth.dto';
declare const JwtStrategy_base: new (...args: any[]) => Strategy;
export declare class JwtStrategy extends JwtStrategy_base {
    constructor(configService: ConfigType<typeof config>);
    validate(payload: PayloadToken): Promise<PayloadToken>;
}
export {};
