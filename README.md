# 🎧 مینی پروژه Redux Toolkit | فروشگاه هدفون

<div align="center">
  <img src="public/images/sony.jpg" alt="Headphone Shop" width="300px" style="border-radius: 10px" />
</div>

<div align="center">
  
![React](https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=react&logoColor=black)
![Redux](https://img.shields.io/badge/Redux-764ABC?style=for-the-badge&logo=redux&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)
![TailwindCSS](https://img.shields.io/badge/TailwindCSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)
  
</div>

## 📋 توضیحات پروژه

این پروژه یک فروشگاه آنلاین هدفون با رابط کاربری مدرن و ساده است که با استفاده از React و Redux Toolkit پیاده‌سازی شده است. در این فروشگاه کاربران می‌توانند محصولات را مشاهده کرده و آن‌ها را به سبد خرید خود اضافه کنند.

## ✨ ویژگی‌ها

- 🎨 طراحی مدرن و تم تاریک (Dark Mode)
- 🛒 اضافه کردن محصولات به سبد خرید
- 🔄 تغییر تعداد محصولات در سبد خرید
- 💰 محاسبه قیمت کل محصولات
- 📱 طراحی واکنش‌گرا (Responsive)
- 🔔 اعلان افزودن محصول به سبد خرید

## 📷 تصاویر پروژه

<div align="center">
  <img src="https://github.com/user-attachments/assets/432b3d33-5934-47a4-9f83-ca88f145bdee" alt="صفحه اصلی" width="800px" />
  <img src="https://github.com/user-attachments/assets/8b409e59-0164-4efa-a56c-0ea7a6dc98d3" alt="سبد خرید" width="800px" />
</div>



## 🚀 نحوه اجرا

برای اجرای این پروژه در محیط لوکال مراحل زیر را انجام دهید:

```bash
# کلون کردن پروژه
git clone https://github.com/your-username/headphone-shop.git

cd headphone-shop
# نصب وابستگی‌ها
npm install

# اجرای پروژه در حالت توسعه
npm run dev
```

برنامه به صورت پیش‌فرض روی آدرس `http://localhost:5173` قابل دسترسی خواهد بود.

## 📦 ساختار پروژه

```
src/
├── components/     # کامپوننت‌های React
│   ├── Cart.tsx    # کامپوننت سبد خرید
│   ├── CartItems.tsx
│   ├── Navbar.tsx
│   ├── Product.tsx
│   └── ProductList.tsx
├── data/           # داده‌های استاتیک
│   └── items.ts    # لیست محصولات
├── store/          # مدیریت حالت با Redux Toolkit
│   ├── cart-slice.ts
│   ├── hooks.ts
│   └── store.ts
├── App.tsx         # کامپوننت اصلی
├── index.css       # استایل‌های سراسری
└── main.tsx        # نقطه ورود برنامه
```
