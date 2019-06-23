module.exports = function(sequelize, DataTypes) {
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
        },

    });

    // shoppingLists.associate = function(models) {
    //     // We're saying that a shoppinglist should belong to an User
    //     // A shoppingList can't be created without an User due to the foreign key constraint
    //     shoppingLists.belongsTo(models.user, {
    //         foreignKey: "userId",
    //         allowNull: false
    //     });
    // };


return shoppingLists;

}

// needs to associate the user with the recipe.