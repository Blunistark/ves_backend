const fs = require('fs');
const path = require('path');

// Upload a file
const uploadFile = async (file, uploadDir) => {
  try {
    const uploadPath = path.join(uploadDir, file.name);

    // Move the file to the upload directory
    file.mv(uploadPath, (err) => {
      if (err) {
        console.error('Error uploading file:', err);
        throw err;
      }
    });

    return uploadPath;
  } catch (error) {
    console.error('Error in file upload:', error);
    throw error;
  }
};

// Download a file
const downloadFile = async (filePath, res) => {
  try {
    if (!fs.existsSync(filePath)) {
      throw new Error('File not found');
    }

    res.download(filePath);
  } catch (error) {
    console.error('Error in file download:', error);
    throw error;
  }
};

module.exports = { uploadFile, downloadFile };