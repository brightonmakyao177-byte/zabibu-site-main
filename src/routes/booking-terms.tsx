import { createFileRoute } from "@tanstack/react-router";

import {
  PolicyHighlight,
  PolicyList,
  PolicyListItem,
  PolicyPage,
  type PolicySection,
} from "@/components/site/PolicyPage";

export const Route = createFileRoute("/booking-terms")({
  component: BookingTermsPage,

  head: () => ({
    meta: [
      {
        title: "Booking Terms — Zabibu Collection",
      },
      {
        name: "description",
        content:
          "Read the booking, payment, guest and accommodation terms for stays arranged through Zabibu Collection.",
      },
    ],
  }),
});

const sections: PolicySection[] = [
  {
    id: "booking-request",
    title: "Booking requests and confirmation",
    content: (
      <>
        <p>
          Submitting a booking form, enquiry or reservation request does not
          automatically confirm your stay. A booking becomes confirmed only
          after Zabibu Collection has verified availability, issued written
          confirmation and received any required payment.
        </p>

        <PolicyList>
          <PolicyListItem>
            Property availability may change before payment is received.
          </PolicyListItem>

          <PolicyListItem>
            Guests must review names, dates, property details and the number of
            travellers before confirming.
          </PolicyListItem>

          <PolicyListItem>
            The person making the booking must be at least 18 years old and
            authorised to act for everyone included in the reservation.
          </PolicyListItem>
        </PolicyList>
      </>
    ),
  },
  {
    id: "rates",
    title: "Rates and quotations",
    content: (
      <>
        <p>
          Rates are provided in the currency shown on the quotation or booking
          confirmation. Prices may vary depending on travel dates, length of
          stay, occupancy, availability, included services and seasonal
          conditions.
        </p>

        <PolicyHighlight>
          A quotation remains valid only for the period stated in the
          quotation. If no validity period is shown, availability and pricing
          remain subject to confirmation.
        </PolicyHighlight>

        <p>
          Unless expressly stated, rates may exclude flights, visas, insurance,
          meals, transfers, activities, park fees, local taxes or additional
          services requested by the guest.
        </p>
      </>
    ),
  },
  {
    id: "payments",
    title: "Payments and deposits",
    content: (
      <>
        <p>
          Zabibu Collection may require a deposit or full payment to secure a
          reservation. The payment schedule will be shown on the quotation,
          invoice or confirmation sent to the guest.
        </p>

        <PolicyList>
          <PolicyListItem>
            A reservation may be released if payment is not received by the
            stated deadline.
          </PolicyListItem>

          <PolicyListItem>
            Bank, card, currency conversion or transfer charges are the
            responsibility of the guest unless otherwise agreed.
          </PolicyListItem>

          <PolicyListItem>
            Proof of payment may be requested before a reservation is treated
            as confirmed.
          </PolicyListItem>
        </PolicyList>
      </>
    ),
  },
  {
    id: "guest-responsibilities",
    title: "Guest responsibilities",
    content: (
      <>
        <p>
          Guests are responsible for providing accurate information and
          ensuring that all members of their group understand the booking
          conditions.
        </p>

        <PolicyList>
          <PolicyListItem>
            Guests must respect property rules, neighbours, staff and local
            communities.
          </PolicyListItem>

          <PolicyListItem>
            The number of overnight guests may not exceed the confirmed
            occupancy without prior approval.
          </PolicyListItem>

          <PolicyListItem>
            Illegal activity, excessive noise, unauthorised events and behaviour
            that places people or property at risk are prohibited.
          </PolicyListItem>

          <PolicyListItem>
            Children must remain under the supervision of a responsible adult.
          </PolicyListItem>
        </PolicyList>
      </>
    ),
  },
  {
    id: "check-in",
    title: "Check-in and check-out",
    content: (
      <>
        <p>
          Check-in and check-out times will be communicated in the booking
          confirmation. Early arrival or late departure is subject to
          availability and may incur an additional charge.
        </p>

        <p>
          Guests may be required to provide identification, booking
          confirmation and emergency contact information upon arrival.
        </p>
      </>
    ),
  },
  {
    id: "damage",
    title: "Damage, loss and security deposits",
    content: (
      <>
        <p>
          Guests are responsible for loss or damage caused by themselves,
          members of their group or visitors invited to the property.
        </p>

        <p>
          Zabibu Collection or the property owner may request a refundable
          security deposit. Reasonable charges may be deducted for damaged,
          missing or excessively soiled property, additional cleaning or
          breaches of house rules.
        </p>
      </>
    ),
  },
  {
    id: "services",
    title: "Transfers, activities and third-party services",
    content: (
      <>
        <p>
          Zabibu Collection may assist with transfers, excursions, guides,
          dining arrangements and other services provided by independent
          suppliers.
        </p>

        <p>
          These services may be governed by the supplier's own conditions.
          Zabibu Collection will take reasonable care when arranging them but
          is not responsible for acts, omissions, delays or changes outside its
          reasonable control.
        </p>
      </>
    ),
  },
  {
    id: "travel-documents",
    title: "Travel documents and insurance",
    content: (
      <>
        <p>
          Guests are responsible for passports, visas, health requirements,
          travel permissions and any documents needed for Tanzania or another
          destination included in their journey.
        </p>

        <PolicyHighlight>
          Comprehensive travel insurance is strongly recommended. It should
          cover cancellation, medical treatment, evacuation, lost belongings,
          travel delays and activities included in the itinerary.
        </PolicyHighlight>
      </>
    ),
  },
  {
    id: "changes",
    title: "Changes to confirmed bookings",
    content: (
      <>
        <p>
          Requests to change dates, occupancy, property or services are subject
          to availability and may result in additional charges.
        </p>

        <p>
          If circumstances outside our reasonable control require a material
          change, we will contact the lead guest and offer the most suitable
          available alternative.
        </p>
      </>
    ),
  },
  {
    id: "liability",
    title: "Liability and events beyond our control",
    content: (
      <>
        <p>
          Travel may be affected by weather, road conditions, wildlife
          movements, flight changes, government action, public health events,
          natural disasters or other circumstances outside reasonable control.
        </p>

        <p>
          Zabibu Collection will make reasonable efforts to assist guests but
          cannot guarantee uninterrupted access to every service, activity or
          destination.
        </p>
      </>
    ),
  },
  {
    id: "acceptance",
    title: "Acceptance of the terms",
    content: (
      <>
        <p>
          By paying a deposit, making full payment or accepting written booking
          confirmation, the lead guest confirms that they have read and
          accepted these booking terms on behalf of everyone included in the
          reservation.
        </p>
      </>
    ),
  },
];

function BookingTermsPage() {
  return (
    <PolicyPage
      eyebrow="Booking information"
      title="Booking terms"
      introduction="These terms explain how reservations, payments, guest responsibilities and services are handled when you book with Zabibu Collection."
      lastUpdated="5 August 2026"
      sections={sections}
      notice="These terms are a general website template and should be reviewed by a qualified Tanzanian legal professional before publication."
    />
  );
}