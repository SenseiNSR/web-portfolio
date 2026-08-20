import zipfile
import xml.etree.ElementTree as ET
import sys

def get_docx_text(path):
    try:
        with zipfile.ZipFile(path) as docx:
            tree = ET.XML(docx.read('word/document.xml'))
            namespaces = {'w': 'http://schemas.openxmlformats.org/wordprocessingml/2006/main'}
            return '\n'.join([node.text for node in tree.findall('.//w:t', namespaces) if node.text])
    except Exception as e:
        return str(e)

print(get_docx_text(sys.argv[1]))
