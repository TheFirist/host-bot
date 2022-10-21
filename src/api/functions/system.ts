import api from "../"

export interface Plans {
  roleID: string
  name: string
  memory: number
  cpu: number
  maxBots: number
  node: string
}

export async function getPlans(): Promise<Plans[]> {
  return new Promise((res) => {
    api
      .get("/system")
      .then((data) => {
        const plans = data.data.data.attributes.plans as Plans[]
        res(plans)
      })
      .catch((err) => {
        res(err.status)
      })
  })
}

export async function getImages(): Promise<[]> {
  return new Promise((res) => {
    api
      .get("/system")
      .then((data) => {
        const images = data.data.data.attributes.images
        res(images)
      })
      .catch((err) => {
        res(err.status)
      })
  })
}
