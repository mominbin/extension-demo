import inquirer from 'inquirer';
import shell from 'shelljs';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);

// 获取文件的目录名
const __dirname = path.dirname(__filename);
  const prompt = [{
    type: 'input',
    name: 'componentName',
    message: 'Enter the name of the component:',
  }, {
    type: 'input',
    name: 'author',
    message: 'Enter the author name:',
  }];

  const templateDir = 'Component.js.hbs';

  inquirer.prompt(prompt).then(answers => {
    const componentName = answers.componentName;
    const outDir = `./src/app/components/${componentName}`;
    shell.mkdir('-p', outDir);
    const templatePath = path.join(__dirname, templateDir);
    let templateFile = fs.readFileSync(templatePath, 'utf8');
    templateFile = templateFile.replace(/{{ComponentName}}/g, componentName);
    templateFile = templateFile.replace(/{{author}}/g, answers.author);
    fs.writeFileSync(`${outDir}/index.js`, templateFile);
    console.log(`Component ${componentName} created successfully!`);
  });
