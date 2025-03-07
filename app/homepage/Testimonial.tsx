import Image from "next/image";

const testimonials = [
  {
    name: "Stewart Griffin",
    company: "Acme Inc",
    quote: {
      part1:
        "Before Verzo, closing our monthly accounts felt like chaos—missing invoices, unclear expenses, and constant back-and-forth with vendors. Now, everything is streamlined.",
      part2:
        "We've cut our reconciliation time in half and eliminated errors that used to cost us thousands. Verzo doesn't just help; it's redefined how we operate.",
    },
    bgColor: "bg-primary-lightGreen",
    textColor: "text-black",
    companyColor: "text-green-600",
    logobgColor: "bg-primary-greyLight",
    avatar: "/microsoft.svg",
  },
  {
    name: "Jane Doe",
    company: "Asana",
    quote: {
      part1:
        "Before Verzo, closing our monthly accounts felt like chaos—missing invoices, unclear expenses, and constant back-and-forth with vendors. Now, everything is streamlined.",
      part2:
        "We've cut our reconciliation time in half and eliminated errors that used to cost us thousands. Verzo doesn't just help; it's redefined how we operate.",
    },
    bgColor: "bg-primary-pink",
    textColor: "text-black",
    companyColor: "text-red-400",
    logobgColor: "bg-primary-lightPink",
    avatar: "/asana-logo.svg",
  },
  {
    name: "Joe Swanson",
    company: "Linear",
    quote: {
      part1:
        "Before Verzo, closing our monthly accounts felt like chaos—missing invoices, unclear expenses, and constant back-and-forth with vendors. Now, everything is streamlined.",
      part2:
        "We've cut our reconciliation time in half and eliminated errors that used to cost us thousands. Verzo doesn't just help; it's redefined how we operate.",
    },
    bgColor: "bg-primary-brandBlue",
    textColor: "text-black",
    companyColor: "text-primary-darkBlue",
    logobgColor: "bg-primary-darkBlue",
    avatar: "/linear-logo.svg",
  },
];

export function Testimonials() {
  return (
    <section className="w-full bg-white py-20">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-16">
          Verzo helps 17,000+ merchants manage their books
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className={`${testimonial.bgColor} rounded-[24px] p-8 relative`}
            >
              <div className="flex items-center gap-3 mb-6">
                <div className={`relative w-[60px] h-[60px] flex items-center justify-center rounded-full ${testimonial.logobgColor}`}>
                  <Image
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    width={36}
                    height={36}
                    className="object-cover"
                  />
                </div>
                <div>
                  <h3 className={`font-medium ${testimonial.textColor}`}>
                    {testimonial.name}
                  </h3>
                  <p className={`text-sm ${testimonial.companyColor}`}>
                    {testimonial.company}
                  </p>
                </div>
              </div>

              <div className={`space-y-4 ${testimonial.textColor}`}>
                <p className="text-base leading-relaxed">
                  {testimonial.quote.part1}
                </p>
                <p className="text-base leading-relaxed">
                  {testimonial.quote.part2}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
