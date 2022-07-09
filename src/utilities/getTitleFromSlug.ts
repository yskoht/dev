function getTitleFromSlug(slug: string): string {
  const title = slug.slice(1)
  return title
}

export default getTitleFromSlug
