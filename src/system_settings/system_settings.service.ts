import { HttpService } from "@nestjs/axios";
import { Injectable, Logger } from "@nestjs/common";
import { AxiosError } from "axios";
import { SystemSettingEntitiy } from "./system_setting.entity";

import { catchError, firstValueFrom } from 'rxjs';

@Injectable()
export class SystemSettingsService {
  private readonly logger = new Logger(SystemSettingsService.name);
  constructor(private readonly httpService: HttpService) {}

  async findAll(): Promise<SystemSettingEntitiy[]> {
    const { data } = await firstValueFrom(
      this.httpService.get<SystemSettingEntitiy[]>('http://localhost:3002/system_settings').pipe(
        catchError((error: AxiosError) => {
          this.logger.error(error.response.data);
          throw 'An error happened!';
        }),
      ),
    );
    return data;
  }
}