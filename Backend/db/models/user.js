'use strict';
const { Validator } = require('sequelize/types');

module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define(
    'User',
    {
      username: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          isEmail: false,
        },
      },
      firstName: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          len: [1, 50],
        },
      },
      lastName: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          len: [1, 50],
        },
      },
      email: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          len: [3, 250],
          isEmail: true,
        },
      },
      phone: {
        type: DataTypes.INTEGER,
        validate: {
          len: [7, 12],
        },
        allowNull: false,
      },
      hashedPassword: {
        type: DataTypes.STRING.BINARY,
        allowNull: false,
        validate: {
          len: [60, 60],
        },
      },
      city: {
        type: DataTypes.STRING,
        validate: {
          len: [3, 250],
        },
        allowNull: false,
      },
      state: {
        type: DataTypes.STRING,
        validate: {
          len: [3, 250],
        },
        allowNull: false,
      },
      zip: {
        type: DataTypes.INTEGER,
        validate: {
          len: [5, 5],
        },
        allowNull: false,
      },
      address1: { type: DataTypes.STRING, allowNull: false },
      address2: { type: DataTypes.STRING, allowNull: false },
    },
    {}
  );
  User.associate = function (models) {
    // associations can be defined here
  };
  return User;
};
