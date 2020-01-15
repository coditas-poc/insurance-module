import { Entity, Column } from 'typeorm';
import { BaseEntity } from '../base.entity';

@Entity('payers')
export class Payers extends BaseEntity {
    @Column('varchar', { length: 200 })
    PayerCode: string;
    @Column('varchar', { length: 200 })
    PayerName: string;
    @Column('varchar', { length: 200, nullable: true })
    Status: string;
    @Column('varchar', { length: 200, nullable: true })
    plan: string;   
}