export const measures = {
  sm: 0,
  md: 768,
  lg: 992,
  xl: 1200,
};

export const rules = {
  sm: `(min-width: ${measures.sm}px)`,
  smOnly: `(max-width: ${measures.md - 1}px)`,
  md: `(min-width: ${measures.md}px)`,
  mdOnly: `(min-width: ${measures.md}px) and (max-width: ${measures.lg - 1}px)`,
  lg: `(min-width: ${measures.lg}px)`,
  lgOnly: `(min-width: ${measures.lg}px) and (max-width: ${measures.xl - 1}px)`,
  xl: `(min-width: ${measures.xl}px)`,
};
