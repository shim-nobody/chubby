# 🧸 A Little Sorry, My Baby

A personalized, animated romantic apology website built with React, TypeScript, Vite, Tailwind CSS, and Framer Motion.

## ✨ Features

- 6 fully animated scenes — Welcome → Envelope → Letter → Promises → Surprise → Final
- Smooth Framer Motion page transitions
- Pure SVG teddy bear illustrations (no external images needed)
- Floating hearts, glowing particles, and flower decorations
- Interactive envelope opening animation
- Animated promise cards with hover tilt effects
- Full-screen heart explosion on the final scene
- Responsive — optimized for mobile (320px → 430px) and desktop
- Central content config (`src/config/content.ts`) — edit all text from one file
- `prefers-reduced-motion` support
- Optional music toggle (plug in your own `.mp3`)
- Vercel-ready build

## 🚀 Getting Started

### Prerequisites

- Node.js 18 or higher
- npm or pnpm

### Installation

```bash
# 1. Enter the project folder
cd chubby

# 2. Install dependencies
npm install
# or
pnpm install

# 3. Start the dev server
npm run dev
# or
pnpm dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

## 📝 Personalizing the Content

All editable text is in one file:

```
src/config/content.ts
```

Change names, messages, button labels — no need to touch the components.

## 🎵 Adding Background Music

1. Place your `.mp3` file in `public/audio/bg-music.mp3`
2. Open `src/App.tsx`
3. Change:
   ```ts
   const audioSrc: string | undefined = undefined;
   ```
   to:
   ```ts
   const audioSrc = '/audio/bg-music.mp3';
   ```

Music will only play when the visitor clicks the music toggle button (bottom-right corner).

## 🏗️ Building for Production

```bash
npm run build
# or
pnpm build
```

The output is in the `dist/` folder.

## 🌐 Deploying to Vercel

### Option A — Vercel CLI

```bash
npm i -g vercel
vercel
```

Follow the prompts. Framework will be auto-detected as Vite.

### Option B — Vercel Dashboard

1. Push this project to a GitHub repo.
2. Go to [vercel.com](https://vercel.com) → **New Project**.
3. Import your repo.
4. Vercel auto-detects Vite — click **Deploy**.

### Option C — Drag & Drop

1. Run `npm run build`
2. Drag the `dist/` folder to [vercel.com/new](https://vercel.com/new).

## 📁 Project Structure

```
src/
  components/
    TeddyBear.tsx       — SVG teddy bear + couple variants
    FloatingHearts.tsx  — ambient + triggered heart animations
    Envelope.tsx        — interactive opening envelope
    ApologyLetter.tsx   — staggered letter reveal
    PromiseCard.tsx     — hover-tilt promise cards
    SceneTransition.tsx — reusable page transition wrapper
    MusicToggle.tsx     — optional audio player control

  scenes/
    WelcomeScene.tsx    — Scene 1: hero + teddy + CTA
    EnvelopeScene.tsx   — Scene 2: envelope open animation
    LetterScene.tsx     — Scene 3: apology letter
    PromisesScene.tsx   — Scene 4: three promise cards
    SurpriseScene.tsx   — Scene 5: interactive hug + flowers
    FinalScene.tsx      — Scene 6: heart moon closing

  config/
    content.ts          — ✏️ ALL editable text lives here

  hooks/
    useReducedMotion.ts — respects OS accessibility setting

  App.tsx               — scene router + progress dots
  main.tsx              — React entry point
  index.css             — global styles + animations
```

## 🛠️ Tech Stack

| Tool | Purpose |
|------|---------|
| React 18 | UI framework |
| TypeScript | Type safety |
| Vite | Build tool |
| Tailwind CSS | Utility styling |
| Framer Motion | Animations |
| Lucide React | Music toggle icons |

---

Made with 💗 — just for you.

