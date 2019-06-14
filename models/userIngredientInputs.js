module.exports = (sequelize, DataTypes) => {
    var userIngredients = sequelize.define('userIngredients', {
        
        // id: {
        //     type: DataTypes.INTEGER
        // },

        ingredient1: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        ingredient2: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        ingredient3: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        ingredient4: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        ingredient5: {
            type: DataTypes.STRING,
            allowNull: false,
        },

        addToList: {
            type: DataTypes.BOOLEAN,
            defaultValue: false
        }

    });

    return userIngredients;

}