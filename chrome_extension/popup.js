document.getElementById("checkBtn").addEventListener("click", async () => {
  const input = document.getElementById("urlInput").value;
  const res = await fetch("http://localhost:5000/api/check", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ input })
  });
  const data = await res.json();
  document.getElementById("result").innerText = data.scam ? "⚠️ Likely Scam" : "✅ Safe";
});
