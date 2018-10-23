const fs = require('fs');
const path = require('path');

let imports = '';
let literal = 'const armies: ArmyCollection = {\n';

fs.readdirSync(path.join(__dirname, 'armies')).forEach(army => {
  literal += `  ${army}: {\n`;
  fs.readdirSync(path.join(__dirname, 'armies', army)).forEach(faction => {
    literal += `    ${faction}: {\n`;
    literal += `      options: {\n`;
    fs.readdirSync(path.join(__dirname, 'armies', army, faction, 'options')).map(f => f.replace(/\.ts$/,'')).forEach(optionName => {
      const name = `${army}_${faction}_option_${optionName}`;
      literal += `        [${name}.id]: ${name},\n`;
      imports += `import ${name} from './armies/${army}/${faction}/options/${optionName}';\n`;
    });
    literal += `      },\n`;
    literal += `      tiles: {\n`;
    fs.readdirSync(path.join(__dirname, 'armies', army, faction, 'tiles')).map(f => f.replace(/\.ts$/,'')).forEach(tileName => {
      const name = `${army}_${faction}_tile_${tileName}`;
      literal += `        [${name}.id]: ${name},\n`;
      imports += `import ${name} from './armies/${army}/${faction}/tiles/${tileName}';\n`;
    });
    literal += `      },\n`;
    literal += `      units: {\n`;
    fs.readdirSync(path.join(__dirname, 'armies', army, faction, 'units')).map(f => f.replace(/\.ts$/,'')).forEach(unitName => {
      const name = `${army}_${faction}_unit_${unitName}`;
      literal += `        [${name}.id]: ${name},\n`;
      imports += `import ${name} from './armies/${army}/${faction}/units/${unitName}';\n`;
    });
    literal += `      }\n`;
    literal += `    },\n`;
  });
  literal += `  }\n`;
});

literal += '};\n';

fs.writeFileSync(path.join(__dirname, 'coll.ts'), `
import { ArmyCollection } from '@types';

${imports}

${literal}

export default armies;
`);
