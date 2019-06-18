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
            type: DataTypes.JSON,
            allowNull: false,
        },

        // 
        // ingredient2: {
        //     type: DataTypes.STRING,
        //     allowNull: false,
        // },
        // ingredient3: {
        //     type: DataTypes.STRING,
        //     allowNull: false,
        // },
        // ingredient4: {
        //     type: DataTypes.STRING,
        //     allowNull: false,
        // },
        // ingredient5: {
        //     type: DataTypes.STRING,
        //     allowNull: false,
        // },

        // addToList: {
        //     type: DataTypes.BOOLEAN,
        //     defaultValue: false
        // }
    });

    shoppingLists.associate = function(models) {
        // We're saying that a Post should belong to an Author
        // A Post can't be created without an Author due to the foreign key constraint
        shoppingLists.belongsTo(models.user, {
          foreignKey: {
            allowNull: false
          }
        });
      };

    return shoppingLists;

}

// needs to associate the user with the recipe.