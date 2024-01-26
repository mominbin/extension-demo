const importAll = (r) => {
  const images = {};
  // eslint-disable-next-line array-callback-return
  r.keys().map((item) => {
    // 以文件名作为属性，导入对应的图片，存入 images 对象
    images[item.replace('./', '')] = r(item);
  });
  return images;
};
const images = importAll(
  require.context('../mediums/imgs', false, /\.(png|jpe?g|svg|webp)$/),
);
export default images;
