'use client';

import { 
  MessageSquare, Bell, Calendar, UserX, Star, 
  BarChart3, GitBranch, RotateCcw, ArrowUp, Zap
} from 'lucide-react';

const dashboardCards = [
  {
    icon: <Bell size={18} />,
    title: 'New Service Requests',
    value: '12',
    change: '+3 today',
    color: 'text-[#E10600]',
    bgAccent: 'bg-[#E10600]/10',
    borderAccent: 'border-[#E10600]/30',
    active: true,
  },
  {
    icon: <MessageSquare size={18} />,
    title: 'Missed Call Text-Back',
    value: 'Active',
    change: 'Auto-running',
    color: 'text-green-400',
    bgAccent: 'bg-green-400/10',
    borderAccent: 'border-green-400/20',
    active: true,
  },
  {
    icon: <Calendar size={18} />,
    title: 'Appointment Reminders',
    value: '7',
    change: 'Sent this week',
    color: 'text-blue-400',
    bgAccent: 'bg-blue-400/10',
    borderAccent: 'border-blue-400/20',
    active: true,
  },
  {
    icon: <UserX size={18} />,
    title: 'No-Show Follow-Up',
    value: '2',
    change: 'In sequence',
    color: 'text-yellow-400',
    bgAccent: 'bg-yellow-400/10',
    borderAccent: 'border-yellow-400/20',
    active: false,
  },
  {
    icon: <Star size={18} />,
    title: 'Google Review Requests',
    value: '28',
    change: 'This month',
    color: 'text-[#E10600]',
    bgAccent: 'bg-[#E10600]/10',
    borderAccent: 'border-[#E10600]/20',
    active: true,
  },
  {
    icon: <BarChart3 size={18} />,
    title: 'Lead Source Tracking',
    value: '4',
    change: 'Active sources',
    color: 'text-[#A7A9AC]',
    bgAccent: 'bg-[#A7A9AC]/10',
    borderAccent: 'border-[#A7A9AC]/20',
    active: true,
  },
  {
    icon: <GitBranch size={18} />,
    title: 'CRM Pipeline',
    value: '19',
    change: 'Active leads',
    color: 'text-purple-400',
    bgAccent: 'bg-purple-400/10',
    borderAccent: 'border-purple-400/20',
    active: true,
  },
  {
    icon: <RotateCcw size={18} />,
    title: 'Customer Re-Activation',
    value: '8',
    change: 'Queued',
    color: 'text-orange-400',
    bgAccent: 'bg-orange-400/10',
    borderAccent: 'border-orange-400/20',
    active: false,
  },
];

export default function AutomationDashboard() {
  return (
    <section className="relative bg-[#0B0B0D] py-20 lg:py-28">
      <div className="section-sep" />

      {/* Subtle grid */}
      <div className="absolute inset-0 grid-texture opacity-20 pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-12">
          <div className="flex items-center gap-4 mb-4">
            <div className="h-[1px] w-8 bg-[#E10600]" />
            <span className="text-[#E10600] text-xs font-bold tracking-[0.25em] uppercase">
              Powered by Alanto AI + GoHighLevel
            </span>
          </div>
          <h2 className="text-3xl lg:text-5xl font-black text-white mb-4 leading-tight">
            Built today as a website.{' '}
            <span className="text-[#A7A9AC]">Ready tomorrow</span>{' '}
            <span className="text-[#E10600]">as a service engine.</span>
          </h2>
          <p className="text-[#A7A9AC] text-lg max-w-3xl">
            The front end you see now is the customer-facing layer. Behind it, the full
            Quick In system connects forms, calendar, CRM, SMS, email, review requests,
            and automated follow-up through GoHighLevel.
          </p>
        </div>

        {/* Dashboard simulation */}
        <div className="bg-[#0e1012] border border-[#A7A9AC]/10 overflow-hidden">
          {/* Fake dashboard header */}
          <div className="bg-[#1F2124] border-b border-[#A7A9AC]/10 px-6 py-4 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-2.5 h-2.5 rounded-full bg-[#E10600] animate-blink" />
              <span className="text-white font-bold text-sm tracking-wide">
                Quick In — CRM Control Center
              </span>
              <span className="text-[#A7A9AC]/40 text-xs hidden sm:block">/ Demo View</span>
            </div>
            <div className="flex items-center gap-2">
              <Zap size={14} className="text-[#E10600]" />
              <span className="text-[#A7A9AC] text-xs font-semibold">
                Alanto AI · GoHighLevel Connected
              </span>
            </div>
          </div>

          {/* Dashboard grid */}
          <div className="p-6 grid grid-cols-2 lg:grid-cols-4 gap-4">
            {dashboardCards.map((card, i) => (
              <div
                key={card.title}
                className={`group relative border p-4 transition-all duration-300 hover:scale-[1.02] ${card.bgAccent} ${card.borderAccent}`}
              >
                {/* Active indicator */}
                {card.active && (
                  <div className="absolute top-2.5 right-2.5">
                    <div className="w-1.5 h-1.5 rounded-full bg-green-400 animate-blink" />
                  </div>
                )}

                <div className={`${card.color} mb-2`}>{card.icon}</div>
                <p className="text-[#A7A9AC] text-[10px] font-bold tracking-wider uppercase mb-1 leading-tight">
                  {card.title}
                </p>
                <p className={`${card.color} text-2xl font-black mb-0.5`}>{card.value}</p>
                <div className="flex items-center gap-1">
                  <ArrowUp size={9} className={card.color} />
                  <p className={`text-[10px] font-semibold ${card.color} opacity-70`}>{card.change}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Demo disclaimer */}
          <div className="border-t border-[#A7A9AC]/10 px-6 py-4 bg-[#1F2124]/50">
            <p className="text-[#A7A9AC]/50 text-xs text-center tracking-widest uppercase">
              Front-end demo only — live version connects forms, calendar, CRM, SMS, email, review requests, and follow-up automations through GoHighLevel
            </p>
          </div>
        </div>

        {/* Feature list */}
        <div className="mt-8 grid grid-cols-2 lg:grid-cols-4 gap-4">
          {[
            'Missed call text-back in under 60 seconds',
            'Appointment confirmations via SMS + email',
            'Automated Google review requests after service',
            'Service pipeline from lead to completed job',
          ].map((feature, i) => (
            <div key={i} className="flex items-start gap-2">
              <div className="w-1.5 h-1.5 rounded-full bg-[#E10600] mt-1.5 flex-shrink-0" />
              <p className="text-[#A7A9AC] text-sm">{feature}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
