// Import fetch to fetch and create prerender routes
import axios from "axios"

// Function to create all the paths to prerender
export default async function getPathsToPrerender() {
  const prerenderPaths = ['/about', '/profile']
  // Get all the slugs for the product pages
  const respCall = await axios.get('')
  .then(({data}) => {
    data.forEach((el: any) => {
      const nonSlashPath = el.path.replace(/\//g, '')
    })
  })
  .catch(err => {
    console.error('The fetch call failed, no paths to populate cache with.')
  })
  // Finally, return all the paths with the intended mapping to Edgio prerender syntax
  return prerenderPaths.filter((i) => i).map((i) => ({ path: i }))
}