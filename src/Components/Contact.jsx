import Swal from "sweetalert2";


const Contact = () => {


    const handlesendMessage = () => {
        Swal.fire("Send Message");
    }

    return (
        <div className="mt-20 ">
            <div>
                <div className="grid max-w-screen-xl grid-cols-1 gap-8 px-8 py-16 mx-auto rounded-lg md:grid-cols-2 md:px-12 lg:px-16 xl:px-32 dark:bg-gray-100 dark:text-gray-800">
                    <div className="flex flex-col justify-between">
                        <div className="space-y-2">
                            <h2 className="text-4xl font-bold leading-tight lg:text-5xl">Let us talk!</h2>
                            <img src="/doodle.svg" alt="" className="p-6 h-52 md:h-64" />
                        </div>
                        
                    </div>
                    <form noValidate="" className="space-y-6">
                        <div>
                            <label htmlFor="name" className="text-sm">Full name</label>
                            <input id="name" type="text" placeholder="" className="w-full border border-gray-300 mt-2 p-3 rounded dark:bg-gray-100" />
                        </div>
                        <div>
                            <label htmlFor="email" className="text-sm">Email</label>
                            <input id="email" type="email" className="border border-gray-300 mt-2 w-full p-3 rounded dark:bg-gray-100" />
                        </div>
                        <div>
                            <label htmlFor="message" className="text-sm">Message</label>
                            <textarea id="message" rows="3" className="border border-gray-300 mt-2 w-full p-3 rounded dark:bg-gray-100"></textarea>
                        </div>
                        <button onClick={handlesendMessage} type="submit" className="w-full p-3 text-sm font-bold tracking-wide uppercase rounded dark:bg-violet-600 dark:text-gray-50">Send Message</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Contact;