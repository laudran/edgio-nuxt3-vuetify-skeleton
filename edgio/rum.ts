import Router from '@edgio/rum/Router.js'
import { Metrics } from '@edgio/rum'

// Implementing Real Time User Monitoring (Core Web Vitals)
// https://docs.edg.io/guides/core_web_vitals#npm-or-yarn
export default function EdgioRUM(token: string) {
  new Metrics({
    // Set this TOKEN as an environment variable at Edgio Console
    // More on creating env variables: https://docs.edg.io/guides/environments#creating-environment-variables
    token: token,
    router: new Router()
      .match('/', ({ setPageLabel }) => setPageLabel('home'))
      .match('/search', ({ setPageLabel }) => setPageLabel('search'))
    //   .match('/', ({ setPageLabel }) => setPageLabel('product/:id')),
  }).collect()
}