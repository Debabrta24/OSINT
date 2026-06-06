// ── PHONE DATA ──
export const COUNTRY_DATA = {
  '+1':   { country: 'United States / Canada', tz: 'UTC-5 to UTC-8',      region: 'North America' },
  '+91':  { country: 'India',                  tz: 'UTC+5:30 (IST)',       region: 'South Asia'    },
  '+44':  { country: 'United Kingdom',         tz: 'UTC+0/+1 (BST)',       region: 'Europe'        },
  '+61':  { country: 'Australia',              tz: 'UTC+8 to UTC+11',      region: 'Oceania'       },
  '+49':  { country: 'Germany',               tz: 'UTC+1/+2 (CET/CEST)',  region: 'Europe'        },
  '+81':  { country: 'Japan',                  tz: 'UTC+9 (JST)',          region: 'East Asia'     },
  '+86':  { country: 'China',                  tz: 'UTC+8 (CST)',          region: 'East Asia'     },
  '+33':  { country: 'France',                 tz: 'UTC+1/+2 (CET/CEST)', region: 'Europe'        },
  '+971': { country: 'UAE',                    tz: 'UTC+4 (GST)',          region: 'Middle East'   },
  '+92':  { country: 'Pakistan',              tz: 'UTC+5 (PKT)',          region: 'South Asia'    },
  '+880': { country: 'Bangladesh',            tz: 'UTC+6 (BST)',          region: 'South Asia'    },
  '+7':   { country: 'Russia',                tz: 'UTC+3 to UTC+12',      region: 'Eurasia'       },
}

export const CARRIERS   = ['Jio','Airtel','Vi (Vodafone Idea)','BSNL','AT&T','Verizon','T-Mobile','EE','Vodafone UK','Reliance','Unknown']
export const LINE_TYPES = ['Mobile','Mobile','Mobile','Landline','VoIP','Mobile']

// ── FRAMEWORK DB ──
export const FRAMEWORK_DB = {
  'netflix.com':   { fw:'React', meta:'Next.js (SSR)',           render:'Server-Side Rendering',      bundler:'Webpack',        cdn:'Fastly CDN',      spa:false, ssr:true,  score:99  },
  'airbnb.com':    { fw:'React', meta:'Custom React SSR',        render:'Server-Side Rendering',      bundler:'Webpack',        cdn:'Cloudflare',      spa:false, ssr:true,  score:98  },
  'facebook.com':  { fw:'React', meta:'React (Meta internal)',   render:'CSR + Partial Hydration',    bundler:'Metro',          cdn:'Meta CDN',        spa:true,  ssr:false, score:100 },
  'github.com':    { fw:'React', meta:'React + Rails',           render:'Server-Side Rendering',      bundler:'esbuild',        cdn:'Fastly',          spa:false, ssr:true,  score:95  },
  'twitter.com':   { fw:'React', meta:'Next.js',                 render:'SSR + Client Nav',           bundler:'Webpack',        cdn:'Cloudflare',      spa:false, ssr:true,  score:97  },
  'x.com':         { fw:'React', meta:'Next.js',                 render:'SSR + Client Nav',           bundler:'Webpack',        cdn:'Cloudflare',      spa:false, ssr:true,  score:97  },
  'vercel.com':    { fw:'React', meta:'Next.js',                 render:'Static + SSR',               bundler:'Turbopack',      cdn:'Vercel Edge',     spa:false, ssr:true,  score:100 },
  'nextjs.org':    { fw:'React', meta:'Next.js',                 render:'SSG + SSR',                  bundler:'Turbopack',      cdn:'Vercel Edge',     spa:false, ssr:true,  score:100 },
  'vuejs.org':     { fw:'Vue.js',meta:'VitePress',               render:'Static Site Gen',            bundler:'Vite',           cdn:'Netlify',         spa:false, ssr:true,  score:100 },
  'nuxt.com':      { fw:'Vue.js',meta:'Nuxt.js',                 render:'SSR + SSG',                  bundler:'Vite',           cdn:'Cloudflare',      spa:false, ssr:true,  score:100 },
  'angular.io':    { fw:'Angular',meta:'Angular Universal',      render:'SSR',                        bundler:'Angular CLI',    cdn:'Fastly',          spa:false, ssr:true,  score:100 },
  'svelte.dev':    { fw:'Svelte', meta:'SvelteKit',              render:'SSG + SSR',                  bundler:'Vite',           cdn:'Vercel',          spa:false, ssr:true,  score:100 },
  'reddit.com':    { fw:'React', meta:'Next.js',                 render:'Server-Side Rendering',      bundler:'Webpack',        cdn:'Fastly',          spa:false, ssr:true,  score:96  },
  'notion.so':     { fw:'React', meta:'Custom SPA',              render:'Client-Side Rendering',      bundler:'Webpack',        cdn:'Cloudflare',      spa:true,  ssr:false, score:95  },
  'figma.com':     { fw:'React', meta:'React SPA',               render:'Client-Side Rendering',      bundler:'esbuild',        cdn:'Cloudflare',      spa:true,  ssr:false, score:93  },
  'stripe.com':    { fw:'React', meta:'Next.js',                 render:'SSG + SSR',                  bundler:'Webpack',        cdn:'Cloudflare',      spa:false, ssr:true,  score:98  },
  'shopify.com':   { fw:'React', meta:'React + Ruby',            render:'SSR',                        bundler:'Webpack',        cdn:'Fastly',          spa:false, ssr:true,  score:94  },
  'wordpress.com': { fw:'None / PHP', meta:'WordPress + Calypso (React)', render:'Server-Side (PHP)', bundler:'Webpack (admin)',cdn:'Automattic',      spa:false, ssr:true,  score:20  },
  'wikipedia.org': { fw:'None / Vanilla JS', meta:'MediaWiki',  render:'Server-Side (PHP)',           bundler:'ResourceLoader', cdn:'Wikimedia',       spa:false, ssr:true,  score:5   },
}

// ── VEHICLE DATA ──
export const IN_STATES = {
  MH:'Maharashtra', DL:'Delhi',         KA:'Karnataka',       TN:'Tamil Nadu',
  GJ:'Gujarat',     UP:'Uttar Pradesh', RJ:'Rajasthan',       MP:'Madhya Pradesh',
  WB:'West Bengal', AP:'Andhra Pradesh',TS:'Telangana',       KL:'Kerala',
  HR:'Haryana',     PB:'Punjab',        BR:'Bihar',           OD:'Odisha',
  CG:'Chhattisgarh',AS:'Assam',         HP:'Himachal Pradesh',JK:'Jammu & Kashmir',
  UK:'Uttarakhand', JH:'Jharkhand',     GA:'Goa',             MN:'Manipur',
  TR:'Tripura',     ML:'Meghalaya',     NL:'Nagaland',        AR:'Arunachal Pradesh',
  SK:'Sikkim',      CH:'Chandigarh',    PY:'Puducherry',      AN:'Andaman & Nicobar',
  LA:'Ladakh',
}

export const FUEL_TYPES = ['Petrol','Diesel','CNG','Electric','Hybrid','Petrol']
export const VEH_CLASS  = ['Private Car','Motorcycle','Commercial Vehicle','SUV','Hatchback','Sedan','Two-Wheeler','Light Motor Vehicle']

// ── TICKER TEXT ──
export const TICKER_TEXT = '[INFO] Phone OSINT module ready ··· [OK] IP geolocation API connected ··· [INFO] Web crawler online ··· [SCAN] Traffic analyzer armed ··· [NET] Speed test nodes: 12 active ··· [DB] Vehicle registry interface ready ··· [TOR] Anonymous routing confirmed ···'
