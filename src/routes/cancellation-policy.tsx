import { createFileRoute } from "@tanstack/react-router";

import {
  PolicyHighlight,
  PolicyList,
  PolicyListItem,
  PolicyPage,
  type PolicySection,
} from "@/components/site/PolicyPage";

export const Route = createFileRoute("/cancellation-policy")({
  component: CancellationPolicyPage,

  head: () => ({
    meta: [
      {
        title: "Cancellation Policy — Zabibu Collection",
      },
      {
        name: "description",
        content:
          "Review the cancellation, amendment, refund and no-show conditions for Zabibu Collection reservations.",
      },
    ],
  }),
});

const sections: PolicySection[] = [
  {
    id: "overview",
    title: "Policy overview",
    content: (
      <>
        <p>
          Cancellation conditions may vary by property, season, rate type,
          itinerary and third-party supplier. The conditions shown in the
          written quotation or booking confirmation take priority over this
          general policy.
        </p>

        <PolicyHighlight>
          Guests should review the cancellation deadline shown in their
          confirmation before making payment.
        </PolicyHighlight>
      </>
    ),
  },
  {
    id: "standard-cancellations",
    title: "Standard accommodation cancellations",
    content: (
      <>
        <p>
          Unless different conditions are stated in the booking confirmation,
          the following standard cancellation charges may apply:
        </p>

        <div className="overflow-hidden rounded-2xl border border-white/60 bg-white/25">
          <div className="grid grid-cols-[1.2fr_0.8fr] border-b border-white/60 px-5 py-4 text-xs uppercase tracking-[0.14em] text-muted-foreground">
            <span>Cancellation period</span>
            <span>Possible charge</span>
          </div>

          <CancellationRow
            period="More than 60 days before arrival"
            charge="Deposit or administrative costs"
          />

          <CancellationRow
            period="31–60 days before arrival"
            charge="Up to 50% of the booking value"
          />

          <CancellationRow
            period="15–30 days before arrival"
            charge="Up to 75% of the booking value"
          />

          <CancellationRow
            period="14 days or less before arrival"
            charge="Up to 100% of the booking value"
          />
        </div>

        <p>
          Promotional, non-refundable, festive-season and peak-season rates may
          become fully non-refundable from the date of confirmation.
        </p>
      </>
    ),
  },
  {
    id: "how-to-cancel",
    title: "How to cancel",
    content: (
      <>
        <p>
          Cancellation requests must be submitted in writing using the email
          address or contact channel shown in the booking confirmation.
        </p>

        <PolicyList>
          <PolicyListItem>
            Include the booking reference and lead guest's full name.
          </PolicyListItem>

          <PolicyListItem>
            State clearly that you wish to cancel the reservation.
          </PolicyListItem>

          <PolicyListItem>
            A cancellation becomes effective only after written acknowledgement
            from Zabibu Collection.
          </PolicyListItem>
        </PolicyList>
      </>
    ),
  },
  {
    id: "amendments",
    title: "Date changes and amendments",
    content: (
      <>
        <p>
          Requests to change dates, properties, services or guest numbers are
          subject to availability and the conditions of the confirmed rate.
        </p>

        <p>
          A change may be treated as a cancellation and new booking where the
          original supplier does not permit amendments.
        </p>

        <p>
          Any increase in seasonal rates, supplier charges, taxes or service
          costs will be payable by the guest.
        </p>
      </>
    ),
  },
  {
    id: "no-shows",
    title: "No-shows and early departure",
    content: (
      <>
        <p>
          Failure to arrive on the confirmed date without prior notice will be
          treated as a no-show and may result in the full booking value becoming
          non-refundable.
        </p>

        <p>
          No refund is normally available for unused nights, meals, transfers,
          activities or services when a guest arrives late or leaves earlier
          than planned.
        </p>
      </>
    ),
  },
  {
    id: "refunds",
    title: "Refunds",
    content: (
      <>
        <p>
          Approved refunds will normally be returned using the original payment
          method where possible.
        </p>

        <PolicyList>
          <PolicyListItem>
            Bank, card, international transfer and currency conversion charges
            may be deducted.
          </PolicyListItem>

          <PolicyListItem>
            Refund processing time may depend on the payment provider and
            receiving bank.
          </PolicyListItem>

          <PolicyListItem>
            Amounts already paid to non-refundable suppliers may not be
            recoverable.
          </PolicyListItem>
        </PolicyList>
      </>
    ),
  },
  {
    id: "supplier-services",
    title: "Flights, transfers and activities",
    content: (
      <>
        <p>
          Domestic flights, vehicle transfers, park fees, guides, excursions
          and other third-party services may have separate cancellation rules.
        </p>

        <p>
          Where supplier conditions are stricter than this general policy,
          those supplier conditions will apply to the affected service.
        </p>
      </>
    ),
  },
  {
    id: "force-majeure",
    title: "Exceptional circumstances",
    content: (
      <>
        <p>
          If travel is affected by severe weather, natural disaster, government
          restrictions, public health emergencies, civil unrest, airport
          closure or another event outside reasonable control, normal
          cancellation terms may still apply.
        </p>

        <p>
          Where possible, Zabibu Collection will work with the guest and
          suppliers to explore postponement, credit or alternative travel
          arrangements. These options cannot be guaranteed.
        </p>
      </>
    ),
  },
  {
    id: "insurance",
    title: "Travel insurance",
    content: (
      <>
        <PolicyHighlight>
          Guests are strongly advised to purchase comprehensive travel
          insurance immediately after confirming their booking.
        </PolicyHighlight>

        <p>
          Insurance should cover cancellation, illness, emergencies, evacuation,
          delayed travel, lost baggage and non-refundable supplier payments.
        </p>
      </>
    ),
  },
];

function CancellationPolicyPage() {
  return (
    <PolicyPage
      eyebrow="Reservation information"
      title="Cancellation policy"
      introduction="We understand that travel plans can change. This policy explains how cancellations, amendments, no-shows and eligible refunds are handled."
      lastUpdated="5 August 2026"
      sections={sections}
      notice="The cancellation schedule below is a general template. The specific terms written on the guest's quotation or confirmation should always take priority."
    />
  );
}

function CancellationRow({
  period,
  charge,
}: {
  period: string;
  charge: string;
}) {
  return (
    <div className="grid grid-cols-[1.2fr_0.8fr] gap-4 border-b border-white/60 px-5 py-4 text-sm text-charcoal last:border-0">
      <span>{period}</span>
      <span className="font-medium">{charge}</span>
    </div>
  );
}