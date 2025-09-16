# Hack Bounty

> A platform to list bounties & hackathons, form teams, organize team calls / meetups, and coordinate hackathon work — built with Next.js & TypeScript.

---

## Table of Contents

- [About](#about)  
- [Features](#features)  
- [Tech Stack](#tech-stack)  
- [Getting Started](#getting-started)  
- [Environment Variables](#environment-variables)  
- [Scripts](#scripts)  
- [Deployment](#deployment)  
- [Roadmap](#roadmap)  
- [Contributing](#contributing)  
- [License](#license)  
- [Contact](#contact)  

---

## Folder Structure

```bash
hack_bounty/
├── public/                 # Static assets
├── src/                    # Source code (Next.js app structure, components, etc.)
├── .env.example            # Example environment variables
├── .gitignore
├── README.md
├── components.json         # ShadCN/UI components config
├── eslint.config.mjs       # ESLint config
├── next.config.ts          # Next.js config
├── package.json            # Dependencies & scripts
├── package-lock.json
├── postcss.config.mjs      # PostCSS config
├── tsconfig.json           # TypeScript config
````
---

## 📸 Screenshot
![image](https://github.com/SonuR12/hack_bounty/blob/main/public/Demo.png)


## About

**Hack Bounty** is a web app designed to bring together developers, hackers, and security enthusiasts. It allows:

- Posting and browsing **bounties** and **hackathons**.  
- Forming teams to participate.  
- Organizing calls / virtual meetups for collaborating on hackathon projects.  
- Tracking team communication, progress, and deadlines.

It aims to simplify collaboration and provide a unified space for hackathon / bounty participants.

---

## Features

Here are some core & planned features:

| ✅ Done / 🔄 In Progress / 🚀 Planned | Feature |
|--------------------------------------|---------|
| ✅ | List and browse hackathons & bounty programs |
| ✅ | Team creation & team joining functionality |
| 🔄 | Scheduling team calls / meetings (voice/video links) |
| 🔄 | Dashboard for teams to track tasks / milestones |
| 🚀 | Notifications / reminders for deadlines or meetings |
| 🚀 | Integration with GitHub / Discord for team channels |
| 🚀 | User profiles, skills tagging, matching teammates |

---

## Tech Stack

- **Framework**: Next.js (TypeScript) :contentReference[oaicite:0]{index=0}  
- **Styling**: CSS / Tailwind / PostCSS (as per project config) :contentReference[oaicite:1]{index=1}  
- **Configuration**: `.env.example` provided for environment variables :contentReference[oaicite:2]{index=2}  
- **Linting / Types**: TypeScript, ESLint / configs :contentReference[oaicite:3]{index=3}  

---

## Getting Started

To run this project locally:

```bash
# Clone repository
git clone https://github.com/SonuR12/hack_bounty.git
cd hack_bounty

# Install dependencies
npm install
# or
yarn install
# or
pnpm install

# Copy environment file and set your vars
cp .env.example .env.local
# edit `.env.local` with your required secrets / API keys etc.

# Run development server
npm run dev
# or
yarn dev
# or
pnpm dev
```

