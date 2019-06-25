module.exports = function(sequelize, DataTypes) {
    var user = sequelize.define('user', {
        
        id: {
            autoIncrement: true,
            primaryKey: true,
            type: DataTypes.INTEGER
        },

        firstname: {
            type: DataTypes.STRING,
            notEmpty: true
        },

        lastname: {
            type: DataTypes.STRING,
            notEmpty: true
        },

        username: {
            type: DataTypes.STRING,
            unique: true,
        },

        email: {
            type: DataTypes.STRING,
            validate: {
                isEmail: true
            }
        },

        password: {
            type: DataTypes.STRING,
            allowNull: false
        },

        last_login: {
            type: DataTypes.DATE
        },

        status: {
            type: DataTypes.ENUM('active', 'inactive'),
            defaultValue: 'active'
        }

    });

    user.associate = function(models) {
        // Associating user with shoppingList
        // When an user is deleted, also delete any associated shoppingList
        user.hasMany(models.shoppingLists, {
          onDelete: "cascade"
        });
      };

      user.associate = function(models) {
        // Associating user with shoppingList
        // When an user is deleted, also delete any associated shoppingList
        user.hasMany(models.results, {
          onDelete: "cascade"
        });
      };

    return user;

}