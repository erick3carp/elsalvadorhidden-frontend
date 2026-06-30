export default function Contact() {
  return (
    <main className="px-6 py-16 max-w-3xl mx-auto">
      <h1 className="text-4xl font-bold text-gray-900">Contact Us</h1>
      <p className="mt-4 text-gray-600">
        Have questions or suggestions? We’d love to hear from you.
      </p>

      <form className="mt-10 space-y-6">
        <div>
          <label className="block text-gray-700 font-medium">Name</label>
          <input
            type="text"
            className="mt-2 w-full border rounded-lg px-4 py-3"
            placeholder="Your name"
          />
        </div>

        <div>
          <label className="block text-gray-700 font-medium">Email</label>
          <input
            type="email"
            className="mt-2 w-full border rounded-lg px-4 py-3"
            placeholder="you@example.com"
          />
        </div>

        <div>
          <label className="block text-gray-700 font-medium">Message</label>
          <textarea
            className="mt-2 w-full border rounded-lg px-4 py-3"
            rows={5}
            placeholder="Write your message..."
          ></textarea>
        </div>

        <button className="px-6 py-3 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700 transition">
          Send Message
        </button>
      </form>
    </main>
  );
}
