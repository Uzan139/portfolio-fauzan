# Portfolio Next.js

Konversi dari file PHP + CSS menjadi Next.js React menggunakan App Router.

## Struktur folder

```txt
portfolio-nextjs/
├── app/
│   ├── layout.js
│   ├── page.js
│   └── globals.css
├── public/
│   ├── foto-ozan.jpg
│   ├── video_project_taneasy.mp4
│   ├── video_project_velocity.mp4
│   ├── qa-qc.png
│   └── ui-ux-design.jpeg
└── package.json
```

## Cara pakai

1. Buat project Next.js:

```bash
npx create-next-app@latest portfolio-nextjs
```

2. Pilih opsi:

```txt
JavaScript: Yes
ESLint: bebas
Tailwind CSS: No
src directory: No
App Router: Yes
Turbopack: bebas
import alias: bebas
```

3. Salin file `app/layout.js`, `app/page.js`, dan `app/globals.css` dari folder ini ke project kamu.

4. Buat folder `public`, lalu masukkan file media kamu dengan nama:

```txt
foto-ozan.jpg
video_project_taneasy.mp4
video_project_velocity.mp4
qa-qc.png
ui-ux-design.jpeg
```

5. Jalankan:

```bash
npm install
npm run dev
```
