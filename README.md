This is a Next.js based project to style react components into beautiful ones. Including animations, effects and layouts

## Getting Started
- git clone https://github.com/saigonbitmaster/bworkHomePage
- yarn
- yarn run dev 
- yarn run build 
- yarn run start

Modify data, images in the folder
src/pages_/api/data.js
public

Open [http://localhost:8000](http://localhost:8000) with your browser to see the result.

You can start editing the page by modifying `pages_/index.tsx`. The page auto-updates as you edit the file.

## build docker image & run
- docker build -t bworkshomepage-1.0 ./
- docker run -d -p 3000:3000 bworkshomepage-1.0