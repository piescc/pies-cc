import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AssetsModule } from './assets/assets.module';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    AssetsModule, 
    MongooseModule.forRoot(process.env.MONGO_DB_HOST)
  ],
  controllers: [AppController], 
  providers: [], 
})
export class AppModule {}
