import "./App.css";

function Header({ onChangeMode, children }) {
  return <h1 onClick={onChangeMode}>{children}</h1>;
}

function Article({ content, title }) {
  return (
    <article>
      <h2>{title}</h2>
      <p>{content}</p>
    </article>
  );
}

function Nav({ list }) {
  return (
    <nav>
      <ol>
        {list.map((item) => (
          <li key={item.id}>
            <div>{item.title}</div>
          </li>
        ))}
      </ol>
    </nav>
  );
}

function App() {
  const list = [
    { id: 1, title: "이름", desc: "정석민" },
    { id: 2, title: "생년월일", desc: "2000.03.27" },
    { id: 3, title: "학력", desc: "한국항공대학교" },
  ];

  const title = "인사";
  const content = "안녕하세요. 정석민입니다.";

  return (
    <>
      <Header onChangeMode={() => alert("hi")}>정석민 이력서</Header>
      <Nav list={list}></Nav>
      <Article title={title} content={content}></Article>
    </>
  );
}

export default App;
