module.exports = (sequelize,dataTypes) => {

    const alias = 'Sucursales';
    const columns = {
                        codSucursal:{
                            type: dataTypes.INTEGER,
                            primaryKey : true,
                            autoIncrement: true,
                            allowNull:false,
                        },
                        codcliente:{
                            type:dataTypes.INTEGER
                        },
                        seguncliente:{
                            type:dataTypes.TEXT('tiny')
                        },
                        denominacion:{type:dataTypes.TEXT('tiny')},
                        direccion:{type:dataTypes.STRING},
                        codLocalidad:{type:dataTypes.INTEGER},
                        codProvincia:{type:dataTypes.INTEGER},
                        codPostal:{type:dataTypes.STRING},
                        codEntregaMetrop:{type:dataTypes.STRING},
                        diasEntrega:{type:dataTypes.INTEGER},
                        descLocalidad:{type:dataTypes.STRING},
                        descProvincia:{type:dataTypes.STRING},
                        letraProvincia:{type:dataTypes.STRING},
                        codEstado:{type:dataTypes.INTEGER},
                        codTransporteRedespacho:{type:dataTypes.INTEGER},
                        EANPlanexwareSucursal:{type:dataTypes.STRING}

                    }
    const config = {
        timestamps: false,

    };

    const Sucursales = sequelize.define(alias,columns,config);
    Sucursales.associate = (models)=>{
        Sucursales.belongsTo(models.Clientes,{
            as: 'Clientes',
            foreignKey:"codcliente"
        })
    }
    return Sucursales;
}