import express from "express";
import {
  createPropertyController,
  deletePropertyController,
  getPropertiesController,
  updatePropertyController,
} from "../controllers/propertyController.js";

const router = express.Router();

router.route("/").get(getPropertiesController).post(createPropertyController);

router
  .route("/:id")
  .put(updatePropertyController)
  .delete(deletePropertyController);

export default router;
