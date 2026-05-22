import { Phone, Mail, MapPin } from 'lucide-react';
import { site } from '@/lib/site';

export default function LocationContact() {
  return (
    <section id="contact" className="py-16 lg:py-20 bg-white border-t border-[#e2e4e8]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="heading-accent text-2xl lg:text-3xl font-extrabold text-[#002d62] mb-10">
          Call or Visit {site.businessName}
        </h2>

        <div className="grid lg:grid-cols-2 gap-10">
          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <Phone size={22} className="text-[#e10600] flex-shrink-0 mt-1" />
              <div>
                <p className="text-[#4a4a4a] text-sm font-semibold uppercase tracking-wide mb-1">
                  Phone
                </p>
                <a
                  href={site.phoneHref}
                  className="text-[#002d62] text-xl font-extrabold hover:text-[#e10600] transition-colors"
                >
                  {site.phone}
                </a>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <Mail size={22} className="text-[#1e5a9e] flex-shrink-0 mt-1" />
              <div>
                <p className="text-[#4a4a4a] text-sm font-semibold uppercase tracking-wide mb-1">
                  Email
                </p>
                <a
                  href={site.emailHref}
                  className="text-[#002d62] font-bold hover:text-[#e10600] transition-colors"
                >
                  {site.email}
                </a>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <MapPin size={22} className="text-[#002d62] flex-shrink-0 mt-1" />
              <div>
                <p className="text-[#4a4a4a] text-sm font-semibold uppercase tracking-wide mb-1">
                  Address
                </p>
                <p className="text-[#1a1a1a] font-semibold">{site.address.line1}</p>
                <p className="text-[#4a4a4a]">{site.address.cityStateZip}</p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row flex-wrap gap-3 pt-2">
              <a
                href={site.phoneHref}
                className="inline-flex items-center justify-center gap-2 bg-[#e10600] hover:bg-[#b80500] text-white font-bold px-6 py-3 rounded-sm transition-colors"
              >
                <Phone size={18} />
                Call Now
              </a>
              <a
                href={site.directionsHref}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-[#002d62] hover:bg-[#001f45] text-white font-bold px-6 py-3 rounded-sm transition-colors"
              >
                <MapPin size={18} />
                Get Directions
              </a>
              <a
                href={site.emailHref}
                className="inline-flex items-center justify-center gap-2 border-2 border-[#002d62] text-[#002d62] hover:bg-[#002d62] hover:text-white font-bold px-6 py-3 rounded-sm transition-colors"
              >
                <Mail size={18} />
                Email Us
              </a>
            </div>
          </div>

          <div className="min-h-[280px] bg-[#f4f5f7] border-2 border-dashed border-[#c5daf0] rounded-lg flex items-center justify-center p-8 text-center">
            <div>
              <MapPin size={40} className="text-[#1e5a9e] mx-auto mb-3 opacity-50" />
              <p className="text-[#002d62] font-bold">Map placeholder</p>
              <p className="text-[#4a4a4a] text-sm mt-1">
                Connect Google Maps later
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
