const multer = require('multer');
const { CloudinaryStorage } = require('multer-storage-cloudinary');
const cloudinary = require('cloudinary').v2;
const connectCloudinary = require('../config/cloudinary');

// on sassure que Cloudinary est bien configurer
connectCloudinary();

const storage = new CloudinaryStorage({
  cloudinary: cloudinary,
  params: {
    folder: 'placo-design-64/realisations',
    allowed_formats: ['jpg', 'jpeg', 'png', 'webp'],
    transformation: [{ width: 1600, height: 1200, crop: 'limit' }],
  },
});

const upload = multer({ storage });

module.exports = upload; 