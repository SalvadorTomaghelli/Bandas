const bandas= require('../db/index')

const bandasController= {
    index: function(req,res){
        return res.render('listadoBandas', 
        {
            lista: bandas
        })
    },
    show: function (req,res) {
        let idBandas = req.params.id
        let resultado = []
        for (let i = 0; i < bandas.length; i++) {
            let id = bandas[i].id;
            if (idBandas==id){
                resultado.push(bandas[i])  
                      return res.render('detallesBanda', {resultado})
            
            }
            
        }
        return res.send('No se encontro la banda requerida')
    }
}






module.exports= bandasController