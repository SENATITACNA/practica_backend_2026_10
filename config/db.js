const mysql =require("mysql2")
const connection = mysql.createConnection({
    host:"80.241.217.53",
    user:"desarrollador",//aqui debes poer el usuario para conectarse a Myssql
    password:"SENATI",//aqui la contrasela de la BD
    database:"cafeteria"//nombre de la base de datos
});

connection.connect((err)=>{
    if(err){
        console.log("Error de conexion:",err);
    }else{
        console.log("Conectado a MySQL");
    }
});
module.exports=connection;
