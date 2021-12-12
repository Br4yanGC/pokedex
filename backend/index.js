var express = require('express');
var app = express();

var mysql = require('mysql');
var cors = require('cors');
app.use(cors());
app.use(express.json({limit: "50mb"}));

var picturesDirectory = "figures/";
var fs = require('fs');

const port = 3000;

app.get('/pokemons', function(req, res){
    // Step 0: Se define la conexion a la BD
    var connection = mysql.createConnection({
        host: 'localhost',
        user: 'utec',
        password: '1234567890',
        database: 'pokedex'
    });
    // Step 1: Se establece la conexion
    connection.connect();
    // Step 2: Se envia el query
    var myQuery =   " SELECT id, name, height, weight, " +
                    " category, ability, type, src_img " +
                    " FROM pokemon; "
    connection.query(myQuery, function(error, results, fields){
        // Se almacena lo retornado por el query en 'results'. De haber algún error llegara a 'error'
        if (error) throw error; 
        // Step 3: Se procesa el resultado de la BD
        res.send(results);
        // Step 4: Se cierra la conexion
        connection.end();
    });   
});

app.get('/pokemons/:id', function(req, res){
    // Step 0: Se define la conexion a la BD
    var connection = mysql.createConnection({
        host: 'localhost',
        user: 'utec',
        password: '1234567890',
        database: 'pokedex'
    });
    // Step 1: Se establece la conexion
    connection.connect();
    // Step 2: Se envia el query
    var myQuery =   " SELECT id, name, height, weight, " +
                    " category, ability, type, src_img " +
                    " FROM pokemon" +
                    " WHERE id = ? ";
    var myValues = [req.params.id];
    connection.query(myQuery, myValues, function(error, results, fields){
        // Se almacena lo retornado por el query en 'results'. De haber algún error llegara a 'error'        
        if (error) throw error;
        // Step 3: Se procesa el resultado de la BD
        res.send(results[0]);
        // Step 4: Se cierra la conexion
        connection.end();
    });
});

/*
    {
      "name": "Rayquaza",
      "height": "23' 00\"",
      "weight": "455.3 lbs",
      "category": "Sky High",
      "ability": "Air Lock",
      "type": "Dragon",
      "src_img": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/384.png"  
    }
*/

app.post('/pokemons', function(req, res){
    // Step 0: Se define la conexion a la BD
    var connection = mysql.createConnection({
        host: 'localhost',
        user: 'utec',
        password: '1234567890',
        database: 'pokedex'
    });
    // Step 1: Se establece la conexion
    connection.connect();
    // Step 2: Se envia el query
    var myQuery =   " INSERT INTO pokemon (name, height, weight, " +
                    " category, ability, type, src_img) " +
                    " VALUES (?, ?, ?, ?, ?, ?, ?); ";
    var myValues = [req.body.name, req.body.height, req.body.weight, req.body.category,
                    req.body.ability, req.body.type, req.body.src_img];

    connection.query(myQuery, myValues, function(error, results, fields){
        // Se almacena lo retornado por el query en 'results'. De haber algún error llegara a 'error'
        if (error) throw error;
        // Step 3: Se procesa el resultado de la BD
        res.send(results);
        // Step 4: Se cierra la conexion
        connection.end();
    });
});

app.put('/pokemons/:id', function(req, res){
    // Step 0: Se define la conexion a la BD
    var connection = mysql.createConnection({
        host: 'localhost',
        user: 'utec',
        password: '1234567890',
        database: 'pokedex'
    });
    // Step 1: Se establece la conexion
    connection.connect();
    // Step 2: Se envia el query
    var myQuery = " UPDATE pokemon SET ";
    var myValues = [ ];
    if (req.body.name){
        myQuery += " name = ? ";
        myValues.push(req.body.name);
    }
    if (req.body.height){
        myQuery += " , height = ? ";
        myValues.push(req.body.height);
    }
    if (req.body.weight){
        myQuery += " , weight = ? ";
        myValues.push(req.body.weight);
    }
    if (req.body.category){
        myQuery += " , category = ? ";
        myValues.push(req.body.category);
    }
    if (req.body.ability){
        myQuery += " , ability = ? ";
        myValues.push(req.body.ability);
    }
    if (req.body.type){
        myQuery += " , type = ? ";
        myValues.push(req.body.type);
    }
    if (req.body.src_img){
        myQuery += " , src_img = ? ";
        myValues.push(req.body.src_img);
    }
    myQuery += " WHERE id = ? "
    myValues.push(req.params.id);
    connection.query(myQuery, myValues, function(error, results, fields){
        // Se almacena lo retornado por el query en 'results'. De haber algún error llegara a 'error'
        if (error) throw error;
        // Step 3: Se procesa el resultado de la BD
        res.send(results);
        // Step 4: Se cierra la conexion
        connection.end();
    });
});

app.delete('/pokemons/:id', function(req, res){
    // Step 0: Se define la conexion a la BD
    var connection = mysql.createConnection({
      host: 'localhost',
      user: 'utec',
      password: '1234567890',
      database: 'pokedex'
    });
    // Step 1: Se establece la conexion
    connection.connect();
    // Step 2: Se envia el query
    var myQuery = " DELETE FROM pokemon " +
                  " WHERE id = ? ; ";
    var myValues = [ req.params.id ];
    connection.query(myQuery, myValues, function(error, results, fields){
        // Se almacena lo retornado por el query en 'results'. De haber algún error llegara a 'error'
        if (error) throw error;
        // Step 3: Se procesa el resultado de la BD
        res.send(results);
        // Step 4: Se cierra la conexion
        connection.end();
    });
});

app.post('/figures', function(req, res){
    // console.log(req.body.picture);
    // res.send("ok")
    var fileName = `${new Date().getTime()}.jpeg`;
    var picture_url = `${picturesDirectory}${fileName}`;

    fs.writeFile(`${picture_url}`, req.body.picture, 'base64', function(error){
        if (error) throw error;
        res.send({src_img: picture_url})
    })
})

app.use('/figures', express.static('figures'));

app.listen(3000, function(){
  console.log("Server started in port 3000!!!")
})