module.exports = (sequelize, DataTypes) => {
    var shoppingLists = sequelize.define('shoppingLists', {
        
        id: {
            autoIncrement: true,
            primaryKey: true,
            type: DataTypes.INTEGER
        },

        title: {
            type: DataTypes.STRING,
            allowNull: false,
        },

        ingredients: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        
        userID: {
            type: DataTypes.INTEGER,
            allowNull: false,
        }
        
    });

    shoppingLists.associate = models => {
        // We're saying that a Post should belong to an Author
        // A Post can't be created without an Author due to the foreign key constraint
        shoppingLists.belongsTo(models.user, {
          foreignKey: "userID", 
            allowNull: false
          }
        );
      };

    return shoppingLists;

}

// needs to associate the user with the recipe.