import * as DataLoader from 'dataloader'

import { Moltin } from '../'

const mainImageLoader = new DataLoader<string,any>(async imageIds => {
  return imageIds.map(async id => {
    console.log("file loader")
    const {
      data: { link, ...rest },
    } = await Moltin.Files.Get(id)

    console.log(link)
    return {
      href: link.href,
      ...rest,
    }
  })
})
export default {
  mainImageLoader
}
