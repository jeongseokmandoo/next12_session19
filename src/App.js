import { useState } from "react";
import "./App.css";

function Header({ onChangeMode, children }) {
  return <h1 onClick={() => onChangeMode()}>{children}</h1>;
}

function Article({ content, title }) {
  return (
    <article>
      <h2>{title}</h2>
      <p>{content}</p>
    </article>
  );
}

function Nav({ onChangeMode, list }) {
  return (
    <nav>
      <ol>
        {list.map((item) => (
          <li key={item.id} onClick={() => onChangeMode(item.id)}>
            <div>{item.title}</div>
          </li>
        ))}
      </ol>
    </nav>
  );
}

function App() {
  const [mode, setMode] = useState("HOME");
  const [id, setId] = useState(-1);

  const list = [
    { id: 0, title: "이름", desc: "정석민" },
    { id: 1, title: "생년월일", desc: "2000.03.27" },
    { id: 2, title: "학력", desc: "고려대학교" },
  ];

  let title;
  let content;

  if (mode === "HOME") {
    title = "인사";
    content = "안녕하세요. 정석민입니다.";
  } else if (mode === "READ") {
    title = list[id].title;
    content = list[id].desc;
  }

  return (
    <>
      <Header onChangeMode={() => setMode("HOME")}>정석민 이력서</Header>
      <Nav
        list={list}
        onChangeMode={(_id) => {
          setMode("READ");
          setId(_id);
        }}
      ></Nav>
      <Article title={title} content={content}></Article>
    </>
  );
}

export default App;
