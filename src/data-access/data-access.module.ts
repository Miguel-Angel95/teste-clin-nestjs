import { UsersProviders } from './../common/providers/users.providers';
import { SequelizeModule } from '@nestjs/sequelize';
import { Module } from '@nestjs/common';
import { ClinicProviders } from './../common/providers/clinic.providers';

@Module({
  imports: [SequelizeModule.forFeature([])],
  exports: [SequelizeModule],
  providers: [...UsersProviders, ...ClinicProviders],
})
export class DataAccessModule {}
