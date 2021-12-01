import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AssetsModule } from './assets/assets.module';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    AssetsModule, 
    MongooseModule.forRoot(`mongodb://mainadmin:${process.env.MONGO_DB_PASSWORD}@database:27017`)
  ],
  controllers: [AppController], 
  providers: [], 
})
export class AppModule {}
