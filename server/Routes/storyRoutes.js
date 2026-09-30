import express from "express";


import {
  createStory,
  deleteStory,
  fetchStory,
  updateStory,
} from "../controllers/storyController.js";

import { upload } from "../middleware/imageUpload.js";

const storyRouter = express.Router();

storyRouter.post(
  "/create",
  upload.single("image"),
  createStory
);

storyRouter.get(
  "/get",
  fetchStory
);

storyRouter.patch(
  "/update/:id",
  upload.single("image"),
  updateStory
);

storyRouter.delete(
  "/story/:id",
  deleteStory
);

export default storyRouter;