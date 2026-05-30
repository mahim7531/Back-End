const path = require("path");

const generateFileName = (file) => {
  const ext = path.extname(file.originalname);

  return `${Date.now()}-${Math.round(
    Math.random() * 1E9
  )}${ext}`;
};

module.exports = generateFileName;
