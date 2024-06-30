# Jerry's Code Editor

This project is a simple code editor built with React and Prism.js for syntax highlighting. The editor supports JavaScript, CSS, and HTML highlighting.

## Features

- Syntax highlighting for JavaScript, CSS, and HTML
- Editable code area with syntax highlighting
- Selectable language for highlighting

## Getting Started

### Prerequisites

- Node.js and npm installed on your machine

### Installation

1. Clone the repository:

   ```sh
   git clone https://github.com/jerrycode06/custom-code-editor.git
   cd custom-code-editor
   ```

2. Install the dependencies

```sh
npm install
```

3. Start the project

```sh
npm run dev
```

### Usage

1. CodeEditor Component

The `CodeEditor` component is the main component used for the code editor. Here is how you can use it in your project.

```tsx
const App: React.FC = () => {
  const [code, setCode] = useState<string>(
    `function helloWorld() {\n  console.log("Hello, world!");\n}`
  );
  const [language, setLanguage] = useState<"javascript" | "css" | "html">(
    "javascript"
  );

  return (
    <div className="App">
      <h1>Custom Code Editor with Prism.js</h1>
      <select
        value={language}
        onChange={(e) =>
          setLanguage(e.target.value as "javascript" | "css" | "html")
        }
      >
        <option value="javascript">JavaScript</option>
        <option value="css">CSS</option>
        <option value="html">HTML</option>
      </select>
      <CodeEditor
        value={code}
        onValueChange={setCode}
        highlight={(code) => highlight(code, languages[language]!, language)}
        language={language}
        padding={10}
      />
    </div>
  );
};

export default App;
```

2. CodeEditor Props

- `value`: The code to be highlighted.
- `onValueChange`: Callback function to handle code changes.
- `highlight`: Function to highlight the code using Prism.js.
- `language`: The language for syntax highlighting (javascript, css, or html).
- `padding (optional)`: Padding inside the editor. Can be a number, string, or object with top, right, bottom, and left properties.
- `textareaId (optional)`: The id attribute for the textarea.
- `textareaClassName (optional)`: Additional class names for the textarea.
- `style (optional)`: Additional styles for the editor container.

3. Folder Structure

- `src`
  - `components`
    - `codeEditor.css`: Styling for the code editor component
    - `CodeEditor.tsx`: The main code for the code editor component
  - `prismSetup.ts`: Sets up Prism.js with necessary languages and themes.
  - `App.tsx`: Main App Component
  - `main.tsx`: Root Component
  - `index.css`: Styling the base application
