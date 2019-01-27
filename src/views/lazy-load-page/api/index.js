import { get, post } from '@/plugins/http'
let apiHost = '/proxy'
export function fetchList ({sinceId, containerId, openApp} = {}) {
  return get(`${apiHost}/api/container/getIndex`, {
    since_id: sinceId,
    containerid: containerId,
    openApp
  })
}
