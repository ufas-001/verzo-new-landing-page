import Image from "next/image";

const FeaturedTestimonial = () => {
  return (
    <section className="w-full py-20 bg-gray-50">
      <div className="max-w-5xl mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center md:items-start gap-12">
          {/* Profile Image */}
          <div className="flex-shrink-0">
            <div className="w-32 h-32 md:w-40 md:h-40 relative rounded-full overflow-hidden border-gradient">
              <Image
                src="/Ellipse.png"
                alt="Stewart Griffin"
                fill
                className="object-cover"
              />
            </div>
          </div>

          {/* Quote */}
          <div>
            <blockquote className="text-xl md:text-2xl font-normal mb-6 ">
              &quot;I look at the dashboard and know how many invoices are on
              the way, when they should be paid, and the average time it takes
              someone to pay. It keeps me on track and takes a lot out of my
              hands.&quot;
            </blockquote>
            <cite className="text-gradient font-medium not-italic">
              Stewart Griffin - Acme Inc.
            </cite>
          </div>
        </div>
      </div>
    </section>
  );
}


export default FeaturedTestimonial;