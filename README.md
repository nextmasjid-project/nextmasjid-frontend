# NextMasjid Frontend

Made with Nuxt.js

## Build Setup

```bash
# install dependencies
$ yarn install

# serve with hot reload at localhost:3000
$ yarn dev

# build for production and launch server
$ yarn build
$ yarn start

# generate static project
$ yarn generate
```

For detailed explanation on how things work, check out [Nuxt.js docs](https://nuxtjs.org).

Under /workflows, the CI and CD pipelines have been defined

## Deploying to Azure Cloud.

There is a preview service called Azure Static Web apps that allows for the deployment of static web apps to Azure cloud.

The script command package.json file has been update to run nuxt generate on a build command. 
So previously the build command called *nuxt build*
However now the build command has been changed to called *nuxt generate* for static web app generation when *npm run build* is called instead of a standard build. 
Please refer the below screen shot from [docs.microsoft.com](https://docs.microsoft.com/en-us/azure/static-web-apps/deploy-nuxtjs) 

![image](https://user-images.githubusercontent.com/78064261/114214213-b78e3500-996c-11eb-883b-e2cc08c48fd2.png)

