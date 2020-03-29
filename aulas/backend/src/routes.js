const express = require('express');
const  {celebrate,Segments,Joi} = require('celebrate');
const routes = express.Router();

const OngController = require('./controllers/OngController');
const IncidentController = require('./controllers/IncidentController');
const ProfileController = require('./controllers/ProfileController');
const SessionController = require('./controllers/SessionController');


routes.get('/ongs/', OngController.index);
routes.post('/ongs/',celebrate({
        [Segments.BODY]:Joi.object().keys({
            name:Joi.string().required(),
            email:Joi.string().required().email(),
            whatsapp:Joi.string().required().min(10).max(11),
            city:Joi.string().required(),
            uf: Joi.string().required().length(2),
        })
    }) ,OngController.create);


routes.get('/incidents/',celebrate({
    [Segments.QUERY]: Joi.object().keys({
        page: Joi.number(),
    }),
}), IncidentController.index)
routes.post('/incident/',IncidentController.create)
routes.delete('/incident/:id', celebrate({
    [Segments.PARAMS]: Joi.object().keys({
        id: Joi.number().required(),
    })
}),IncidentController.delete)

routes.get('/profile',celebrate({
    [Segments.HEADERS]:Joi.object({
        authorization:Joi.string().required(),
    }).unknown(),
}), ProfileController.index);

routes.post('/session',SessionController.create);

module.exports = routes;


//routes.get('/users',(request,response) => {       //query params
    //  app.get('/users/:id',(request,response) =>{ //route params 
    //  app.post('/users',(request,response) => {   //request body 
    //Para passar parâmetros na url por 'query params' ->localhost/users?nome='Marcelo'&idade=17
//      const paramsQuery = request.query;
    //Para passar parâmetros na url por 'route params' => localhost/users/1;
    //  const paramsRoute = request.params; 
    //Para passar parâmetros via 'request body' ->localhost/users; (caso deseje passar um json no corpo da requisição POST, lembre-se de add 'app.use(express.json());' lá em cima)
    //  const body = request.body;  
    //  console.log(paramsQuery);
    //  console.log(paramsRoute);
    //  console.log(body);
    //     return response.json(
    //         {
    //             evento: "Semana OmniStack 11.0",
    //             aluno: "Marcelo Santana Camacho"
    //         });
    // });
