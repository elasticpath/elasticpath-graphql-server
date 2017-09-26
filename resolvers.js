module.exports = {
  Query: {
    allProducts: (root, args, {Moltin}) => {
      return new Promise((resolve, reject) => {
        Moltin.Products
          .All()
          .then(({data}) => {
            console.log(data);

            return resolve(data);
          })
          .catch(err => reject(err));
      });
    },
    Product: (root, {id}, {Moltin}) => {
      return new Promise((resolve, reject) => {
        Moltin.Products
          .Get(id)
          .then(({data}) => {
            console.log(data);

            return resolve(data);
          })
          .catch(err => reject(err));
      });
    }
  },
  allBrands: (root, args, {Moltin}) => {
    return new Promise((resolve, reject) => {
      Moltin.Brands
        .All()
        .then(data => resolve(data))
        .catch(err => reject(err));
    });
  },
  Brand: (root, {id}, {Moltin}) => {
    return new Promise((resolve, reject) => {
      Moltin.Brands
        .Get(id)
        .then(({data}) => {
          console.log(data);

          return resolve(data);
        })
        .catch(err => reject(err));
    });
  }
}
};
