function required(value: string | undefined, name: string): string {
  if (!value) {
    throw new Error(`Missing env var: ${name}`);
  }
  return value;
}

export const LINKS = {
  calDiscovery: required(
    process.env.NEXT_PUBLIC_CAL_DISCOVERY_URL,
    "NEXT_PUBLIC_CAL_DISCOVERY_URL"
  ),
  calPaid: required(
    process.env.NEXT_PUBLIC_CAL_PAID_URL,
    "NEXT_PUBLIC_CAL_PAID_URL"
  ),
  stripePaidCall: required(
    process.env.NEXT_PUBLIC_STRIPE_PAIDCALL_URL,
    "NEXT_PUBLIC_STRIPE_PAIDCALL_URL"
  ),
} as const;
