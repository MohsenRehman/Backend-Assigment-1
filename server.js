import express from "express";
const app = express();
const PORT = 5000;

// Custom middleware for logging
app.use((req, res, next) => {
  console.log("Request received");
  next();
});

// Basic routes
app.get("/", (req, res) => {
  res.json({ message: "Welcome to Backend Assignment 1" });
});

app.get("/about", (req, res) => {
  res.json({ message: "This is the about page" });
});

app.get("/contact", (req, res) => {
  res.json({ message: "This is the contact page" });
});

// Users data
const users = [
  { id: 1, name: "Ali" },
  { id: 2, name: "Ahmed" },
];

app.get("/users", (req, res) => {
  res.json(users);
});

app.get("/users/:id", (req, res) => {
  const id = parseInt(req.params.id, 10);
  const user = users.find((u) => u.id === id);

  if (!user) {
    return res.status(404).json({ error: "User not found" });
  }

  res.json(user);
});

app.get("/search", (req, res) => {
  const { name } = req.query;
  res.json({ message: `Searching for ${name || ""}` });
});

app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});
