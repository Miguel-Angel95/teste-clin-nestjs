import { Body, Controller, Delete, Get, HttpCode, Param, Post, Put, Query, UseGuards } from '@nestjs/common';
import { Public } from '../auth/public.decorator';
import { CreateClinicDto } from 'src/common/dtos/create-clinic-dto';
import { ClinicService } from './../../business/services/clinic.service';
import { UpdateClinicDto } from 'src/common/dtos/update-clinic.dto';
import { JwtAuthGuard } from 'src/common/auth/jwt-auth.guard';

@Controller('/clinic')
export class ClinicController {
  constructor(private readonly clinicService: ClinicService) {}

  @Public()
  @Post()
  @HttpCode(201)
  create(@Body() createClinicDto: CreateClinicDto) {
    return this.clinicService.createClinic(createClinicDto);
  }

  @Get()
  @UseGuards(JwtAuthGuard)
  @HttpCode(200)
  async list(@Query('page') page = 1, @Query('limit') limit = 10, @Query('search') search = '') {
    return this.clinicService.list(page, limit, search);
  }

  @Get(':id')
  @UseGuards(JwtAuthGuard)
  @HttpCode(200)
  getById(@Param('id') id: string) {
    return this.clinicService.getById(id);
  }

  @Put(':id')
  @UseGuards(JwtAuthGuard)
  @HttpCode(200)
  update(@Param('id') id: string, @Body() updateClinicDto: UpdateClinicDto) {
    return this.clinicService.update(id, updateClinicDto);
  }

  @Delete(':id')
  @UseGuards(JwtAuthGuard)
  @HttpCode(204)
  delete(@Param('id') id: string) {
    return this.clinicService.delete(id);
  }
}
