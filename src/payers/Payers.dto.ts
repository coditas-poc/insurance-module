import { ApiProperty } from '@nestjs/swagger';

export class PayersDto implements Readonly<PayersDto> {
    @ApiProperty()
    ElgRequestID: string;
    @ApiProperty()
    PayerCode: string;
    @ApiProperty()
    PayerName: string;
    @ApiProperty()
    VerificationStatus: string;
    @ApiProperty()
    Plan: string;
    @ApiProperty()
    VerificationType: string;
    @ApiProperty()
    Status: string;
    @ApiProperty()
    DOSStart: string;
    @ApiProperty()
    DOSEnd: string;
    @ApiProperty()
    EffectiveFrom: string;
    @ApiProperty()
    ExpiredOn: string;
}

