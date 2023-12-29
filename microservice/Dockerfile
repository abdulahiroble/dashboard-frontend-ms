# FROM node:alpine
# WORKDIR /microservice
# ENV NODE_ENV: production
# COPY package.json ./
# COPY package-lock.json ./
# COPY ./ ./
# RUN npm install
# RUN npm install -g typescript
# RUN sh -c tsc
# EXPOSE 3001
# CMD ["npm", "run", "prod"]

# FROM node:14-alpine AS development

# # Set working directory
# WORKDIR /app

# # Copy package.json and package-lock.json
# COPY package*.json ./

# # Install dependencies
# RUN npm install

# # Copy application files
# COPY . .

# EXPOSE 3000
# # Development environment
# CMD ["npm", "start"]

FROM node:alpine
WORKDIR /microservice
ENV NODE_ENV: production
COPY package.json ./
COPY package-lock.json ./
COPY ./ ./
RUN npm install
RUN npm install -g typescript
# RUN sh -c tsc
EXPOSE 3001
CMD ["npm", "start"]
