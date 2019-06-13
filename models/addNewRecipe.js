module.exports = (sequelize, DataTypes) => {
    var addNewRecipe = sequelize.define('addNewRecipe', {
        
        id: {
            autoIncrement: true,
            primaryKey: true,
            type: DataTypes.INTEGER
        },

        ingredients: {
            type: DataTypes.TEXT,
            notEmpty: true
        },

        instructions: {
            type: DataTypes.TEXT
        },

    });

    return addNewRecipe;

}