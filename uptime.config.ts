import { MaintenanceConfig, PageConfig, WorkerConfig } from './types/config'

const pageConfig: PageConfig = {
  // Title for your status page
  title: "Misaka13514's Status Page",
  // Links shown at the header of your status page, could set `highlight` to `true`
  links: [
    { link: 'https://github.com/Misaka13514/heartbeat', label: 'GitHub' },
  ],
  // [OPTIONAL] Group your monitors
  // If not specified, all monitors will be shown in a single list
  // If specified, monitors will be grouped and ordered, not-listed monitors will be invisble (but still monitored)
  group: {
    '🍂 Proj. One Among Us': [
      'oau_memo_frontend',
      'oau_memo_data',
      'oau_memo_backend',
      'oau_about',
      'oau_neorle',
      'oau_liveweb',
      'oau_tia',
      'oau_tia_uniguide',
    ],
  },
  // [OPTIONAL] Set the path to your favicon, default to '/favicon.ico' if not specified
  favicon: '/favicon.ico',
  // [OPTIONAL] Maintenance related settings
  maintenances: {
    // [OPTIONAL] The color of upcoming maintenance alerts, default to 'gray'
    // Active alerts will always use the color specified in the MaintenanceConfig
    upcomingColor: 'gray',
  },
}

const workerConfig: WorkerConfig = {
  // Write KV at most every 3 minutes unless the status changed
  kvWriteCooldownMinutes: 3,
  // Enable HTTP Basic auth for status page & API by uncommenting the line below, format `<USERNAME>:<PASSWORD>`
  // passwordProtection: 'username:password',
  // Define all your monitors here
  monitors: [
    {
      id: 'oau_memo_frontend',
      name: 'OAU: memorial website - Frontend',
      method: 'GET',
      target: 'https://one-among.us/?uwu=true',
      tooltip: 'GitHub Pages + Cloudflare CDN',
      statusPageLink: 'https://github.com/one-among-us/web',
      responseKeyword: '那些秋叶',
    },
    {
      id: 'oau_memo_data',
      name: 'OAU: memorial website - Data',
      method: 'GET',
      target: 'https://data.one-among.us/eggs.json',
      tooltip: 'GitHub Pages + Cloudflare CDN',
      statusPageLink: 'https://github.com/one-among-us/data',
      responseKeyword: '舞萌',
    },
    {
      id: 'oau_memo_backend',
      name: 'OAU: memorial website - Backend',
      method: 'GET',
      target: 'https://backend.one-among.us/flowers/get?id=Misaka13514',
      tooltip: 'Vultr (Seattle) + Cloudflare CDN',
      statusPageLink: 'https://github.com/one-among-us/backend',
      responseKeyword: '0',
    },
    {
      id: 'oau_about',
      name: 'OAU: about website',
      method: 'GET',
      target: 'https://oneamongus.ca',
      tooltip: 'GitHub Pages + Cloudflare CDN',
      statusPageLink: 'https://github.com/one-among-us/about-site',
      responseKeyword: 'One Among Us Transgender Support',
    },
    {
      id: 'oau_neorle',
      name: 'OAU: neo-RLEwiki',
      method: 'GET',
      target: 'https://rle.oau.app',
      tooltip: 'GitHub Pages + Cloudflare CDN',
      statusPageLink: 'https://github.com/one-among-us/neo-RLEwiki',
      responseKeyword: 'neo-RLEwiki',
    },
    {
      id: 'oau_liveweb',
      name: 'OAU: live redirector',
      method: 'GET',
      target: 'https://live.oau.app',
      tooltip: 'Contabo (Nuremberg) + Cloudflare CDN',
      statusPageLink: 'https://github.com/one-among-us/appservers/blob/main/apps/live-website/index.html',
      responseKeyword: '直播已经结束，点击下列链接查看回放',
    },
    {
      id: 'oau_tia',
      name: 'OAU: Tia redirector',
      method: 'GET',
      target: 'https://oau.edu.kg',
      tooltip: 'Contabo (Nuremberg) + Cloudflare CDN',
      statusPageLink: 'https://github.com/one-among-us/appservers/blob/main/apps/tia-legacy/index.html',
      responseKeyword: 'Redirecting to One Among Us homepage',
    },
    {
      id: 'oau_tia_uniguide',
      name: 'OAU: UniGuide',
      method: 'GET',
      target: 'https://uniguide.oau.edu.kg',
      tooltip: 'GitHub Pages + Cloudflare CDN',
      statusPageLink: 'https://github.com/one-among-us/TransAcademicUniGuide',
      responseKeyword: 'Transgender University Guidance',
    },
  ],
  callbacks: {
    onStatusChange: async (
      env: any,
      monitor: any,
      isUp: boolean,
      timeIncidentStart: number,
      timeNow: number,
      reason: string
    ) => {
      // This callback will be called when there's a status change for any monitor
      // Write any TypeScript code here
      // This will not follow the grace period settings and will be called immediately when the status changes
      // You need to handle the grace period manually if you want to implement it
    },
    onIncident: async (
      env: any,
      monitor: any,
      timeIncidentStart: number,
      timeNow: number,
      reason: string
    ) => {
      // This callback will be called EVERY 1 MINTUE if there's an on-going incident for any monitor
      // Write any TypeScript code here
    },
  },
}

// You can define multiple maintenances here
// During maintenance, an alert will be shown at status page
// Also, related downtime notifications will be skipped (if any)
// Of course, you can leave it empty if you don't need this feature
// const maintenances: MaintenanceConfig[] = []
const maintenances: MaintenanceConfig[] = []

// Don't forget this, otherwise compilation fails.
export { maintenances, pageConfig, workerConfig }
