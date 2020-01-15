import { Controller, Get, UseGuards, Req, Logger, Body } from '@nestjs/common';
import { PayersService } from './payers.service';
import { MessagePattern } from '@nestjs/microservices';

@Controller('payers')
export class PayersController {
  private logger = new Logger('AppController');

  constructor(private readonly payersService: PayersService) {}

  @Get()
  @MessagePattern('getPayers')
  async getPayers(@Body() request): Promise<any> {
    return await this.payersService.getAllPayers();
  }
}
