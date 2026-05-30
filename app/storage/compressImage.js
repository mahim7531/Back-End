const sharp = require("sharp");

const compressImage = async (input, output) => {
  await sharp(input)
    .resize(1200)
    .jpeg({ quality: 80 })
    .toFile(output);
};

module.exports = compressImage;