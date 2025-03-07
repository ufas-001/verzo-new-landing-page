import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";



// const FeatureList = ({ title, features }: FeatureListProps) => {
//   return (
//     <div className="mt-8">
//       <h3 className="text-blue-600 text-xl font-medium mb-4">{title}</h3>
//       <div className="border-t border-gray-200">
//         {features.map((feature, index) => (
//           <div
//             key={index}
//             className="grid grid-cols-[1fr,200px,200px] items-center py-4 "
//           >
//             <span className="text-gray-900">{feature.description}</span>
//             <div className="flex justify-center">
//               {feature.starter && <Check className="h-5 w-5 text-blue-600" />}
//             </div>
//             <div className="flex justify-center">
//               {feature.pro && <Check className="h-5 w-5 text-blue-600" />}
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default function FeatureComparison() {
//   const featureSets = [
//     {
//       title: "Feature list",
//       features: [
//         {
//           description: "Ideal for emerging businesses aiming for rapid growth.",
//           starter: true,
//           pro: true,
//         },
//         {
//           description:
//             "Excellent for design firms striving for greater productivity.",
//           starter: true,
//           pro: true,
//         },
//         {
//           description: "Fantastic for new ventures wanting to expand swiftly.",
//           starter: false,
//           pro: true,
//         },
//         {
//           description:
//             "Superb for innovative agencies pursuing enhanced efficiency.",
//           starter: false,
//           pro: true,
//         },
//         {
//           description:
//             "Outstanding for creative firms looking to boost their productivity.",
//           starter: true,
//           pro: true,
//         },
//         {
//           description:
//             "Best suited for online retailers with significant growth opportunities.",
//           starter: false,
//           pro: true,
//         },
//       ],
//     },
//     {
//       title: "Feature list",
//       features: [
//         {
//           description: "Ideal for emerging businesses aiming for rapid growth.",
//           starter: true,
//           pro: true,
//         },
//         {
//           description:
//             "Excellent for design firms striving for greater productivity.",
//           starter: false,
//           pro: true,
//         },
//         {
//           description: "Fantastic for new ventures wanting to expand swiftly.",
//           starter: true,
//           pro: true,
//         },
//       ],
//     },
//   ];

//   return (
//     <section className="bg-primary-bgTint">
//       <section className="max-w-7xl mx-auto px-4 py-16 ">
//         <h2 className="text-4xl font-bold text-center mb-16 text-primary-brandBlue">
//           Compare full plan features
//         </h2>

//         <div className="relative overflow-x-auto">
//           <div className="grid grid-cols-[1fr,200px,200px] gap-4 b-8">
//             <div className="col-start-2 col-span-2">
//               <div className="grid grid-cols-2 gap-4">
//                 <div className="rounded-lg p-4">
//                   <h3 className="text-xl font-semibold mb-2">Starter Plan</h3>
//                   <Button
//                     variant="outline"
//                     className="w-[154px] mx-auto border-primary-greyLight text-primary-greyBold rounded-[10px]"
//                   >
//                     Get 30 days free
//                   </Button>
//                 </div>
//                 <div className="rounded-lg p-4">
//                   <h3 className="text-xl font-semibold mb-2">Pro Plan</h3>
//                   <Button
//                     variant="outline"
//                     className="w-[154px] mx-auto border-primary-greyLight text-primary-greyBold rounded-[10px]"
//                   >
//                     Get 30 days free
//                   </Button>
//                 </div>
//               </div>
//             </div>
//           </div>

//           {featureSets.map((featureSet, index) => (
//             <FeatureList key={index} {...featureSet} />
//           ))}
//         </div>
//       </section>
//     </section>
//   );
// }

const FeaturePlan = () => {
  return (
    <div className="">
      <section className="bg-primary-bgTint">
        <section className="max-w-7xl mx-auto px-4 py-16 ">
          <h2 className="text-3xl font-bold text-center mb-16 text-primary-brandBlue">
            Compare full plan features
          </h2>
          <div className="flex flex-row">
            <div className="flex-1">
              <div className="h-[134px] flex flex-col justify-end pb-4 border-b-[1px] border-primary-brandBlue pl-6">
                <span className="text-[24px] font-bold text-primary-brandBlue">
                  Feature List
                </span>
              </div>
            </div>
            <div className="flex flex-row">
              <div className="h-[134px] flex flex-col justify-end pb-4 border-b-[1px] border-primary-brandBlue w-[226px] bg-primary-brandTint rounded-t-[10px]">
                <h3 className="text-lg font-semibold mb-2 w-[154px] mx-auto">
                  Starter Plan
                </h3>
                <Button
                  variant="outline"
                  className="w-[154px] mx-auto border-primary-greyLight text-primary-greyBold rounded-[10px]"
                >
                  Get 30 days free
                </Button>
              </div>
              <div className="w-[10px]">
                <div className="h-[134px] border-b-[1px] border-primary-brandBlue"></div>
              </div>
              <div className="h-[134px] flex flex-col justify-end pb-4 border-b-[1px] border-primary-brandBlue w-[226px] bg-primary-brandTint rounded-t-[10px]">
                <h3 className="text-lg w-[154px] mx-auto font-semibold mb-2">
                  Pro Plan
                </h3>
                <Button
                  variant="outline"
                  className="w-[154px] mx-auto border-primary-greyLight text-primary-greyBold rounded-[10px]"
                >
                  Get 30 days free
                </Button>
              </div>
            </div>
          </div>
          <div className="flex flex-row">
            <div className="flex-1">
              <div className="flex flex-col py-8 pl-6">
                <div className="h-[27px] text-lg flex flex-col justify-center my-5">
                  Ideal for emerging businesses aiming for rapid growth
                </div>
                <div className="h-[27px] text-lg flex flex-col justify-center my-5">
                  Excellent for design firms striving for greater productivity.
                </div>
                <div className="h-[27px] text-lg flex flex-col justify-center my-5">
                  Fantastic for new ventures wanting to expand swiftly.
                </div>
                <div className="h-[27px] text-lg flex flex-col justify-center my-5">
                  Superb for innovative agencies pursuing enhanced efficiency.
                </div>
                <div className="h-[27px] text-lg flex flex-col justify-center my-5">
                  Outstanding for creative firms looking to boost their
                  productivity.
                </div>
                <div className="h-[27px] text-lg flex flex-col justify-center my-5">
                  Best suited for online retailers with significant growth
                  opportunities
                </div>
              </div>
            </div>
            <div className="flex flex-row">
              <div className="flex flex-col  w-[226px] bg-primary-brandTint  py-8">
                <div className="h-[27px] text-lg flex flex-row justify-center my-5">
                  <Check />
                </div>
                <div className="h-[27px] text-lg flex flex-row justify-center my-5">
                  <Check />
                </div>
                <div className="h-[27px] text-lg flex flex-row justify-center my-5"></div>
                <div className="h-[27px] text-lg flex flex-row justify-center my-5"></div>
                <div className="h-[27px] text-lg flex flex-row justify-center my-5">
                  <Check />
                </div>
                <div className="h-[27px] text-lg flex flex-row justify-center my-5"></div>
              </div>
              <div className="w-[10px]"></div>
              <div className="flex flex-col  w-[226px] bg-primary-brandTint py-8">
                <div className="text-xl flex flex-row justify-center my-5">
                  <Check />
                </div>
                <div className="text-xl flex flex-row justify-center my-5">
                  <Check />
                </div>
                <div className="text-xl flex flex-row justify-center my-5">
                  <Check />
                </div>
                <div className="text-xl flex flex-row justify-center my-5">
                  <Check />
                </div>
                <div className="text-xl flex flex-row justify-center my-5">
                  <Check />
                </div>
                <div className="text-xl flex flex-row justify-center my-5">
                  <Check />
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-row">
            <div className="flex-1 pt-4">
              <div className="h-[50px] flex flex-col justify-end pb-3 border-b-[1px] border-primary-brandBlue pl-6">
                <span className="text-[24px] font-bold text-primary-brandBlue">
                  Feature List
                </span>
              </div>
              <div className="flex flex-col pl-6 pt-6">
                <div className="h-[27px] text-lg flex flex-col justify-center my-5">
                  Ideal for emerging businesses aiming for rapid growth.
                </div>
                <div className="h-[27px] text-lg flex flex-col justify-center my-5">
                  Excellent for design firms striving for greater productivity.
                </div>
                <div className="h-[27px] text-lg flex flex-col justify-center my-5">
                  Fantastic for new ventures wanting to expand swiftly.
                </div>
              </div>
            </div>
            <div className="flex flex-row">
              <div className="w-[226px] bg-primary-brandTint py-4 rounded-b-[10px]">
                <div className="h-[50px] flex flex-col justify-end pb-3 border-b-[1px] border-primary-brandBlue"></div>
                <div className="flex flex-col pt-6">
                  <div className="h-[27px] text-lg flex flex-row justify-center my-5">
                    <Check />
                  </div>
                  <div className="h-[27px] text-lg flex flex-row justify-center my-5"></div>
                  <div className="h-[27px] text-lg flex flex-row justify-center my-5">
                    <Check />
                  </div>
                </div>
              </div>
              <div className="w-[10px] py-4">
                <div className="h-[50px] flex flex-col justify-end pb-3 border-b-[1px] border-primary-brandBlue"></div>
              </div>
              <div className="w-[226px] bg-primary-brandTint py-4 rounded-b-[10px]">
                <div className="h-[50px] flex flex-col justify-end pb-3 border-b-[1px] border-primary-brandBlue"></div>
                <div className="flex flex-col  pt-6">
                  <div className="h-[27px] text-lg flex flex-row justify-center my-5">
                    <Check />
                  </div>
                  <div className="h-[27px] text-lg flex flex-row justify-center my-5">
                    <Check />
                  </div>
                  <div className="h-[27px] text-lg flex flex-row justify-center my-5">
                    <Check />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </section>
    </div>
  );
};

export default FeaturePlan;
