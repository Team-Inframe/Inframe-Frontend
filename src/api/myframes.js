// @ts-ignore
const BASE_URL = `${import.meta.env.VITE_BASE_URL}`;

async function fetchCustomFrames() {
  try {
    const response = await fetch(BASE_URL, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer YOUR_ACCESS_TOKEN", // Replace with your actual access token
      },
    });

    if (!response.ok) {
      throw new Error("Network response was not ok " + response.statusText);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("There has been a problem with your fetch operation:", error);
  }
}

// Example usage
fetchCustomFrames().then((frames) => console.log(frames));
