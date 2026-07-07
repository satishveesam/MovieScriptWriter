# 🎬 Movie Script Writer

<p align="center">
  <img src="https://img.shields.io/badge/React-18-61DAFB?style=for-the-badge&logo=react&logoColor=black" alt="React" />
  <img src="https://img.shields.io/badge/Vite-6-646CFF?style=for-the-badge&logo=vite&logoColor=white" alt="Vite" />
  <img src="https://img.shields.io/badge/Spring_Boot-3-6DB33F?style=for-the-badge&logo=springboot&logoColor=white" alt="Spring Boot" />
  <img src="https://img.shields.io/badge/PostgreSQL-Neon-4169E1?style=for-the-badge&logo=postgresql&logoColor=white" alt="PostgreSQL" />
  <img src="https://img.shields.io/badge/Docker-Enabled-2496ED?style=for-the-badge&logo=docker&logoColor=white" alt="Docker" />
  <img src="https://img.shields.io/badge/Netlify-Deployed-00C7B7?style=for-the-badge&logo=netlify&logoColor=white" alt="Netlify" />
  <img src="https://img.shields.io/badge/Render-Deployed-46E3B7?style=for-the-badge&logo=render&logoColor=white" alt="Render" />
</p>

A state-of-the-art, interactive web application tailored for screenwriters and creative teams. Movie Script Writer provides a browser-based, WYSIWYG editor that strictly adheres to professional screenplay format regulations (A4 and US Letter page sizes). Behind a beautiful visual interface lies a robust engine that handles auto-pagination, real-time cloud sync, history checkpoints, collaborative sharing, and synchronized high-fidelity PDF exports.

---

## 📸 Interface Preview (Desktop Mode)

### 💻 Main Screenplay Editor & Workspace
![Desktop Screenplay Editor](screenshots/desktop_editor.png)

### 📄 Vertically Centered Title Page Setup
![Title Page Layout](screenshots/title_page.png)

---

## 🌟 Key Product Features

### 1. Smart Screenplay Text Engine
- **Element Formatting Presets**: Create headings, action descriptions, characters, dialogues, parentheticals, transitions, and shots with ease.
- **Smart Hotkey Navigation**: Cycle through element types automatically using standard industry shortcuts (`Tab` / `Enter` flow).
- **Auto-Capitalization**: Automatically capitalizes character names and scene headings as you type.

### 2. Live Page View Layout (A4 & US Letter)
- **Pixel-Perfect Scaling**: Real-time translation of text inputs into A4 (`210mm` x `297mm`) or US Letter (`8.5"` x `11"`) formats.
- **Automated Pagination**: The frontend calculates text height dynamically, wrapping blocks onto a new visual page sheet once margins are reached.
- **Final Page Spacer**: Extends short last pages to full sheet heights, ensuring all pages remain identical in size.

### 3. High-Fidelity Custom Watermarking
- **Visual & Print Protection**: Custom diagonal watermarks with variable text and opacity overlay the editor pages.
- **Title Page Detection**: Watermarks automatically skip Page 1 if a Title Page is configured.

### 4. Direct Synchronization PDF/DOCX Export
- **Exact Layout Exporting**: PDF page breaks are calculated dynamically on the frontend and sent as parameters to the backend to guarantee identical document layout matching.
- **Custom Fonts**: Supported fonts include Courier New, Courier Prime, Cinzel, Special Elite, Space Mono, IM Fell English, Ultra, and Bungee.

### 5. Snapshot Version History
- **Automatic Checkpoints**: Periodically stores snapshots of the screenplay as you write.
- **Restore & Switch**: View and revert to any historical version of your script via a visual sidebar.

### 6. Public Sharing & Link Generation
- **Public View Mode**: Generate a shareable, secure link for read-only viewing and PDF downloads for producers or actors.

---

## ⌨️ Smart Formatting Shortcuts

Maximize writing speed using industry-standard keyboard controls:

| Element Type | Key Trigger (At line start) | formatting Context | Tab / Enter Cycle |
|---|---|---|---|
| **Scene Heading** | `INT.` or `EXT.` | Starts a scene location | Pressing `Enter` jumps to **Action** |
| **Character** | Type name (caps) | Specifies speaker name | Pressing `Enter` jumps to **Dialogue** |
| **Dialogue** | `Enter` after Character | Words spoken by character | Pressing `Enter` jumps to **Action** (or `Tab` for **Parenthetical**) |
| **Parenthetical** | `Tab` inside Dialogue | Action/tone during dialogue | Pressing `Enter` jumps to **Dialogue** |
| **Transition** | `F8` or Toolbar | Scene transition indicator | Pressing `Enter` jumps to **Scene Heading** |
| **Action** | Default state | Scene action descriptor | Pressing `Tab` jumps to **Character** |

---

## 🏗️ System Architecture

The application is structured into decoupled frontend and backend layers:

```mermaid
graph TD
    A[React Single Page App - Netlify] -->|HTTPS REST Requests| B[Spring Boot Gateway - Render]
    B -->|Entity Persistence| C[(Neon PostgreSQL Database)]
    B -->|High-Fidelity Rendering| D[OpenPDF Document Engine]
    A -->|Calculates Page Heights| E[Live Browser DOM]
    E -->|Page Break Indices| B
```

- **Frontend**: A highly responsive Single Page Application (SPA) built using React, Vite, and Tailwind CSS.
- **Backend**: A robust REST API backed by Spring Boot, Spring Security (JWT-based session authentication), and Lombok.
- **PDF Generation**: Handled via OpenPDF, dynamically applying style guidelines and pagination settings.

---

## ⚙️ Environment Variables

### Frontend (`frontend/.env.production`)
```env
VITE_API_BASE_URL=https://scriptwriter-backend.onrender.com
```

### Backend (Render Environment)
```env
SPRING_DATASOURCE_URL=postgresql://neondb_owner:...@ep-still-bonus...
SPRING_DATASOURCE_USERNAME=neondb_owner
SPRING_DATASOURCE_PASSWORD=xxxxxxxxxxxx
ALLOWED_ORIGINS=https://fancy-tapioca-624a02.netlify.app
JWT_SECRET=your-super-secure-production-jwt-signing-secret-key
```

---

## 🚀 Installation & Local Development

### 1. Backend Setup
1. Ensure **JDK 21** and **Maven** are installed.
2. Configure local environment variables or update `scriptwriter-backend/src/main/resources/application.properties`.
3. Build and launch:
   ```bash
   cd scriptwriter-backend
   ./mvnw.cmd spring-boot:run
   ```

### 2. Frontend Setup
1. Navigate to the frontend workspace.
2. Install npm packages:
   ```bash
   cd frontend
   npm install
   ```
3. Run in development mode:
   ```bash
   npm run dev
   ```
4. Build optimized bundle:
   ```bash
   npm run build
   ```

---

## 🛡️ License

This project is proprietary. All rights reserved.
