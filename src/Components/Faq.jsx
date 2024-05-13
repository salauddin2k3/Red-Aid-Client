

const Faq = () => {
    return (
        <div className=" mt-20 flex items-center justify-center border border-gray-300 rounded-2xl p-5">
            <section className=" dark:bg-gray-100 dark:text-gray-800 rounded-xl w-full lg:px-20 lg:py-10">
                <div className=" flex flex-col justify-center px-4 py-8 mx-auto md:p-8">
                    <h2 className="text-2xl font-semibold sm:text-4xl">Frequently Asked Questions</h2>
                    <p className="mt-4 mb-8 dark:text-gray-600">Our FAQ section provides answers to common inquiries about our services, destinations, booking procedures, and more. Browse through to find the information you need for a seamless travel experience.</p>
                    <div className="space-y-4">
                        <details className="w-full border rounded-lg">
                            <summary className="px-4 py-6 font-bold focus:outline-none focus-visible:dark:ring-violet-600">How do I book a tour package?</summary>
                            <p className="px-4 py-6 pt-0 ml-4 -mt-4 dark:text-gray-600">Booking a tour package is simple. You can either book online through our website or contact our customer service team directly to assist you with the booking process.</p>
                        </details>
                        <details className="w-full border rounded-lg">
                            <summary className="px-4 py-6 font-bold focus:outline-none focus-visible:dark:ring-violet-600">What is included in the tour package?</summary>
                            <p className="px-4 py-6 pt-0 ml-4 -mt-4 dark:text-gray-600">Our tour packages typically include accommodation, transportation, guided tours, and some meals. Specific inclusions may vary depending on the package you choose, so please refer to the package details for more information.</p>
                        </details>
                        <details className="w-full border rounded-lg">
                            <summary className="px-4 py-6 font-bold focus:outline-none focus-visible:dark:ring-violet-600">What is the cancellation policy?</summary>
                            <p className="px-4 py-6 pt-0 ml-4 -mt-4 dark:text-gray-600">Our cancellation policy varies depending on the tour package and booking terms. Generally, cancellations made within a certain timeframe may incur a cancellation fee. Please refer to our terms and conditions or contact our customer service team for details on the cancellation policy for your booking.</p>
                        </details>
                        <details className="w-full border rounded-lg">
                            <summary className="px-4 py-6 font-bold focus:outline-none focus-visible:dark:ring-violet-600">Is travel insurance included in the tour package?</summary>
                            <p className="px-4 py-6 pt-0 ml-4 -mt-4 dark:text-gray-600">Travel insurance is not typically included in our tour packages. However, we highly recommend purchasing travel insurance to protect yourself against unforeseen circumstances such as trip cancellations, medical emergencies, or lost luggage.</p>
                        </details>
                        <details className="w-full border rounded-lg">
                            <summary className="px-4 py-6 font-bold focus:outline-none focus-visible:dark:ring-violet-600">Are there any age restrictions for booking a tour?</summary>
                            <p className="px-4 py-6 pt-0 ml-4 -mt-4 dark:text-gray-600">Age restrictions may vary depending on the tour package and activities included. Some tours may have minimum age requirements for participation, while others may be suitable for all ages. Please check the tour details or contact our customer service team for more information on age restrictions.</p>
                        </details>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Faq;