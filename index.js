var express = require('express');
var router = express.Router();
var apis = require('./api-kmeans.js');

router.post('/grouppets', apis.groupPets);
router.post('/makecombination', apis.makeCombination);

module.exports = router;

const ApiRoute = require('./src/api.route.js');
module.exports = (app) => {
   ApiRoute(app)
}