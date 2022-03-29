FROM ubuntu:impish as BASE

ENV DEBIAN_FRONTEND=noninteractive

RUN apt-get update && apt-get install -y --no-install-recommends git curl gnupg2 ca-certificates \ 
apt-transport-https

RUN curl -sS https://dl.yarnpkg.com/debian/pubkey.gpg | apt-key add

RUN echo "deb https://dl.yarnpkg.com/debian/ stable main" | tee /etc/apt/sources.list.d/yarn.list

RUN apt-get update && apt-get install -y --no-install-recommends yarn npm

COPY / /root/nextmasjid-frontend/

WORKDIR /root/nextmasjid-frontend 

RUN npx browserslist@latest --update-db

RUN yarn install && yarn build

FROM ubuntu:impish as PRODUCTION
ENV DEBIAN_FRONTEND=noninteractive
COPY --from=BASE /root/nextmasjid-frontend/ /opt/frontend/
COPY docker/start-service.sh /usr/local/bin/start-service.sh

RUN apt-get update && apt-get install -y --no-install-recommends curl ca-certificates gnupg2 nodejs

RUN curl -sS https://dl.yarnpkg.com/debian/pubkey.gpg | apt-key add

RUN echo "deb https://dl.yarnpkg.com/debian/ stable main" | tee /etc/apt/sources.list.d/yarn.list

RUN apt-get update && apt-get install -y --no-install-recommends yarn

ENTRYPOINT [ "start-service.sh" ]



