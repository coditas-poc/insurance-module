import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PayersModule } from 'src/payers/payers.module';

@Module({
  imports: [
    TypeOrmModule.forRootAsync({
      useFactory: () => ({
        type: 'postgres',
        host: process.env.POSTGRES_HOST,
        // tslint:disable-next-line:radix
        port: parseInt(process.env.POSTGRES_PORT),
        username: process.env.POSTGRES_USER,
        password: process.env.POSTGRES_PASSWORD,
        database: process.env.POSTGRES_DATABASE,
        entities: [__dirname + '/**/*.entity{.ts,.js}'],
        synchronize: true,
        logging: true,
        migrationsTableName: 'migration',
        migrations: ['src/migration/*.ts'],
        cli: { migrationsDir: 'src/migration' },
      }),
    }),
    PayersModule,
  ],
})
export class AppModule {}
