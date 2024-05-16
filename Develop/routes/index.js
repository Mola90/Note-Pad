const router = require("express").Router();
const fs = require("fs");
const db = "./db/db.json";

// Display notes
router.get("/notes", (res, req) => {
    fs.readFile(db, "utf-8", (err, data) => {
        if(err){
                 return res.status(500).json({message: "Read request Failed"})
            };
    res.json(JSON.parse(data));      
    });
});

router.post("/notes", (req, res) => {

});

