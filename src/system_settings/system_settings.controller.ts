import { Controller, Get, Param, ParseIntPipe } from '@nestjs/common';
import { SystemSettingsService } from './system_settings.service';
@Controller('system_settings')
export class SystemSettingsController {

    constructor(private systemSettingService: SystemSettingsService) { }

    @Get()
    getSystemSettings() {
        return this.systemSettingService.findAll();
    }
}