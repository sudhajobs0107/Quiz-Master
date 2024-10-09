# Use the Node.js image
FROM node:14-alpine

WORKDIR /app

# Copy package.json and package-lock.json if available
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code
COPY . .

# Expose the port
EXPOSE 8080

# Start the application using live-server
CMD ["npx", "live-server", "--host=0.0.0.0"]
