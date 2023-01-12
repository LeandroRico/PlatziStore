const { RegularExpression } = require('graphql-scalars');
const {
  getProduct,
  getProducts,
  addProduct,
  updateProduct,
  deleteProduct,
  getProductsByCategory,
} = require('./productResolvers');
const { login } = require('./authResolvers');
const { addCategory, getCategory } = require('./categoryResolvers');

const CategoryNameType = new RegularExpression(
  'CategoryNameType',
  /^[a-zA-Z0-9]{3,8}/
);

const resolvers = {
  Query: {
    product: getProduct,
    products: getProducts,
    category: getCategory,
  },
  Mutation: {
    login,
    addProduct,
    updateProduct,
    deleteProduct,
    addCategory,
  },
  CategoryNameType,
  Category: {
    products: getProductsByCategory,
  },
};

module.exports = resolvers;
