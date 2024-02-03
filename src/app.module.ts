import { Module } from '@nestjs/common';

import { PrismaController } from './prisma/prisma.controller';
import { PrismaService } from './prisma/prisma.service';
import { PrismaModule } from './prisma/prisma.module';
import { DataModule } from './data/data.module';
import { ConfigModule, ConfigService } from '@nestjs/config';

@Module({
  imports: [ConfigModule.forRoot({ isGlobal: true }), PrismaModule, DataModule],
  controllers: [PrismaController],
  providers: [PrismaService, ConfigService],
})
export class AppModule {}
