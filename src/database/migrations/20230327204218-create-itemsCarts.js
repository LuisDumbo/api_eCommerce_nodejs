'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */
    await queryInterface.createTable('items_carts', {
      id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
      },
      amount: {
        type: Sequelize.INTEGER,
        defaultValue: 1,
        allowNull: false
      },
      carts_id: {
        type: Sequelize.INTEGER,
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE',
        references: {
          model: 'carts',
          key: 'id',
          as: 'carts_id',
        }
      },
      items_id: {
        type: Sequelize.INTEGER,
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE',
        references: {
          model: 'items',
          key: 'id',
          as: 'items_id',
        }
      },
      created_at: {
        type: Sequelize.DATE,
        allowNull: false

      },
      updated_at: {
        type: Sequelize.DATE,
        allowNull: false

      }
    });
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */

    await queryInterface.dropTable('items_carts');
  }
};
