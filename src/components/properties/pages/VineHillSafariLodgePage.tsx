import { PropertyPageTemplate } from "../PropertyPageTemplate";
import { getProperty } from "@/lib/properties";
export function VineHillSafariLodgePage() { return <PropertyPageTemplate property={getProperty("vine-hill-safari-lodge")!} />; }
