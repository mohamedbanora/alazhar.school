# 🚀 دليل نشر موقع مدرسة الأزهر

## 📋 متطلبات النشر

### 1. حساب على منصة النشر
- [Vercel](https://vercel.com) (مُوصى به)
- [Netlify](https://netlify.com)
- [Railway](https://railway.app)

### 2. مستودع Git
- GitHub
- GitLab
- Bitbucket

## 🎯 خطوات النشر على Vercel (الأسهل)

### الخطوة 1: إنشاء حساب على Vercel
1. اذهب إلى [vercel.com](https://vercel.com)
2. سجل دخول باستخدام GitHub
3. اضغط "New Project"

### الخطوة 2: ربط المستودع
1. اختر مستودع `alazhar-school`
2. اضغط "Import"

### الخطوة 3: إعدادات المشروع
```
Framework Preset: Next.js
Root Directory: ./
Build Command: npm run build
Output Directory: .next
Install Command: npm install
```

### الخطوة 4: متغيرات البيئة (اختياري)
```
NODE_ENV=production
NEXT_PUBLIC_SITE_URL=https://your-domain.vercel.app
```

### الخطوة 5: النشر
1. اضغط "Deploy"
2. انتظر اكتمال البناء (2-3 دقائق)
3. احصل على رابط الموقع

## 🌐 خطوات النشر على Netlify

### الخطوة 1: إنشاء حساب
1. اذهب إلى [netlify.com](https://netlify.com)
2. سجل دخول باستخدام GitHub

### الخطوة 2: ربط المستودع
1. اضغط "New site from Git"
2. اختر GitHub
3. اختر مستودع `alazhar-school`

### الخطوة 3: إعدادات البناء
```
Build command: npm run build
Publish directory: .next
```

### الخطوة 4: النشر
1. اضغط "Deploy site"
2. انتظر اكتمال البناء

## 🔧 إعدادات إضافية

### 1. اسم مخصص للموقع
- في Vercel: Settings → Domains → Add Domain
- في Netlify: Site settings → Domain management

### 2. SSL شهادة أمان
- تلقائي في Vercel و Netlify
- HTTPS مفعل افتراضياً

### 3. إعادة التوجيه
- تم إعداد `vercel.json` و `netlify.toml`
- يدعم جميع الصفحات

## 📱 اختبار الموقع

### بعد النشر:
1. ✅ تحقق من الصفحة الرئيسية
2. ✅ اختبر تسجيل الدخول
3. ✅ تحقق من لوحة التحكم
4. ✅ اختبر الصفحات الأخرى
5. ✅ تحقق من التجاوب مع الهواتف

## 🛠️ استكشاف الأخطاء

### مشاكل شائعة:
1. **خطأ في البناء**: تحقق من `package.json`
2. **صور لا تظهر**: تحقق من مسارات الصور
3. **خطأ في التوجيه**: تحقق من `next.config.mjs`

### حلول سريعة:
```bash
# إعادة تثبيت الحزم
npm install

# مسح الكاش
npm run build -- --no-cache

# تشغيل محلي للاختبار
npm run dev
```

## 📞 الدعم

### في حالة المشاكل:
1. تحقق من سجلات البناء
2. راجع ملفات التكوين
3. تأكد من صحة الكود

## 🎉 تم النشر!

بعد اكتمال النشر، ستحصل على:
- رابط مباشر للموقع
- إحصائيات الزيارات
- تحديثات تلقائية عند رفع الكود
- شهادة SSL مجانية

---

**ملاحظة**: تأكد من أن جميع الصور والملفات موجودة في مجلد `public/` قبل النشر. 