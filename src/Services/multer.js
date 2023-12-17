import multer from "multer";

export const fileValidation = {
    image : ['image/png', 'image/jpeg', 'image/webp', 'image/jpg'],
    pdf : ['application/pdf']
}
function fileUpload(CustomValidation = []){
    const storage = multer.diskStorage({}) 
    function fileFilter(req, file, cb){
        if(CustomValidation.includes(file.mimetype)){
            cb(null, true) 
        }else{
            cb("invalid format", false)
        }
    }
    const upload = multer({fileFilter, storage})
    return upload
}

export default fileUpload