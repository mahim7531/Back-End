const fs = require("fs");

const deleteFile = (filePath) => {

  fs.unlink(filePath, (err) => {

    if (err) {
      console.log("Delete Error:", err.message);
    } else {
      console.log("File Deleted");
    }
  });
};

module.exports = deleteFile;