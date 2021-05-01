import * as DataLoader from 'dataloader'

import { Moltin } from '../'

const brandLoader = new DataLoader<string,any>(async brandIds => {
  return brandIds.map(async id => {
    const { data } = await Moltin.Brands.Get(id)

    return data
  })
})

const productLoader = new DataLoader<string,any>(async productIds => {
  return productIds.map(async id => {
    const { data } = await Moltin.Products.Get(id)

    return data
  })
})

const mainImageLoader = new DataLoader<string,any>(async imageIds => {
  return imageIds.map(async id => {
    const {
      data: { link, ...rest },
    } = await Moltin.Files.Get(id)

    return {
      href: link.href,
      ...rest,
    }
  })
})

export default {
  brandLoader,
  mainImageLoader,
  productLoader,
}
