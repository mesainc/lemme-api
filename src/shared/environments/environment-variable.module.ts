import { DynamicModule, Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { ConfigModuleOptions } from '@nestjs/config/dist/interfaces';
import { EnvironmentVariableService } from './environment-variable.service';

@Module({
  imports: [ConfigModule.forRoot()],
})
export class EnvironmentVariableModule {
  static forRoot(options?: ConfigModuleOptions): DynamicModule {
    return {
      global: options.isGlobal,
      module: EnvironmentVariableModule,
      providers: [EnvironmentVariableService],
      exports: [EnvironmentVariableService],
    };
  }
}
