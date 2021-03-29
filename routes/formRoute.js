const express = require("express")
const router = express.Router()
var multer = require("multer")
const Response = require("../models/Response")
const { FirebaseUpload } = require("../utils/uploadFile")

const fileFilter = (req, file, cb) => {
  if (file.mimetype == "image/jpeg" || file.mimetype == "image/png") {
    cb(null, true)
  } else {
    cb(null, false)
  }
}

const upload = multer({
  storage: multer.memoryStorage(),
  fileFilter: fileFilter,
})

router.post("/", upload.single("upload"), async (req, res) => {
  const { name, prn, email, college, branch, year } = req.body
  console.log(req.body)
  console.log(req.file)

  FirebaseUpload(req.file, "paymentImages")
    .then(async (url) => {
      console.log(url)
      const newResponse = new Response({
        name: name,
        prn: prn,
        email: email,
        college: college,
        branch: branch,
        year: year,
        imageUrl: url,
      })
      await newResponse.save()
      res.redirect("/")
    })
    .catch((err) => {
      res.status(200).json({
        err: err,
      })
      res.end()
    })
})

router.get("/", (req, res) => {
  Response.find({}, (err, data) => {
    if (err) res.send(err)
    else res.send(data)
  })
})

module.exports = router
