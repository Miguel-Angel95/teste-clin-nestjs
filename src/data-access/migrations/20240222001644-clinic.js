'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.createTable('Clinic', {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        allowNull: false,
        autoIncrement: true,
      },
      nomeClinica: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      nomeResponsavel: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      telefone: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      cep: {
        unique: true,
        type: Sequelize.STRING,
        allowNull: false,
      },
      uf: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      cidade: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      bairro: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      longradouro: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      numero: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      complemento: {
        type: Sequelize.DATE,
        allowNull: false,
      },
    });
  },

  down: async (queryInterface) => {
    return queryInterface.dropTable('Clinic');
  },
};
