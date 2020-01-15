import { Injectable, HttpService } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Payers } from './payers.entity';


@Injectable()
export class PayersService {
  constructor(
    @InjectRepository(Payers) private repository: Repository<Payers>,
    private readonly httpService: HttpService
  ) { }


  async getAllPayers(): Promise<any> {
    const url = `${process.env.PVERIFY_BASE_URL}API/GetPayers`;
    const response = await this.httpService.get(url).toPromise();
    // await this.repository.save(response.data);
    return response.data;
  }
}
