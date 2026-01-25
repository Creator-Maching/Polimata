// types/strapi.ts

export interface StrapiImageFormat {
  url: string
  width: number
  height: number
  size: number
}

export interface StrapiImageFormats {
  thumbnail?: StrapiImageFormat
  small?: StrapiImageFormat
  medium?: StrapiImageFormat
  large?: StrapiImageFormat
}

export interface StrapiImage {
  id: number
  name: string
  alternativeText: string | null
  url: string
  formats?: StrapiImageFormats
}

export interface Technology {
  Name: string
  Description: string
  IMG?: StrapiImage
}

export interface StrapiResponse<T> {
  data: {
    id: number
    attributes: T
  }[]
}
