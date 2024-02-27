import { Inject, Injectable, NotFoundException } from '@nestjs/common';
import { Clinics } from './../../common/entities';
import { CreateClinicDto } from 'src/common/dtos/create-clinic-dto';
import { UpdateClinicDto } from 'src/common/dtos/update-clinic.dto';
import { Op } from 'sequelize';

@Injectable()
export class ClinicService {
  constructor(@Inject('CLINIC_REPOSITORY') private clinicRepository: typeof Clinics) {}

  async createClinic(createClinicDto: CreateClinicDto) {
    const clinic = await this.clinicRepository.create<Clinics>({
      nomeClinica: createClinicDto.nomeClinica,
      nomeResponsavel: createClinicDto.nomeResponsavel,
      telefone: createClinicDto.telefone,
      cep: createClinicDto.cep,
      uf: createClinicDto.uf,
      cidade: createClinicDto.cidade,
      bairro: createClinicDto.bairro,
      longradouro: createClinicDto.longradouro,
      numero: createClinicDto.numero,
      complemento: createClinicDto.complemento,
    });
    return clinic.toJSON();
  }

  async list(page = 1, limit = 10, search = '') {
    const offset = (page - 1) * limit;
    const searchTerm = `%${search}%`.toLowerCase();
    const { count, rows } = await this.clinicRepository.findAndCountAll({
      where: {
        nomeClinica: {
          [Op.iLike]: searchTerm,
        },
      },
      offset,
      limit,
    });
    return { totalPages: Math.ceil(count / limit), clinics: rows.map((clinic) => clinic.toJSON()) };
  }

  async getById(id: string) {
    const clinic = await this.clinicRepository.findByPk(id);
    if (!clinic) {
      throw new NotFoundException('Clínica não encontrada');
    }
    return clinic.toJSON();
  }

  async update(id: string, updateClinicDto: UpdateClinicDto) {
    const clinic = await this.clinicRepository.findByPk(id);

    if (!clinic) {
      throw new NotFoundException('Clínica não encontrada');
    }

    await this.clinicRepository.update(updateClinicDto, { where: { id } });

    return { message: 'Clínica atualizada com sucesso' };
  }

  async delete(id: string) {
    const clinic = await this.clinicRepository.findByPk(id);

    if (!clinic) {
      throw new NotFoundException('Clínica não encontrada');
    }

    const deletedClinic = await this.clinicRepository.destroy({ where: { id } });

    if (deletedClinic === 0) {
      throw new NotFoundException('Falha ao deletar a clínica');
    }

    return { message: 'Clínica deletada com sucesso' };
  }
}
