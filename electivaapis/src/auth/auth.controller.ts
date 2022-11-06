import { Controller, Post, Req, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { Request } from 'express';
import { User } from 'src/users/entities/user.entity';
import { AuthService } from './auth.service';
import { ApiBearerAuth, ApiTags, ApiOperation } from '@nestjs/swagger'


@ApiBearerAuth()
@ApiTags('auth')
@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @UseGuards(AuthGuard('local'))
  @Post('login')
  @ApiOperation({summary: 'Used to LOgin to the API'})
  login(@Req() req: Request){
    const user = req.user as User
    return this.authService.generateJWT(user)
  }
}
