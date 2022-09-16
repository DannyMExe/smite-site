const { God, Item, Build, Skin, User } = require("../db");
// const { God, Item, Build } = require('../../models');
// const God = require('../../models/god');
// const Build = require('../../models/build');
// const Item = require('../../models/item');
// const db = require('../../models');

const router = require("express").Router();

router.post("/auth", async (req, res, next) => {
  try {
    const user = await User.authenticate(req.body);
    if (!user) res.sendStatus(404);
    const token = await user.generateToken();
    res.send(token);
  } catch (ex) {
    next(ex);
  }
});

router.get("/auth", async (req, res, next) => {
  user = await User.byToken(req.headers.authorization);
  if (user) {
    res.send(user);
  } else {
    res.sendStatus(404);
  }
});

router.get("/users", async (req, res, next) => {
  const users = await User.findAll({
    attributes: {
      
      exclude: ["id", "password", "email", "createdAt", "updatedAt"],
    },
	include: [
        {
          model: Build,
		  attributes: {
			exclude: ["user_id"],
		  },
		  include: [
			{
				model: Item,
			},
			
		  ]
        },
      ],
  });
  res.send(users);
});

router.get("/builds", async (req, res, next) => {
  try {
    const builds = await Build.findAll({
      include: [
        {
          model: God,
		  include: [
			{model: Skin}
		  ]
        },
        {
          model: Item,
        },
        {
          model: User,
          attributes: {
          exclude: ["id", "password", "email", "createdAt", "updatedAt"]
          }
        }
		
      ],
    });
    res.send(builds);
  } catch (err) {
    next(err);
  }
});

// router.get('/builds/:user', async (req, res, next) => {
// 	try {
// 		const builds = await Build.findOne(
// 			{
// 				where: {
// 					user_id: req.params.user
// 				},
// 			include: [{
// 				model: God
// 			}, {
// 				model: Item
// 			}]
// 		}
// 		);
// 		res.send(builds);
// 	} catch (err) {
// 		next(err);
// 	}
// });

router.post("/builds", async (req, res, next) => {
  try {
    console.log(req.body);
    const build = await Build.create(req.body);
    build.final_items.map((item) => {
      build.addItem(item);
    });
    res.send(build);
  } catch (error) {
    next(error);
  }
});

router.get("/builds/:id", async (req, res, next) => {
  try {
    const build = await Build.findOne({
      where: {
        build_id: req.params.id,
      },
      include: [
        {
          model: God,
        },
        {
          model: Item,
        },
      ],
    });
    res.send(build);
  } catch (err) {
    next(err);
  }
});

router.put("/builds/:id", async (req, res, next) => {
  try {
    let build = await Build.findByPk(req.params.id);
    build.final_items.map((item) => {
      build.removeItem(item);
    });
    build = await build.update(req.body);
    build.final_items.map((item) => {
      build.addItem(item);
    });
    res.send(build);
  } catch (error) {
    next(error);
  }
});

router.get("/items", async (req, res, next) => {
  try {
    const items = await Item.findAll();
    res.send(items);
  } catch (err) {
    next(err);
  }
});

router.get("/items/:id", async (req, res, next) => {
  try {
    const item = await Item.findOne({
      where: { id: req.params.id },
    });
    res.send(item);
  } catch (err) {
    next(err);
  }
});

// router.post('/campuses', async (req, res, next) => {
// 	try {
// 		console.log('in post api', req.body);
// 		const campus = await Campus.create(req.body);
// 		res.send(campus);
// 	} catch (error) {
// 		next(error);
// 	}
// });

// router.delete('/campuses/:id', async (req, res, next) => {
// 	try {
// 		const campus = await Campus.findByPk(req.params.id);
// 		await campus.destroy();
// 		res.send(campus);
// 	} catch (error) {
// 		next(error);
// 	}
// });

// router.put('/campuses/:id', async (req, res, next) => {
// 	try {
// 		const campus = await Campus.findByPk(req.params.id);
// 		res.send(await campus.update(req.body));
// 	} catch (error) {
// 		next(error);
// 	}
// });

router.get("/gods", async (req, res, next) => {
  try {
    const gods = await God.findAll({
      include: [
        {
          model: Build,
        },
        {
          model: Skin,
        },
      ],
    });
    res.send(gods);
  } catch (err) {
    next(err);
  }
});

router.get("/gods/:id", async (req, res, next) => {
  try {
    const god = await God.findOne({
      where: { id: req.params.id },
    });
    res.send(god);
  } catch (err) {
    next(err);
  }
});

// router.post('/students', async (req, res, next) => {
// 	try {
// 		const student = await Student.create(req.body);
// 		res.send(student);
// 	} catch (error) {
// 		next(error);
// 	}
// });

// router.delete('/students/:id', async (req, res, next) => {
// 	try {
// 		const student = await Student.findByPk(req.params.id);
// 		await student.destroy();
// 		res.send(student);
// 	} catch (error) {
// 		next(error);
// 	}
// });

// router.put('/students/:id', async (req, res, next) => {
// 	try {
// 		const student = await Student.findByPk(req.params.id);
// 		res.send(await student.update(req.body));
// 	} catch (error) {
// 		next(error);
// 	}
// });

router.use((req, res, next) => {
  const err = new Error("API route not found!");
  err.status = 404;
  next(err);
});

module.exports = router;
