export const Typography = {
  sizes: {
    xs: 12,
    sm: 14,
    base: 16,
    lg: 18,
    xl: 20,
    xxl: 24,
    xxxl: 32,
  },
  weights: {
    light: '300',
    normal: '400',
    medium: '500',
    semibold: '600',
    bold: '700',
  },
  lineHeights: {
    tight: 1.2,
    normal: 1.5,
    relaxed: 1.75,
    loose: 2,
  },
};

export const TextStyles = {
  h1: {
    fontSize: Typography.sizes.xxxl,
    fontWeight: Typography.weights.bold,
    lineHeight: Typography.lineHeights.tight,
  },
  h2: {
    fontSize: Typography.sizes.xxl,
    fontWeight: Typography.weights.bold,
    lineHeight: Typography.lineHeights.tight,
  },
  h3: {
    fontSize: Typography.sizes.xl,
    fontWeight: Typography.weights.semibold,
    lineHeight: Typography.lineHeights.normal,
  },
  h4: {
    fontSize: Typography.sizes.lg,
    fontWeight: Typography.weights.semibold,
    lineHeight: Typography.lineHeights.normal,
  },
  body1: {
    fontSize: Typography.sizes.base,
    fontWeight: Typography.weights.normal,
    lineHeight: Typography.lineHeights.normal,
  },
  body2: {
    fontSize: Typography.sizes.sm,
    fontWeight: Typography.weights.normal,
    lineHeight: Typography.lineHeights.normal,
  },
  caption: {
    fontSize: Typography.sizes.xs,
    fontWeight: Typography.weights.normal,
    lineHeight: Typography.lineHeights.normal,
  },
  button: {
    fontSize: Typography.sizes.base,
    fontWeight: Typography.weights.semibold,
    lineHeight: Typography.lineHeights.normal,
  },
};
