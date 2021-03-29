const {Storage} = require('@google-cloud/storage')
const path = require('path')


const storage = new Storage({
  projectId: "turingcup2k21",
  keyFilename: "./config/serviceAccountKey.json"
});

const bucket = storage.bucket("gs://turingcup2k21.appspot.com");

const uploadImageToStorage = (file,folder) => {
  return new Promise((resolve, reject) => {
    if (!file) {
      reject('No image file');
    }
    let newFileName = `${file.originalname.split(/\s/).join('')}_${Date.now()}${path.extname(file.originalname)}`;

    let fileUpload = bucket.file(`${folder}/` + newFileName);

    const blobStream = fileUpload.createWriteStream({
      metadata: {
        contentType: file.mimetype
      }
    });

    blobStream.on('error', (error) => {
        console.log(error)
      reject('Something is wrong! Unable to upload at the moment.');
    });

    blobStream.on('finish', () => {
      const url = `https://firebasestorage.googleapis.com/v0/b/turingcup2k21.appspot.com/o/${folder}%2F${newFileName}?alt=media`;
      resolve(url);
    });

    blobStream.end(file.buffer);
  });
}

exports.FirebaseUpload = uploadImageToStorage