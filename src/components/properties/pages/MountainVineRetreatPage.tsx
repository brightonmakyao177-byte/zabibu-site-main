import { PropertyPageTemplate } from "../PropertyPageTemplate";
import { getProperty } from "@/lib/properties";
export function MountainVineRetreatPage() { return <PropertyPageTemplate property={getProperty("mountain-vine-retreat")!} />; }
