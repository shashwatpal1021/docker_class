var express = require('express');
var router = express.Router();

const prisma = require("@prisma/client")

// const prisma = new PrismaClient([ 'info', 'error'])
/* GET users listing. */
router.get('/', function (req, res, next) {
  res.send('respond with a resource');
});

const usergetandInsert = async (req, res) => {
    const data = ["shashwat", "Abhishek", "pal",
      "yadav"
    ]
    console.log("data",data)
    const user = await prisma.user.createMany({
      data
    })
    console.log("user", user)

    const getUser = await prisma.user.findMany()
    console.log("user", getUser)
    res.send(getUser)
  }

router.get('/data', usergetandInsert)


module.exports = router;
