import { PropertyPageTemplate } from "../PropertyPageTemplate";
import { getProperty } from "@/lib/properties";
export function TheClusterPajePage() { return <PropertyPageTemplate property={getProperty("the-cluster-paje")!} />; }
