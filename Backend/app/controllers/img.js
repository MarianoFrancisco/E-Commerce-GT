const multer = require('multer');
const almacenar=multer.diskStorage({//establecer donde se guardan las imagenes
    destination:function(req,file,cb){
        cb(null,'img')
    },
    filename:function(req,file,cb){
        cb(null,`${Date.now()}-${file.originalname}`)
    }
});
const upload=multer({storage:almacenar});
exports.upload=upload.single('imagen');