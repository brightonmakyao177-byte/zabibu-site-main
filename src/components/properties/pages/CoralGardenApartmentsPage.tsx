import { PropertyPageTemplate } from "../PropertyPageTemplate";
import { getProperty } from "@/lib/properties";
export function CoralGardenApartmentsPage() { return <PropertyPageTemplate property={getProperty("coral-garden-apartments")!} />; }
