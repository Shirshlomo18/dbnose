const express = require("express");
const router = express.Router();
const addStudent = () => {};
const Admin = require("../../DB/admin/admin");

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index", { title: "Express" });
});
// router.get('/student', function(req, res, next) {
//   res.render('index', { title: 'Express' });
// });
// router.get('/teacher', function(req, res, next) {
//   res.render('index', { title: 'Express' });
// });
// router.get('/admin', function(req, res, next) {
//   res.render('index', { title: 'Express' });
// });
// router.get('/classroom', function(req, res, next) {
//   res.render('index', { title: 'Express' });
// });
// router.get('/classroom', function(req, res, next) {
//   res.render('index', { title: 'Express' });
// });

/*add*/
router.post("/", function (req, res, next) {
  const body = req.body;

  res.render("index", { title: "Express" });
});
router.post("/student", function (req, res, next) {
  const body = req.body;
  console.log("body: ", body);
  addStudent(body).then((data) => {
    res.render("index", data);
  });
});
router.post("/teacher", function (req, res, next) {
  res.render("index", { title: "Express" });
});
router.post("/admin", function (req, res, next) {
  const body = req.body;
  console.log("body: ", body);

  console.log("Admin: ", Admin);
  Admin(body).then((data) => {
    console.log("data: ", data);
    res.send(JSON.stringify(data));
    // res.render("index!!");
  });
});
router.post("/classroom", function (req, res, next) {
  res.render("index", { title: "Express" });
});
router.post("/classroom", function (req, res, next) {
  res.render("index", { title: "Express" });
});

module.exports = router;
