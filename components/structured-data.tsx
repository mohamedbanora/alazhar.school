'use client'

import React from 'react'

interface StructuredDataProps {
  type: 'organization' | 'course' | 'article'
  data: any
}

const StructuredData: React.FC<StructuredDataProps> = ({ type, data }) => {
  const getStructuredData = () => {
    switch (type) {
      case 'organization':
        return {
          "@context": "https://schema.org",
          "@type": "EducationalOrganization",
          "name": "Al-Azhar School",
          "description": "Learn the Holy Quran from Al-Azhar scholars anywhere in the world. Online Quran memorization, Arabic language, and Islamic studies courses.",
          "url": process.env.NEXT_PUBLIC_SITE_URL || "https://alazharschool.com",
          "logo": `${process.env.NEXT_PUBLIC_SITE_URL || "https://alazharschool.com"}/alazhar-logo.png`,
          "image": `${process.env.NEXT_PUBLIC_SITE_URL || "https://alazharschool.com"}/og-image.jpg`,
          "address": {
            "@type": "PostalAddress",
            "addressLocality": "London",
            "addressCountry": "GB"
          },
          "contactPoint": {
            "@type": "ContactPoint",
            "telephone": "+44 (0) 20 1234 5678",
            "contactType": "customer service",
            "email": "al.azhar.school.london@gmail.com"
          },
          "sameAs": [
            "https://facebook.com/alazharschool",
            "https://twitter.com/alazharschool",
            "https://instagram.com/alazharschool"
          ],
          "hasOfferCatalog": {
            "@type": "OfferCatalog",
            "name": "Islamic Education Courses",
            "itemListElement": [
              {
                "@type": "Offer",
                "itemOffered": {
                  "@type": "Course",
                  "name": "Quran Memorization",
                  "description": "Learn to memorize the Holy Quran with certified Al-Azhar scholars"
                }
              },
              {
                "@type": "Offer",
                "itemOffered": {
                  "@type": "Course",
                  "name": "Arabic Language",
                  "description": "Learn Arabic language from beginner to advanced levels"
                }
              },
              {
                "@type": "Offer",
                "itemOffered": {
                  "@type": "Course",
                  "name": "Islamic Studies",
                  "description": "Comprehensive Islamic studies and religious education"
                }
              }
            ]
          }
        }
      
      case 'course':
        return {
          "@context": "https://schema.org",
          "@type": "Course",
          "name": data.name,
          "description": data.description,
          "provider": {
            "@type": "EducationalOrganization",
            "name": "Al-Azhar School"
          },
          "courseMode": "online",
          "educationalLevel": "beginner",
          "inLanguage": ["en", "ar"]
        }
      
      case 'article':
        return {
          "@context": "https://schema.org",
          "@type": "Article",
          "headline": data.title,
          "description": data.description,
          "author": {
            "@type": "Organization",
            "name": "Al-Azhar School"
          },
          "publisher": {
            "@type": "Organization",
            "name": "Al-Azhar School",
            "logo": {
              "@type": "ImageObject",
              "url": `${process.env.NEXT_PUBLIC_SITE_URL || "https://alazharschool.com"}/alazhar-logo.png`
            }
          },
          "datePublished": data.publishedAt,
          "dateModified": data.updatedAt,
          "image": data.image
        }
      
      default:
        return {}
    }
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(getStructuredData())
      }}
    />
  )
}

export default StructuredData 