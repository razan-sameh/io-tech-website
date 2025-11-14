// services/subscriber.ts
import { apiClient } from "../apiClient";

export interface Subscriber {
  email: string;
}

export async function createSubscriber(subscriber: Subscriber) {
  // Strapi expects { data: { email: string } } for POST
  return apiClient("/subscribers", {
    method: "POST",
    body: JSON.stringify({ data: subscriber }),
  });
}
