import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger'

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.enableCors()

  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true, // Ignorar datos que no esten en los dto
      forbidNonWhitelisted: true // Lanzar error si existen datos prohibidos
    })
  )

  const config = new DocumentBuilder()
    .setTitle('API - Electiva Prof I')
    .setDescription('Elkin Madrid, Andrea Arevalo y Victor Arzuza')
    .setContact('Elkin Madrid', 'elkinmadrid.co', 'eamadridp@ul.edu.co')
    .setVersion('1.0.0')
    .addBearerAuth()
    .build()

  const document = SwaggerModule.createDocument(app, config)
  SwaggerModule.setup('docs', app, document)

  await app.listen(process.env.PORT || 3000);
}
bootstrap();
