module.exports = {
  Query: {
    allProducts: (root, args, {Moltin}) => {
      return new Promise((resolve, reject) => {
        Moltin.Products
          .All()
          .then(({data}) => resolve(data))
          .catch(err => reject(err))
      })
    },

    Product: (root, {id}, {Moltin}) => {
      return new Promise((resolve, reject) => {
        Moltin.Products
          .Get(id)
          .then(({data}) => resolve(data))
          .catch(err => reject(err))
      })
    },

    allBrands: (root, args, {Moltin}) => {
      return new Promise((resolve, reject) => {
        Moltin.Brands
          .All()
          .then(({data}) => resolve(data))
          .catch(err => reject(err))
      })
    },

    Brand: (root, {id}, {Moltin}) => {
      return new Promise((resolve, reject) => {
        Moltin.Brands
          .Get(id)
          .then(({data}) => resolve(data))
          .catch(err => reject(err))
      })
    },

    allCollections: (root, args, {Moltin}) => {
      return new Promise((resolve, reject) => {
        Moltin.Collections
          .All()
          .then(({data}) => resolve(data))
          .catch(err => reject(err))
      })
    },

    Collection: (root, {id}, {Moltin}) => {
      return new Promise((resolve, reject) => {
        Moltin.Collections
          .Get(id)
          .then(({data}) => resolve(data))
          .catch(err => reject(err))
      })
    },

    allCategories: (root, args, {Moltin}) => {
      return new Promise((resolve, reject) => {
        Moltin.Categories
          .All()
          .then(({data}) => resolve(data))
          .catch(err => reject(err))
      })
    },

    Category: (root, {id}, {Moltin}) => {
      return new Promise((resolve, reject) => {
        Moltin.Categories
          .Get(id)
          .then(({data}) => resolve(data))
          .catch(err => reject(err))
      })
    }
  }
}
