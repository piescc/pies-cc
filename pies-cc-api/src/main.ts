import * as dotenv from "dotenv"
dotenv.config()
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { NestExpressApplication } from '@nestjs/platform-express';
import * as fileUpload from "express-fileupload"
import * as compression from "compression"

async function bootstrap() {
    const app = await NestFactory.create<NestExpressApplication>(AppModule);
    app.use(fileUpload()) // Implement file uploading through req.files
    app.use(compression()) // Implement gzip compression
    app.listen(5000)
}
bootstrap();
