const colorGetter = (url: string): Promise<string> => {
  if (!url) return Promise.resolve('rgba(0,0,0,0.05)');

  return new Promise((resolve) => {
    const img = new Image();
    img.crossOrigin = 'anonymous';
    img.src = url;

    img.onload = () => {
      const canvas = document.createElement('canvas');
      const ctx = canvas.getContext('2d');

      if (!ctx) {
        resolve('bg-black/5');
        return;
      }

      canvas.width = img.naturalWidth;
      canvas.height = img.naturalHeight;

      ctx.drawImage(img, 0, 0);

      try {
        const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
        const data = imageData.data;

        let r = 0,
          g = 0,
          b = 0;
        const pixelCount = canvas.width * canvas.height;

        for (let i = 0; i < data.length; i += 4) {
          r += data[i];
          g += data[i + 1];
          b += data[i + 2];
        }

        r = Math.round(r / pixelCount);
        g = Math.round(g / pixelCount);
        b = Math.round(b / pixelCount);

        const rgba = `rgb(${r},${g},${b} ,0.2)`;

        resolve(rgba);
      } catch (error) {
        console.error('Error getting image data:', error);
        resolve('rgba(0,0,0,0.05)');
      }
    };

    img.onerror = () => {
      resolve('rgba(0,0,0,0.05)');
    };
  });
};

export default colorGetter;
