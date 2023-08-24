import React from "react";

function ContributionSection() {
  return (
    <section id="contribute" className="bg-gradient-to-b from-slate-800 py-32 mt-32 px-5 md:px-10">
      <div className="container mx-auto">
        <h2 className="text-xl md:text-2xl font-semibold mb-4">Contributing to FCCMde</h2>
        <p className="text-gray-600 mb-8">
          We&apos;re thrilled that you&apos;re interested in contributing to
          FCCMde! By contributing, you&apos;re helping us make this project even
          better for the community. Whether you&apos;re a developer, designer,
          writer, or just someone with an interest in Markdown editors, there
          are plenty of ways you can contribute.
        </p>

        <div className="mb-6">
          <h3 className="text-lg mb-2">Ways to Contribute</h3>
          <ul className="list-disc ml-6">
            <li>
              <strong>Bug Reports and Feature Requests:</strong> If you
              encounter a bug while using FCCMde or have a feature idea, please{" "}
              <a
                href="https://github.com/0me9a/FCCMde/issues"
                className="text-blue-500 hover:underline"
              >
                open an issue on GitHub
              </a>
              . We appreciate detailed descriptions and steps to reproduce the
              issue.
            </li>
          </ul>
        </div>

        {/* ... Add more content sections as needed */}

        <div className="mt-8">
          <p>
            Thank you for contributing to FCCMde! Your involvement helps make
            this project a success. If you have any questions, feel free to{" "}
            <a
              href="mailto:heyome9a.com"
              className="text-blue-500 hover:underline"
            >
              reach out to us
            </a>
            .
          </p>
          <p>Happy contributing!</p>
        </div>
      </div>
    </section>
  );
}

export default ContributionSection;
