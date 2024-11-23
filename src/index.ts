import express from "express";
import { fetchDataAndLog } from "./modules/startupLogic"; // Import your logic function

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware or Routes setup (if any)
app.use(express.json());

// Run your custom logic when the server starts
fetchDataAndLog(); // This will execute your API call or startup logic

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
