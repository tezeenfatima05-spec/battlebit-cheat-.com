export type ProductPlanId = 'access';

export interface ProductPlan {
  id: ProductPlanId;
  label: string;
  priceUsd: number | null;
  priceNote: string;
}

const accessOnly: ProductPlan[] = [
  { id: 'access', label: 'Full access', priceUsd: null, priceNote: '' },
];

export function getProductPlans(_productSlug: string): ProductPlan[] {
  return accessOnly;
}

export function formatPlanPrice(usd: number | null): string {
  return usd === null ? '' : `$${usd}`;
}

export function checkoutUrlWithPlan(baseUrl: string, _planId: ProductPlanId): string {
  return baseUrl;
}

export function plansShowPricing(plans: ProductPlan[]): boolean {
  return plans.some((p) => p.priceUsd !== null && p.priceUsd > 0);
}
