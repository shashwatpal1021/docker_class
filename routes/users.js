var express = require('express');
var router = express.Router();
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();
router.get('/', function (req, res, next) {
	res.send('respond with a resource');
});

const usergetandInsert = async (req, res) => {
	const data = [
		{
			name: 'Shashwat',
		},
		{
			name: 'Abhishek',
		},
		{
			name: 'Pal',
		},
		{
			name: 'Yadav',
		},
	];

	console.log('data', data);
	const user = await prisma.user.createMany({
		data,
	});
	console.log('user', user);

	const getUser = await prisma.user.findMany();
	console.log('user', getUser);
	res.send(getUser);
};

router.get('/data', usergetandInsert);

module.exports = router;
