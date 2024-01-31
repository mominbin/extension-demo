import { fileURLToPath } from 'url';
import path from 'path';
import fs from 'fs';

const __filename = fileURLToPath(import.meta.url);

// 获取文件的目录名
const __dirname = path.dirname(__filename);
const __root = path.resolve(__dirname, '../../');
// 输入文件夹地址
const inputFolder = path.join(__root, 'app/mediums/feather');

// 输出 SVG sprite 文件路径
const outputSpritePath = path.join(
  __root,
  'app/mediums/imgs/sprite.svg',
);

// 读取文件夹中的所有 SVG 文件
const readSvgFiles = () => {
  return fs.readdirSync(inputFolder).filter((file) => path.extname(file) === '.svg');
};
// 生成 SVG sprite 文件内容
const generateSvgSprite = (svgFiles) => {
  const symbols = svgFiles.map((file, index) => {
    const svgContent = fs.readFileSync(path.join(inputFolder, file), 'utf-8');
    return `<symbol id="${file.replace('.svg', '')}" viewBox="0 0 24 24">${svgContent}</symbol>`;
  });

  return `<svg xmlns="http://www.w3.org/2000/svg">${symbols.join('')}</svg>`;
};

// 将 SVG sprite 内容写入文件
const writeSvgSpriteToFile = (svgSprite) => {
  fs.writeFileSync(outputSpritePath, svgSprite, 'utf-8');
  console.log(`SVG sprite generated at ${outputSpritePath}`);
};

// 主函数
const generateSvgSpriteMain = () => {
  try {
    const svgFiles = readSvgFiles();
    const svgSprite = generateSvgSprite(svgFiles);
    writeSvgSpriteToFile(svgSprite);
  } catch (error) {
    console.error('Error:', error.message);
  }
};

// 执行生成 SVG sprite
generateSvgSpriteMain();
