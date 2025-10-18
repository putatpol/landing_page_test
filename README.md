# 👓 Landing Page Test

A modern landing page built with **Next.js 15**, **React 19**, and **Tailwind CSS 4** — featuring SSR, reusable UI components, and mock product data.

## ⚡ Installation

```bash
# Clone the repository
git clone https://github.com/putatpol/landing_page_test.git
cd landing_page_test

# Install dependencies
yarn install
# or
npm install
```

## 🚀 Usage
```bash
# Start development server
yarn dev
# or
npm run dev

# Build for production
yarn build
# or
npm run build

# Start production server
yarn start
# or
npm start
```

## 🏗️ Structure
```bash
src/
 ├─ app/
 │   ├─ globals.css
 │   ├─ layout.tsx
 │   └─ page.tsx.tsx
 ├─ components/
 │   ├─ layout/
 │   ├─ page/
 │   │   ├─ main-page/
 │   │   └─ other-page
 │   └─ ui/
 │       ├─ button/
 │       ├─ product/
 │       └─ other/
 ├─ interfaces/
 ├─ mocks/
 ├─ services/
 ├─ styles/
 │   └─ fonts/
```

## 🛠️ Tech Stack

###  Frontend / Frameworks
| Technology | Version | Description |
|-------------|----------|-------------|
|  **Next.js** | 15 | React framework for SSR / SSG with App Router |
|  **React** | 19 | Modern UI library |
|  **TypeScript** | 5 | Type-safe development |

### 🎨 UI / Styling
| Library | Version | Description |
|----------|----------|-------------|
|  **Tailwind CSS** | 4 | Utility-first CSS framework |
|  **@mui/material** | 7 | Material UI component library |
|  **@emotion/react & @emotion/styled** | 11 | CSS-in-JS styling solution |

###  Slider / Carousel
| Library | Version | Description |
|----------|----------|-------------|
|  **keen-slider** | 6.8 | Touch-friendly slider with smooth transitions |

###  Linting / Formatting
| Tool | Version | Description |
|------|----------|-------------|
|  **ESLint** | 9 | Linting for code quality |
|  **Prettier** | 3 | Code formatter |
|  **prettier-plugin-tailwindcss** | 0.6 | Sort Tailwind classes automatically |

### 🔧 Dev Tools
| Package | Version | Description |
|----------|----------|-------------|
|  **@types/node, @types/react, @types/react-dom** | — | Type definitions for TypeScript |
|  **PostCSS** | 4 | CSS processing pipeline for Tailwind |
