import { PropertyPageTemplate } from "../PropertyPageTemplate";
import { getProperty } from "@/lib/properties";
export function GrapeHouseStoneTownPage() { return <PropertyPageTemplate property={getProperty("grape-house-stone-town")!} />; }
