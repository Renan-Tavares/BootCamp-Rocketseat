const express = require('express');
const Devcontroller = require('./controllers/Devcontroller');
const LikeController = require('./controllers/LikeController');
const DislikeController = require('./controllers/DislikeController');
const routes = express.Router();


/*routes.get('/', (req,res) => {
    return res.json({message:`Olá ${req.query.name}`})
    
}); */
routes.get('/devs', Devcontroller.index);
routes.post('/devs', Devcontroller.store);
/*routes.post('/devs', (req,res) => {
  console.log(req.body);
  return res.json({ok: true});
    }) */

routes.post('/devs/:devId/likes', LikeController.store)
routes.post('/devs/:devId/dislikes', DislikeController.store)

module.exports = routes;