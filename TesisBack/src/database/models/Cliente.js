module.exports = (sequelize, dataTypes) => {
    let alias = 'Clientes';
    let cols = {
        CodCliente: {
            type: dataTypes.INTEGER(11).UNSIGNED,
            primaryKey: true,
            autoIncrement: true
        },
        RSocial: { type: dataTypesSTRING(45), allowNull: false },
        discount: { type: dataTypes.INTEGER(6).UNSIGNED,        },
        total: {
            type: dataTypes.DECIMAL(6, 2).UNSIGNED,
        },
        state: {
            type: dataTypes.INTEGER(6),
            allowNull: false
        },
        users_id: {
            type: dataTypes.INTEGER(6).UNSIGNED,
            allowNull: false
        }
        
    };
    let config = {
        timestamps: false,
    }
    const Sale = sequelize.define(alias,cols,config);
    
    Sale.associate = function (models) {
        Sale.hasMany(models.Detailsales, { // models.Movie -> Movies es el valor de alias en movie.js
            as: "Detailsales",
            foreignKey: 'Sales_id',
        })

    }
    return Sale
}
