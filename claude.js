const apiKey = "YOUR API KEY".trim();

async function askJarvis(prompt) {
  try {
    const res = await fetch("https://openrouter.ai/api/v1/chat/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": "Bearer " + apiKey
      },
     body: JSON.stringify({
    model: "poolside/laguna-m.1:free",
    messages: [{ role: "user", content: prompt }]


})
    });

    const data = await res.json();
    console.log(data); // 👈 Check console after sending!

    if (data.choices && data.choices[0]) {
      return data.choices[0].message.content;
    } else {
      return "Error: " + JSON.stringify(data);
    }

  } catch (err) {
    return "Failed: " + err.message;
  }
}

export { askJarvis };