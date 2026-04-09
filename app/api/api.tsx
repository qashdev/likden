import { useEffect, useState } from "react";

type Post = {
  id: number;
  title: string;
};

function App() {
  const [data, setData] = useState<Post[]>([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())
      .then((result) => {
        setData(result);
      });
  }, []);

  return (
    <div>
      <h1>Posts</h1>

      {data.map((item) => (
        <p key={item.id}>{item.title}</p>
      ))}
    </div>
  );
}

export default App;