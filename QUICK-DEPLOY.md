# 🚀 نشر سريع - مدرسة الأزهر مع Supabase

## ⚡ الطريقة الأسرع (Vercel + Supabase)

### 1. إعداد Supabase

#### أ. إنشاء مشروع Supabase
1. اذهب إلى [supabase.com](https://supabase.com)
2. سجل دخول بـ GitHub
3. اضغط "New Project"
4. اختر اسم المشروع: `alazhar-school`
5. اختر كلمة مرور قوية لقاعدة البيانات
6. اختر المنطقة الأقرب لك
7. اضغط "Create new project"

#### ب. الحصول على بيانات الاتصال
1. في لوحة التحكم، اذهب إلى Settings → API
2. انسخ:
   - **Project URL**: `https://your-project.supabase.co`
   - **anon public key**: `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...`

#### ج. إنشاء الجداول
1. اذهب إلى SQL Editor
2. انسخ محتوى ملف `supabase-schema.sql`
3. اضغط "Run" لإنشاء الجداول

### 2. إعداد متغيرات البيئة

#### أ. إنشاء ملف `.env.local`
```bash
# انسخ الملف
cp env.example .env.local
```

#### ب. تحديث القيم
```env
NEXT_PUBLIC_SUPABASE_URL=https://dqxxxzdxygysvonzortu.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImRxeHh4emR4eWd5c3ZvbnpvcnR1Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTMwMzIwNTgsImV4cCI6MjA2ODYwODA1OH0.DPy9lhAmyoxKC4M_HWauGZc3W5pWjyZlNvvV-Y6_ioc
```

### 3. رفع الكود إلى GitHub
```bash
git add .
git commit -m "إضافة Supabase"
git push origin main
```

### 4. نشر على Vercel
1. اذهب إلى [vercel.com](https://vercel.com)
2. سجل دخول بـ GitHub
3. اضغط "New Project"
4. اختر مستودع `alazhar-school`
5. اضغط "Import"

### 5. إضافة متغيرات البيئة في Vercel
1. في إعدادات المشروع، اذهب إلى Environment Variables
2. أضف:
   - `NEXT_PUBLIC_SUPABASE_URL`
   - `NEXT_PUBLIC_SUPABASE_ANON_KEY`
3. اضغط "Deploy"

## 🎯 النتيجة
- ✅ موقع مباشر على الإنترنت
- ✅ قاعدة بيانات حقيقية مع Supabase
- ✅ مصادقة آمنة
- ✅ تحديثات تلقائية
- ✅ HTTPS تلقائي

## 🔧 إذا واجهت مشاكل

### فحص محلي أولاً:
```bash
npm install
npm run build
```

### مشاكل Supabase:
1. تأكد من صحة URL و Key
2. تحقق من إنشاء الجداول
3. تأكد من تفعيل RLS policies

### مشاكل النشر:
1. تحقق من متغيرات البيئة في Vercel
2. راجع سجلات البناء
3. تأكد من رفع جميع الملفات

## 📞 مساعدة سريعة

### ملفات مهمة:
- `lib/supabase.ts` - إعداد Supabase
- `lib/supabase-api.ts` - API functions
- `supabase-schema.sql` - هيكل قاعدة البيانات
- `env.example` - متغيرات البيئة

### روابط مفيدة:
- [Supabase](https://supabase.com)
- [Vercel](https://vercel.com)
- [GitHub](https://github.com)

---

**🎉 الموقع جاهز للنشر مع Supabase! اتبع الخطوات أعلاه** 

---

## 1. عبر Supabase Dashboard (واجهة الويب)

1. **ادخل إلى مشروعك في Supabase**  
   [https://app.supabase.com/](https://app.supabase.com/)

2. **من القائمة الجانبية اختر Table Editor**  
   ستجد جميع الجداول التي أنشأتها (مثلاً: users, students, teachers ...).

3. **اختر الجدول الذي تريد إضافة بيانات له**  
   مثلاً: users

4. **اضغط على Insert Row أو Add Row**  
   ستظهر لك حقول الإدخال.

5. **أدخل بيانات تجريبية**  
   مثال لجدول users:
   - email: test1@example.com
   - password: student123 (أو حسب الحقل الموجود)
   - name: طالب تجريبي
   - role: student

6. **اضغط Save أو Insert**

كرر العملية لأي جدول آخر (students, teachers, ...).

---

## 2. عبر SQL (إدخال دفعة واحدة)

يمكنك إدخال بيانات تجريبية عبر SQL Editor في Supabase:

1. من لوحة التحكم، اختر SQL Editor.
2. الصق الكود التالي (مثال لجدول users):

```sql
INSERT INTO users (email, password, name, role)
VALUES
  ('test1@example.com', 'student123', 'طالب تجريبي 1', 'student'),
  ('test2@example.com', 'student123', 'طالب تجريبي 2', 'student'),
  ('teacher1@example.com', 'teacher123', 'معلم تجريبي', 'teacher');
```

3. اضغط Run.

> **ملاحظة:**  
> غيّر أسماء الجداول والحقول حسب ما هو موجود فعليًا في قاعدة بياناتك (راجع ملف `supabase-schema.sql` إذا لم تكن متأكدًا).

---

## 3. مثال عملي (حسب جداولك)

إذا أرسلت لي أسماء الجداول والحقول الموجودة عندك (أو صورة من Table Editor)، يمكنني تجهيز لك كود SQL جاهز للنسخ واللصق مباشرة.

---

### هل تريدني أن أجهز لك كود SQL لبيانات تجريبية بناءً على جداولك؟  
إذا نعم، أرسل لي أسماء الجداول والحقول أو صورة من Table Editor، أو أرسل لي محتوى ملف `supabase-schema.sql` لأجهز لك البيانات التجريبية المناسبة! 