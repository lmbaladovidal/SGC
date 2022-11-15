module.exports = (sequelize, dataTypes) => {
    let alias = 'Transportistas';
    let cols = {
        CodTrasportita: {
            type: dataTypes.INTEGER(11).UNSIGNED,
            primaryKey: true,
            autoIncrement: true
        },
        Descripcion: { type: dataTypesSTRING(50), allowNull: false },
    };
    let config = {
        timestamps: false,
    }
    const transportistaPage = sequelize.define(alias,cols,config);
    transportistaPage.findAll()
    .then(resultado=>{
        const cervezas = resultado
        const datos ={cervezas,userLogged}
        res.render('./product/productPage',{datos})
        }
    )
    .catch(error=>{console.log(error)})

    return transportistaPage
}
