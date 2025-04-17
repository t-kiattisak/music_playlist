FROM oven/bun

WORKDIR /app

COPY bun.lockb package.json ./
RUN bun install

COPY . .


CMD ["bun", "run", "src/index.ts"]