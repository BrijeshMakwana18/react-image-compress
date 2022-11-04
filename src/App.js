import { useState } from "react";
import { compressAccurately, downloadFile } from "image-conversion";
function App() {
  const [current, setCurrent] = useState("");
  const wait = (name) => {
    return new Promise((resolve) => {
      return setTimeout(() => resolve(name), 100);
    });
  };
  const onFileChange = async () => {
    let files = document.getElementById("file").files;
    for (let i = 0; i < files.length; i++) {
      let fileName = await wait(i);
      console.log(fileName);
      await compressAccurately(files[i], 300).then((res) => {
        setCurrent(files[i].name);
        downloadFile(res, files[i].name);
      });
    }
    setCurrent("Completed");
  };
  return (
    <div
      style={{
        display: "flex",
        height: "100vh",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "black",
        color: "white",
      }}
    >
      <input
        style={{
          height: "4vh",
          width: "10vw",
        }}
        type="file"
        id="file"
        multiple
        onChange={onFileChange}
      />
      <p>{current}</p>
    </div>
  );
}

export default App;
