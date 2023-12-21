const express = require("express");
const router = express.Router();
const { validation } = require("../middleware/middleWare");
const data = require("../mySQL");

router.get("/", async (req, res) => {
    let result = await data.getProduct()
    res.send(result)
})
//
router.post("/", validation, async (req, res) => {
    const { name } = req.body
    data.addProduct(name)
    let result = await data.getProduct()
    res.send(result)
})
//
router.delete("/:id",async (req, res) => {
    const { id } = req.params
    data.deleteProduct(id)
    let result = await data.getProduct()
    res.send(result)
});
//
router.put("/:id", async (req, res) => {
    const { id } = req.params;
    const { name,status} = req.body;
    data.updateProduct(id,name,status)
    let result = await data.getProduct()
    res.send(result)
});
module.exports = router;
