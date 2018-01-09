const router = require("express").Router();

//for getting the aws services package
const FileUpload = require("../services/file_upload");

router.get("/", (req, res) => {
  res.render("upload");
});

const mw = FileUpload.single("photo[file]");
router.post("/", mw, (req, res, next) => {
  console.log("Files", req.file);

  FileUpload.upload({
    data: req.file.buffer,
    name: req.file.originalname,
    mimetype: req.file.mimetype
  })
    .then(data => {
      console.log("data =>", data);
      req.flash("success", "Photo created!");
      res.redirect("/photos");
    })
    .catch(next);
});

module.exports = router;
