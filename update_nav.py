import os
import glob

html_files = [f for f in glob.glob('*.html') if f != 'series.html']
for file in html_files:
    with open(file, 'r', encoding='utf-8') as f:
        content = f.read()
    
    content = content.replace('<li><a href="textos.html">textos</a></li>', '<li><a href="textos.html">textos</a></li>\n                <li><a href="series.html">séries</a></li>')
    content = content.replace('<li><a href="textos.html" class="active">textos</a></li>', '<li><a href="textos.html" class="active">textos</a></li>\n                <li><a href="series.html">séries</a></li>')

    with open(file, 'w', encoding='utf-8') as f:
        f.write(content)
