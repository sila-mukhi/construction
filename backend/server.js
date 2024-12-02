import dotenv from "dotenv";
dotenv.config();

import express from "express";
import cors from "cors";
import { connectDB } from "./config/db.js";
import carouselRouter from "./routes/carouselRoute.js";
import contactRouter from "./routes/contactRoute.js";
import serviceRouter from "./routes/serviceRoute.js";
import projectRouter from "./routes/projectRoute.js";
import testimonialRouter from "./routes/testimonialRoute.js"
import completeRouter from "./routes/completeRoute.js";
import ongoingRouter from "./routes/ongoingRoute.js";
import galleryRouter from "./routes/galleryRoute.js";
import userRouter from "./routes/userRoute.js";


// App Config
console.log("EMAIL_USER:", process.env.EMAIL_USER); // Debugging purposes
console.log("EMAIL_PASS:", process.env.EMAIL_PASS); // Debugging purposes

const app = express();
const port = process.env.PORT || 4300;

// Middleware
app.use(express.json());
app.use(cors());

// Database Connection
connectDB();

// Static Routes for Uploaded Images
const staticFolders = [
  { route: "/carouselImages", folder: "carouselImages" },
  { route: "/projectImages", folder: "projectImages" },
  { route: "/testimonialImages", folder: "testimonialImages" },
  { route: "/completeImages", folder: "completeImages" },
  { route: "/ongoingImages", folder: "ongoingImages" },
  { route: "/galleryImages", folder: "galleryImages" },
  { route: "/serviceImages", folder: "serviceImages" },
  { route: "/serviceIcons", folder: "serviceIcons" },
];

// Serve static image folders dynamically
staticFolders.forEach(({ route, folder }) => {
  app.use(route, express.static(folder));
});

// API Endpoints
app.use("/api/carousels/", carouselRouter);
app.use("/api/projects/", projectRouter);
app.use("/api/testimonials/", testimonialRouter);
app.use("/api/completes/", completeRouter);
app.use("/api/ongoings/", ongoingRouter);
app.use("/api/galleries/", galleryRouter);
app.use("/api/contacts/", contactRouter);
app.use("/api/services/", serviceRouter);
app.use("/api/users/", userRouter);

// Health Check Route
app.get("/", (req, res) => {
  res.send("API working");
});

// Error Handling Middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send({ success: false, message: "Something went wrong!" });
});

// Start the Server
app.listen(port, () => {
  console.log(`Server started on http://localhost:${port}`);
});
