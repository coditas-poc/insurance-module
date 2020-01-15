import { Module, HttpModule } from '@nestjs/common';
import { PayersController } from './payers.controller';
import { PayersService } from './payers.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Payers } from './payers.entity';
@Module({
  imports: [HttpModule, TypeOrmModule.forFeature([Payers])  ],
  controllers: [PayersController],
  providers: [PayersService],
  exports: [PayersService]
})
export class PayersModule {}
