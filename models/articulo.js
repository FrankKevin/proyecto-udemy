import mongoose,{Schema} from 'mongoose';
const articuloSchema =new Schema({
    // categoria: {type:Schema.objectId,ref:'categoria'},
    codigo:{type:String,maxlength:64},
    nombre:{type:String,maxlength:50,unique:true,require:true},
    descripcion:{type:String,maxlength:255},
    precio_venta:{type:Number,require:true},
    stock:{type:Number,require:true},
    estado:{type:Number,default:1},
    cratedAt:{type:Date,default:Date.now}

});

const articulo=mongoose.model('articulo',articuloSchema);  //convertimos el esquema a un modelo,utilizando el metodo de 
//mongoose model y le indicamos que coleccion en nuestra base de datos mongodb se va a llamar articulo
export default articulo;
















