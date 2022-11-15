module.exports = (sequelize, dataTypes) => {
    let alias = 'Clientes';
    let cols = {
        CodCliente: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        RSocial: { type: dataTypes.STRING(45), allowNull: false },
        discount: { type: dataTypes.INTEGER,        },
        total: {
            type: dataTypes.DECIMAL(6, 2).UNSIGNED,
        },
        state: {
            type: dataTypes.INTEGER,
            allowNull: false
        },
        users_id: {
            type: dataTypes.INTEGER,
            allowNull: false
        }
        
    };
    let config = {
        timestamps: false,
    }
    const Clientes = sequelize.define(alias,cols,config);
    
    Clientes.associate = function (models) {
        Clientes.hasMany(models.Sucursales, { // models.Movie -> Movies es el valor de alias en movie.js
            as: "Sucursales",
            foreignKey: 'codSucursal',
        })

    }
    return Clientes
}
