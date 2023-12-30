FROM node:20 as dev
WORKDIR /app
COPY package*.json ./
RUN npm install
RUN npm install -g typescript
RUN npm install axios --save

COPY . .

EXPOSE 3000
ENV REACT_APP_PORT=3000

CMD ["npm", "run", "prod"]
