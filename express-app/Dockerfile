# From Base Image
FROM node:16

# Create working directory.
WORKDIR /app

# Copy package json files in working directory.
COPY package*.json ./

# Install dependencies.
RUN npm install

# Copy source files.
COPY . .

CMD ["node", "index.js"]