"use client";

import { FormEvent, useState } from "react";

type FormStatus = "idle" | "sending" | "success" | "error";

export default function Contact() {
  const [status, setStatus] = useState<FormStatus>("idle");
  const [errorMessage, setErrorMessage] = useState("");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    setStatus("sending");
    setErrorMessage("");

    const form = event.currentTarget;
    const formData = new FormData(form);

    const contactData = {
      name: formData.get("name"),
      email: formData.get("email"),
      subject: formData.get("subject"),
      message: formData.get("message"),
    };

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(contactData),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Unable to send message.");
      }

      setStatus("success");
      form.reset();
    } catch (error) {
      setStatus("error");

      if (error instanceof Error) {
        setErrorMessage(error.message);
      } else {
        setErrorMessage("Something went wrong. Please try again.");
      }
    }
  }

  return (
    <main className="bg-white">
      <section className="mx-auto max-w-5xl px-6 py-16 lg:px-8 lg:py-24">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-emerald-700">
            Contact
          </p>

          <h1 className="mt-3 text-4xl font-bold tracking-tight text-gray-950 sm:text-5xl">
            Contact Us
          </h1>

          <p className="mt-5 text-xl font-medium text-gray-800">
            Have a question, suggestion, or destination recommendation?
          </p>

          <p className="mt-3 max-w-2xl leading-7 text-gray-600">
            We&apos;d love to hear from you. Share feedback, recommend a hidden
            place, or report travel information that may need an update.
          </p>
        </div>

        <div className="mt-12 grid gap-8 lg:grid-cols-[1.3fr_0.7fr]">
          <div className="rounded-3xl border border-gray-200 bg-gray-50 p-6 shadow-sm sm:p-8">
            <form
              onSubmit={handleSubmit}
              className="space-y-6"
              aria-label="Contact form"
            >
              <div>
                <label
                  htmlFor="contact-name"
                  className="block font-medium text-gray-800"
                >
                  Name
                </label>

                <input
                  id="contact-name"
                  name="name"
                  type="text"
                  required
                  maxLength={100}
                  className="mt-2 w-full rounded-xl border border-gray-300 bg-white px-4 py-3 text-gray-900 outline-none transition focus:border-emerald-600 focus:ring-2 focus:ring-emerald-100"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label
                  htmlFor="contact-email"
                  className="block font-medium text-gray-800"
                >
                  Email
                </label>

                <input
                  id="contact-email"
                  name="email"
                  type="email"
                  required
                  maxLength={200}
                  className="mt-2 w-full rounded-xl border border-gray-300 bg-white px-4 py-3 text-gray-900 outline-none transition focus:border-emerald-600 focus:ring-2 focus:ring-emerald-100"
                  placeholder="you@example.com"
                />
              </div>

              <div>
                <label
                  htmlFor="contact-subject"
                  className="block font-medium text-gray-800"
                >
                  Subject
                </label>

                <select
                  id="contact-subject"
                  name="subject"
                  required
                  defaultValue=""
                  className="mt-2 w-full rounded-xl border border-gray-300 bg-white px-4 py-3 text-gray-900 outline-none transition focus:border-emerald-600 focus:ring-2 focus:ring-emerald-100"
                >
                  <option value="" disabled>
                    Select a subject
                  </option>

                  <option value="general-question">General question</option>
                  <option value="suggest-destination">
                    Suggest a destination
                  </option>
                  <option value="report-information">
                    Report incorrect information
                  </option>
                  <option value="website-feedback">Website feedback</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div>
                <label
                  htmlFor="contact-message"
                  className="block font-medium text-gray-800"
                >
                  Message
                </label>

                <textarea
                  id="contact-message"
                  name="message"
                  required
                  minLength={10}
                  maxLength={2000}
                  rows={6}
                  className="mt-2 w-full resize-y rounded-xl border border-gray-300 bg-white px-4 py-3 text-gray-900 outline-none transition focus:border-emerald-600 focus:ring-2 focus:ring-emerald-100"
                  placeholder="Write your message..."
                />
              </div>

              {status === "success" && (
                <div
                  role="status"
                  className="rounded-xl border border-emerald-200 bg-emerald-50 p-4 text-sm text-emerald-900"
                >
                  Your message was sent successfully. Thank you for contacting
                  El Salvador Hidden.
                </div>
              )}

              {status === "error" && (
                <div
                  role="alert"
                  className="rounded-xl border border-red-200 bg-red-50 p-4 text-sm text-red-800"
                >
                  {errorMessage ||
                    "Something went wrong. Please try again later."}
                </div>
              )}

              <button
                type="submit"
                disabled={status === "sending"}
                className="rounded-md bg-emerald-700 px-6 py-3.5 font-semibold text-white transition hover:bg-emerald-800 disabled:cursor-not-allowed disabled:opacity-60"
              >
                {status === "sending" ? "Sending..." : "Send message"}
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