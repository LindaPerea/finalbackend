const Sequelize = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  return order_ecommerce.init(sequelize, DataTypes);
}

class order_ecommerce extends Sequelize.Model {
  static init(sequelize, DataTypes) {
  return super.init({
    id: {
      autoIncrement: true,
      autoIncrementIdentity: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    total_price: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    user_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'user_ecommerce',
        key: 'id'
      }
    },
    status: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'order_ecommerce',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "order_ecommerce_pkey",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
  }
}
