import { Router } from '@edgio/core'
import { nuxtRoutes } from '@edgio/nuxt-nitro'
// import getPrerenderRequests from './getPrerenderRequests'
// import { isProductionBuild } from '@edgio/core/environment'
import { COMPONENT_CACHE_HANDLER, EDGE_CACHE_HANDLER } from './cache'

const router = new Router()

// router.prerender(getPrerenderRequests)

// Only compiled with 0 build / 0 deploy 
    // Cache but not in 0 dev mode
.match('/', EDGE_CACHE_HANDLER)
.match('/_nuxt/:path*', COMPONENT_CACHE_HANDLER)

.use(nuxtRoutes)

export default router