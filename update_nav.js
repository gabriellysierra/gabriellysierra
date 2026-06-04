const fs = require('fs');

const files = fs.readdirSync('.').filter(f => f.endsWith('.html') && f !== 'series.html');
files.forEach(file => {
    let content = fs.readFileSync(file, 'utf8');
    content = content.replace(/<li><a href="textos\.html">textos<\/a><\/li>/g, '<li><a href="textos.html">textos</a></li>\n                <li><a href="series.html">séries</a></li>');
    content = content.replace(/<li><a href="textos\.html" class="active">textos<\/a><\/li>/g, '<li><a href="textos.html" class="active">textos</a></li>\n                <li><a href="series.html">séries</a></li>');
    fs.writeFileSync(file, content, 'utf8');
});
