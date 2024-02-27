import { Table, Column, Model, DataType } from 'sequelize-typescript';

@Table({
  timestamps: true,
  createdAt: true,
  updatedAt: true,
})
export class Clinics extends Model<Clinics> {
  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  nomeClinica: string;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  nomeResponsavel: string;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  telefone: string;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  cep: string;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  uf: string;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  cidade: string;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  bairro: string;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  longradouro: string;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  numero: string;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  complemento: string;
}
