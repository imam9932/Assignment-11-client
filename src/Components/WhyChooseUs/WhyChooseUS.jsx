import { FaBus, FaShieldAlt, FaMoneyBillWave, FaHeadset, FaChartLine, FaUsers } from "react-icons/fa";

const WhyChooseUs = () => {

  const features = [
    {
      icon: <FaBus size={35} />,
      title: "Wide Ticket Selection",
      description:
        "Book bus tickets from multiple vendors and routes in one platform."
    },
    {
      icon: <FaShieldAlt size={35} />,
      title: "Secure Payments",
      description:
        "Safe and encrypted online payment system for customers and vendors."
    },
    {
      icon: <FaMoneyBillWave size={35} />,
      title: "Easy Refund System",
      description:
        "Quick refund and cancellation process without hassle."
    },
    {
      icon: <FaHeadset size={35} />,
      title: "24/7 Customer Support",
      description:
        "Our support team is always ready to help passengers and vendors."
    },
    {
      icon: <FaChartLine size={35} />,
      title: "Vendor Business Growth",
      description:
        "Vendors can manage tickets, bookings, and earnings easily."
    },
    {
      icon: <FaUsers size={35} />,
      title: "Trusted by Customers",
      description:
        "Thousands of passengers trust our platform for daily travel."
    }
  ];

  return (
    <section className="py-16 bg-base-200">
      <div className="max-w-7xl mx-auto px-4">

        {/* Heading */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-orange-400">Why Choose Us?</h2>
          <p className="text-gray-500 mt-3">
            We provide the best ticket booking experience for passengers and vendors.
          </p>
        </div>

        {/* Feature Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {
            features.map((feature, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-6 shadow-md hover:shadow-xl transition duration-300"
              >
                <div className="text-primary mb-4">
                  {feature.icon}
                </div>

                <h3 className="text-xl font-semibold mb-2">
                  {feature.title}
                </h3>

                <p className="text-gray-600">
                  {feature.description}
                </p>
              </div>
            ))
          }
        </div>

      </div>
    </section>
  );
};

export default WhyChooseUs;