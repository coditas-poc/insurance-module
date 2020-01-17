import { Injectable, HttpService } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Payers } from './payers.entity';
import { PayersDto } from './Payers.dto';


@Injectable()
export class PayersService {
  constructor(
    @InjectRepository(Payers) private repository: Repository<Payers>,
    private readonly httpService: HttpService
  ) { }


  async getAllPayers(): Promise<any> {
    const payerDetails = await this.repository.find();
    return payerDetails;
    // const url = `${process.env.PVERIFY_BASE_URL}API/GetPayers`;
    // const response = await this.httpService.get(url).toPromise();
    // // await this.repository.save(response.data);
    // return response.data;
  }

  async addPayers(payersData: PayersDto): Promise<any> {
    // const url = `${process.env.PVERIFY_BASE_URL}API/GetEligibilityResponse/2428`;
    // const headersRequest = {
    //   'Content-Type': 'application/json', 
    //   'Authorization': 'Bearer HyKfv6tms0qBZYKIvHS8OOIlpvNLYV7cCbWmMWw_uwvU_XgQj6OXtAOLHKlIHg_r3Eho3NIHY5OKBpXbqgBuWCpc7lot2SdNhlgnk0q2w- 5HaCKu5qkYiJXNZTy11G0FIm8WGoGfFYmx5yp3TMXuwsR9aKn6PyHxEuhhITjwwXmkw_OOyGqhu1jUgDoWx96p7JFoaJcimUUne7S4pJpuEUL97UP97hFs-EQlZj7A7rk',
    //   'Client-User-Name': 'pverify_demo'
    // };
    // const response = await this.httpService.get(url, { headers: headersRequest }).toPromise();
    const response = await this.repository.save(payersData);
    return response;
  }
  
}
