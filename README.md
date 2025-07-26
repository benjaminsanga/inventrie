# Inventrie

**Inventrie** is a simple, modern inventory and needs-tracking web app built with React, TypeScript, Redux Toolkit, and Vite. It allows you to quickly add, manage, and share lists of items—perfect for shopping, inventory, or any scenario where you need to keep track of things.

---

## Features

- **Add Items:** Quickly add items with a name and quantity.
- **Remove Items:** Remove individual items from your list.
- **Persistent Storage:** Items are saved in your browser's local storage, so your list is preserved between sessions.
- **Share List:** Share your current list using your device's native share dialog (supported browsers only).
- **Responsive Design:** Works great on both desktop and mobile devices.
- **Modern Stack:** Built with React 19, TypeScript, Redux Toolkit, and Vite for fast performance and easy development.

---

## Demo

> _You can try the app at:_  
> [https://inventrie.vercel.app//](https://inventrie.vercel.app//)

---

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v18 or higher recommended)
- [npm](https://www.npmjs.com/) (comes with Node.js)

### Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/your-username/inventrie.git
   cd inventrie
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start the development server:**
   ```bash
   npm run dev
   ```

4. Open [http://localhost:5173](http://localhost:5173) in your browser.

---

## Usage

- **Add an item:**  
  Enter the item name and quantity, then click "Add to List".
- **Remove an item:**  
  Click the "Remove" button next to any item.
- **Share your list:**  
  Click the "Share List" button to open your device's share dialog (supported browsers only).
- **Clear your list:**  
  (Feature can be added or accessed via browser local storage.)

---

## Tech Stack

- **Frontend:** React, TypeScript
- **State Management:** Redux Toolkit
- **Build Tool:** Vite
- **Styling:** CSS

---

## Project Structure

```
inventrie/
  ├── public/                # Static assets
  ├── src/
  │   ├── components/        # React components (EntryForm, ItemsList)
  │   ├── features/          # Redux slices, hooks, and store
  │   ├── App.tsx            # Main app component
  │   ├── main.tsx           # Entry point
  │   └── App.css            # Styles
  ├── index.html
  ├── package.json
  └── vite.config.ts
```

---

## Browser Support

- The app works in all modern browsers.
- The "Share List" feature uses the [Web Share API](https://developer.mozilla.org/en-US/docs/Web/API/Web_Share_API), which is supported on most mobile browsers and some desktop browsers (e.g., Chrome, Edge). If sharing is not supported, the app will notify you.

---

## Author

Made by [Benjamin Sanga](https://www.linkedin.com/in/benjamin-sanga/)

---

## License

This project is licensed under the MIT License.
