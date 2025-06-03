
export const imagesArray = [
    { src: require('./img1.png') },
    { src: require('./img2.png') },
    { src: require('./img3.png') },
    { src: require('./img4.png') },
    { src: require('./img5.png') },
    { src: require('./img6.png') },
    { src: require('./img7.png') },
    { src: require('./img8.png') },
    { src: require('./img9.png') },
    { src: require('./img10.png') },
    ];
export const images = imagesArray.map((image, index) => ({
    src: image.src,
    label: `Image ${index + 1}`,
}));
export const imagesWithLabels = imagesArray.map((image, index) => ({
    src: image.src,
    label: `Image ${index + 1}`,
}));
