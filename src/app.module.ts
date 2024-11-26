import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { EnvironmentVariableModule } from './shared/environments/environment-variable.module';
import { EnvironmentVariableService } from './shared/environments/environment-variable.service';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    EnvironmentVariableModule.forRoot({ isGlobal: true }),
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: async (configService: EnvironmentVariableService) =>
        configService.databaseConfig,
      inject: [EnvironmentVariableService],
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
