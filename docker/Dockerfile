FROM ubuntu:impish as BASE

EXPOSE 80
EXPOSE 443

ENV DEBIAN_FRONTEND=noninteractive

RUN apt-get update && apt-get install -y --no-install-recommends git curl gnupg2 ca-certificates \ 
apt-transport-https

RUN curl -sS https://dl.yarnpkg.com/debian/pubkey.gpg | apt-key add

RUN echo "deb https://dl.yarnpkg.com/debian/ stable main" | tee /etc/apt/sources.list.d/yarn.list

RUN apt-get update && apt-get install -y --no-install-recommends yarn npm

WORKDIR /root

RUN git clone https://github.com/nextmasjid-project/nextmasjid-frontend.git

WORKDIR /root/nextmasjid-frontend

RUN npx browserslist@latest --update-db

COPY nuxt.config.js /root/nextmasjid-frontend/nuxt.config.js

COPY api.js /root/nextmasjid-frontend/services/api.js

RUN yarn install && yarn build

FROM ubuntu:impish as PRODUCTION
ENV DEBIAN_FRONTEND=noninteractive
COPY --from=BASE /root/nextmasjid-frontend/ /opt/frontend/
COPY start-service.sh /usr/local/bin/start-service.sh

RUN apt-get update && apt-get install -y --no-install-recommends curl ca-certificates gnupg2 nodejs

RUN curl -sS https://dl.yarnpkg.com/debian/pubkey.gpg | apt-key add

RUN echo "deb https://dl.yarnpkg.com/debian/ stable main" | tee /etc/apt/sources.list.d/yarn.list

RUN apt-get update && apt-get install -y --no-install-recommends yarn

ENTRYPOINT [ "start-service.sh" ]



