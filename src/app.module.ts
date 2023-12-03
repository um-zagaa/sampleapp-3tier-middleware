import { Module, NestModule, MiddlewareConsumer, RequestMethod } from '@nestjs/common';
import { HttpModule } from '@nestjs/axios';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { SystemSettingsModule } from './system_settings/system_settings.module';

@Module({
  imports: [HttpModule, SystemSettingsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
