const express = require("express")
const projectmodel = require("../models/projectmodel.js")
const router = express.Router();

router.get('/', async (req, res) => {
    try {
        const aliens = await projectmodel.find().sort({ "ranking": 1 });
        res.json(aliens)
    }
    catch (err) {
        console.log(err)
    }
})
router.post('/', async (req, res) => {
    const newdata = new projectmodel({
        name: req.body.name,
        tech: req.body.tech,
        sub: req.body.sub,
        ranking: req.body.ranking
    })
    try {
        const a1 = await newdata.save()
        res.json(a1)
    }
    catch (err) {
        console.log(err)
    }

})

router.patch('/:id', async (req, res) => {
    try {
        const updatedata = await projectmodel.findByIdAndUpdate(req.params.id, req.body);
        const a1 = await updatedata.save()
        res.json(a1)
    }
    catch (err) {
        console.log(err)
    }
})
router.delete('/:id', async (req, res) => {
    try {
        const deletedata = await projectmodel.findById(req.params.id);
        const a1 = await deletedata.deleteOne()
        res.json(a1)
    }
    catch (err) {
        console.log(err)
    }
})

const dummydata = [{
    // "id": "1",
    "name": "akarsh",
    "tech": "ssjmnsjs",
    "sub": false,
    "ranking": 2,
},
{
    // "id": "2",
    "name": "akarsh",
    "tech": "ssjmnsjs",
    "sub": false,
    "ranking": 3,
},
{
    // "id": "3",
    "name": "avi atult",
    "tech": "ssjmnsjs",
    "sub": false,
    "ranking": 4,
}]



projectmodel.insertMany(dummydata)
module.exports = router