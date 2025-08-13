# Al-Azhar School Website

A modern, responsive website for Al-Azhar School offering online Quran education, Arabic language courses, and Islamic studies.

## Features

- **Online Quran Learning**: Memorization, recitation, and Tajweed courses
- **Arabic Language**: Comprehensive Arabic language instruction
- **Islamic Studies**: Religious education and Islamic knowledge
- **Modern UI/UX**: Beautiful, responsive design with Islamic patterns
- **User Authentication**: Secure login and registration system
- **Admin Dashboard**: Complete management system for teachers and students
- **Blog System**: Educational articles and Islamic content
- **Contact Forms**: Easy communication with the school

## Technology Stack

- **Frontend**: Next.js 15, React 19, TypeScript
- **Styling**: Tailwind CSS with custom Islamic patterns
- **Authentication**: Supabase Auth
- **Database**: Supabase PostgreSQL
- **Deployment**: Vercel
- **CI/CD**: GitHub Actions

## Getting Started

1. Clone the repository
2. Install dependencies: `npm install`
3. Set up environment variables (see `.env.example`)
4. Run development server: `npm run dev`
5. Build for production: `npm run build`

## Environment Variables

Create a `.env.local` file with the following variables:

```env
NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
ADMIN_USERNAME=your_admin_username
ADMIN_PASSWORD=your_admin_password
NEXT_PUBLIC_GA_ID=your_google_analytics_id
NEXT_PUBLIC_SITE_URL=https://al-azhar-school.vercel.app
NEXT_PUBLIC_SITE_NAME=Al-Azhar School
```

## Deployment

The website is automatically deployed to Vercel via GitHub Actions. Any push to the `main` branch triggers a new deployment.

## Live Site

Visit: https://al-azhar-school.vercel.app

---

**Last Updated**: December 2024
**Status**: ✅ Production Ready