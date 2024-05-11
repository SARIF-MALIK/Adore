import Resizer from 'react-image-file-resizer';

export const resizeImage = (file, maxWidth, maxHeight, format = 'JPEG', quality = 70, rotation = 0, outputType = 'base64', callback) => {
  Resizer.imageFileResizer(
    file,
    maxWidth,
    maxHeight,
    format,
    quality,
    rotation,
    (uri) => {
      callback({
        name: file.name,
        type: file.type,
        content: uri,
      });
    },
    outputType
  );
};
