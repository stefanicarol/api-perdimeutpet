const kmeans = require('node-kmeans');

var apis = {
    groupOrders : function(req,res) {
        var data = req.body.orders;
        var size = req.body.size;
        let vectors = new Array();
        for (let i = 0 ; i < data.length ; i++) {
            vectors[i] = [ data[i]['cat_breed'] , data[i]['color']];
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

    assignDrivers : function(req,res) {
        var data = req.body.orders;
        var drivers = req.body.drivers;
        if (data.length==0 || drivers.length==0)
            return res.status(400).json({'message' : 'Error'});
        else {
            let vectors = new Array();
            for (let i = 0 ; i < data.length ; i++) {
                vectors[i] = [ data[i]['cat_breed'] , data[i]['color']];
            }
            kmeans.clusterize(vectors, {k: drivers.length}, (err,result) => {
                if (err) {
                    return res.status(400).json({'message' : 'Error'});
                }
                else {
                    var i = 0;
                    var t = 0;
                    var driversAssigned = [];
                    var ordersAssigned = [];
                    for(i=0;i<result.length;i++) {
                        ordersAssigned = [];
                        for(t=0;t<result[i].clusterInd.length;t++) {
                            ordersAssigned.push({
                                order_id : data[result[i].clusterInd[t]].order_id,
                                cat_breed : data[result[i].clusterInd[t]].cat_breed,
                                color : data[result[i].clusterInd[t]].color,
                                gender : data[result[i].clusterInd[t]].gender,
                                status : data[result[i].clusterInd[t]].status
                            });
                        }
                        driversAssigned.push({
                            driver_id : drivers[i].driver_id,
                            name : drivers[i].name,
                            ordersAssigned : ordersAssigned
                        });
                    }
                    return res.status(200).json(driversAssigned);
                }
            });
        }
    }
}

module.exports = apis;

/*

*/