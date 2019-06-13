module.exports = (sequelize, DataTypes) => {
    var userIngredients = sequelize.define('userIngredients', {
        
        id: {
            autoIncrement: true,
            primaryKey: true,
            type: DataTypes.INTEGER
        },

        ingredient1: {
            type: DataTypes.STRING,
            notEmpty: true
        },
        ingredient2: {
            type: DataTypes.STRING,
            notEmpty: false
        },
        ingredient3: {
            type: DataTypes.STRING,
            notEmpty: false
        },
        ingredient4: {
            type: DataTypes.STRING,
            notEmpty: false
        },
        ingredient5: {
            type: DataTypes.STRING,
            notEmpty: false
        },

        addToList: {
            type: DataTypes.Boolean, 
        }

    });

    return userIngredients;

}