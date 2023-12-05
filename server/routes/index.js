const express = require("express");
const router = express.Router();
const addStudent = () => {};
const Admin = require("../../DB/admin/admin");
const Student = require("../../DB/student/student");
const Classroom = require("../../DB/classroom/classroom");
const Teacher = require("../../DB/teacher/teacher");
const School = require("../../DB/school/school");

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index", { title: "Express" });
});
router.get("/student", function (req, res, next) {
  // getStudent(body).then((data) => {
  //   console.log("data: ", data);
  //   res.send(JSON.stringify(data));
  // });
});
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
  Student(body).then((data) => {
    console.log("data: ", data);
    res.send(JSON.stringify(data));
  });
});
router.post("/teacher", function (req, res, next) {
  const body = req.body;
  console.log("body: ", body);
  Teacher(body).then((data) => {
    console.log("data: ", data);
    res.send(JSON.stringify(data));
  });
});
router.post("/admin", function (req, res, next) {
  const body = req.body;
  console.log("Admin: ", Admin);
  Admin(body).then((data) => {
    console.log("data: ", data);
    res.send(JSON.stringify(data));
  });
});
router.post("/classroom", function (req, res, next) {
  const body = req.body;
  console.log("body: ", body);
  Classroom(body).then((data) => {
    console.log("data: ", data);
    res.send(JSON.stringify(data));
  });
});
router.post("/school", function (req, res, next) {
  const body = req.body;
  console.log("body: ", body);
  School(body).then((data) => {
    console.log("data: ", data);
    res.send(JSON.stringify(data));
  });
});

module.exports = router;
