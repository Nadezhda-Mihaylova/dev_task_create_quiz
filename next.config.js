const { redirect } = require("next/dist/server/api-utils");

module.exports = {
  reactStrictMode: true,
    async redirect() {
        return [
            {
                source: '/',
                destination: '/quiz',
                permanent: true,
            },
        ]
    },
}
