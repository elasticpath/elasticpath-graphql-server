import { UserInputError } from 'apollo-server'

const addToCart = (root, { cartId, productId, quantity }, { dataSources }) => {
  try {
    return dataSources.cartsAPI.addProductToCart(cartId, productId, quantity)
  } catch (e) {
    throw new UserInputError('API returned with errors.', e)
  }
}

const updateProductQtyInCart = (root, { cartId, productId, quantity }, { dataSources }) => {
  try {
    return dataSources.cartsAPI.updateProductQtyInCart(cartId, productId, quantity)
  } catch (e) {
    throw new UserInputError('API returned with errors.', e)
  }
}

const addPromotion = (root, { cartId, promotionCode }, { dataSources }) => {
  try {
    return dataSources.cartsAPI.addProductToCart(cartId, promotionCode)
  } catch (e) {
    throw new UserInputError('API returned with errors.', e)
  }
}

const addCustomItemToCart = (root, { cartId, customItem }, { dataSources }) => {
  try {
    return dataSources.cartsAPI.addCustomItemToCart(cartId, customItem)
  } catch (e) {
    throw new UserInputError('API returned with errors.', e)
  }
}

const checkoutCart = (root, { cartId, customer, billing, shipping = billing }, { dataSources }) => {
  try {
    return dataSources.cartsAPI.checkout(cartId, customer, billing, shipping)
  } catch (e) {
    throw new UserInputError('API returned with errors.', e)
  }
}

const checkoutCartForAccount = (root, { cartId, contact, billing, shipping = billing }, { dataSources }) => {
  try {
    return dataSources.cartsAPI.checkoutForAccount(cartId, contact, billing, shipping)
  } catch (e) {
    throw new UserInputError('API returned with errors.', e)
  }
}

const payForOrder = (root, { orderId, gateway, method }, { dataSources }) => {
  try {
    return dataSources.ordersAPI.payForOrder(orderId, gateway, method)
  } catch (e) {
    throw new UserInputError('API returned with errors.', e)
  }
}

export default {
  checkoutCart,
  checkoutCartForAccount,
  updateProductQtyInCart,
  addToCart,
  addPromotion,
  addCustomItemToCart,
  payForOrder,
}
