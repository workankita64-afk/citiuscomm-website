import Image from "next/image";
import Reveal from "@/components/ui/Reveal";

type Member = {
  id: number;
  name: string;
  role: string;
  description: string;
  /** Optional real photo. When omitted, an initials placeholder is rendered. */
  image?: string;
  linkedin?: string;
};

type TeamGroup = {
  title: string;
  members: Member[];
};

// TODO: add photos for all members by dropping images in /public/images/about
// and setting the `image` field on each member.
const teams: TeamGroup[] = [
  {
    title: "Leadership Team",
    members: [
      {
        id: 1,
        name: "Surendra Sancheti",
        role: "Founder & Telecom Technology Leader",
        description:
          "20+ of leadership across telecom and enterprise technology, driving Citiuscomm’s vision and growth. Leading innovative B2B telecom solutions and technology aggregation platforms with a focus on sustainable growth, emerging technologies and building a connected, socially responsible business ecosystem.",
        image: "/images/Leadership/surendra-sancheti.png",
        linkedin: "https://www.linkedin.com/in/surendra-sancheti-0205397/",
      },
      {
        id: 2,
        name: "Prammod Yadav",
        role: "Venture Architect & Growth Strategist",
        description:
          "Venture architect specializing in hi-tech startups, corporate structuring, M&A, international markets and digital transformation. Experienced in building ventures and enabling strategic growth through equity and debt capital raising.",
        image: "/images/Leadership/pramod-yadav.png",
        linkedin: "https://www.linkedin.com/in/prammod-kumar-yadav-a863797/",
      },
      {
        id: 3,
        name: "Siba Dash",
        role: "Senior Business Development & IT Transformation Leader",
        description:
          "30+ years of experience driving enterprise growth, digital transformation, cloud adoption and managed services across global markets. Led complex AI, IoT, telecom, ERP and cloud initiatives while building strategic partnerships and high-value client relationships.",
        image: "/images/Leadership/siba-dash.png",
        linkedin: "https://www.linkedin.com/in/siba-brata-dash-57200914/",
      },
      {
        id: 4,
        name: "Vishal Patil",
        role: "IT Sales & Business Development Leader",
        description:
          "Proven sales leader driving revenue growth, market expansion, and new business opportunities across IT services. Experienced in B2B strategy, technical solution positioning, end-to-end sales and building long-term client relationships.",
        image: "/images/Leadership/vishal-patil.png",
        linkedin: "https://www.linkedin.com/in/vishal-patil-19417515/",
      },
      {
        id: 5,
        name: "Pravin Redekar",
        role: "VP Sales | 23+ Years Experience",
        description:
          "Sales and Business Development leader specializing in Telecom, IT Infrastructure, Enterprise Networking, AI Infrastructure, Cloud and Digital Transformation.",
        image: "/images/Leadership/pravin-redekar.png",
        linkedin: "https://www.linkedin.com/in/pravinredekar/",
      },
      {
        id: 6,
        name: "Avnish Rana",
        role: "Project & Product Management Leader",
        description:
          "Experienced across private and public sectors, driving project management, product strategy, digital marketing, and large-scale programs. Delivered growth initiatives across leading brands and government programs, reaching 1M+ users and 10K+ beneficiaries.",
        image: "/images/Leadership/avnish-rana.png",
        linkedin: "https://www.linkedin.com/in/ranaavnish/",
      },
    ],
  },
  {
    title: "Business Relations",
    members: [
      {
        id: 7,
        name: "Runa Mondal",
        role: "Director, Operations",
        description:
          "Oversees operational excellence and business relations, ensuring seamless execution and stakeholder alignment.",
      },
    ],
  },
];

const initials = (name: string) =>
  name
    .split(" ")
    .slice(0, 2)
    .map((part) => part[0])
    .join("")
    .toUpperCase();

const LinkedInIcon = ({ className = "h-3.5 w-3.5" }: { className?: string }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.475-2.236-1.986-2.236-1.081 0-1.722.722-2.004 1.419-.103.249-.129.597-.129.946v5.44h-3.554s.05-8.807 0-9.726h3.554v1.375c.427-.659 1.191-1.595 2.897-1.595 2.117 0 3.704 1.385 3.704 4.362v5.584zM5.337 8.855c-1.144 0-1.915-.762-1.915-1.715 0-.957.77-1.715 1.958-1.715 1.187 0 1.914.758 1.939 1.715 0 .953-.752 1.715-1.982 1.715zm1.946 11.597H3.392v-9.726h3.891v9.726zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.225 0z" />
  </svg>
);

const Avatar = ({ member }: { member: Member }) =>
  member.image ? (
    <div className="relative mx-auto mb-6 h-[160px] w-[160px] overflow-hidden rounded-full border-4 border-brand-muted">
      <Image
        src={member.image}
        alt={member.name}
        fill
        sizes="160px"
        className="object-cover transition-transform duration-500 group-hover:scale-105"
      />
    </div>
  ) : (
    <div
      aria-hidden
      className="mx-auto mb-6 flex h-[160px] w-[160px] items-center justify-center rounded-full border-4 border-brand-muted bg-brand-muted text-3xl font-bold tracking-wide text-brand transition-transform duration-500 group-hover:scale-105"
    >
      {initials(member.name)}
    </div>
  );

const MemberCard = ({ member }: { member: Member }) => {
  const isClickable = Boolean(member.linkedin);
  const Component = isClickable ? "a" : "div";
  const linkProps = isClickable
    ? {
      href: member.linkedin,
      target: "_blank",
      rel: "noopener noreferrer",
      "aria-label": `${member.name} on LinkedIn`,
    }
    : {};

  return (
    <Component
      {...linkProps}
      className={`ds-sheen group relative flex h-full flex-col overflow-hidden rounded-2xl border border-edge/60 bg-gradient-to-br from-surface to-surface/80 p-8 text-center transition-all duration-300 hover:-translate-y-3 hover:scale-105 hover:border-primary hover:shadow-xl hover:shadow-primary/20 ${isClickable ? "cursor-pointer hover:ring-1 hover:ring-primary/40" : ""
        }`}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
      {member.linkedin && (
        <div
          aria-hidden="true"
          className="absolute right-4 top-4 flex h-7 w-7 items-center justify-center rounded-full border border-primary/20 bg-brand-muted/50 text-brand transition-all duration-300 group-hover:border-primary group-hover:bg-primary group-hover:text-white group-hover:shadow-md group-hover:shadow-primary/20"
        >
          <LinkedInIcon />
        </div>
      )}
      <div className="relative">
        <Avatar member={member} />
        <h3 className="mb-1 text-xl font-bold uppercase tracking-wide text-heading">{member.name}</h3>
        <p className="mb-4 text-sm font-semibold text-brand">{member.role}</p>
        <p className="text-sm leading-relaxed text-muted">{member.description}</p>
      </div>
    </Component>
  );
};

// Transparent by design: the page-level PageBackdrop supplies the dot grid, which an
// opaque fill here used to paint straight over.
const Leadership = () => (
  <section id="leadership" className="relative overflow-hidden bg-transparent py-0 pb-20 md:pb-28 lg:pb-32">
    <div className="container relative z-10 space-y-16 lg:space-y-20">
      {teams.map((team) => (
        <div key={team.title}>
          <Reveal>
            <h2 className="mb-8 text-2xl font-bold text-heading sm:text-3xl">{team.title}</h2>
          </Reveal>
          <div className="flex flex-wrap justify-center gap-6 lg:gap-8">
            {team.members.map((member, i) => (
              <Reveal
                key={member.id}
                delay={i * 0.1}
                className="w-full sm:w-[calc(50%-12px)] lg:w-[280px]"
              >
                <MemberCard member={member} />
              </Reveal>
            ))}
          </div>
        </div>
      ))}
    </div>
  </section>
);

export default Leadership;
