import { getAllConditions, getAllDoctors, getAllFaqs } from "@/lib/queries";
import HomeContent from "@/components/HomeContent";

export default async function Home() {
  const [conditions, doctors, faqs] = await Promise.all([
    getAllConditions(),
    getAllDoctors(),
    getAllFaqs(),
  ]);

  return <HomeContent conditions={conditions} doctors={doctors} faqs={faqs} />;
}
