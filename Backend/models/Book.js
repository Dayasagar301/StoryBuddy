const { DataTypes } = require("sequelize");
const { sequelize } = require("../utils/db.config");
const { Users } = require("./users.models");

// Define the Users model

const Book = sequelize.define("Books", {
  id: { 
    type: DataTypes.INTEGER, 
    primaryKey: true, 
    autoIncrement: true 
  },
  userId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: Users, // Use the Users model object here
      key: '_id'    // Key in the referenced model
    }
  },
  title: { 
    type: DataTypes.STRING, 
    allowNull: false, 
    trim: true 
  },
  description: { 
    type: DataTypes.STRING, 
    allowNull: false, 
    trim: true 
  },
  image: { 
    type: DataTypes.STRING, 
    allowNull: true 
  },
  date: { 
    type: DataTypes.DATE, 
    defaultValue: DataTypes.NOW 
  },
  category: {
    type: DataTypes.JSON,
    allowNull: false,
    defaultValue: {
      science: false,
      math: false,
      history: false,
    },
    validate: {
      isValidCategory(value) {
        if (!value.hasOwnProperty('science') || !value.hasOwnProperty('math') || !value.hasOwnProperty('history')) {
          throw new Error('Category must have science, math, and history properties.');
        }
      }
    }
  }
}, {
  timestamps: true, // Enables createdAt and updatedAt
  version: false,   // Disables versioning
  hooks: {
    beforeUpdate: (book, options) => {
      book.updatedAt = new Date();
    }
  }
});

// Establishing associations
Book.belongsTo(Users, { foreignKey: 'userId', as: 'user' });

module.exports = { Book };