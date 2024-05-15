const fs = require("fs");

const deleteFile = (filePath) => {
  const newPath = filePath.substring(1);
  fs.unlink(newPath, (err) => {
    if (err) {
      throw err;
    }
  });
};

exports.deleteFile = deleteFile;
