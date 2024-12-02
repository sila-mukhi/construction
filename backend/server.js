// // import dotenv from 'dotenv';
// // dotenv.config(); 

// // import express from "express";
// // // import dotenv from 'dotenv';
// // import cors from "cors";
// // import { connectDB } from "./config/db.js";
// // import carouselRouter from "./routes/carouselRoute.js";
// // import contactRouter from "./routes/contactRoute.js";
// // import serviceRouter from './routes/serviceRoute.js';
// // import projectRouter from './routes/projectRoute.js';
// // import testimonialRouter from './routes/testimonialRoute.js';
// // import discoverRouter from './routes/discoverRoute.js';
// // import completeRouter from './routes/completeRoute.js';
// // import ongoingRouter from './routes/ongoingRoute.js';
// // import galleryRouter from './routes/galleryRoute.js'
// // import userRouter from './routes/userRoute.js';


// // // App config
// // // dotenv.config();
// // console.log("EMAIL_USER:", process.env.EMAIL_USER);  // Log to verify
// // console.log("EMAIL_PASS:", process.env.EMAIL_PASS);  // Log to verify

// // const app = express();
// // // const port = 4300;
// // // for deploy
// // const port =process.env.PORT || 4300;

// // // Middleware
// // app.use(express.json());
// // app.use(cors());

// // // DB connection
// // connectDB();

// // // API endpoints

// // app.use("/api/carousels/", carouselRouter);
// // app.use("/carouselImages", express.static("carouselImages"));

// // app.use("/api/projects/", projectRouter);
// // app.use("/projectImages", express.static("projectImages"));

// // app.use("/api/testimonials/", testimonialRouter);
// // app.use("/testimonialImages", express.static("testimonialImages"));

// // app.use("/api/discovers/", discoverRouter);
// // app.use("/discoverImages", express.static("discoverImages"));

// // app.use("/api/completes/",completeRouter);
// // app.use("/completeImages",express.static("completeImages"))

// // app.use("/api/ongoings/",ongoingRouter);
// // app.use("/ongoingImages",express.static("ongoingImages"));

// // app.use("/api/galleries",galleryRouter);
// // app.use("/galleryImages",express.static("galleryImages"));

// // app.use("/api/contacts/", contactRouter);
// // app.use("/api/services/", serviceRouter);
// // // Static routes for service images and icons
// // app.use("/serviceImages", express.static("serviceImages")); // For service images
// // app.use("/serviceIcons", express.static("serviceIcons"));   // For service icons
// // app.use("/api/users/", userRouter); // Ensure this is active


// // // app.use("/testimonialImages", express.static('testimonialImages'));


// // // Health Check Route
// // app.get("/", (req, res) => {
// //     res.send("API working");
// // });

// // // Error Handling Middleware
// // app.use((err, req, res, next) => {
// //     console.error(err.stack);
// //     res.status(500).send({ success: false, message: 'Something went wrong!' });
// // });

// // // Start the server
// // app.listen(port, () => {
// //     console.log(`Server started on http://localhost:${port}`);
// // });


// import dotenv from "dotenv";
// dotenv.config();

// import express from "express";
// import cors from "cors";
// import { connectDB } from "./config/db.js";
// import carouselRouter from "./routes/carouselRoute.js";
// import contactRouter from "./routes/contactRoute.js";
// import serviceRouter from "./routes/serviceRoute.js";
// import projectRouter from "./routes/projectRoute.js";
// import testimonialRouter from "./routes/testimonialRoute.js";
// import discoverRouter from "./routes/discoverRoute.js";
// import completeRouter from "./routes/completeRoute.js";
// import ongoingRouter from "./routes/ongoingRoute.js";
// import galleryRouter from "./routes/galleryRoute.js";
// import userRouter from "./routes/userRoute.js";

// // App Config
// console.log("EMAIL_USER:", process.env.EMAIL_USER); // Debugging purposes
// console.log("EMAIL_PASS:", process.env.EMAIL_PASS); // Debugging purposes

// const app = express();
// const port = process.env.PORT || 4300;

// // Middleware
// app.use(express.json());
// app.use(cors());

// // Database Connection
// connectDB();

// // Static Routes for Uploaded Images
// const staticFolders = [
//   { route: "/carouselImages", folder: "carouselImages" },
//   { route: "/projectImages", folder: "projectImages" },
//   { route: "/testimonialImages", folder: "testimonialImages" },
//   { route: "/discoverImages", folder: "discoverImages" },
//   { route: "/completeImages", folder: "completeImages" },
//   { route: "/ongoingImages", folder: "ongoingImages" },
//   { route: "/galleryImages", folder: "galleryImages" },
//   { route: "/serviceImages", folder: "serviceImages" },
//   { route: "/serviceIcons", folder: "serviceIcons" },
// ];

// staticFolders.forEach(({ route, folder }) => {
//   app.use(route, express.static(folder));
// });

// // API Endpoints
// app.use("/api/carousels/", carouselRouter);
// app.use("/api/projects/", projectRouter);
// app.use("/api/testimonials/", testimonialRouter);
// app.use("/api/discovers/", discoverRouter);
// app.use("/api/completes/", completeRouter);
// app.use("/api/ongoings/", ongoingRouter);
// app.use("/api/galleries/", galleryRouter);
// app.use("/api/contacts/", contactRouter);
// app.use("/api/services/", serviceRouter);
// app.use("/api/users/", userRouter);

// // Health Check Route
// app.get("/", (req, res) => {
//   res.send("API working");
// });

// // Error Handling Middleware
// app.use((err, req, res, next) => {
//   console.error(err.stack);
//   res.status(500).send({ success: false, message: "Something went wrong!" });
// });

// // Start the Server
// app.listen(port, () => {
//   console.log(`Server started on http://localhost:${port}`);
// });


import dotenv from "dotenv";
dotenv.config();

import express from "express";
import cors from "cors";
import { connectDB } from "./config/db.js";
import carouselRouter from "./routes/carouselRoute.js";
import contactRouter from "./routes/contactRoute.js";
import serviceRouter from "./routes/serviceRoute.js";
import projectRouter from "./routes/projectRoute.js";
import testimonialRouter from "./routes/testimonialRoute.js";
import discoverRouter from "./routes/discoverRoute.js";
import completeRouter from "./routes/completeRoute.js";
import ongoingRouter from "./routes/ongoingRoute.js";
import galleryRouter from "./routes/galleryRoute.js";
import userRouter from "./routes/userRoute.js";
// import authRouter from "./routes/authRoute.js";

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
  { route: "/discoverImages", folder: "discoverImages" },
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
app.use("/api/discovers/", discoverRouter);
app.use("/api/completes/", completeRouter);
app.use("/api/ongoings/", ongoingRouter);
app.use("/api/galleries/", galleryRouter);
app.use("/api/contacts/", contactRouter);
app.use("/api/services/", serviceRouter);
app.use("/api/users/", userRouter);
// app.use("/api/auth/",auth Router)

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
