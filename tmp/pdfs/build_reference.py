from reportlab.platypus import SimpleDocTemplate, Paragraph, Spacer, PageBreak, LongTable, TableStyle, KeepTogether
from reportlab.lib import colors
from reportlab.lib.styles import ParagraphStyle
from reportlab.pdfbase import pdfmetrics
from reportlab.pdfbase.ttfonts import TTFont
from reportlab.lib.enums import TA_LEFT
from reportlab.lib.pagesizes import A4, landscape
from pathlib import Path
import re,html
root=Path('/Users/aksanavz/Documents/Romina-Website')
for name,file in [('Inter','inter-regular.ttf'),('Medium','inter-medium.ttf'),('Serif','playfair-regular.ttf'),('Italic','playfair-italic.ttf')]:
 pdfmetrics.registerFont(TTFont(name,str(root/'src/app/fonts'/file)))
pdfmetrics.registerFontFamily('Inter',normal='Inter',bold='Medium',italic='Inter',boldItalic='Medium')
ink=colors.HexColor('#2E2E2E'); green=colors.HexColor('#256E5D'); rose=colors.HexColor('#D9B4A7'); cream=colors.HexColor('#F7EFE9')
styles={
 'p':ParagraphStyle('p',fontName='Inter',fontSize=9,leading=14,textColor=ink,spaceAfter=7),
 'cell':ParagraphStyle('cell',fontName='Inter',fontSize=7.4,leading=10.8,textColor=ink,wordWrap='CJK'),
 'head':ParagraphStyle('head',fontName='Medium',fontSize=7.5,leading=11,textColor=green,wordWrap='CJK'),
 'h2':ParagraphStyle('h2',fontName='Serif',fontSize=25,leading=32,textColor=green,spaceAfter=17),
 'h3':ParagraphStyle('h3',fontName='Serif',fontSize=16,leading=22,textColor=ink,spaceBefore=15,spaceAfter=10),
 'cover':ParagraphStyle('cover',fontName='Serif',fontSize=44,leading=53,textColor=ink,spaceAfter=24),
 'label':ParagraphStyle('label',fontName='Medium',fontSize=10,leading=16,textColor=green,spaceAfter=20),
}
def fmt(s):
 s=html.escape(s)
 s=re.sub(r'\[([^\]]+)\]\([^)]+\)',r'\1',s)
 s=re.sub(r'`([^`]+)`',r'<font color="#625D58">\1</font>',s)
 s=re.sub(r'\*\*([^*]+)\*\*',r'<b>\1</b>',s)
 return s.replace('&lt;br&gt;','<br/>').replace('&lt;br/&gt;','<br/>')
def p(s,kind='p'):return Paragraph(fmt(s),styles[kind])
W,H=landscape(A4); usable=W-88
class RefDoc(SimpleDocTemplate):
 def afterFlowable(self,f):
  if isinstance(f,Paragraph) and f.style.name in ('h2','h3'):
   text=f.getPlainText(); key='bookmark'+str(self.seq.nextf('bm'))
   self.canv.bookmarkPage(key); self.canv.addOutlineEntry(text,key,0,False)
def decor(c,d):
 c.saveState(); c.setStrokeColor(rose); c.setLineWidth(.6); c.line(44,H-32,W-44,H-32)
 c.setFont('Medium',8);c.setFillColor(green);c.drawString(44,H-24,'ROMINA LAUZENSKY  /  DESIGN-SYSTEM V1')
 c.setFont('Inter',7.5);c.setFillColor(ink);c.drawString(44,23,'Bestandsaufnahme · 11. November 2026 · Website unverändert')
 c.drawRightString(W-44,23,str(d.page));c.restoreState()
story=[Spacer(1,55),p('ROMINA WEBSITE · V1','label'),p('Das Design-System<br/>zum Nachlesen','cover'),p('Schriften, Farben, Layouts und Komponenten','h3'),p('Vollständige Referenz des bestehenden Codes – mit exakten Werten, Fundstellen und dokumentierten Abweichungen.'),Spacer(1,22),p('So verwenden Sie diese Datei','h3'),p('Die Kapitel 1 bis 7 erklären das Design und die wichtigsten Unterschiede. Ab Kapitel 8 folgen die vollständigen technischen Tabellen. Die Lesezeichen Ihres PDF-Programms führen direkt zu jedem Kapitel.'),p('V1 bleibt verbindlich. Diese Dokumentation verändert keine Website-Datei.'),PageBreak()]
lines=(root/'DESIGN-SYSTEM-V1.md').read_text().splitlines();i=0
while i<len(lines):
 s=lines[i].strip()
 if not s or s.startswith('# ') or s.startswith('Stand:'):i+=1;continue
 if s.startswith('## '):
  if len(story)>15:story.append(PageBreak())
  story.append(p(s[3:],'h2'));i+=1;continue
 if s.startswith('### '):story.append(p(s[4:],'h3'));i+=1;continue
 if s.startswith('|'):
  rows=[]
  while i<len(lines) and lines[i].strip().startswith('|'):
   row=lines[i].strip().strip('|').split('|');i+=1
   if all(re.fullmatch(r'\s*:?-+:?\s*',x) for x in row):continue
   rows.append([x.strip() for x in row])
  n=max(map(len,rows)); rows=[r+['']*(n-len(r)) for r in rows]
  ratios={2:[.28,.72],3:[.25,.48,.27],4:[.19,.43,.20,.18],5:[.16,.22,.18,.25,.19]}.get(n,[1/n]*n)
  table=LongTable([[p(v,'head' if j==0 else 'cell') for v in row] for j,row in enumerate(rows)],colWidths=[usable*x for x in ratios],repeatRows=1,hAlign='LEFT',splitInRow=1)
  table.setStyle(TableStyle([('BACKGROUND',(0,0),(-1,0),colors.HexColor('#DCE1D7')),('ROWBACKGROUNDS',(0,1),(-1,-1),[colors.white,cream]),('VALIGN',(0,0),(-1,-1),'TOP'),('LEFTPADDING',(0,0),(-1,-1),8),('RIGHTPADDING',(0,0),(-1,-1),8),('TOPPADDING',(0,0),(-1,-1),7),('BOTTOMPADDING',(0,0),(-1,-1),7),('LINEBELOW',(0,0),(-1,0),.6,rose),('LINEBELOW',(0,1),(-1,-1),.2,colors.HexColor('#E8DED5'))]))
  story.extend([table,Spacer(1,12)]);continue
 if s.startswith('- '):s='• '+s[2:]
 story.append(p(s));i+=1
out=root/'output/pdf/Romina-Website-V1-Design-System.pdf'
doc=RefDoc(str(out),pagesize=(W,H),rightMargin=44,leftMargin=44,topMargin=51,bottomMargin=44,title='Romina Website V1 – Design-System',author='Romina Website V1',allowSplitting=1)
doc.build(story,onFirstPage=decor,onLaterPages=decor)
print(out)
