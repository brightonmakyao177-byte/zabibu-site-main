import { createFileRoute } from "@tanstack/react-router";

import {
  PolicyHighlight,
  PolicyList,
  PolicyListItem,
  PolicyPage,
  type PolicySection,
} from "@/components/site/PolicyPage";

export const Route = createFileRoute("/privacy-policy")({
  component: PrivacyPolicyPage,

  head: () => ({
    meta: [
      {
        title: "Privacy Policy — Zabibu Collection",
      },
      {
        name: "description",
        content:
          "Learn how Zabibu Collection collects, uses, stores and protects personal information.",
      },
    ],
  }),
});

const sections: PolicySection[] = [
  {
    id: "introduction",
    title: "Our commitment to privacy",
    content: (
      <>
        <p>
          Zabibu Collection respects your privacy and aims to handle personal
          information responsibly, securely and transparently.
        </p>

        <p>
          This policy explains the information we may collect when you browse
          our website, submit an enquiry, make a booking or communicate with our
          team.
        </p>
      </>
    ),
  },
  {
    id: "information-collected",
    title: "Information we may collect",
    content: (
      <>
        <PolicyList>
          <PolicyListItem>
            Your name, email address, telephone number, country and preferred
            contact method.
          </PolicyListItem>

          <PolicyListItem>
            Travel dates, guest numbers, accommodation preferences, dietary
            requirements and special requests.
          </PolicyListItem>

          <PolicyListItem>
            Booking references, payment status and transaction information.
          </PolicyListItem>

          <PolicyListItem>
            Passport, identification or travel information where needed to
            arrange a service.
          </PolicyListItem>

          <PolicyListItem>
            Messages, feedback, reviews and other communications sent to us.
          </PolicyListItem>

          <PolicyListItem>
            Technical data such as browser type, device information, IP address,
            pages visited and website interaction data.
          </PolicyListItem>
        </PolicyList>
      </>
    ),
  },
  {
    id: "collection-methods",
    title: "How we collect information",
    content: (
      <>
        <p>Information may be collected when you:</p>

        <PolicyList>
          <PolicyListItem>
            Complete a booking, contact or enquiry form.
          </PolicyListItem>

          <PolicyListItem>
            Contact us by email, telephone, WhatsApp or social media.
          </PolicyListItem>

          <PolicyListItem>
            Make a payment or confirm a reservation.
          </PolicyListItem>

          <PolicyListItem>
            Browse the website or interact with analytics and cookie
            technologies.
          </PolicyListItem>

          <PolicyListItem>
            Provide information through an authorised travel agent, partner or
            member of your travelling group.
          </PolicyListItem>
        </PolicyList>
      </>
    ),
  },
  {
    id: "use-of-information",
    title: "How we use your information",
    content: (
      <>
        <PolicyList>
          <PolicyListItem>
            Responding to enquiries and preparing quotations.
          </PolicyListItem>

          <PolicyListItem>
            Confirming and managing accommodation, transfers and experiences.
          </PolicyListItem>

          <PolicyListItem>
            Communicating changes, arrival information and service updates.
          </PolicyListItem>

          <PolicyListItem>
            Processing payments and maintaining accounting records.
          </PolicyListItem>

          <PolicyListItem>
            Improving our website, guest experience and customer service.
          </PolicyListItem>

          <PolicyListItem>
            Meeting legal, tax, safety and regulatory obligations.
          </PolicyListItem>

          <PolicyListItem>
            Sending marketing communication where you have consented or where
            permitted by applicable law.
          </PolicyListItem>
        </PolicyList>
      </>
    ),
  },
  {
    id: "legal-basis",
    title: "Why we process personal information",
    content: (
      <>
        <p>
          Depending on the circumstances, we may process personal information
          because it is necessary to:
        </p>

        <PolicyList>
          <PolicyListItem>
            Respond to a request or perform a booking contract.
          </PolicyListItem>

          <PolicyListItem>
            Comply with legal or regulatory obligations.
          </PolicyListItem>

          <PolicyListItem>
            Protect legitimate business, security and operational interests.
          </PolicyListItem>

          <PolicyListItem>
            Act with your consent, including for optional marketing.
          </PolicyListItem>
        </PolicyList>
      </>
    ),
  },
  {
    id: "sharing",
    title: "When information may be shared",
    content: (
      <>
        <p>
          We may share only the information reasonably required to deliver the
          requested service.
        </p>

        <PolicyList>
          <PolicyListItem>
            Property owners, managers and hosting teams.
          </PolicyListItem>

          <PolicyListItem>
            Drivers, guides, airlines, activity providers and other travel
            suppliers.
          </PolicyListItem>

          <PolicyListItem>
            Payment processors, accountants and professional advisers.
          </PolicyListItem>

          <PolicyListItem>
            Website hosting, analytics and technology service providers.
          </PolicyListItem>

          <PolicyListItem>
            Government, immigration, law enforcement or regulatory authorities
            where legally required.
          </PolicyListItem>
        </PolicyList>

        <PolicyHighlight>
          Zabibu Collection does not sell personal information to third parties.
        </PolicyHighlight>
      </>
    ),
  },
  {
    id: "international-transfers",
    title: "International information transfers",
    content: (
      <>
        <p>
          Travel arrangements may require information to be processed in
          Tanzania or another country where a supplier, payment provider or
          technology provider operates.
        </p>

        <p>
          We take reasonable steps to work with providers that apply suitable
          confidentiality and security measures.
        </p>
      </>
    ),
  },
  {
    id: "retention",
    title: "How long information is retained",
    content: (
      <>
        <p>
          Personal information is kept only for as long as reasonably necessary
          for bookings, customer service, legal compliance, accounting,
          dispute resolution and legitimate business records.
        </p>

        <p>
          Information that is no longer required may be securely deleted,
          anonymised or archived where permitted.
        </p>
      </>
    ),
  },
  {
    id: "security",
    title: "Information security",
    content: (
      <>
        <p>
          Reasonable organisational and technical safeguards are used to
          protect personal information from unauthorised access, loss, misuse,
          alteration or disclosure.
        </p>

        <p>
          No internet transmission or electronic storage system can be
          guaranteed to be completely secure. Guests should avoid sending
          sensitive payment details through unsecured communication channels.
        </p>
      </>
    ),
  },
  {
    id: "cookies",
    title: "Cookies and analytics",
    content: (
      <>
        <p>
          The website may use cookies or similar technologies to remember
          preferences, understand traffic, improve performance and measure how
          visitors interact with the site.
        </p>

        <p>
          Browser settings can be used to block or remove cookies. Some website
          functions may not work correctly when cookies are disabled.
        </p>
      </>
    ),
  },
  {
    id: "marketing",
    title: "Marketing communication",
    content: (
      <>
        <p>
          We may send news, property information or travel inspiration where
          you have agreed to receive it or where communication is otherwise
          permitted.
        </p>

        <p>
          You may unsubscribe at any time using the option included in the
          message or by contacting Zabibu Collection.
        </p>
      </>
    ),
  },
  {
    id: "rights",
    title: "Your privacy choices",
    content: (
      <>
        <p>
          Subject to applicable law, you may request to access, correct, update
          or delete personal information held about you.
        </p>

        <p>
          You may also object to certain processing, withdraw consent or request
          clarification about how your information has been handled.
        </p>

        <p>
          We may need to verify your identity before completing a privacy
          request.
        </p>
      </>
    ),
  },
  {
    id: "children",
    title: "Children's information",
    content: (
      <>
        <p>
          Information about children should be provided only by a parent,
          guardian or authorised adult and only where necessary for the booking
          or requested service.
        </p>
      </>
    ),
  },
  {
    id: "changes",
    title: "Changes to this policy",
    content: (
      <>
        <p>
          This privacy policy may be updated when our services, technology or
          legal obligations change.
        </p>

        <p>
          The latest version will be published on this page with an updated
          revision date.
        </p>
      </>
    ),
  },
];

function PrivacyPolicyPage() {
  return (
    <PolicyPage
      eyebrow="Your information"
      title="Privacy policy"
      introduction="This policy explains what personal information we collect, why we use it, when it may be shared and the choices available to you."
      lastUpdated="5 August 2026"
      sections={sections}
      notice="This is a general privacy-policy template. It should be reviewed against Zabibu Collection's actual data practices and applicable Tanzanian privacy requirements before publication."
    />
  );
}