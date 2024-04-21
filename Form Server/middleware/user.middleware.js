export const errorMiddleware = (err,req,res,next) =>{
    // const {statusCode,message} = err || (500 && "internal server error");
    const statusCode = err.statusCode || 500
    const message = err.message || "internal server error"
    return res.status(statusCode).json({message : message});
}