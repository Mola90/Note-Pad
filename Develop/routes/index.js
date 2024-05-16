const router = require("express").Router();
const fs = require("fs");
const db = "./db/db.json";
var idNumber = 1;


// Display notess
router.get("/notes", (req, res) => {
    fs.readFile(db, "utf-8", (err, data) => {
        if(err){
                 return res.status(500).json({message: "Read request Failed"})
            };
            if(!data){console.log("no data");}
            const newDataArray = JSON.parse(data);
    res.json(newDataArray);      
    });
});

router.post("/notes", (req, res) => {

    fs.readFile(db, "utf-8", (err, data) => {
        if(err){
                 return res.status(500).json({message: "Read request Failed"})
            };
    const dataArry = JSON.parse(data);     
    
    //new data entry

    idNumber ++;

    const newNote = {
        id: idNumber,
        title: req.body.title,
        text: req.body.text
    };

    dataArry.push(newNote);

    const stringifiedData = JSON.stringify(dataArry);

    fs.writeFile(db,stringifiedData, "utf-8", (error) =>{
        if(error){
            return res.status(500).json({message: "Post request Failed"});
        }

        res.json(newNote);
    });

    });
});

module.exports = router;

