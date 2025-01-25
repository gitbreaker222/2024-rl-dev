import { error } from '@sveltejs/kit'
export const prerender = true

export const load = async ({ params }) => {
  try {
    const file = await import(`../${params.slug}.md`)

    return {
      Content: file.default,
      meta: { ...file.metadata, slug: params.slug }
    }
  } catch (err) {
    error(404, { message: 'not found' });
  }
}