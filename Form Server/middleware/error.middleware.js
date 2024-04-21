export const errorMiddleware = (err,req,res,next) =>{
    const {statusCode,message} = err || (500 && "Internal Server Error");
    res.status(statusCode).json({message : message});
}