import Property from "../model/Property.js";

export const getProperties = async (filters = {}) => {
  const query = {};

  // Apply filters if available
  if (filters.filter) {
    query.category = filters.filter;
  }
  if (filters.country) {
    query.country = filters.country;
  }
  if (filters.guest) {
    query.guests = filters.guest;
  }
  if (filters.room) {
    query.bedrooms = filters.room;
  }
  if (filters.bathroom) {
    query.bathrooms = filters.bathroom;
  }

  // Fetch data from MongoDB
  const properties = await Property.find(query)
    .select("title location category images price description country")
    .lean();

  return properties;
};

// Create a new property with images and other details
export const createProperty = async (data) => {
  const property = new Property(data);
  return await property.save();
};

// Update an existing property by its ID
export const updateProperty = async (id, data) => {
  return await Property.findByIdAndUpdate(id, data, { new: true });
};

// Delete a property by its ID
export const deleteProperty = async (id) => {
  return await Property.findByIdAndDelete(id);
};
