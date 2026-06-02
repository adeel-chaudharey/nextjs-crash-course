# =========================
# 1. BASE IMAGE
# =========================
# Lightweight Node image (Alpine = small, fast, secure)
FROM node:20-alpine

# =========================
# 2. SET WORKING DIRECTORY
# =========================
# Container ke andar /app folder banega
WORKDIR /app

# =========================
# 3. COPY PACKAGE FILES FIRST
# =========================
# Only package files copy karte hain for caching advantage
COPY package*.json ./

# =========================
# 4. INSTALL DEPENDENCIES
# =========================
# Dependencies install inside container
RUN npm install

# =========================
# 5. COPY FULL PROJECT
# =========================
# Ab poora code container mein ja raha hai
COPY . .

# =========================
# 6. BUILD NEXT.JS APP
# =========================
# Production optimized build generate hota hai
RUN npm run build

# =========================
# 7. EXPOSE PORT
# =========================
# App kis port pe chalegi (Next.js default 3000)
EXPOSE 3000

# =========================
# 8. START COMMAND
# =========================
# Container start hone par app run hogi
CMD ["npm", "start"]