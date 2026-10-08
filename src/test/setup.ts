import "@testing-library/jest-dom/vitest";

class MockIntersectionObserver implements IntersectionObserver {
  readonly root: Element | null = null;
  readonly rootMargin = "";
  readonly scrollMargin = "";
  readonly thresholds: readonly number[] = [];

  observe(): void {}
  unobserve(): void {}
  disconnect(): void {}
  takeRecords(): IntersectionObserverEntry[] {
    return [];
  }
}

const g = globalThis as unknown as {
  IntersectionObserver?: typeof IntersectionObserver;
};
if (!g.IntersectionObserver) {
  g.IntersectionObserver = MockIntersectionObserver;
}
