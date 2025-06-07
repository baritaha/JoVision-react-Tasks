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

// Custom Maldives-themed names (in order)
const maldivesNames = [
    'Paradise',
    'Dreams',
    'Serenity',
    'Whisper',
    'Palm',
    'Escape',
    'Waves',
    'Sand',
    'Infinit',
    'Breeze',
];

export const images = imagesArray.map((image, index) => ({
    src: image.src,
    label: maldivesNames[index] || `Image ${index + 1}`, // Fallback if names run out
    index: index,
}));
