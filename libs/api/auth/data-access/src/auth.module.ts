import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { AuthRepository } from './auth.repository';
import { CorsMiddleware } from '@mp/api/core/feature';

@Module({
  providers: [AuthRepository],
  exports: [AuthRepository],
})
export class AuthModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(CorsMiddleware)
      .forRoutes(...['login','register']);
  }
}
