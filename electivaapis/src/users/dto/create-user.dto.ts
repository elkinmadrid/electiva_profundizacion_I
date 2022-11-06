import { IsBoolean, IsEmail, IsNotEmpty, IsOptional, IsString } from 'class-validator'
import { ApiProperty } from '@nestjs/swagger'


export class CreateUserDto {

    @IsEmail()
    @IsNotEmpty()
    @ApiProperty({description: 'The email of the user'})
    readonly email: string;
    @IsString()
    @IsNotEmpty()
    @ApiProperty({description: 'The password of the user'})
    password: string;

    @IsNotEmpty()
    @IsString()
    @ApiProperty({description: 'The name of the user'})
    readonly name: string;
    @IsNotEmpty()
    @IsString()
    @ApiProperty({description: 'The lastname of the user'})
    readonly lastname: string;
    @IsNotEmpty()
    @IsString()
    @ApiProperty({description: 'The identification of the user'})
    readonly identification: string;


    @IsString()
    @IsOptional()
    @ApiProperty({description: 'The photo of the user'})
    readonly pinture?: string;
    @IsString()
    @IsOptional()
    @ApiProperty({description: 'The number phone of the user'})
    readonly phone?: string;
    @IsString()
    @IsOptional()
    @ApiProperty({description: 'The gender of the user'})
    readonly gender?: string;
    @IsString()
    @IsOptional()
    @ApiProperty({description: 'The birthday of the user'})
    readonly birthday?: string;
    @IsString()
    @IsOptional()
    @ApiProperty({description: 'The country of the user'})
    readonly country?: string;
    @IsString()
    @IsOptional()
    @ApiProperty({description: 'The state of the user'})
    readonly state?: string;
    @IsString()
    @IsOptional()
    @ApiProperty({description: 'The city of the user'})
    readonly city?: string;
    @IsString()
    @IsOptional()
    @ApiProperty({description: 'The address of the user'})
    readonly address?: string;
    @IsBoolean()
    @IsOptional()
    @ApiProperty({description: 'User is active'})
    readonly active?: boolean;
}
