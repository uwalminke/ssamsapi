const db = require('../util/database');

exports.getProducts = async(req, res, next) => {

    try {

        let [pData] = await db.execute('select * from tbl_banner_setting');

        res.status(200).json({
            result : "success",
            statusCode : "200",
            data:pData
        });

    }catch(err) {

        return res.status(500).json({
            result : "fail",
            message : err.message,
            statusCode : "500",
            createdAt : new Date()
        });
    }

}