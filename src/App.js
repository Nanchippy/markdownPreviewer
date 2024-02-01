import './App.css';
import { useState, useEffect } from "react";
import * as marked from "marked";

function App() {
  const [text, setText] = useState(` # Hello
  ## Welcome to Nan's Markdown Previewer
  [title](https://www.example.com)

  \`code\`
  \`\`\`
{
  "firstName": "John",
  "lastName": "Smith",
  "age": 25
}
\`\`\`

- First item
- Second item
- Third item
> blockquote 

![alt text](image.jpg)

**bold text**
`);

useEffect(() => {
  marked.setOptions({ breaks: true });
}, []);
  return (
    <div className="App">
      <textarea
        id="editor"
        onChange={(event) => {
          setText(event.target.value);
        }}
        value={text}
      ></textarea>
      <div
        id="preview"
        dangerouslySetInnerHTML={{ __html: marked.parse(text) }}
      ></div>
    </div>
  );
}

export default App;
