const validation = (req, res, next) => {
    const { name } = req.body;
    if (!name) {
        res.status(400).json({
            message: "Bad request",
        });
    } else {
        next();
    }
};

module.exports = {
    validation,
};
