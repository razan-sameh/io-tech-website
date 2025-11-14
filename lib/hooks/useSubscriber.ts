// hooks/useSubscriber.ts
import { useMutation } from "@tanstack/react-query";
import { createSubscriber, Subscriber } from "../services/subscriber";

export function useCreateSubscriber() {
  return useMutation({
    mutationFn: (subscriber: Subscriber) => createSubscriber(subscriber),
  });
}
