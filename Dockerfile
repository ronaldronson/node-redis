FROM ubuntu
RUN apt-get update -y && apt-get install --no-install-recommends -y -q curl python build-essential git ca-certificates
RUN apt-get install -y nodejs npm

WORKDIR /app
COPY package.json /app/
RUN npm install
ADD . /app

CMD ["npm", "start"]
EXPOSE 3000
