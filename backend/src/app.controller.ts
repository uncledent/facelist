import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { FaceItem } from './interfaces/faceItem.interface';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getFaceList(): FaceItem[] {
    return this.appService.getFaceList();
  }
}
