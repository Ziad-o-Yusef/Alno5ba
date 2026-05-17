# Elite Group Law Firm — Arabic Portfolio Website

موقع Portfolio ثابت لشركة **النخبة جروب للمحاماة والاستشارات القانونية**.

## التشغيل

```bash
npm install
npm run dev
```

ثم افتح الرابط الذي يظهر في التيرمنال، غالبًا:

```bash
http://localhost:5173
```

## البناء للنشر

```bash
npm run build
```

سينتج فولدر:

```bash
dist
```

يمكن رفعه على Netlify أو Vercel.

## أماكن الصور

كل الصور داخل:

```txt
public/images/
```

### اللوجو

```txt
public/images/logo.png
```

### صور فريق العمل

استبدل الصور الموجودة بنفس الأسماء التالية:

```txt
public/images/team/abed-fayed.jpg
public/images/team/tarek-abdel-salam.jpg
public/images/team/mohamed-ali-abdel-salam.jpg
public/images/team/omar-taher.jpg
public/images/team/ahmed-omar-youssef.jpg
public/images/team/mahmoud-ahmed.jpg
public/images/team/ahmed-moustafa.jpg
public/images/team/doaa-ragab.jpg
public/images/team/omar-abed-fayed.jpg
```

المقاس المفضل: 800x1000 أو 1000x1200، صورة رسمية بخلفية هادئة.

### صور الأعمال / المشاريع

```txt
public/images/projects/project-1.jpg
public/images/projects/project-2.jpg
public/images/projects/project-3.jpg
```

## تعديل المحتوى

كل المحتوى الرئيسي موجود في:

```txt
src/main.jsx
```

وكل التصميم موجود في:

```txt
src/styles.css
```

## ملاحظات

- الموقع RTL عربي بالكامل.
- لا يوجد Backend.
- لا توجد Forms أو Login.
- الموقع مناسب كنسخة أولى Premium Corporate Law Firm.
