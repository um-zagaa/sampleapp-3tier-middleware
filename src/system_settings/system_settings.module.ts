/* system_settings.module.ts */
/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { SystemSettingEntitiy } from './system_setting.entity';
import { SystemSettingsController } from './system_settings.controller';
import { SystemSettingsService } from './system_settings.service';
import { HttpModule } from '@nestjs/axios';

@Module({
  imports: [HttpModule, SystemSettingEntitiy],
  controllers: [SystemSettingsController],
  providers: [SystemSettingsService]
})
export class SystemSettingsModule { }