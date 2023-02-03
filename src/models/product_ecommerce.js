const Sequelize = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  
  return product_ecommerce.init(sequelize, DataTypes);
}

class product_ecommerce extends Sequelize.Model {
  static init(sequelize, DataTypes) {
  return super.init({
    id: {
      autoIncrement: true,
      autoIncrementIdentity: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    price: {
      type: DataTypes.DOUBLE,
      allowNull: false
    },
    availableqty: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    status: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    user_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'user_ecommerce',
        key: 'id'
      }
    }
  }, {
    sequelize,
    tableName: 'product_ecommerce',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "product_ecommerce_pkey",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
  }
}
