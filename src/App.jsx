import { useState } from "react";

function App() {
  const [url, setUrl] = useState("");
  const [iframeSrc, setIframeSrc] = useState("");

  const handleLoad = () => {
    // Basic validation
    try {
      const formatted = new URL(url);
      setIframeSrc(formatted.toString());
    } catch {
      alert("Please enter a valid URL (include https://)");
    }
  };

  return (
    <div style={{ padding: "1rem" }}>
      <h2>Iframe Loader</h2>

      <input
        type="text"
        placeholder="https://example.com"
        value={url}
        onChange={(e) => setUrl(e.target.value)}
        style={{ width: "400px", marginRight: "8px" }}
      />

      <button onClick={handleLoad}>Load</button>

      <div style={{ marginTop: "20px" }}>
        {iframeSrc && (
          <iframe
            src={iframeSrc}
            title="Dynamic Iframe"
            width="100%"
            height="600px"
            style={{ border: "1px solid #ccc" }}
          />
        )}
      </div>
    </div>
  );
}

export default App;
