/**
 * Alias for baseSpacing
 */
export const bs = (factor = 1) => `${factor}rem`

export const inflect =
  (singular, plural = `${singular}s`) =>
  quantity =>
    quantity === 1 ? singular : plural
