module.exports = (sequelize, dataTypes) => {
    let alias = 'ClientesXVendedor';
    let cols = {
        CodCliente: {
            type: dataTypes.BIGINT(10).UNSIGNED,
            primaryKey: true,
            autoIncrement: true
        },
        CodVendedor: {
            type: dataTypes.BIGINT(10).UNSIGNED,
            allowNull: true
        }
    };
    let config = {
        timestamps: true,
        createdAt: 'created_at',
        updatedAt: 'updated_at',
        deletedAt: false
    }
    const ClientesXVendedor = sequelize.define(alias,cols,config);    

    ClientesXVendedor.associate = function (models) {
        console.log(models);
        ClientesXVendedor.belongsTo(models.Clientes, { // models.Movie -> Movies es el valor de alias en movie.js
            as: "Clientes",
            foreignKey: 'CodCliente',
        })
        ClientesXVendedor.belongsTo(models.Products,{
            as:"Usuarios",
            foreignKey:"CodUsuario",
            timestamps: false
        })
     
        
    }
    return ClientesXSucursal
}
