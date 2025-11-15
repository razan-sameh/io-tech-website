import ServiceDetails from "./components/ServiceDetails";

export default async function ProductPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  return (
        <ServiceDetails serviceId={id} />
  );
}
