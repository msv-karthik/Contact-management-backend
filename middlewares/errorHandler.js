const {constants} = require("../constants");

const errorHandler = (err,req,res,next)=>{
    // const statusCode = res.statusCode ? res.statusCode : 500;
    // switch(statusCode){
    //     case constants.VALIDATION_ERROR:
    //         res.json({
    //             title: "Validation Error",
    //             message: err.message,
    //             stackTrace: err.stack,
    //         });
    //         break;
    //     case constants.UNAUTHORIZED:
    //         res.json({
    //             title: "Unauthorized",
    //             message: err.message,
    //             stackTrace: err.stack,
    //         });
    //         break;
    //         case constants.FORBIDDEN:
    //             res.json({
    //                 title: "Forbidden",
    //                 message: err.message,
    //                 stackTrace: err.stack,
    //             });
    //             break;
    //         case constants.NOT_FOUND:
    //             res.json({
    //                 title: "Not Found",
    //                 message: err.message,
    //                 stackTrace: err.stack,
    //             });
    //             break;
    //         case constants.SERVER_ERROR:
    //             res.json({
    //                 title: "Server Error",
    //                 message: err.message,
    //                 tackTrace: err.stack,
    //             });
    //             break;
    //         default:
    //             console.log("No error!!");
    //             break;
    // }

    const statusCode = err.statusCode || 500;  // Use the statusCode from the error if available, otherwise 500

    switch (statusCode) {
        case constants.VALIDATION_ERROR:
            res.status(statusCode).json({
                title: "Validation Error",
                message: err.message,
                stackTrace: err.stack,
            });
            break;
        case constants.UNAUTHORIZED:
            res.status(statusCode).json({
                title: "Unauthorized",
                message: err.message,
                stackTrace: err.stack,
            });
            break;
        case constants.FORBIDDEN:
            res.status(statusCode).json({
                title: "Forbidden",
                message: err.message,
                stackTrace: err.stack,
            });
            break;
        case constants.NOT_FOUND:
            res.status(statusCode).json({
                title: "Not Found",
                message: err.message,
                stackTrace: err.stack,
            });
            break;
        case constants.SERVER_ERROR:
            res.status(statusCode).json({
                title: "Server Error",
                message: err.message,
                stackTrace: err.stack,
            });
            break;
        default:
            console.log("Unhandled error case:", err);
            res.status(500).json({
                title: "Unknown Error",
                message: err.message,
                stackTrace: err.stack,
            });
            break;
    }
};

module.exports = errorHandler;