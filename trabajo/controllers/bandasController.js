const bandas= require('../db/index')

const bandasController= {
    index: function(req,res){
        return res.render('listadoBandas', 
        {
            lista: bandas
        })
    }
}

module.exports= bandasController