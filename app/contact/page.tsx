export default function Contact() {
  return (
    <main className="bg-white">
      <section className="mx-auto max-w-5xl px-6 py-16 lg:px-8 lg:py-24">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-emerald-700">
            Contact preview
          </p>
          <h1 className="mt-3 text-4xl font-bold tracking-tight text-gray-950 sm:text-5xl">
            Contact Us
          </h1>
          <p className="mt-5 text-xl font-medium text-gray-800">
            Have a question, suggestion, or destination recommendation?
          </p>
          <p className="mt-3 max-w-2xl leading-7 text-gray-600">
            We’d love to hear from you. Share feedback, recommend a hidden
            place, or report travel information that may need an update.
          </p>
        </div>

        <div className="mt-12 grid gap-8 lg:grid-cols-[1.3fr_0.7fr]">
          <div className="rounded-3xl border border-gray-200 bg-gray-50 p-6 shadow-sm sm:p-8">
            <div className="rounded-2xl border border-emerald-200 bg-emerald-50 p-4 text-sm leading-6 text-emerald-900">
              Online messages are being prepared. The form below previews the
              contact experience and is not currently accepting submissions.
            </div>

            <form className="mt-8 space-y-6" aria-label="Contact form preview">
              <div>
                <label htmlFor="contact-name" className="block font-medium text-gray-800">
                  Name
                </label>
                <input
                  id="contact-name"
                  type="text"
                  disabled
                  className="mt-2 w-full rounded-xl border border-gray-300 bg-white px-4 py-3 text-gray-700 disabled:cursor-not-allowed disabled:bg-gray-100"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label htmlFor="contact-email" className="block font-medium text-gray-800">
                  Email
                </label>
                <input
                  id="contact-email"
                  type="email"
                  disabled
                  className="mt-2 w-full rounded-xl border border-gray-300 bg-white px-4 py-3 text-gray-700 disabled:cursor-not-allowed disabled:bg-gray-100"
                  placeholder="you@example.com"
                />
              </div>

              <div>
                <label htmlFor="contact-subject" className="block font-medium text-gray-800">
                  Subject
                </label>
                <select
                  id="contact-subject"
                  disabled
                  defaultValue=""
                  className="mt-2 w-full rounded-xl border border-gray-300 bg-white px-4 py-3 text-gray-700 disabled:cursor-not-allowed disabled:bg-gray-100"
                >
                  <option value="" disabled>Select a subject</option>
                  <option>General question</option>
                  <option>Suggest a destination</option>
                  <option>Report incorrect information</option>
                  <option>Website feedback</option>
                  <option>Other</option>
                </select>
              </div>

              <div>
                <label htmlFor="contact-message" className="block font-medium text-gray-800">
                  Message
                </label>
                <textarea
                  id="contact-message"
                  disabled
                  className="mt-2 w-full rounded-xl border border-gray-300 bg-white px-4 py-3 text-gray-700 disabled:cursor-not-allowed disabled:bg-gray-100"
                  rows={5}
                  placeholder="Write your message..."
                />
              </div>

              <button
                type="button"
                disabled
                className="rounded-md bg-emerald-700 px-6 py-3.5 font-semibold text-white opacity-60 disabled:cursor-not-allowed"
              >
                Online messages coming soon
              </button>
            </form>
          </div>

          <aside className="rounded-3xl bg-emerald-950 p-8 text-white">
            <h2 className="text-2xl font-bold">Other ways to help</h2>
            <ul className="mt-6 space-y-4 text-emerald-100">
              {[
                "Recommend a destination",
                "Report incorrect travel information",
                "Share feedback about the platform",
              ].map((item) => (
                <li key={item} className="flex gap-3">
                  <span
                    aria-hidden="true"
                    className="mt-2 h-2 w-2 shrink-0 rounded-full bg-emerald-300"
                  />
                  {item}
                </li>
              ))}
            </ul>
          </aside>
        </div>
      </section>
    </main>
  );
}
