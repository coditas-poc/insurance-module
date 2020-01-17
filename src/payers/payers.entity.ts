import { Entity, Column } from 'typeorm';
import { BaseEntity } from '../base.entity';

@Entity('payers')
export class Payers extends BaseEntity {
    @Column('varchar', { length: 200 })
    ElgRequestID: string
    @Column('varchar', { length: 200 })
    PayerCode: string;
    @Column('varchar', { length: 200 })
    PayerName: string;
    @Column('varchar', { length: 200 })
    Plan: string;
    @Column('varchar', { length: 200, nullable: true })
    VerificationStatus: string;
    @Column('varchar', { length: 200, nullable: true })
    VerificationType: string;
    @Column('varchar', { length: 200, nullable: true })
    Status: string;
    @Column('varchar', { length: 200, nullable: true })
    DOSStart: string;
    @Column('varchar', { length: 200, nullable: true })
    DOSEnd: string;
    @Column('varchar', { length: 200, nullable: true })
    EffectiveFrom: string;
    @Column('varchar', { length: 200, nullable: true })
    ExpiredOn: string;  
}