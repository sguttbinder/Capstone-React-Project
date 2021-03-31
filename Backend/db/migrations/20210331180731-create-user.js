'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Users', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      username: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true,
      },
      firstName: {
        type: Sequelize.STRING(50),
        allowNull: false,
      },
      lastName: {
        type: Sequelize.STRING(50),
        allowNull: false,
      },
      email: {
        type: Sequelize.STRING(75),
        allowNull: false,
        unique: true,
      },
      phone: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      hashedPassword: {
        type: Sequelize.STRING(250),
        allowNull: false,
      },
      city: {
        type: Sequelize.STRING(250),
        allowNull: false,
      },
      state: {
        type: Sequelize.STRING(2),
        allowNull: false,
      },
      zip: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      address1: {
        type: Sequelize.STRING(250),
        allowNull: false,
      },
      address2: {
        type: Sequelize.STRING(250),
        allowNull: false,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.fn('now'),
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.fn('now'),
      },
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Users');
  }
};