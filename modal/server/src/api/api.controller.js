const express = require("express");
const { userCreate, getUser } = require("./api.service")
const router = express.Router();

router.post("/register", async (req, res) => {
    try {
        const { name, email, password } = req.body;
        console.log({ name: name, email: email, password: password })
        const createdUser = await userCreate(name, email, password);

        res.status(200).send(createdUser);
    } catch (error) {
        res.status(404).send(error.message);
    }
})

router.get("/names", async (req, res) => {
    try {
        const gotUser = await getUser();
        res.status(200).send(gotUser);
    } catch (error) {
        res.status(404).send(error.message);
    }
})

module.exports = router;