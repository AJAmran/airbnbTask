import {
  createProperty,
  deleteProperty,
  getProperties,
  updateProperty,
} from "../service/propertyService.js";

export const getPropertiesController = async (req, res, next) => {
  try {
    const searchParams = req.query || {};
    const properties = await getProperties(searchParams);
    res.json(properties);
  } catch (error) {
    next(error);
  }
};

// Create a new property with images and other details
export const createPropertyController = async (req, res, next) => {
  try {
    const propertyData = req.body;
    const property = await createProperty(propertyData); 
    res.status(201).json(property); 
  } catch (error) {
    next(error);
  }
};

// Update an existing property by its ID
export const updatePropertyController = async (req, res, next) => {
  try {
    const propertyId = req.params.id; 
    const propertyData = req.body; 
    const updatedProperty = await updateProperty(propertyId, propertyData); 
    res.json(updatedProperty); 
  } catch (error) {
    next(error); 
  }
};

// Delete a property by its ID
export const deletePropertyController = async (req, res, next) => {
  try {
    const propertyId = req.params.id; 
    await deleteProperty(propertyId); 
    res.json({ message: "Property deleted" }); 
  } catch (error) {
    next(error);
  }
};
