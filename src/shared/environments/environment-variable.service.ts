import { Injectable } from '@nestjs/common'
import { ConfigService } from '@nestjs/config'
import { TypeOrmModuleOptions } from '@nestjs/typeorm'

@Injectable()
export class EnvironmentVariableService {
  constructor(private configService: ConfigService) {}

  get isProduction(): boolean {
    return (
      this.configService.get<string>('NODE_ENV', { infer: true }) ===
      'production'
    )
  }

  get isDevelopment(): boolean {
    return (
      this.configService.get<string>('NODE_ENV', { infer: true }) ===
      'development'
    )
  }

  get isTest(): boolean {
    return (
      this.configService.get<string>('NODE_ENV', { infer: true }) === 'test'
    )
  }

  get databaseConfig(): TypeOrmModuleOptions {
    return {
      type: 'postgres',
      host: this.configService.get<string>('DATABASE_HOST'),
      port: this.configService.get<number>('DATABASE_PORT'),
      username: this.configService.get<string>('DATABASE_USERNAME'),
      password: this.configService.get<string>('DATABASE_PASSWORD'),
      database: this.configService.get<string>('DATABASE_NAME'),
      entities: [
        __dirname + '/../../shared/database/typeorm/entities/*.entity{.ts,.js}',
      ],
      synchronize: !this.isProduction,
      logging: this.isDevelopment,
      migrations: [
        __dirname + '/../../shared/database/typeorm/migrations/*{.ts,.js}',
      ],
    }
  }
}
