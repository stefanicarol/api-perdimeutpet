const kmeans = require('node-kmeans');
// API PARA EXECUTAR O ALGORITMO KMEANS
var apis = {
    groupPets : function(req,res) {
        var data = req.body.pets;
        var size = req.body.size;
        let vectors = new Array();
        for (let i = 0 ; i < data.length ; i++) {
            vectors[i] = [ data[i]['cat_breed'], data[i]['color'], data[i]['size'], data[i]['pelage'], data[i]['gender'], data[i]['species']];
        }
        kmeans.clusterize(vectors, {k: size}, (err,result) => {
            if (err)
                return res.status(400).json({'status' : 'Error'});

            else {
                var json = result;
                return res.status(200).json(json);
            }
        });
    },

    makeCombination : function(req,res) {
        var data = req.body.match;
        var pets = req.body.pets;
        if (data.length==0 || pets.length==0)
            return res.status(400).json({'message' : 'Error'});
        else {
            let vectors = new Array();
            for (let i = 0 ; i < data.length ; i++) {
                vectors[i] = [ data[i]['cat_breed'], data[i]['color'], data[i]['size'], data[i]['pelage'], data[i]['gender'], data[i]['species']];
            }
            kmeans.clusterize(vectors, {k: pets.length}, (err,result) => {
                if (err) {
                    return res.status(400).json({'message' : 'Error'});
                }
                else {
                    var i = 0;
                    var t = 0;
                    var combinationAssigned = [];
                    var petsAssigned = [];
                    for(i=0;i<result.length;i++) {
                        petsAssigned = [];
                        for(t=0;t<result[i].clusterInd.length;t++) {
                            petsAssigned.push({
                                order_id : data[result[i].clusterInd[t]].order_id,
                                cat_breed : data[result[i].clusterInd[t]].cat_breed,
                                color : data[result[i].clusterInd[t]].color,
                                gender : data[result[i].clusterInd[t]].gender,
                                status : data[result[i].clusterInd[t]].status
                            });
                        }
                        combinationAssigned.push({
                            id : pets[i].id,
                            photo : pets[i].photo,
                            petsAssigned : petsAssigned
                        });
                    }
                    return res.status(200).json(combinationAssigned);
                }
            });
        }
    }
}

module.exports = apis;

/*

*/