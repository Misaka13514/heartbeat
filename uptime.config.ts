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
    '🐧 Apeiria Arch Linux Repository': [
      'apeiria_aur_index',
      'apeiria_aur_build',
    ],
    '🍂 Proj. One Among Us': [
      'oau_memo_frontend',
      'oau_memo_data',
      'oau_memo_backend',
      'oau_about',
      'oau_neorle',
      'oau_falling_frontend',
      'oau_falling_data',
      'oau_matrix',
      'oau_headscale',
      'oau_liveweb',
      'oau_tia',
      'oau_tia_uniguide',
    ],
  },
  // [OPTIONAL] Set the path to your favicon, default to '/favicon.png' if not specified
  // favicon: 'https://example.com/favicon.ico',
  // [OPTIONAL] Set the path to your logo, default to '/logo.svg' if not specified
  // logo: 'https://example.com/logo.svg',
  // [OPTIONAL] Maintenance related settings
  maintenances: {
    // [OPTIONAL] The color of upcoming maintenance alerts, default to 'gray'
    // Active alerts will always use the color specified in the MaintenanceConfig
    upcomingColor: 'gray',
  },
  // [OPTIONAL] Custom footer html
  // customFooter: '',
}

const workerConfig: WorkerConfig = {
  // [Optional] Write KV at most every N minutes unless the status changed, default to 3
  kvWriteCooldownMinutes: 3,
  // Enable HTTP Basic auth for status page & API by uncommenting the line below, format `<USERNAME>:<PASSWORD>`
  // passwordProtection: 'username:password',
  // Define all your monitors here
  monitors: [
    {
      id: 'apeiria_aur_index',
      name: 'apeiria: Index',
      method: 'GET',
      target: 'https://aur.apeiria.net',
      tooltip: 'Cloudflare Workers + OneDrive',
      statusPageLink: 'https://github.com/Misaka13514-AUR/ODIndex',
      responseKeyword: 'Apeiria Arch Linux Repository',
      checkProxy: 'worker://apac',
      checkProxyFallback: true,
    },
    {
      id: 'apeiria_aur_build',
      name: 'apeiria: Build Logs',
      method: 'GET',
      target: 'https://build.apeiria.net',
      tooltip: 'Cloudflare Workers + Supabase',
      statusPageLink: 'https://github.com/Misaka13514-AUR/build-logs',
      responseKeyword: 'Packages',
      checkProxy: 'worker://apac',
      checkProxyFallback: true,
    },
    {
      id: 'oau_memo_frontend',
      name: 'OAU: memorial website - Frontend',
      method: 'GET',
      target: 'https://one-among.us/?uwu=true',
      tooltip: 'GitHub Pages + Cloudflare CDN',
      statusPageLink: 'https://github.com/one-among-us/web',
      responseKeyword: '那些秋叶',
      checkProxy: 'worker://apac',
      checkProxyFallback: true,
    },
    {
      id: 'oau_memo_data',
      name: 'OAU: memorial website - Data',
      method: 'GET',
      target: 'https://data.one-among.us/eggs.json',
      tooltip: 'GitHub Pages + Cloudflare CDN',
      statusPageLink: 'https://github.com/one-among-us/data',
      responseKeyword: '舞萌',
      checkProxy: 'worker://apac',
      checkProxyFallback: true,
    },
    {
      id: 'oau_memo_backend',
      name: 'OAU: memorial website - Backend',
      method: 'GET',
      target: 'https://backend.one-among.us/flowers/get?id=Misaka13514',
      tooltip: 'Vultr (Seattle) + Cloudflare CDN',
      statusPageLink: 'https://github.com/one-among-us/backend',
      responseKeyword: '0',
      checkProxy: 'worker://apac',
      checkProxyFallback: true,
    },
    {
      id: 'oau_about',
      name: 'OAU: about website',
      method: 'GET',
      target: 'https://oneamongus.ca',
      tooltip: 'GitHub Pages + Cloudflare CDN',
      statusPageLink: 'https://github.com/one-among-us/about-site',
      responseKeyword: 'One Among Us Transgender Support',
      checkProxy: 'worker://apac',
      checkProxyFallback: true,
    },
    {
      id: 'oau_neorle',
      name: 'OAU: neo-RLEwiki',
      method: 'GET',
      target: 'https://rle.oau.app',
      tooltip: 'GitHub Pages + Cloudflare CDN',
      statusPageLink: 'https://github.com/one-among-us/neo-RLEwiki',
      responseKeyword: 'neo-RLEwiki',
      checkProxy: 'worker://apac',
      checkProxyFallback: true,
    },
    {
      id: 'oau_falling_frontend',
      name: 'OAU: Falling Like - Frontend',
      method: 'GET',
      target: 'https://f.oneamongus.ca',
      tooltip: 'GitHub Pages + Cloudflare CDN',
      statusPageLink: 'https://github.com/one-among-us/falling-like',
      responseKeyword: 'What If You Are Falling',
      checkProxy: 'worker://apac',
      checkProxyFallback: true,
    },
    {
      id: 'oau_falling_data',
      name: 'OAU: Falling Like - Data',
      method: 'GET',
      target: 'https://eu2.contabostorage.com/176b8434127b4d90bfb1360e128e586c:oneamongus/falling-data/questions.json',
      tooltip: 'Contabo S3 (European Union)',
      statusPageLink: 'https://github.com/one-among-us/falling-like/blob/master/src/logic/config.ts',
      responseKeyword: 'Play_With_Cats',
      checkProxy: 'worker://apac',
      checkProxyFallback: true,
    },
    {
      id: 'oau_matrix',
      name: 'OAU: Matrix',
      method: 'GET',
      target: 'https://oau.app/.well-known/matrix/client',
      tooltip: 'Contabo (Nuremberg) + Cloudflare CDN',
      statusPageLink: 'https://github.com/one-among-us/appservers/blob/main/apps/matrix.nix',
      responseKeyword: 'm.homeserver',
      checkProxy: 'worker://apac',
      checkProxyFallback: true,
    },
    {
      id: 'oau_headscale',
      name: 'OAU: Headscale',
      method: 'GET',
      target: 'https://hs.oau.app/windows',
      tooltip: 'Contabo (Nuremberg) + Cloudflare CDN',
      statusPageLink: 'https://github.com/one-among-us/appservers/blob/main/apps/headscale.nix',
      responseKeyword: 'headscale: Windows configuration',
      checkProxy: 'worker://apac',
      checkProxyFallback: true,
    },
    {
      id: 'oau_liveweb',
      name: 'OAU: live redirector',
      method: 'GET',
      target: 'https://live.oau.app',
      tooltip: 'Contabo (Nuremberg) + Cloudflare CDN',
      statusPageLink: 'https://github.com/one-among-us/appservers/blob/main/apps/live-website/index.html',
      responseKeyword: '直播已经结束，点击下列链接查看回放',
      checkProxy: 'worker://apac',
      checkProxyFallback: true,
    },
    {
      id: 'oau_tia',
      name: 'OAU: Tia redirector',
      method: 'GET',
      target: 'https://oau.edu.kg',
      tooltip: 'Contabo (Nuremberg) + Cloudflare CDN',
      statusPageLink: 'https://github.com/one-among-us/appservers/blob/main/apps/tia-legacy/index.html',
      responseKeyword: 'Redirecting to One Among Us homepage',
      checkProxy: 'worker://apac',
      checkProxyFallback: true,
    },
    {
      id: 'oau_tia_uniguide',
      name: 'OAU: UniGuide',
      method: 'GET',
      target: 'https://uniguide.oau.edu.kg',
      tooltip: 'GitHub Pages + Cloudflare CDN',
      statusPageLink: 'https://github.com/one-among-us/TransAcademicUniGuide',
      responseKeyword: 'Transgender University Guidance',
      checkProxy: 'worker://apac',
      checkProxyFallback: true,
    },
  ],
  notification: {
    webhook: {
      // Don't mess with my telegram bot pls uwu :D
      url: 'https://api.telegram.org/bot8249335103:AAHJ3FWf-BWSFSJ__I7r16hlU7-SJjhjfk8/sendMessage',
      payloadType: 'param',
      payload: {
        chat_id: 673435039,
        text: '$MSG',
      },
    },
    timeZone: 'Asia/Shanghai',
    gracePeriod: 5,
  },
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
