# Active Hub 

[![Netlify Status](https://api.netlify.com/api/v1/badges/19b07686-e147-41c5-9691-7b791865c12d/deploy-status)](https://app.netlify.com/sites/active-hub/deploys)

**Live URL: https://active-hub.netlify.app/**

This is an app for my channel purposes.
Below you can find a guide how this app is created.

Instructions:

- Get started with Next + Typescript (branch: `1-1-get-started`)
  - Get started with: `npx create-next-app active-hub`
  - Change the extentions to `.tsx`
  - run: `npm run dev`, then you'll be prompted to install `yarn add --dev typescript @types/react @types/node`
  - a new file appeard: `tsconfig.js`. Set `"strict": true`.
  - remove `pages/api`
- Push to github and deploy to Netlify (branch: `1-2-first-deploy`)
  - install `npm install --save next-on-netlify` to support SSR
  - Follow the guide: https://github.com/netlify/next-on-netlify#installation
  - Push the code to github and log in to Netlify
  - Deploy a new site
  - Enjoy! 🎸
- Tailwind framework installation and set up (branch: `1-3-install-tailwind`)
  - Go to: https://tailwindcss.com/docs/installation and pick Next.js
  - Follow instructions
  - Drop the code from `pages/index.tsx` and grab some  hero from - https://tailwindui.com/components/marketing/sections/heroes - get first hero
  - Adjust mobile menu using `useState` hook
  - Add links to `/admin` page
  - Add cool page title
  - Deploy again and test 🧐
