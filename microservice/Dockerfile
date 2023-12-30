FROM node:20 as dev
WORKDIR /app
COPY package*.json ./
RUN npm install
RUN npm install -g typescript
RUN npm install axios --save

COPY . .

RUN sh -c tsc
EXPOSE 3000

CMD ["npm", "start"]
