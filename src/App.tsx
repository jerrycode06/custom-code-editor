import React, { useState } from "react";
import "./App.css";
import CodeEditor from "./components/CodeEditor";
import { highlight, languages } from "prismjs";

const App: React.FC = () => {
  const [code, setCode] = useState<string>(
    `function helloWorld() {\n  console.log("Hello, world!");\n}`
  );
  const [language, setLanguage] = useState<"javascript" | "css" | "html">(
    "javascript"
  );

  return (
    <div className="App">
      <h1>Jerry's code editor</h1>
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
