export const prepareRoute = (route: string, params: Record<string, string>) =>
    Object.entries(params).reduce(
        (sum, [slug, value]) => sum.replace(`:${slug}`, value),
        route
    );