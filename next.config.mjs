/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  trailingSlash: true,
  images: { unoptimized: true },
  env: {
    // Fallback ensures the URL is baked into every build (NAS, local, CI)
    // even when NEXT_PUBLIC_SHEETS_ENDPOINT is not set as an env var.
    NEXT_PUBLIC_SHEETS_ENDPOINT:
      process.env.NEXT_PUBLIC_SHEETS_ENDPOINT ||
      'https://script.google.com/macros/s/AKfycbztCYuvePynBNPFyCVifr7IOiOmXNuu2IQWCS7Yr_2aYU8tXFamSnaVrKxATlCV5b_VNA/exec',
  },
};

export default nextConfig;
