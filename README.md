# Neon T3 Starter Kit

![Thumbnail](./assets/thumbnail.png)

## Features

- Next.js 14
- Tailwind CSS
- Shadcn/UI
- Lucide Icons
- Tanstack Query
- Neon Database
- Next Auth (with Google OAuth)
- Lucide Icons

## Getting Started

1. Clone the repository

```bash
git clone https://github.com/ChiragAgg5k/neon-t3-starter-kit
```

2. Install dependencies

```bash
pnpm install
```

3. Create a `.env` file and add the following environment variables:

```bash

# set up your neon database url at https://neon.tech/
DATABASE_URL="postgresql://postgres:password@localhost:5432/neon-t3-starter-kit"

# url at which the app will be hosted, localhost for local development
NEXTAUTH_URL="http://localhost:3000"

# create a secret key for next auth using: openssl rand -base64 32
NEXTAUTH_SECRET="your-secret-key"
```

4. Run the development server

```bash
pnpm dev
```

4. Open your browser and navigate to `http://localhost:3000`

## License

This project is licensed under the MIT License. See the [LICENSE](./LICENSE) file for more details.

## Contributing

Contributions are welcome! Please open an issue or submit a pull request.
