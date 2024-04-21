export const errorMiddleware = (err,req,res,next) =>{
    const {statusCode,message} = err || (500 && "internal server error");
    res.status(statusCode).json({message : message});
}