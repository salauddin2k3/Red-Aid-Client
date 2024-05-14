import LottieFAQ from "./LottieFAQ";


const Faq = () => {
    return (
        <div className=" mt-20 flex items-center justify-center border border-gray-300 rounded-2xl p-5">
            <section className=" dark:bg-gray-100 dark:text-gray-800 rounded-xl w-full lg:px-20 lg:py-10">
                <div>
                    <LottieFAQ></LottieFAQ>
                </div>
                <div className=" flex flex-col justify-center px-4 py-8 mx-auto md:p-8">
                    <h2 className="text-2xl font-semibold sm:text-4xl">Frequently Asked Questions</h2>
                    <p className="mt-4 mb-8 dark:text-gray-600">Have questions? <span>{`We've`}</span> got answers! Browse our frequently asked questions to find information about creating an account, finding volunteer opportunities, contacting organizations, tracking volunteer hours, and more. </p>
                    <div className="space-y-4">
                        <details className="w-full border rounded-lg">
                            <summary className="px-4 py-6 font-bold focus:outline-none focus-visible:dark:ring-violet-600">How can I find volunteer opportunities in my area?</summary>
                            <p className="px-4 py-6 pt-0 ml-4 -mt-4 dark:text-gray-600">You can find volunteer opportunities by browsing our listings, filtering by category or location, and exploring upcoming events. Simply click on an opportunity to learn more and sign up.</p>
                        </details>
                        <details className="w-full border rounded-lg">
                            <summary className="px-4 py-6 font-bold focus:outline-none focus-visible:dark:ring-violet-600">Can I volunteer as part of a group or organization?</summary>
                            <p className="px-4 py-6 pt-0 ml-4 -mt-4 dark:text-gray-600">Yes, many of our volunteer opportunities welcome group participation. When signing up, <span>{`you'll have the option to indicate if you're`}</span> volunteering as an individual or as part of a group.</p>
                        </details>
                        <details className="w-full border rounded-lg">
                            <summary className="px-4 py-6 font-bold focus:outline-none focus-visible:dark:ring-violet-600">What should I expect when volunteering for the first time?</summary>
                            <p className="px-4 py-6 pt-0 ml-4 -mt-4 dark:text-gray-600">Volunteering experiences can vary depending on the opportunity. Before volunteering, we recommend reviewing the opportunity details, including tasks, requirements, and expectations. Arrive on time, be prepared, and <span>{`don't`}</span> hesitate to ask questions if needed.</p>
                        </details>
                        <details className="w-full border rounded-lg">
                            <summary className="px-4 py-6 font-bold focus:outline-none focus-visible:dark:ring-violet-600">Is there a fee to use the website or participate in volunteer opportunities?</summary>
                            <p className="px-4 py-6 pt-0 ml-4 -mt-4 dark:text-gray-600">Our website is free to use for both volunteers and organizations. There are no fees associated with browsing listings, signing up for opportunities, or posting volunteer opportunities.</p>
                        </details>
                        <details className="w-full border rounded-lg">
                            <summary className="px-4 py-6 font-bold focus:outline-none focus-visible:dark:ring-violet-600">How do I create an account on the website?</summary>
                            <p className="px-4 py-6 pt-0 ml-4 -mt-4 dark:text-gray-600">To create an account, <span>{`simply click on the "Sign Up" or "Register" button`}</span> on the homepage and follow the prompts to enter your information and create your account.</p>
                        </details>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Faq;