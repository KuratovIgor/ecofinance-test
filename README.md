# EcoFinance Test Task

#### Web application, that consists of 3 pages:
- Login page (as index page)
- Public page (for non authorized users)
- Protected page (for authorized users)

#### Login page:
- Consist of form with 2 inputs, email and password.
  
#### Public page:
- Contain CV data
- Personal info
- Working experience 
- Projects done
- Technology stack

#### Protected page:
- Visible only for logged in users
- Contain list of user cards, taken from https://randomuser.me 
- Button more, which will request next X users and including them in end of the list
- User card
- Logout button

#### Tech Stack:
- Nuxt.js
- Nuxt UI
- TypeScript
- Pinia

## Before starting
- Create .env file
- Copy .env.example to .env

## Start via DOCKER

```bash
docker-compose up -d
```
Open app in browser on 3000 port

## Start via NPM

```bash
npm install
```
```bash
npm run dev
```
