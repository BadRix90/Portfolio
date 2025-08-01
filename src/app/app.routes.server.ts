import { RenderMode, type ServerRoute } from "@angular/ssr"

export const serverRoutes: ServerRoute[] = [
  {
    path: "project/:id",
    renderMode: RenderMode.Prerender,
    getPrerenderParams: async () => {
      return [{ id: "join" }, { id: "powerofthebeast" }, { id: "dabubble" }]
    },
  },
  {
    path: "**",
    renderMode: RenderMode.Prerender,
  },
]
