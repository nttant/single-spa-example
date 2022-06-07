// Anything exported from this file is importable by other in-browser modules.
export function getFeatureToggles() {
    // TODO: fetch feature toggles from an external end-point
    const mockfeatureToggles = {
        featureA: true,
        featureB: false,
        featureC: true,
    }
    return mockfeatureToggles;
}
